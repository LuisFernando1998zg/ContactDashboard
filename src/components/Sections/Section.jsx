import React from 'react';
import './Section.css';

const Section = ({ title, children }) => {
  return (
    <section className="section">
      <section className="section__header">
        <h2 className="section__title">{title}</h2>
        <hr className="section__divider" />
      </section>
      <div className="section__content">
        {children}
      </div>
    </section>
  );
};

export default Section;