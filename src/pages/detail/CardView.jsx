import styled from "styled-components";

const PageContainer = styled.div`
  display: flex;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  padding: 10px;
`

const MemberCard = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #FBFCD3;
  border-radius: 0.7rem;
  border: 2px solid #191919;
  box-shadow: 3px 5px #191919;
  padding: 25px;
  height: 800px;
  width: 1000px;
`

const CardView = (props) => {
  return (
    <PageContainer>
      <MemberCard>
        {props.children}
      </MemberCard>
    </PageContainer>
  );
}

export default CardView;