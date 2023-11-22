import { BrowserRouter } from 'react-router-dom'
import FooterEFood from './components/Footer'
import { GlobalCss } from './styles'
import Rotas from './routes'

function App() {
  return (
    <BrowserRouter>
      <GlobalCss />
      <Rotas />
      <FooterEFood />
    </BrowserRouter>
  )
}

export default App
