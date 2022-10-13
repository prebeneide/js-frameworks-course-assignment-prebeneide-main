import { useState, useEffect } from "react";
import { API_LIST } from "../../constants/api";
import PokemonItem from "./PokemonItem";

function PokemonList() {
	const [pokemons, setPokemons] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(function () {
		async function fetchData() {
			try {
				const response = await fetch(API_LIST);

				if (response.ok) {
					const json = await response.json();
					console.log(json.results);
					setPokemons(json.results);
				} else {
					setError("An error occured");
				}
			} catch (error) {
				setError(error.toString());
			} finally {
				setLoading(false);
			}
		}
		fetchData();
	}, []);

	if (loading) {
		return <div>Loading...</div>;
	}

	if (error) {
		return <div>An error occured: {error}</div>;
	}

	return (
		<div className="pokemons">
			{pokemons.map(function (pokemon) {
				const { name, url } = pokemon;
				return <PokemonItem key={name} name={name} url={url} />;
			})}
		</div>
	);
}

export default PokemonList;