import styled from 'styled-components'
type BotaoProps = {
  principal: boolean
  fontSize: string
}
const Botao = styled.button<BotaoProps>`
  background-color: ${(props) => (props.principal ? 'green' : 'blue')};
`
const BotaoPerigo = styled(Botao)`
  background-color: red;
  color: #fff;
  span {
    text-decoration: line-through;
  }
`
function Teste() {
  return (
    <>
      <Botao fontSize="18" principal>
        Clique aqui
      </Botao>
      <Botao fontSize="18" principal={false}>
        Clique aqui
      </Botao>
      <BotaoPerigo as="a" fontSize="18" principal={false}>
        <span>Clique aqui</span>
      </BotaoPerigo>
    </>
  )
}

export default Teste
