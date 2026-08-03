import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Cloud } from 'react-icon-cloud';
import './App.css';

const FadeInSection = ({ children, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.8, delay: delay, ease: "easeOut" }}
  >
    {children}
  </motion.div>
);

const techStack = [
  { slug: 'python', name: 'Python' },
  { slug: 'java', name: 'Java' },
  { slug: 'html5', name: 'HTML5' },
  { slug: 'css3', name: 'CSS3' },
  { slug: 'postgresql', name: 'SQL' },
  { slug: 'dart', name: 'Dart' },
  { slug: 'c', name: 'C' },
  { slug: 'cplusplus', name: 'C++' },
  { slug: 'javascript', name: 'JavaScript' },
  { slug: 'react', name: 'React' }
];

const icons = techStack.map((tech) => (
  <a key={tech.slug} href="#" onClick={(e) => e.preventDefault()}>
    <img src={`https://cdn.simpleicons.org/${tech.slug}`} alt={tech.name} />
    {tech.name}
  </a>
));

const SkillGlobe = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
      <Cloud
        options={{
          clickToFront: 500,
          depth: 1,
          imageScale: 3.5,
          initial: [0.1, -0.1],
          outlineColour: '#0000',
          reverse: true,
          tooltip: 'native',
          tooltipDelay: 0,
          wheelZoom: false,
          imageMode: 'both',
          imagePosition: 'top',
          textHeight: 16,
          textColour: '#ffffff',
          imagePadding: 5
        }}
      >
        {icons}
      </Cloud>
    </div>
  );
};

const ProjectCard = ({ title, imageSrc, description, repoLink, demoLink, imgMaxWidth, notBordered }) => (
  <div className="project-card">
    <div className="project-image-container" style={{ maxWidth: imgMaxWidth ? imgMaxWidth : none, margin: imgMaxWidth ? '0 auto 2rem auto' : none, border: notBordered ? '45px solid rgba(0, 0, 0, 0)' : '1px solid rgba(255, 255, 255, 0.08)' }}>
      <img src={imageSrc} alt={`${title} Demo`} className="project-image" />
    </div>
    <h3 style={{ fontSize: '1.8rem', color: '#fff', marginBottom: '1rem' }}>{title}</h3>
    <p style={{ marginBottom: '2rem', color: 'var(--text-muted)' }}>{description}</p>
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
      <a href={repoLink} className="project-link" target="_blank" rel="noreferrer">View Repository</a>
      {demoLink && (
        <a href={demoLink} className="project-link" target="_blank" rel="noreferrer">View Demo on YouTube</a>
      )}
    </div>
  </div>
);

