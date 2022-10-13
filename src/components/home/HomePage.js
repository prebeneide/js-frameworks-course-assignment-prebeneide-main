import PokemonList from "../pokemons/PokemonList";
import Heading from "../layout/Heading";

export default function HomePage() {
	return (
		<>
			<Heading content="Welcome to Pokemon Information" />
			<div className="container">
                <PokemonList />
            </div>
		</>
	);
}