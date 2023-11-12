import styled from "styled-components";

export const ProfileCard = styled.div`
  display: inline-block;
  justify-content: center;
  background-color: white;
  box-shadow: 0px 0px 4px 2px;
  border: solid;
  border-width: 1px;
  border-radius: .5rem;
  padding: 50px;
  margin: 5px;

  &:hover {
    -moz-osx-font-smoothing: grayscale;
    backface-visibility: hidden;
    transform: translateZ(0);
    transition: transform 0.25s ease-out;
    transform: scale(1.05);
  }
`

export const ProfileImage = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  margin: auto;
  display: block;
  margin-bottom: 25px;
`

export const Status = styled.p`
  font-size: small;
  color: gray;
  text-align: right;
  margin-bottom: 0;
`

export const Name = styled.h2`
  margin-top: 5px;
  margin-bottom: 0;
`

export const Headline = styled.p`
  color: blue;
`

export const ProfileSection = styled.div`
  background-color: burlywood;
  border-radius: .5rem;
  padding: 5px;
  margin: 5px
`

export const SectionTitle = styled.h4`
  color: white;
  margin-top: 0;
  margin-bottom: 0.5rem;
`

export const ContactInfo = styled.p`
  margin-top: 0;
  margin-bottom: 0;
`