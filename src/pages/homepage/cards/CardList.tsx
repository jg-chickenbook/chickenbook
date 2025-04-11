import Card from "./Card";

type CardListProps = {
  profiles: {
    _id: { $oid: string};
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
    return <Card profile={ profile } key={ profile._id.$oid } />;
  });

  return (
    <>
      { cardGenerator }
    </>
  );
};

export default CardList;