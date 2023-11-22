import fundo from '../../assets/images/fundo.png'
import fundoRestaurante from '../../assets/images/fundo_restaurante.png'
import Logo from '../../assets/images/logo.png'
import { BannerImg } from '../Header/styles'
import * as S from './style'

const HeaderRestaurante = () => (
  <>
    <BannerImg style={{ backgroundImage: `url(${fundo})` }}>
      <S.HeaderContent>
        <S.Restaurant to={'/'}>Restaurantes</S.Restaurant>
        <S.LogoRestaurant to={'/'}>
          <img src={Logo} alt="EFOOD" />
        </S.LogoRestaurant>
        <S.Cart>0 produtos no carrinho</S.Cart>
      </S.HeaderContent>
    </BannerImg>
    <S.BannerRestaurant style={{ backgroundImage: `url(${fundoRestaurante})` }}>
      <div className="container">
        <S.TagType>Italiana</S.TagType>
        <S.RestaurantTitle>
          <h1>La Dolce Vita Trattoria</h1>
        </S.RestaurantTitle>
      </div>
    </S.BannerRestaurant>
  </>
)

export default HeaderRestaurante
