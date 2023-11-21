import Cardapio from '../Menu'
import * as S from './styles'
import pizza from '../../assets/images/pizza.png'

const MenuList = () => (
  <>
    <S.List className="container">
      <li>
        <Cardapio />
      </li>
    </S.List>
    <S.Modal>
      <div className="container">
        <S.ModalContent>
          <div>
            <img src={pizza} alt="Pizza" />
            <div>
              <h4>Pizza Marguerita</h4>
              <p>
                A clássica Marguerita: molho de tomate suculento, mussarela
                derretida, manjericão fresco e um toque de azeite. Sabor e
                simplicidade!
              </p>
              <button>Adicionar ao carrinho</button>
            </div>
          </div>
        </S.ModalContent>
      </div>
    </S.Modal>
  </>
)

export default MenuList
