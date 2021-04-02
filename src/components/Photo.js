import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { PhotoContainer, TitleContainer, StyledTitle, InfoContainer, StyledP, StyledDate } from './Styles'

const Photo = ({ }) => {
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
        
        <PhotoContainer>
            <TitleContainer>
            <StyledTitle>{data.title}</StyledTitle>                
            </TitleContainer>
            {data.media_type === 'video' ? <iframe src={data.url} width='640' height='480' /> : <img src={data.url} alt={data.title} />}
            <InfoContainer>
            <StyledP>{data.explanation}</StyledP>
            <StyledDate>{data.date}</StyledDate>
            <StyledP>{data.copyright}</StyledP>                
            </InfoContainer>
        </PhotoContainer>
    )
}

export default Photo
