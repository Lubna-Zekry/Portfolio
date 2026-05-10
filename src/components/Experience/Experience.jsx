import React from 'react';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      title: ".NET Full Stack Trainee",
      company: "Digital Egypt Pioneers Initiative (DEPI)",
      location: "Egypt",
      date: "Jan 2026 \u2013 Present",
      points: [
        "Currently undergoing comprehensive training in .NET full-stack development",
        "Building applications utilizing C#, ASP.NET Core, and modern web technologies"
      ]
    },
    {
      title: "E-commerce & Marketing Manager",
      company: "Sugar Gift Shops",
      location: "Cairo",
      date: "Feb 2026 \u2013 Present",
      points: [
        "Managed e-commerce operations and website performance",
        "Supervised external marketing agency and ensured campaigns align with business goals",
        "Led social media strategy and ensured brand consistency",
        "Optimized conversion rates and increased sales"
      ]
    },
    {
      title: "E-commerce Manager",
      company: "Sugar Gift Shops",
      location: "Cairo",
      date: "Feb 2025 \u2013 Feb 2026",
      points: [
        "Managed product listings, pricing, and inventory",
        "Handled order processing and customer communication",
        "Improved website UX and product visibility"
      ]
    },
    {
      title: "AI Trainee",
      company: "National Telecommunication Institute (NTI)",
      location: "Cairo",
      date: "Apr 2025 \u2013 Jul 2025",
      points: [
        "Studied AI fundamentals and worked on practical projects",
        "Gained experience in data analysis and basic machine learning"
      ]
    },
    {
      title: "Web Designer Intern",
      company: "National Telecommunication Institute (NTI)",
      location: "Cairo",
      date: "Nov 2024 \u2013 Jan 2025",
      points: [
        "Designed responsive web pages using HTML5 and CSS",
        "Improved UI/UX for web projects",
        "Assisted front-end development"
      ]
    },
    {
      title: "React Web Developer Intern",
      company: "Digital Egypt Pioneers Initiative (DEPI)",
      location: "Egypt",
      date: "Apr 2024 \u2013 Oct 2024",
      points: [
        "Built responsive web applications using React",
        "Worked with components, state management, and APIs"
      ]
    }
  ];

  return (
    <section id="experience" className="section experience-section">
      <div className="container">
        <h2 className="section-title">Work Experience</h2>
        <div className="timeline">
          {experiences.map((exp, index) => (
            <div className="timeline-item glass" key={index}>
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h3 className="timeline-title text-neon">{exp.title}</h3>
                <h4 className="timeline-company">{exp.company} | {exp.location}</h4>
                <p className="timeline-date">{exp.date}</p>
                <ul className="timeline-points">
                  {exp.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
