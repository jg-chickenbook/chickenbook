const CardView = (props) => {
  return (
    <div className="detail__container">
      <div className="member__card">
        { props.children }
      </div>
    </div>
  );
};

export default CardView;