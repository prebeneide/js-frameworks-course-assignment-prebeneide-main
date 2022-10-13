import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import FormError from "../common/FormError";
import { BASE_URL, TOKEN_PATH } from "../../constants/api";
import AuthContext from "../../context/AuthContext";

const url = BASE_URL + TOKEN_PATH;

const schema = yup.object().shape({
	username: yup.string().required("Please enter your username"),
	password: yup.string().required("Please enter your password").min(4, 'Your password must be at least 4 characters long').max(32, 'Your password can´t be longer than 32 characters'),
});

export default function LoginForm() {
	const [submitting, setSubmitting] = useState(false);
	const [loginError, setLoginError] = useState(null);

    const navigate = useNavigate();

	const { register, handleSubmit, formState: {errors}, reset } = useForm({
		resolver: yupResolver(schema),
	});

    const [, setAuth] = useContext(AuthContext);

	async function onSubmitHandler(data) {
		setSubmitting(true);
		setLoginError(null);

		// console.log(data);

		try {
			const response = await axios.post(url, data);
			console.log("response", response.data);
            setAuth(response.data);
            navigate("/admin");
		} catch (error) {
			console.log("error", error);
			setLoginError(error.toString());
		} finally {
			setSubmitting(false);
            reset();
		}
	}

	return (
            <form onSubmit={handleSubmit(onSubmitHandler)}>
                <h2>Lets sign you in.</h2>
                <br />

                {loginError && <FormError>{loginError}</FormError>}
                <fieldset disabled={submitting}>
                    <input {...register("username")} placeholder="Username" type="username" />
                    {errors.username && <FormError>{errors.username.message}</FormError>}
                    <br />

                    <input {...register("password")} placeholder="Password" type="password" />
                    {errors.password && <FormError>{errors.password.message}</FormError>}
                    <br />

                    <button type="submit" id="form-button">{submitting ? "Loggin in..." : "Login"}</button>
                </fieldset>
            </form>
	);
};