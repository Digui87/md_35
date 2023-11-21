import Tag from '../Tag'
import * as S from './styles'

type Props = {
  image: string
  types: string
  title: string
  rating: number
  description: string
  id: number
  destaque?: boolean
}

const Restaurantes = ({
  image,
  types,
  title,
  rating,
  description,
  id,
  destaque
}: Props) => (
  <>
    <S.Card>
      <img src={image} alt="" />
      <S.Types>
        {destaque ? (
          <>
            <Tag>Destaque da semana</Tag>
          </>
        ) : null}
        <Tag>{types}</Tag>
      </S.Types>
      <S.Infos>
        <S.Title>
          <h3>{title}</h3>
          <p>
            {rating} <span>★</span>
          </p>
        </S.Title>
        <S.Description>{description}</S.Description>
        <S.LinkCard to={`/restaurante/${id}`}>Saiba mais</S.LinkCard>
      </S.Infos>
    </S.Card>
  </>
)

export default Restaurantes
