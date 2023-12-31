import { Pokemon } from '@/interfaces/Pokemon'
import { PokemonService } from '@/services/PokemonService'
import './home.scss'
import Image from 'next/image'
import PokemonCard from '@/components/pokemon-card'

export default async function Home() {
  const pokemonService = new PokemonService()
  const pokemonList: Pokemon[] = await pokemonService.getAll()

  return (
    <main className="min-h-screen flex flex-col items-center">
      <section className="title flex justify-center items-center mb-8 gap-4">
        <h1>
          <span>Poke</span>Next
        </h1>
        <Image
          src="/images/pokeball.png"
          width={50}
          height={50}
          alt="PokeNext"
        />
      </section>
      <section className="pokemon-container flex flex-wrap justify-center items-center gap-8">
        {pokemonList &&
          pokemonList.map((pokemon) => (
            <PokemonCard key={pokemon.id} pokemon={pokemon} />
          ))}
      </section>
    </main>
  )
}
