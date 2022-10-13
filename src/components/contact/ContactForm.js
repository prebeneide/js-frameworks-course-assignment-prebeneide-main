import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import FormError from "../common/FormError";

const schema = yup.object({
  firstName: yup.string().required('Please enter your firstname').min(3, 'Your firstname must be at least 3 characters long'),
  lastName: yup.string().required('Please enter your lastname').min(4, 'Your lastname must be at least 4 characters long'),
  email: yup.string().required('Please enter your email').email('Please enter a valid email'),
  subject: yup.string().required('Please select a subject'),
  message: yup.string().required('Please enter your message').min(10, 'The message must be at least 10 characters'),
}).required();

export default function ContactForm() {
  const { register, handleSubmit, formState:{ errors }, reset } = useForm({
    resolver: yupResolver(schema)
  });

    function onSubmitHandler(data) {

    console.log(data);
    reset();
}

  return (
    <form id="contact-form" onSubmit={handleSubmit(onSubmitHandler)}>
      <h2>Do you want to get in touch with us?</h2>
      <p>Write to us and we will be happy to help</p>
      <br />  

      <input {...register("firstName")} placeholder="Firstname"/>
      {errors.firstName && <FormError>{errors.firstName.message}</FormError>}

      <input {...register("lastName")} placeholder="Lastname"/>
      {errors.lastName && <FormError>{errors.lastName.message}</FormError>}

      <input {...register("email")} placeholder="Email" />
      {errors.email && <FormError>{errors.email.message}</FormError>}
    
      <label>Subject: </label>  
      <select {...register("subject")} >
        <option value="">Select</option>
        <option value="customer-support">Customer support</option>
        <option value="invoice&bills">Invoice and bills</option>
        <option value="complaints">Complaints</option>
        <option value="other">Other</option>
      </select>
      {errors.subject && <FormError>{errors.subject.message}</FormError>}

      <textarea {...register("message")} placeholder="Message"/>
      {errors.message && <FormError>{errors.message.message}</FormError>}
      
      <button type="submit" id="form-button">Send</button>
    </form>
  );
}

