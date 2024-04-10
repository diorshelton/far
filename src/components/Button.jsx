import React from "react";
import styled from 'styled-components';

const StyledButton = styled.button`
  
`;

const Button = ({bodyType})=> {
  return ( 
    <StyledButton>
				<button className="celestial-body" type="button">{bodyType}</button>
    </StyledButton>
  )
}
export default Button;