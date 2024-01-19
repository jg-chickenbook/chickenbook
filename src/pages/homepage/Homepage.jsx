import React, { useState, useEffect } from "react";
import CardList from "./cards/CardList";
import SearchBox from "./SearchBox";
import { members as membersDummyList } from "../../data/members";
import ScrollView from "./ScrollView";


export default function Homepage() {

  const [members, setMembers] = useState([]);
  const [searchfield, setSearchfield] = useState("");

  useEffect(() => {
    setMembers(membersDummyList);
  }, []);

  const onSearchChange = (event) => {
    setSearchfield(event.target.value);
  };

  const filteredMembers = members.filter((member) => {
    return member.name.toLowerCase().includes(searchfield.toLowerCase()) ||
      member.headline.toLowerCase().includes(searchfield.toLowerCase()) ||
      member.mainSkills.join(" ").toLowerCase().includes(searchfield.toLowerCase());
  });

  return (
    <>
      <header className="header">
        <h1 className="main__title">Chickenbook</h1>
        <SearchBox searchChange={ onSearchChange } />
      </header>
      <main>
        <ScrollView>
          <CardList members={ filteredMembers } />
        </ScrollView>
      </main>
    </>

  );
}