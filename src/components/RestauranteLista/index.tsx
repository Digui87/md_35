import Restaurantes from '../Restaurante'
import Restaurante from '../../models/Restaurante'
import { ListaContainer } from './styles'

export type Props = {
  restaurantes?: Restaurante[]
}

const ListaRestaurantes = ({ restaurantes }: Props) => (
  <ListaContainer>
    {restaurantes &&
      restaurantes.map((restaurante) => (
        <li key={restaurante.id}>
          <Restaurantes
            id={restaurante.id}
            destaque={restaurante.destacado}
            image={restaurante.image}
            title={restaurante.title}
            types={restaurante.types}
            rating={restaurante.rating}
            description={restaurante.description}
          />
        </li>
      ))}
  </ListaContainer>
)

export default ListaRestaurantes
