import { Pokemon } from '@/interfaces/Pokemon'
import React from 'react'
import './pokemon-card.scss'
import Image from 'next/image'
import Link from 'next/link'

export default function PokemonCard({ pokemon }: { pokemon: Pokemon }) {
  const id = String(pokemon.id).padStart(3, '0')
  const imageUrl = `https://${process.env.POKEMON_INFO_API_URL}/assets/cms2/img/pokedex/detail/${id}.png`

  return (
    <div className="pokemon-card flex flex-col justify-center items-center">
      <Image
        src={imageUrl}
        width={120}
        height={120}
        alt={pokemon.name}
      />
      <p className="number flex justify-center items-center">#{pokemon.id}</p>
      <h3 className="name">{pokemon.name}</h3>
      <Link href={`/pokemon/${pokemon.id}?name=${pokemon.name}`} className="btn">
        Detalhes
      </Link>
    </div>
  )
}
