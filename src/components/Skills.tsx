import { useEffect, useState } from 'react';
import { Code, Server, Smartphone, Cpu, Brain, Layers } from 'lucide-react';

export default function Skills() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimate(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const progressSkills = [
    { name: 'Internet of Things (IoT)', pct: 92, color: 'var(--cyan)' },
    { name: 'Full Stack Development', pct: 90, color: 'var(--violet)' },
    { name: 'Frontend Web Development', pct: 90, color: 'var(--cyan)' },
    { name: 'Mobile Application Development', pct: 85, color: 'var(--violet)' },
    { name: 'AI & Data Intelligence', pct: 80, color: 'var(--cyan)' }
  ];

  const techCloud = [
    { name: 'React.js', icon: <Code className="tech-icon text-[#00f5ff]" /> },
    { name: 'TypeScript', icon: <Code className="tech-icon text-[#b89eff]" /> },
    { name: 'PHP / Laravel', icon: <Server className="tech-icon text-[#00f5ff]" /> },
    { name: 'MySQL Database', icon: <Server className="tech-icon text-[#b89eff]" /> },
    { name: 'Android SDK', icon: <Smartphone className="tech-icon text-[#00f5ff]" /> },
    { name: 'Java Programming', icon: <Smartphone className="tech-icon text-[#b89eff]" /> },
    { name: 'ESP32 / Arduino', icon: <Cpu className="tech-icon text-[#00f5ff]" /> },
    { name: 'Python Coding', icon: <Brain className="tech-icon text-[#b89eff]" /> },
    { name: 'OpenCV Vision', icon: <Brain className="tech-icon text-[#00f5ff]" /> },
    { name: 'MediaPipe Mesh', icon: <Brain className="tech-icon text-[#b89eff]" /> },
    { name: 'Apache Cordova', icon: <Layers className="tech-icon text-[#00f5ff]" /> },
    { name: 'Framework7 Mobile', icon: <Layers className="tech-icon text-[#b89eff]" /> }
  ];

  return (
    <section id="skills" className="skills">
      <div className="section-inner">
        <span className="section-label">Skills</span>
        <h2 className="section-title">
          Matriks Keahlian & <br />
          <span className="gradient-text">Teknologi Pendukung</span>
        </h2>

        <div className="skills-grid visible">
          {/* Left Column: Progress Bars */}
          <div className="skill-bars">
            {progressSkills.map((skill, idx) => (
              <div key={idx} className="skill-bar-item">
                <div className="skill-bar-header">
                  <span className="skill-name">{skill.name}</span>
                  <span className="skill-pct">{skill.pct}%</span>
                </div>
                <div className="skill-track">
                  <div 
                    className="skill-fill" 
                    style={{ 
                      width: animate ? `${skill.pct}%` : '0%', 
                      backgroundColor: skill.color,
                      color: skill.color
                    }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Right Column: Tech Cloud */}
          <div className="tech-cloud">
            <h3 className="tech-title">Tools & Frameworks</h3>
            <div className="tech-grid">
              {techCloud.map((tech, idx) => (
                <div key={idx} className="tech-pill">
                  {tech.icon}
                  <span>{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
