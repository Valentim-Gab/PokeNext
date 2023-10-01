import { Pokemon } from '@/interfaces/Pokemon'

export class PokemonService {
  private readonly pokemonApiUrl = process.env.POKEMON_API_URL

  async getAll(): Promise<Pokemon[]> {
    try {
      const maxPokemons = 251
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
}
