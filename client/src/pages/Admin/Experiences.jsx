import React from 'react';
import { useSelector } from 'react-redux';

function Experiences() {
  const { portfolioData } = useSelector((state) => state.root);
  const experiences = portfolioData?.experiences ?? [];
  if (experiences.length === 0) {
    return <div>Loading experiences...</div>;
  }

  return (
    <div className="grid grid-cols-4 gap-4">
      {experiences.map((experience, index) => (
        <div key={index} className="experience-item">
          <h1>{experience.period}</h1>
          <h2>{experience.company}</h2>
          <h3>{experience.role}</h3>
          <p>{experience.description}</p>
        </div>
      ))}
    </div>
  );
}

export default Experiences;
