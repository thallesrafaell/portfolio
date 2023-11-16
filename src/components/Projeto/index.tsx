import Paragrafo from '../Paragrafo'
import { Titulo } from '../Titulo/styles'
import { Card, LinkBotao } from './styles'

const Projeto = () => (
  <Card>
    <Titulo>Lista de Tarefas</Titulo>
    <Paragrafo tipo="secundario">Lista de Tarefas com VueJs</Paragrafo>
    <LinkBotao>Visualizar</LinkBotao>
  </Card>
)

export default Projeto
