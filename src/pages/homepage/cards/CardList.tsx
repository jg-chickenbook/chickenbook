import Card from "./Card";

type CardListProps = {
  members: {
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

const CardList = ({ members }: CardListProps) => {
  const cardGenerator = members.map((member) => {
    return <Card member={ member } key={ member._id } />;
  });

  return (
    <>
      { cardGenerator }
    </>
  );
};

export default CardList;