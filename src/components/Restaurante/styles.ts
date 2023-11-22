import styled from 'styled-components'
import { cores } from '../../styles'
import { Link } from 'react-router-dom'
import { TagContainer } from '../Tag/styles'

export const Card = styled.div`
  background-color: ${cores.corFundo};
  position: relative;
  border: 1px solid ${cores.vermelhoClaro};

  img {
    object-fit: cover;
    width: 100%;
    height: 220px;
  }
  ${TagContainer} {
    margin-left: 8px;
  }
`

export const Infos = styled.div`
  padding: 8px;
`

export const Title = styled.p`
  display: flex;
  justify-content: space-between;
  color: ${cores.vermelhoClaro};
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  margin-right: 8px;

  span {
    color: gold;
    margin-left: 8px;
  }
`

export const Types = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
`
export const Description = styled.p`
  margin-top: 16px;
  color: ${cores.vermelhoClaro};
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
`

export const LinkCard = styled(Link)`
  display: inline-block;
  margin-top: 16px;
  padding: 4px 6px;
  background-color: ${cores.vermelhoClaro};
  color: ${cores.corTexto};
  text-decoration: none;
  font-weight: bold;
`
