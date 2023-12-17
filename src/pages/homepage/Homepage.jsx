import React, { useState, useEffect } from "react";
import CardList from "./cards/CardList";
import SearchBox from "./SearchBox";
import { members as membersDummyList } from "../../data/members";
import ScrollView from "./ScrollView";
import styled from "styled-components";

const MainContainer = styled.div`
  text-align: center;
`

const HeaderArea = styled.div`
  display: flex;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  @media (max-width: 700px) {
    flex-direction: column;
  }
`

const AppTitle = styled.h1`
  @media (max-width: 700px) {
    margin-bottom: 0;
  }
`

export default function Homepage() {

  const [members, setMembers] = useState([]);
  const [searchfield, setSearchfield] = useState("");

  useEffect(() => {
    setMembers(membersDummyList);
  }, []);

  const onSearchChange = (event) => {
    setSearchfield(event.target.value);
  }

  const filteredMembers = members.filter((member) => {
    return member.name.toLowerCase().includes(searchfield.toLowerCase()) ||
     member.headline.toLowerCase().includes(searchfield.toLowerCase()) ||
     member.mainSkills.join(" ").toLowerCase().includes(searchfield.toLowerCase());
  })

  return (
    <MainContainer>
      <HeaderArea>
        <AppTitle>Chickenbook</AppTitle>
        <SearchBox searchChange={onSearchChange} />
      </HeaderArea>
      <ScrollView>
        <CardList members={filteredMembers}/>
      </ScrollView>
    </MainContainer>
  );
}