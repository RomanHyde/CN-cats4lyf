import React, {useState} from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import styled from "styled-components";
// import addToBasket from "../App"


const ModalCheackout = (props) => {

    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Check Out
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
          {props.basket.map((item, index) => {
            
                    
            return  (
                <>
                    <StyledContainer>
                      <img src={item.url} alt="cat" width="100px" height="100px"></img>
                      <StyledInfo>
                        <StyledP>Name: {item.name}</StyledP> 
                        <StyledP>Age: {item.age}</StyledP> 
                        <StyledP>Price: £{item.price}</StyledP>
                      </StyledInfo>
                      <StyledInfo>
                        <StyledP>Number In Basket:</StyledP>
                        <StyledBasket>                      
                          <Button onClick={() => props.minusBasket(item)}>-</Button>
                          <StyledammountInBasket>{item.ammountInBasket}</StyledammountInBasket>           
                          <Button onClick={() => props.addToBasket(item)}>+</Button>
                        </StyledBasket>                        
                        <StyledP>Total Price: £{item.price * item.ammountInBasket }</StyledP>
                        
                        </StyledInfo>
                    </StyledContainer>
                </>
            )
                       
            })
          }           
          
            <StyledContainer>
                Total Price: £{props.basket.reduce((total,item) => total + (parseInt(item.price)*parseInt(item.ammountInBasket)), 0 )}
            </StyledContainer>
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }

  const PopUpBasket = ({basket,addToBasket,minusBasket}) =>{

    const [modalShow, setModalShow] = useState(false);

    return(
      // <p>test</p>

      <div>
        <Button variant="primary" onClick={() => setModalShow(true)}>
            Launch Basket
        </Button>

        <ModalCheackout
          show={modalShow}
          onHide={() => setModalShow(false)}
          basket={basket}
          addToBasket={addToBasket}
          minusBasket={minusBasket}/>
      </div>

    )
  }

  const StyledP = styled.p`
    margin-bottom:2px;
  `

  const StyledammountInBasket = styled.span`
    padding:10px;
    margin-bottom:2px;
  `

  const StyledBasket = styled.p`
    font-size: 2em;
    /* align-items: baseline; */
    /* justify-content: space-between; */
    flex-direction: row;
    margin-bottom:2px;
  `;

  const StyledContainer = styled.div`
    display: flex;    
    flex-direction: row;
    margin-bottom: 5px;
    padding:5px;
    /* justify-content: space-around;     */
    /* width: 400px; */
    background-color: beige;
    border-radius: 5px;
    height: 110px;
`;

const StyledInfo = styled.div`
    color: darkpink;  
    margin-left: 20px;
    
`;



  export default PopUpBasket
  