class Restaurante {
  image: string
  types: string
  title: string
  rating: number
  description: string
  id: number
  destaque?: boolean
  destacado?: boolean | undefined

  constructor(
    image: string,
    types: string,
    title: string,
    rating: number,
    description: string,
    id: number,
    destaque?: boolean
  ) {
    this.image = image
    this.types = types
    this.title = title
    this.rating = rating
    this.description = description
    this.id = id
    this.destaque = destaque
  }
}

export default Restaurante
