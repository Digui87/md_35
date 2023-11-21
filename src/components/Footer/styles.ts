import styled from 'styled-components'
import { cores } from '../../styles'

export const Footer = styled.div`
  background-color: ${cores.corTexto};
  margin-top: 120px;
  display: flex;
  justify-content: center;
  padding: 40px;
`

export const Logo = styled.div`
  display: flex;
  justify-content: center;
`

export const Icons = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 32px;

  img {
    margin-right: 8px;
  }
`

export const Description = styled.p`
  max-width: 480px;
  text-align: center;
  font-size: 10px;
  color: ${cores.vermelhoClaro};
  margin-top: 80px;
`
