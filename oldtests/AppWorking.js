import React, {useState, useEffect} from 'react'
import './App.css';
import faker from "faker";


function App() {

  const [cats, setCats] = useState ([]); 
  const [basket, setBasket] = useState ([]); 

  useEffect(() => {
    getCats();
  }, []);

  const getCats = async () => {
    
      let response = await fetch("https://api.thecatapi.com/v1/images/search?limit=10")
      let data = await response.json(); 
      for (let i = 0; i < data.length; i++) {
        const cat = data[i];
        cat["name"] = faker.name.firstName()        
        cat["age"] = faker.datatype.number(12)
      }
      setCats(data)
  }

  const addToBasket = (item) => {
    console.log(basket)
    setBasket([...basket,item])
    console.log(basket)
  }

  const logger = () => {
    console.log(basket)
  }

return(
  <div>
    <>
      <h1>Cats 4 lyf</h1>
    </>

  {cats.map((item, index) => {
            return  (
                <>
                    <h1 key={index}>name:{item.name} Age:{item.age}</h1>
                    <img src={item.url} alt="cat" width="100px" height="100px"></img>
                    <button onClick={() => addToBasket(item)}>add to basket</button>
                    <button onClick={() => logger()}>add to basket</button>
                </>
            )
            })
       }
  </div>
)
}

export default App;
