import { useState } from "react";
import Header from "../header/Header";
import styled from "styled-components";
import React from "react";

interface LayoutProps {
  children: React.ReactNode;
  showSearch?: boolean;
}

const Layout = ({ children, showSearch = true }: LayoutProps) => {
  const [searchfield, setSearchfield] = useState("");

  const onSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchfield(event.target.value);
  };

  // Předání searchfield do children komponent
  const childrenWithProps = React.Children.map(children, child => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, { searchfield, onSearchChange });
    }
    return child;
  });

  return (
    <LayoutContainer>
      <Header onSearchChange={showSearch ? onSearchChange : () => {}} />
      <MainContent>
        {childrenWithProps}
      </MainContent>
    </LayoutContainer>
  );
};

const LayoutContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const MainContent = styled.main`
  flex: 1;
`;

export default Layout; 