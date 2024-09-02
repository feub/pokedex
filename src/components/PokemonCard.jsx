

export default function PokemonCard({ pokemon }) {

    return (
        <figure>
            {pokemon.imgSrc !== undefined ? <img src={pokemon.imgSrc} /> : <p>???</p>}
            <figcaption>{pokemon.name}</figcaption>
        </figure>
    );
}
