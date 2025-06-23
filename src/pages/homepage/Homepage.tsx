import CardList from "./cards/CardList";
import { Profile } from "../../data/ProfileType";
import ScrollView from "./ScrollView";
import "../login/LogInForm";
import useFetchData from "../../hooks/useApiRequest";
import styled from "styled-components";

interface HomepageProps {
  searchfield?: string;
}

export default function Homepage({ searchfield = "" }: HomepageProps) {

  const { data: profiles, loading, error } = useFetchData<Profile[]>("profiles");

  const filterProfiles = profiles?.filter((profile) => {
    return (
      profile.name.toLowerCase().includes(searchfield.toLowerCase()) ||
      profile.headline.toLowerCase().includes(searchfield.toLowerCase()) ||
      profile.skills.join(" ").toLowerCase().includes(searchfield.toLowerCase())
    );
  });

  return (
    <MainSection>
      {loading ? <div>Loading...</div> : error ? <div>Error: {error}</div> :
        ( <ScrollView>
          <CardList profiles={filterProfiles || []} />
        </ScrollView>)}
    </MainSection>
  );
}

const MainSection = styled.main`
padding: 1rem;
`;
