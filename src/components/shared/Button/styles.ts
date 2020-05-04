import styled from 'styled'

interface ButtonProps {
  active?: boolean
  className?: string
}

const Button = styled.button<ButtonProps>`
  height: 35px;
  width: 35px;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  color: black;
  padding: 1px;
  border: solid ${({ active }) => (active ? '#b8ed7c' : '#b06868')} 2px;
  font-size: 15px;
  outline: none;
  background-color: inherit;
  transform: ${({ active }) => active && 'translateY(2px)'};
  transition: 0.1s;

  &:hover {
    border-color: #b8ed7c;
  }

  ${({ className }) =>
    className === 'shiny' &&
    `
        font-family: 'Staatliches',cursive;
        background: linear-gradient(
          14deg,
          #bf8823 10%,
          #ffee90 25%,
          #e6a617 47%,
          #ffee90 73%,
          #fff6c8 74%,
          #ffee90 80%
        );
        background: #e6a617;
        width: 90px;
        text-shadow: white -1px 1px;
  `}
`

export default Button
