import styled from "styled-components";

type ScrollViewProps = {
  children: React.ReactNode;
};

const ScrollView = (props: ScrollViewProps) => {
  return (
    <MainSection>
      { props.children }
    </MainSection>
  );
};

export default ScrollView;

const MainSection = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  @media screen and (min-width: 768px) {
    row-gap: 1rem;
  }
`;