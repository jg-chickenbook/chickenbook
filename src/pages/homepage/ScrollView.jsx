import React from "react";

const ScrollView = (props) => {
  return (
    <section className="main__section">
      { props.children }
    </section>
  );
};

export default ScrollView;