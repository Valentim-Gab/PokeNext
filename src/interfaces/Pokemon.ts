export interface Pokemon {
  id?: number
  name: string
  url: string
  height: number
  weight: number
  types?: Types[]
}

interface Types {
  type: {
    name: string
  }
}
