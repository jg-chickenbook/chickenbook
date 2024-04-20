type ColumnProps = {
  children: React.ReactNode;
};

const Column = (props: ColumnProps) => {

  return (
    <div className="container__column">{ props.children }</div>
  );
};

export default Column;