import styled from 'styled-components'

export const FotoPerfil = styled.img`
  width: 128px;
  height: 128px;
  border-radius: 50%;
  margin-bottom: 24px;
  padding: 2px;
  border: 1px dashed ${(props) => props.theme.corDaBorda};
`
