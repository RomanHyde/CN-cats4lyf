import styled from "styled-components";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Modal } from 'react-bootstrap';
import PopUp from './Modal';


const Cat = ({item,index,addToBasket}) => { 
    return(
    <StyledContainer>
         <Modal cat={item} />          
            <img src={item.url} alt="cat" width="100px" height="100px"></img>
            <StyledInfo>
                    
                <StyledP><b>Name:</b> {item.name} </StyledP>
                <StyledP><b>Age:</b> {item.age}</StyledP>
                <StyledP><b>Price:</b> £{item.price}</StyledP>
                
            </StyledInfo>
            <div>
                <PopUp item={item}/>   
                <p> </p>
                <Button variant="success" size="sm" key={index} onClick={() => addToBasket(item)}>Add To Basket</Button> 
            </div>          
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
   
export default Cat;