import React from 'react';
import './Section.css';

const Section = ({ title, children }) => {
  return (
    <section className="section" aria-labelledby="section-title">
      <header className="section__header">
        <h2 id="section-title" className="section__title">{title}</h2>
        <hr className="section__divider" aria-hidden="true" />
      </header>
      <div className="section__content">
        {children}
      </div>
    </section>
  );
};

export default Section;