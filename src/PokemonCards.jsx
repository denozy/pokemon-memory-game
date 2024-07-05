export default function PokemonCards({ pokemon, handleClick }) {
  return (
    <div>
      <div>
        {pokemon.map((p) => (
          <button key={p.id} onClick={() => handleClick(p)}>
            <div>
              <h1>{p.name}</h1>
              <img src={p.sprites.front_default} alt={p.name} />
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
