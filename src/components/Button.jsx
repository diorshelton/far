import React from "react";
import styled from 'styled-components';

const StyledButton = styled.button`
  padding: 0;
  border: 0;
`;

const Button = ({bodyType})=> {
  return ( 
    <StyledButton>
				<button className="celestial-body" type="button">{bodyType}</button>
    </StyledButton>
  )
}
export default Button;