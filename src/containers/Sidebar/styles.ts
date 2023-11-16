import styled from 'styled-components'
import { P } from '../../components/Paragrafo/styles'

export const Descricao = styled(P)`
  margin: 24px 0 40px;
`

export const BotaoTema = styled.button`
  padding: 8px;
  border: 1px solid ${(props) => props.theme.corDeFundoBotao};
  border-radius: 12px;
  font-size: 10px;
  font-weight: bold;
  background-color: ${(props) => props.theme.corDeFundoBotao};
  color: ${(props) => props.theme.corDeFundo};
  cursor: pointer;
`

export const SideBarContainer = styled.div`
position: sticky;
top: 80px;
left 0;

@media(max-width: 768px) {
  margin-Bottom:40px;
  text-align: center;
}
`
