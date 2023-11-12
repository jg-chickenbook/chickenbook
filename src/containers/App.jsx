import React, { useState, useEffect } from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import { members as membersDummyList } from "../members";
import { AppContainer, AppHeader } from "./App.styling";
import ScrollView from "../components/ScrollView";

function App() {

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

  return !members.length ? (
    <h1>Loading</h1>
  ) : (
    <AppContainer>
      <AppHeader>
        <h1>Chickenbook</h1>
        <SearchBox searchChange={onSearchChange} />
      </AppHeader>
      <ScrollView>
        <CardList members={filteredMembers}/>
      </ScrollView>
    </AppContainer>
  );
}

export default App;