import sushi from '../../assets/images/sushi.png'
import massa from '../../assets/images/massa.png'
import Restaurante from '../../models/Restaurante'
import ListaRestaurantes from '../../components/RestauranteLista'
import Header from '../../components/Header'

const menu: Restaurante[] = [
  {
    rating: 4.9,
    types: 'Japonesa',
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!',
    title: 'Hioki Sushi',
    image: sushi,
    id: 1,
    destaque: true,
    destacado: true
  },
  {
    rating: 4.6,
    types: 'Italiana',
    description:
      'A La Dolce Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveism tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já',
    title: 'La Dolce Vita Trattoria',
    image: massa,
    id: 2
  },
  {
    rating: 4.6,
    types: 'Italiana',
    description:
      'A La Dolce Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveism tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já',
    title: 'La Dolce Vita Trattoria',
    image: massa,
    id: 3
  },
  {
    rating: 4.6,
    types: 'Italiana',
    description:
      'A La Dolce Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveism tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já',
    title: 'La Dolce Vita Trattoria',
    image: massa,
    id: 4
  },
  {
    rating: 4.6,
    types: 'Italiana',
    description:
      'A La Dolce Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveism tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já',
    title: 'La Dolce Vita Trattoria',
    image: massa,
    id: 5
  },
  {
    rating: 4.6,
    types: 'Italiana',
    description:
      'A La Dolce Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveism tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já',
    title: 'La Dolce Vita Trattoria',
    image: massa,
    id: 6
  }
]

const Home = () => (
  <>
    <Header />
    <div className="container">
      <ListaRestaurantes restaurantes={menu} />
    </div>
  </>
)

export default Home
