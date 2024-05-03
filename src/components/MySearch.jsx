

import { useState } from "react"
import { Container, Form } from "react-bootstrap"
import { Link, useNavigate } from "react-router-dom"



const MySearch = () => {

    const [searchCity, setSearchCity] = useState('')
  const navigation = useNavigate()
   const sub = (e) => {
e.preventDefault();
console.log(searchCity)
navigation(`meteo/${searchCity}`)
   }


  
    return(
        <Container> 
       <Form onSubmit={sub}> 
        <Form.Group className="my-3">
        <Form.Control
          type="search"
          placeholder="Inserisci una città"
          value={searchCity}
          onChange={(e) => setSearchCity(e.target.value)}
        />
      </Form.Group>
      {/* <Link
      type="submit"
            
            className="btn btn-info"
          >
            Cerca
          </Link> */}
          </Form>
     
      </Container>
    )
}
export default MySearch