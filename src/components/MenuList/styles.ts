import { styled } from 'styled-components'
import { cores } from '../../styles'

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 32px;
  padding-top: 56px;
`

export const Pratos = styled.div`
  background-color: ${cores.vermelhoClaro};
  padding: 8px;
  color: ${cores.corTexto};
  display: block;
  img {
    width: 320px;
    height: 180px;
  }
  h4 {
    margin-top: 8px;
    margin-bottom: 8px;
    font-weight: 900;
    font-size: 19px;
    line-height: 18px;
  }
  p {
    line-height: 22px;
    font-weight: 400;
    font-size: 14px;
  }

  button {
    margin-top: 8px;
    width: 100%;
    height: 24px;
    font-size: 14px;
    font-weight: 700;
    color: ${cores.vermelhoClaro};
    background-color: ${cores.corTexto};
    border: none;
    cursor: pointer;
  }
`
