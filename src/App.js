import React, {useState, useEffect} from 'react'
import faker from "faker";
import 'bootstrap/dist/css/bootstrap.min.css';
import Cat from "./components/cat";
import Cart from "./components/cart";
import styled from "styled-components";
import img from './images/backgroundCats.webp'
 
function App() {

  const [cats, setCats] = useState ([]); 
  const [basket, setBasket] = useState ([]); 

  const [totalPrice,setTotalPrice] = useState(0)

  useEffect(() => {
    getCats();
  }, []);

  const getCats = async () => {
    
      let response = await fetch("https://api.thecatapi.com/v1/images/search?limit=4")
      let data = await response.json(); 
      for (let i = 0; i < data.length; i++) {
        const cat = data[i];
        cat["name"] = faker.name.firstName()        
        cat["age"] = faker.datatype.number(12)
        cat["price"] = faker.commerce.price(50,100)
      }
      setCats(data)
  }

  const addToBasket = (item) => {   
    // I'm going to assume that allthe cats have unique names.
    if (!basket.some((basket) => basket.name === item.name)) {
        item["ammountInBasket"] = 1
        // item["totalItemPrice"] = item.price * item.ammountInBasket 
        setBasket([...basket,item])
    }
    //Should i be directly editing basket?
    basket.map(e => e.name === item.name?e.ammountInBasket = e.ammountInBasket + 1 : e)

    setTotalPrice(parseInt(totalPrice)+parseInt(item.price))
  }

  const minusBasket = (item) => {

    basket.map(e => e.name === item.name && e.ammountInBasket > 0? (e.ammountInBasket = e.ammountInBasket - 1, setTotalPrice(parseInt(totalPrice)-parseInt(item.price))): e)
    setBasket([...basket])
    
  }

return(
  <StyledWrapper>
    {/* <StyledHeader> */}
    <h1>Cats 4 lyf</h1>
    <h3>We are the number 1 shop for cats.</h3>
    {/* </StyledHeader> */}
    
      <Cart basket={basket} totalPrice={totalPrice} addToBasket={addToBasket} minusBasket={minusBasket}/>

    {cats.map((item, index) => {
            return  (
                <Cat item={item} index={index} key={index} addToBasket={addToBasket}/>                                 
                )
            })
       }
  </StyledWrapper>
       
)
}

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  // background-image: url("images/backgroundCats.webp");
  background-image: url(${img});
  background-size: 200px 200px;
  background-repeat: repeat;
  
  // background-color: aqua;
`;

// const StyledHeader = styled.div`
// background color: gray;
// justify-content: center;`

export default App;
