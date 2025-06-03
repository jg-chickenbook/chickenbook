import { useState } from "react";
import CardList from "./cards/CardList";
import { Profile } from "../../data/ProfileType";
import ScrollView from "./ScrollView";
import "../login/LogInForm";
import Header from "../../components/header/Header";
import useFetchData from "../../hooks/useApiRequest";
import styled from "styled-components";

export default function Homepage() {

  const { data: profiles, loading, error } = useFetchData<Profile[]>('profiles');

  const [searchfield, setSearchfield] = useState("");

  const onSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchfield(event.target.value);
  };

  const filterProfiles = profiles?.filter((profile) => {
    return (
      profile.name.toLowerCase().includes(searchfield.toLowerCase()) ||
      profile.headline.toLowerCase().includes(searchfield.toLowerCase()) ||
      profile.skills.join(" ").toLowerCase().includes(searchfield.toLowerCase())
    );
  });



  return (
    <>
  <Header onSearchChange={onSearchChange} />
      <MainSection>
        {loading ? <div>Loading...</div> : error ? <div>Error: {error}</div> :
          ( <ScrollView>
            <CardList profiles={filterProfiles || []} />
          </ScrollView>)}
      </MainSection>
    </>
  );


}

const MainSection = styled.main`
padding: 1rem;
`;
