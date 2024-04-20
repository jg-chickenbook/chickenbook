import Card from "./Card";

type CardListProps = {
  members: {
    id: number;
    name: string;
    headline: string;
    status: string;
    mainSkills: string[];
    bestProjects: {
      name: string;
      link: string;
    }[];
  }[];
};

const CardList = ({ members }: CardListProps) => {
  const cardGenerator = members.map((member) => {
    return <Card member={ member } key={ member.id } />;
  });

  return (
    <>
      { cardGenerator }
    </>
  );
};

export default CardList;