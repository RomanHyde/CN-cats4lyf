import React from 'react';
import { Button, Modal } from 'react-bootstrap';
import App from '../App';


function ModalWindow(props) {
    
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Would you like to purrrchase this cat?
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>{props.name}</h4>
          <img alt="cat" />
          <p>
            <b>Age:</b> {props.age}
            <br />
            <b>Price:</b> {props.price}
            <br />
            <b>Description:</b>
            <br />
                Cat ipsum dolor sit amet, fight own tail but refuse to leave cardboard box yet sleep everywhere, but not in my bed. 
                Mice sleeping in the box or purr like a car engine oh yes, there is my human slave woman she does best pats ever that all i like about her 
                hiss meow yet find empty spot in cupboard and sleep all day for cat gets stuck in tree firefighters try to get cat down 
                firefighters get stuck in tree cat eats firefighters' slippers or claw at curtains stretch 
                and yawn nibble on tuna ignore human bite human hand. And sometimes switches in french and say "miaou" 
                just because well why not murr i hate humans they are so annoying licks your face. 
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
  

  function PopUp() {
    const [modalShow, setModalShow] = React.useState(false);
  
    return (
      <>
        <Button variant="primary" onClick={() => setModalShow(true)}>
          More Information
        </Button>
  
        <ModalWindow
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      </>
    );
  }


export default PopUp;