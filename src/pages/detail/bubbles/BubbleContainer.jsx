import Column from "../Column";
import InfoBubble from "./InfoBubble";

const BubbleContainer = ({ skillsList, projectsList, email, phone, about }) => {

  return (
    <section className="bubbles__container">
      <Column>
        <InfoBubble title="Skills">
          <ul className="skills__list">
            { skillsList }
          </ul>
        </InfoBubble>
        <InfoBubble title="Projects">
          <ul className="project__list">
            { projectsList }
          </ul>
        </InfoBubble>
        <InfoBubble title="Contact">
          <ul className="contact__list">
            <li>Email: <a href={ `mailto:${email}` }>{ email }</a></li>
            <li>Phone: <a href={ `mailto:${phone}` }>{ phone }</a></li>
          </ul>
        </InfoBubble>
      </Column>

      <Column>
        <InfoBubble title="About">
          <p className="about__text">{ about }</p>
        </InfoBubble>
      </Column>
    </section>
  );
};

export default BubbleContainer;