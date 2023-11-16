import { Avatar } from '../../components/Avatar'
import Paragrafo from '../../components/Paragrafo'
import Titulo from '../../components/Titulo'
import { BotaoTema, Descricao, SideBarContainer } from './styles'

type Props = {
  trocaTema: () => void
}

const Sidebar = (prop: Props) => (
  <aside>
    <SideBarContainer>
      <Avatar />
      <Titulo fontSize={20}>Thalles Rafael</Titulo>
      <Paragrafo tipo="secundario" fontSize={16}>
        thallesrafaell
      </Paragrafo>
      <Descricao tipo="principal" fontSize={12}>
        Engenheiro Front-end
      </Descricao>
      <BotaoTema onClick={prop.trocaTema}>Trocar Tema</BotaoTema>
    </SideBarContainer>
  </aside>
)

export default Sidebar
