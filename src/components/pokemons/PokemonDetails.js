import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { API } from "../../constants/api";

function PokemonDetail() {
 const [pokemon, setPokemon] = useState(null);
 const [loading, setLoading] = useState(true);
 const [error, setError] = useState(null);

 let navigate = useNavigate();

 const { name } = useParams();

 if (!name) {
  navigate("/");
 }

 const url = API + "/" + name;

 useEffect(
  function () {
   async function fetchData() {
    try {
     const response = await fetch(url);

     if (response.ok) {
      const json = await response.json();
      console.log(json);
      setPokemon(json);
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
  },
  [url]
 );

 if (loading) {
  return <div>Loading...</div>;
 }

 if (error) {
  return <div>An error occured: {error}</div>;
 }

 return (
  <div className="pokemon-detail">
   <h1>{pokemon.name}</h1>
   <p>Height: <strong>{pokemon.height}</strong> decimetres</p>
   <p>Weight: <strong>{pokemon.weight}</strong> hectograms </p>
   <p>Base-Experience: <strong>{pokemon.base_experience}</strong></p>
  </div>
 );
}

export default PokemonDetail;