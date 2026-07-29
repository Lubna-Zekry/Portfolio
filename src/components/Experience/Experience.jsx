import React from 'react';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      title: "E-commerce & Digital Marketing Specialist",
      company: "Sugar Gift Shops",
      location: "Cairo",
      date: "Feb 2026 – Present",
      type: "work",
      summary: "Leading digital storefront operations, agency partnerships, and revenue optimization strategies.",
      skills: ["E-commerce Management", "Digital Marketing", "Campaign Planning", "Inventory Control", "Conversion Optimization"],
      points: [
        {
          title: "E-commerce Operations & Growth",
          description: "Spearheading end-to-end e-commerce platform operations, streamlining product catalogs, automated stock alerts, and customer purchase workflows to boost store conversion rates."
        },
        {
          title: "Agency Coordination & Ad Strategy",
          description: "Aligning strategic goals with digital marketing agencies to plan, execute, and analyze performance ad campaigns across social and search platforms."
        },
        {
          title: "Promotional & Campaign Management",
          description: "Designing data-backed promotional calendars, seasonal sales events, and audience retargeting workflows to drive Customer Lifetime Value (CLV)."
        },
        {
          title: "UX & Sales Funnel Optimization",
          description: "Auditing user navigation funnels, optimizing page speed rendering, and refining checkout UX to minimize cart abandonment."
        }
      ]
    },
    {
      title: "E-commerce Specialist",
      company: "Sugar Gift Shops",
      location: "Cairo",
      date: "Aug 2023 – Feb 2026",
      type: "work",
      summary: "Managed day-to-day store listings, inventory accuracy, order processing, and promotional updates.",
      skills: ["Product Listing", "SEO Optimization", "Order Management", "Dynamic Pricing", "Catalog Merchandising"],
      points: [
        {
          title: "Product Catalog Merchandising",
          description: "Managed 500+ SKU product listings with SEO-optimized product titles, rich descriptions, price updates, and high-quality visual assets."
        },
        {
          title: "Inventory & Order Logistics",
          description: "Overhauled real-time inventory tracking and order processing pipelines to ensure rapid order fulfillment and accurate stock synchronization."
        },
        {
          title: "Site Maintenance & UI Audits",
          description: "Performed routine store performance checks, mobile responsiveness testing, and dynamic homepage banner updates."
        },
        {
          title: "Sales & Promotional Execution",
          description: "Created discount structures, product bundles, and holiday campaign landing pages that boosted monthly online sales volume."
        }
      ]
    },
    {
      title: "AI Trainee",
      company: "National Telecommunication Institute (NTI)",
      location: "Cairo",
      date: "Apr 2025 – Jul 2025",
      type: "training",
      summary: "Intensive training in Artificial Intelligence principles, Machine Learning modeling, and exploratory data analysis.",
      skills: ["AI Fundamentals", "Machine Learning", "Data Analysis", "Python", "Predictive Modeling"],
      points: [
        {
          title: "AI & Machine Learning Foundations",
          description: "Mastered core AI principles, supervised and unsupervised machine learning algorithms, decision trees, classification models, and neural network basics."
        },
        {
          title: "Data Preprocessing & EDA",
          description: "Processed, cleaned, and explored raw datasets using Python (Pandas, NumPy, Matplotlib) for feature extraction and pattern recognition."
        },
        {
          title: "Model Building & Sentiment Evaluation",
          description: "Built predictive classification and regression models, evaluating accuracy metrics and performing text sentiment analysis tasks."
        }
      ]
    },
    {
      title: "Web Designer Intern",
      company: "National Telecommunication Institute (NTI)",
      location: "Cairo",
      date: "Nov 2024 – Jan 2025",
      type: "training",
      summary: "Hands-on experience in modern frontend web design, responsive layouts, and UI/UX design standards.",
      skills: ["HTML5", "CSS3", "Responsive Design", "UI/UX Prototyping", "Flexbox & Grid"],
      points: [
        {
          title: "Responsive Web Interface Crafting",
          description: "Engineered mobile-first, fully responsive web layouts using semantic HTML5, advanced CSS3 techniques, Flexbox, and CSS Grid."
        },
        {
          title: "UI/UX Design Standards",
          description: "Applied user-centered design principles, typography rules, color contrast science, and smooth interactive elements."
        },
        {
          title: "Cross-Browser Compatibility",
          description: "Optimized web design templates, CSS animations, and DOM rendering performance for flawless display across all modern browsers."
        }
      ]
    },
    {
      title: "React Web Development Trainee",
      company: "Digital Egypt Pioneers Initiative (DEPI)",
      location: "Egypt",
      date: "Apr 2024 – Oct 2024",
      type: "training",
      summary: "Comprehensive React framework training covering modular architecture, API handling, and global state management.",
      skills: ["React.js", "REST APIs", "State Management", "Component Architecture", "JavaScript ES6+"],
      points: [
        {
          title: "React Component Architecture",
          description: "Built modular, reusable React functional components leveraging modern React Hooks (useState, useEffect, useContext, useRef)."
        },
        {
          title: "RESTful API Integration",
          description: "Connected React frontends to asynchronous REST APIs, managing live data fetching, loading indicators, error handling, and state synchronization."
        },
        {
          title: "State Architecture & SPA Routing",
          description: "Designed scalable component state management models and single-page application (SPA) client-side routing for dynamic web apps."
        }
      ]
    }
  ];

  return (
    <section id="experience" className="section experience-section">
      <div className="container">
        <h2 className="section-title">Work Experience & Training</h2>
        <div className="timeline">
          {experiences.map((exp, index) => (
            <div className={`timeline-item glass timeline-${exp.type}`} key={index}>
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <div className="timeline-header">
                  <span className={`timeline-badge badge-${exp.type}`}>
                    {exp.type === 'work' ? '💼 Work Experience' : '🎓 Professional Training'}
                  </span>
                  <span className="timeline-date">{exp.date}</span>
                </div>
                
                <h3 className="timeline-title text-neon">{exp.title}</h3>
                <h4 className="timeline-company">{exp.company} <span className="location-dot">•</span> {exp.location}</h4>
                
                <p className="timeline-summary">{exp.summary}</p>
                
                <div className="timeline-skills">
                  {exp.skills.map((skill, i) => (
                    <span className="exp-skill-tag" key={i}>{skill}</span>
                  ))}
                </div>

                <ul className="timeline-points">
                  {exp.points.map((point, i) => (
                    <li key={i}>
                      <strong className="point-title">{point.title}:</strong> {point.description}
                    </li>
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

