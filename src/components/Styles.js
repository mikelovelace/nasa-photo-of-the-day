import styled from 'styled-components'

export const StyledDate = styled.p
  `
    color: #A52A2A;
    font-weight: bold;
    font-size: 2rem;
    margin-top: 5%;
  `

export const StyledP = styled.p
  `
  width: 60%;
  color: #eeeeee;

    &:first-letter {
      color: #A52A2A;
          float: left;
          font-size: 7rem;
          margin: 0 .5rem 0 0;
          line-height: 0.85;
  }
  `


export const StyledTitle = styled.h1
    
  `
  font-size: 1.4rem;
  color: #fff;
  `

export const TitleContainer = styled.div
  `
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 30px;
  background: #A52A2A;
  width: 100%;
  height: 5%;
  margin-top: -10%;
  `
  

export const AppContainer = styled.div
  `
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 100vh;
  background: #000;
  `


export const StyledImg = styled.img
  `
  padding: 3%;
  width: 86%;
  `



export const InfoContainer = styled.div
  `
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: #181818;
  width: 60%;
  `



export const PhotoContainer = styled.div
  `
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
  background: #141414;
  height: 100vh;
  width: 60%;
  `