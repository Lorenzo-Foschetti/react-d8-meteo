import { useEffect, useState } from "react";
import {  Card } from "react-bootstrap"
import { useParams } from "react-router-dom";


const Meteo = () => {
    const apiKey = "03066dafddfb21a4546ea4c708fa3aba"
// const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${searchCity}&APPID=${apiKey}`;

const params =useParams()
const name = params.cityname
const [lat, setLat] = useState("")
const [weather,setWeather] = useState({})


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
    const longit = città[0].lon
    console.log(longit)
    setLat(`lat=${lat}&lon=${longit}`)


        

       
  

   

     
      })
      .catch((err) => {
        console.log(err);
      });
    
  };
  const mySecondFetch = () => {
   

    fetch(`https://api.openweathermap.org/data/2.5/weather?${lat}&appid=${apiKey}`)
    .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Errore ");
        }
      })
      .then((data) => {
        console.log(data)
        setWeather(data)
        console.log(weather)



        

       
  

   

     
      })
      .catch((err) => {
        console.log(err);
      });
    
  };
  

  

  useEffect(() => {
    myFetch();
    
   }, []);
   useEffect(() => {
    if(lat) {

   
    mySecondFetch();
    }
    
   }, [lat]);


    return(

        <> 
   {weather &&
        <Card >
        <Card.Img variant="top" src="" />
        <Card.Body>
          <Card.Title>
{weather.cod}
          </Card.Title>
          <Card.Title>Card Title</Card.Title>
          <Card.Title>Card Title</Card.Title>
        
          
        </Card.Body>
      </Card>
   }
      </>
    
    )
}
export default Meteo
