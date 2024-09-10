type CardViewProps = {
  children: React.ReactNode;
};

const CardView = (props: CardViewProps) => {
  return (
    <div className="detail__container">
      <div className="profile__card">
        {props.children}
      </div>
    </div>
  );
};

export default CardView;