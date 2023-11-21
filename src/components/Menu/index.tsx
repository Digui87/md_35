import { MenuCard } from './styles'

type Props = {
  image?: string
  name?: string
  description?: string
}

const Cardapio = ({ image, name, description }: Props) => {
  return (
    <>
      <MenuCard>
        <img src={image} alt="" />
        <h3>{name}</h3>
        <p>{description}</p>
        <button>Mais detalhes</button>
      </MenuCard>
    </>
  )
}

export default Cardapio