const App = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 50) {
        setActiveSection('contact');
        return;
      }

      const sections = ['home', 'skills', 'projects', 'contact'];
      let currentSection = 'home';

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) {
            currentSection = section;
          }
        }
      }
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="container">
      <nav>
        <a href="#home" className={`tab-btn ${activeSection === 'home' ? 'active' : ''}`}>Home</a>
        <a href="#skills" className={`tab-btn ${activeSection === 'skills' ? 'active' : ''}`}>Arsenal</a>
        <a href="#projects" className={`tab-btn ${activeSection === 'projects' ? 'active' : ''}`}>Projects</a>
        <a href="#contact" className={`tab-btn ${activeSection === 'contact' ? 'active' : ''}`}>Contact</a>
      </nav>

      <section id="home">
        <FadeInSection>
          <h1 className="main-title">Lillie Redmond</h1>
          <div className="subtitle">Computer Science Portfolio</div>
        </FadeInSection>

        <FadeInSection delay={0.1}>
          <p className="overview-text">
            Ambitious and eager computer science student with exceptional responsibility and organizational skills.
            Seeking to expand upon computer expertise in an immersive environment. Able to work well under pressure
            and adapt to new situations. Determined to grow as a computer science specialist while demonstrating
            initiative and striving for excellence.
          </p>
        </FadeInSection>

        <div className="split-grid">
          <FadeInSection delay={0.2}>
            <div className="content-block">
              <h2 className="section-title">Experience</h2>

              <div className="timeline-item">
                <h3>AI Data Specialist | DataAnnotation</h3>
                <div className="date-location">June 2025 - Present | Remote</div>
                <ul><li>Train AI models by crafting high-quality prompts, analyzing model responses, and identifying flaws.</li></ul>
              </div>

              <div className="timeline-item">
                <h3>Teaching Assistant | Project STEM</h3>
                <div className="date-location">July 2024 - Present | Remote</div>
                <ul><li>Provide assistance to teachers and tutor high school students in Python and AP Computer Science courses.</li></ul>
              </div>

              <div className="timeline-item">
                <h3>Coding Camp Counselor | CATA</h3>
                <div className="date-location">June 2022 | Monroe, NC</div>
                <ul><li>Directed coding activities for middle school students including building websites and drone programming.</li></ul>
              </div>
            </div>
          </FadeInSection>

          <FadeInSection delay={0.3}>
            <div className="content-block">
              <h2 className="section-title">Education</h2>
              <div style={{ marginBottom: '3.5rem' }}>
                <h3>University of Southern California</h3>
                <div className="date-location">Expected May 2027 | Los Angeles, CA</div>
                <ul><li>Senior Computer Science Major</li></ul>
              </div>

              <h2 className="section-title">Certifications</h2>
              <ul>
                <li>TestOut Network Pro</li>
                <li>Cyber Crime Technology CTE Certification</li>
                <li>IT Systems Security CTE Certification</li>
                <li>Intro to Programming Using Python Microsoft Certification</li>
              </ul>
            </div>
          </FadeInSection>
        </div>
      </section>

      <section id="skills">
        <FadeInSection>
          <h2 className="huge-section-title">Technical Arsenal</h2>
          <div className="subtitle">Primary Languages & Frameworks</div>
        </FadeInSection>

        <FadeInSection delay={0.2}>
          <div style={{ width: '100%', maxWidth: '900px', margin: '0 auto', padding: '4rem 0' }}>
            <SkillGlobe />
          </div>
        </FadeInSection>
      </section>

      <section id="projects">
        <FadeInSection>
          <h2 className="huge-section-title">Featured Work</h2>
          <div className="subtitle">Code & Implementations</div>
        </FadeInSection>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', width: '100%' }}>
          <FadeInSection delay={0.1}>
            <ProjectCard
              title="ChatPet"
              imageSrc="chatpet_demo.gif"
              description="Developed as a collaborative group project for a software 
                        engineering course at USC, ChatPet is an AI-powered digital companion app that simulates the 
                        experience of raising a virtual pet. Through natural language conversations and caretaking 
                        actions like feeding and resting, users maintain the pet's happiness, hunger, and energy 
                        meters. Consistent interaction is rewarded with the pet's visual evolution and the development 
                        of a unique personality, fostering empathy, responsibility, and a personalized user experience."
              repoLink="https://github.com/xl0u1sx/Project-ChatPet"
              demoLink="https://youtube.com/shorts/2HprmH-4oys?feature=shared"
              imgMaxWidth="300px"
            />
          </FadeInSection>

          <hr className="project-separator" />

          <FadeInSection delay={0.2}>
            <ProjectCard
              title="mabot"
              imageSrc="mabot_demo.gif"
              description="An older, prefixed-command-style Discord bot originally created during the COVID-19 lockdown to exercise my Python skills. With centralized server management and user engagement in mind, it features a variety of commands for moderation, entertainment, and utility purposes, benefiting server administrators and general members alike."
              repoLink="https://github.com/inexaura/mabot"
              imgMaxWidth="550px"
            />
          </FadeInSection>

          <hr className="project-separator" />

          <FadeInSection delay={0.2}>
            <ProjectCard
              title="Unfollowed"
              imageSrc="unfollowed_usage.png"
              description="Not wanting to pay or spend hours cross-referencing to figure out who was cluttering my following while already having been removed from theirs, I created a simple utility program to compare followers and following lists for a quick and easy answer."
              repoLink="https://github.com/inexaura/unfollowed"
              imgMaxWidth="520px"
            />
          </FadeInSection>

          <hr className="project-separator" />

          <FadeInSection delay={0.2}>
            <ProjectCard
              title="LR-Portfolio"
              imageSrc="L_icon.png"
              description="My passion for web development and design inspired me to create this very website. Brought to life with JavaScript libraries like React and Motion alongside good old CSS, it acts as a small creative outlet and interactive showcase of my work."
              repoLink="https://github.com/inexaura/LR-Portfolio"
              imgMaxWidth="300px"
              notBordered={true}
            />

          </FadeInSection>
        </div>
      </section>

      <section id="contact">
        <FadeInSection>
          <h2 className="huge-section-title">Network</h2>
        </FadeInSection>

        <FadeInSection delay={0.1}>
          <motion.div
            className="profile-pic-container"
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <img src="LR_Headshot.png" alt="Lillie Redmond" className="profile-pic" />
          </motion.div>
        </FadeInSection>

        <FadeInSection delay={0.2}>
          <div className="contact-grid">
            <div className="contact-item">
              <div className="contact-label">Email</div>
              <a href="mailto:jlillieredmond@gmail.com">jlillieredmond@gmail.com <span className="link-arrow">&#x2197;&#xFE0E;</span></a>
            </div>
            <div className="contact-item">
              <div className="contact-label">GitHub</div>
              <a href="https://github.com/inexaura" target="_blank" rel="noreferrer">/inexaura <span className="link-arrow">&#x2197;&#xFE0E;</span></a>
            </div>
            <div className="contact-item">
              <div className="contact-label">LinkedIn</div>
              <a href="https://www.linkedin.com/in/lillie-redmond" target="_blank" rel="noreferrer">/in/lillie-redmond <span className="link-arrow">&#x2197;&#xFE0E;</span></a>
            </div>
            <div className="contact-item">
              <div className="contact-label">Photography</div>
              <a href="https://instagram.com/_stargazerlilies_" target="_blank" rel="noreferrer">@_stargazerlilies_ <span className="link-arrow">&#x2197;&#xFE0E;</span></a>
            </div>
          </div>
        </FadeInSection>
      </section>
    </div>
  );
};

export default App;