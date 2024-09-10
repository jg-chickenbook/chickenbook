import { useState } from "react";
import CardList from "./cards/CardList";
import { Member } from "../../data/members";
import ScrollView from "./ScrollView";
import "../login/LogInForm";
import Header from "../../components/header/Header";
import styled from "styled-components";


export default function Homepage() {

  const [filteredMembers, setFilteredMembers] = useState<Member[]>([]);

  const updateFilteredMembers = (members: Member[]) => {
    setFilteredMembers(members);
  };

  return (
    <>
    <Header updateFilteredMembers={updateFilteredMembers} />
    <main>
      <ScrollView>
        <CardList members={filteredMembers} />
      </ScrollView>
    </main>
  </>
  );
}