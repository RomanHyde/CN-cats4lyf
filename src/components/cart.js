import styled from "styled-components";
import 'bootstrap/dist/css/bootstrap.min.css';
import PopUpBasket from "./modalBasket"
// import addToBasket from "../App"

const Cart = ({basket, totalPrice, addToBasket, minusBasket}) => { 
    return(
    <StyledContainer>
         
            <StyledInfo>
            {/* {props.basket.reduce((total,item) => total + (parseInt(item.price)*parseInt(item.ammountInBasket)), 0 )} */}
                <StyledP><b>Number of items in basket:</b> {basket.reduce((total,item) => total + (parseInt(item.ammountInBasket)), 0)}</StyledP>
                <StyledP><b>Total Price:</b> £{totalPrice}</StyledP>
                <PopUpBasket basket={basket} addToBasket={addToBasket} minusBasket={minusBasket}/>   
                                
            </StyledInfo>
         
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
`;
   
export default Cart;