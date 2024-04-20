type InfoBubbleProps = {
  title: string;
  children: React.ReactNode;
};

const InfoBubble = ({ title, ...props }: InfoBubbleProps) => {

  return (
    <fieldset className="detail__fieldset">
      <legend className="detail__legend">{ title }</legend>
      { props.children }
    </fieldset>
  );
};

export default InfoBubble;