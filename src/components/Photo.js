import React, {useState, useEffect} from 'react'
import axios from 'axios'

const Photo = ({}) => {
    const [data, setData] = useState('')

    useEffect(() => {
      axios.get('https://api.nasa.gov/planetary/apod?api_key=VWAX54YOQX5m8KupsBlar7Q3D3mGtOWUdX4iiafJ') 
      /* data initializes to empty string and setData used to hold Axios data*/
      .then(response => {
        console.log(response.data)
        setData(response.data) /* invoke setData and pass in Axios response to set state to returned axios data */
      })
      .catch(error => {
        console.log(`An error has occured`, error)
      })
    }, []) /* empty dependancy array to stop invinite loop */
    
    return (
        <div>
          <h1>{data.title}</h1>
            <img src={data.url} alt={data.title} />
            <p>{data.explanation}</p>
            <p>{data.date}</p>
            <p>{data.copyright}</p>
        </div>
    )
}

export default Photo
