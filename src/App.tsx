import { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import Projetos from './containers/Projetos'
import Sidebar from './containers/Sidebar'
import Sobre from './containers/Sobre'
import EstiloGlobal, { Container } from './styles'
import temaLight from './themes/light'
import temaDark from './themes/dark'

function App() {
  const [estaUsandoThemaDark, setEstaUsandoTemaDark] = useState(true)

  const TrocarTema = () => {
    setEstaUsandoTemaDark(!estaUsandoThemaDark)
  }

  return (
    <ThemeProvider theme={estaUsandoThemaDark ? temaDark : temaLight}>
      <EstiloGlobal />

      <Container>
        <Sidebar trocaTema={TrocarTema} />
        <main>
          <Sobre />
          <Projetos />
        </main>
      </Container>
    </ThemeProvider>
  )
}

export default App
