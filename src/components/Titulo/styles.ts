import styled from 'styled-components'
import { Props } from '.'

export const Titulo = styled.h3<Props>`
  margin-bottom: 16px;
  color: #282a35;
  font-size: ${(props) => (props.fontSize ? props.fontSize + 'px' : '14px')};
  white-space: nowrap;
`
