const InfoBubble = ({ title, ...props }) => {

  return (
    <fieldset className="detail__fieldset">
      <legend className="detail__legend">{ title }</legend>
      { props.children }
    </fieldset>
  );
};

export default InfoBubble;