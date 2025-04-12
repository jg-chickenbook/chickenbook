import Card from "./Card";

type CardListProps = {
  profiles: {
    _id: string;
    userId: string;
    name: string;
    headline: string;
    status: string;
    skills: string[];
    projects: {
    _id: string;
      name: string;
      link: string;
    }[];
  }[];
};

const CardList = ({ profiles }: CardListProps) => {
  const cardGenerator = profiles.map((profile) => {
    console.log(profile );
    return <Card profile={ profile } key={ profile._id} />;
  });

  return (
    <>
      { cardGenerator }
    </>
  );
};

export default CardList;