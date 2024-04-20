type ScrollViewProps = {
  children: React.ReactNode;
};

const ScrollView = (props: ScrollViewProps) => {
  return (
    <section className="main__section">
      { props.children }
    </section>
  );
};

export default ScrollView;