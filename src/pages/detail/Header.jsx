import JgChicken from "../../assets/chick-chicko.png";

const Header = ({ name, headline, status }) => {

  return (
    <header className="header__detail">
      <img className="detail__image" src={ JgChicken } />
      <div className="detail__inner">
        <h1 className="detail__name">{ name }</h1>
        <h2 className="detail__position">{ headline }</h2>
        <h3 className="detail__status">{ status }</h3>
      </div>
    </header>
  );
};

export default Header;