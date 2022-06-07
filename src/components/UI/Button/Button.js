
import styled from 'styled-components';




const Button = styled.button`
  font: inherit;
  width: 100%;
  padding: 0.5rem 1.5rem;
  border: 1px solid #042410c2;
  color: white;
  background: #042410c2;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.26);
  cursor: pointer;

  @media (min-width: 768px) {
    width: auto;
  }

  &:focus {
    outline: none;
  }

  &:hover,
  &:active {
    background: #008b359f;
    border-color: #008b359f;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.26);
  }
`;

// const Button = props => {
//   return (
//     <button type={props.type} className="button" onClick={props.onClick}>
//       {props.children}
//     </button>
//   );
// };

export default Button;
