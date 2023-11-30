import React, { useState, useEffect } from "react";
import CardList from "./CardList";
import SearchBox from "./SearchBox";
import { members as membersDummyList } from "../../members";
import { MainContainer, HeaderArea, AppTitle } from "./Homepage.styling";
import ScrollView from "./ScrollView";

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