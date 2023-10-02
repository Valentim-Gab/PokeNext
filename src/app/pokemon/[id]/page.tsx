import { PokemonService } from '@/services/PokemonService'
import Image from 'next/image'
import React from 'react'
import './pokemon.scss'

interface PokemonProps {
  params: {
    id: number
  }
  searchParams: {
    name: string
  }
}

export async function generateMetadata({ searchParams }: PokemonProps) {
  let title = searchParams.name
  const firstLetter = title[0].toUpperCase();
  const restOfString = title.slice(1);
  title = firstLetter + restOfString

  return {
    title: title,
    description: `Página sobre o Pokémon ${title}`
  }
}

export default async function Pokemon({ params, searchParams }: PokemonProps) {
  const pokemonService = new PokemonService()
  const pokemon = await pokemonService.get(params.id)
  let imageUrl = ''

  if (pokemon) {
    const id = String(pokemon.id).padStart(3, '0')
    imageUrl = `https://${process.env.POKEMON_INFO_API_URL}/assets/cms2/img/pokedex/detail/${id}.png`
  }

  return (
    <main className="pokemon_container min-h-screen flex flex-col items-center text-center">
      {pokemon && (
        <>
          <h1 className="pokemon_title">{pokemon.name}</h1>
          <Image src={imageUrl} width={200} height={200} alt={pokemon.name} />
          <section>
            <h3>
              <strong>Número:</strong>
            </h3>
            <p>#{pokemon.id}</p>
          </section>
          <section>
            <h3>
              <strong>Tipo:</strong>
            </h3>
            <div className="flex items-center justify-center gap-4">
              {pokemon.types &&
                pokemon.types.map((element, index) => (
                  <span key={index} className={`type ${element.type.name}`}>
                    {element.type.name}
                  </span>
                ))}
            </div>
          </section>
          <section className="flex items-center justify-center mt-8">
            <div className="data_height flex-col items-center justify-center">
              <h4>
                <strong>Altura:</strong>
              </h4>
              <p>{pokemon.height * 10} cm</p>
            </div>
            <div className="data_weight flex flex-col items-center justify-center">
              <h4>
                <strong>Peso:</strong>
              </h4>
              <p>{pokemon.weight / 10} kg</p>
            </div>
          </section>
        </>
      )}
      {!pokemon && <h1>Pokemon não encontrado</h1>}
    </main>
  )
}
