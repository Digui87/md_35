import * as S from './styles'
import logo from '../../assets/images/logo.png'
import instagram from '../../assets/images/instagram.png'
import facebook from '../../assets/images/facebook.png'
import twitter from '../../assets/images/twitter.png'

const FooterEFood = () => {
  return (
    <>
      <S.Footer>
        <div>
          <S.Logo>
            <img src={logo} alt="EFOOD" />
          </S.Logo>
          <S.Icons>
            <img src={instagram} alt="" />
            <img src={facebook} alt="" />
            <img src={twitter} alt="" />
          </S.Icons>
          <S.Description>
            A eFood é uma plataforma para divulgação de estabelecimentos, a
            responsabilidade pela entrega, qualidade dos produtos é toda do
            estabelecimento contratado.
          </S.Description>
        </div>
      </S.Footer>
    </>
  )
}

export default FooterEFood
