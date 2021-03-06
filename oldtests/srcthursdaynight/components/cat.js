import React, { useState } from "react";
import styled from "styled-components";

const Cat = ({item,index,addToBasket}) => { 
    return(
    <StyledContainer>
                   
            <img src={item.url} alt="cat" width="100px" height="100px"></img>
            <StyledInfo>
                <StyledP>name: {item.name} </StyledP>
                <StyledP>Age: {item.age}</StyledP>
                <StyledP>Price: £{item.price}</StyledP>
                
            </StyledInfo>
            <StyledButton key={index} onClick={() => addToBasket(item)}>Add To Basket</StyledButton> 
                      
    </StyledContainer> 
    ) 
};

const StyledContainer = styled.div`
    display: flex;    
    flex-direction: row;
    margin-bottom: 20px;
    padding:10px;
    justify-content: space-around;    
    width: 400px;
    background-color: beige;
    border-radius: 5px;

`;

const StyledInfo = styled.div`
    color: darkpink;  
    margin-left: 10px;
    
`;

const StyledP = styled.p`
    margin-bottom: 5px;
`

const StyledButton = styled.button`
    height: 30px;
    margin-left: 10px;
    vertical-align:middle ;
  background-color: pink;
  padding: 5px;
  border-radius: 5px;
  border: none;
  &:hover {
    background-color: #ff9faf;
    cursor: pointer;
  }
  &:active {
    transform: scale(0.95);
  }
`;
   
export default Cat;