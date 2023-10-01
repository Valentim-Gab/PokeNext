import { Pokemon } from '@/interfaces/Pokemon'
import { PokemonService } from '@/services/PokemonService'

export default async function Home() {
  const pokemonService = new PokemonService()
  const pokemonList: Pokemon[] = await pokemonService.getAll()

  return (
    <main className="min-h-screen flex flex-col">
      <h1>Salve</h1>
      <ul>
        {pokemonList &&
          pokemonList.map((pokemon) => (
            <li key={pokemon.id}>{pokemon.name}</li>
          ))}
      </ul>
    </main>
  )
}
