import styled from "styled-components";

export const ProfileCard = styled.div`
  display: inline-block;
  justify-content: center;
  box-shadow: 0px 0px 4px 2px;
  border: solid;
  border-width: 1px;
  border-radius: .5rem;
  padding: 10px;
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
