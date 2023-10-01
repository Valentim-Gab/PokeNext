import { PokemonService } from '@/services/PokemonService'
import React from 'react'

interface PokemonProps {
  params: {
    id: number
  }
}

export default async function Pokemon({ params }: PokemonProps) {
  const pokemonService = new PokemonService()
  const pokemon = await pokemonService.get(params.id)

  return (
    <main>
      {pokemon?.name}
    </main>
  )
}
