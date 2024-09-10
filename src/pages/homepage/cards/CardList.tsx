import Card from "./Card";

type CardListProps = {
  profiles: {
    _id: number;
    name: string;
    headline: string;
    status: string;
    skills: string[];
    projects: {
      name: string;
      link: string;
    }[];
  }[];
};

const CardList = ({ profiles }: CardListProps) => {
  const cardGenerator = profiles.map((profile) => {
    return <Card profile={ profile } key={ profile._id } />;
  });

  return (
    <>
      { cardGenerator }
    </>
  );
};

export default CardList;