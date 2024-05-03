import { useEffect } from "react";
import {  Card } from "react-bootstrap"
import { useParams } from "react-router-dom";


const Meteo = () => {
    const apiKey = "03066dafddfb21a4546ea4c708fa3aba"
// const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${searchCity}&APPID=${apiKey}`;

const params =useParams()
const name = params.cityname


const myFetch = () => {
   

    fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${name}&appid=${apiKey}`)
    .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Errore ");
        }
      })
      .then((città) => {
        console.log(città)
    const lat = città[0].lat
    console.log(lat)
    const longit = città.lon
    console.log(longit)


        

       
  

   

     
      })
      .catch((err) => {
        console.log(err);
      });
    
  };
  

  useEffect(() => {
    myFetch();
    
   }, []);
    return(
        <> 
        <Card >
        <Card.Img variant="top" src="" />
        <Card.Body>
          <Card.Title>Card Title

          </Card.Title>
          <Card.Title>Card Title</Card.Title>
          <Card.Title>Card Title</Card.Title>
        
          
        </Card.Body>
      </Card>
      </>
    )
}
export default Meteo
