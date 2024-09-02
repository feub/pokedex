
export default function NavBar({ pokemonList, handleClick }) {
    return (
        <div>
            {pokemonList.map((pokemon, index) => (
                <button onClick={() => handleClick(index)} key={index}>{pokemon.name}</button>
            ))}
        </div>
    );
}
