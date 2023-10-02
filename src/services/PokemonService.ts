import { Pokemon } from '@/interfaces/Pokemon'

export class PokemonService {
  private readonly pokemonApiUrl = process.env.POKEMON_API_URL

  async getAll(): Promise<Pokemon[]> {
    try {
      const maxPokemons = 1010
      const res = await fetch(`${this.pokemonApiUrl}/?limit=${maxPokemons}`)
      const data = await res.json()

      data.results.forEach((element: Pokemon, index: number) => {
        element.id = index + 1
      })

      return data.results
    } catch (error) {
      console.error(error)
    }

    return []
  }

  async get(id: number): Promise<Pokemon | null> {
    try {
      const res = await fetch(`${this.pokemonApiUrl}/${id}`)
      const data = await res.json()

      return data
    } catch (error) {
      console.error(error)
    }

    return null
  }
}
