import { useState, useEffect } from 'react';
import { ArrowUpRight } from 'lucide-react';

export default function Hero() {
  const [text, setText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const words = [
    'Full Stack Developer',
    'IoT Engineer',
    'Mobile Developer',
    'UI/UX Enthusiast',
    'Technology Innovator'
  ];
  const period = 2000;
  const [delta, setDelta] = useState(100);

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => clearInterval(ticker);
  }, [text, isDeleting, delta]);

  const tick = () => {
    let i = wordIndex % words.length;
    let fullText = words[i];
    let updatedText = isDeleting 
      ? fullText.substring(0, text.length - 1) 
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(50);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setWordIndex(wordIndex + 1);
      setDelta(100);
    }
  };

  const handleScrollTo = (id: string) => {
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero">
      <div className="section-inner hero-inner">
        <div className="hero-content">
          <div className="hero-eyebrow">
            <span className="eyebrow-dot"></span>
            TERBUKA UNTUK KOLABORASI
          </div>

          <h1 className="hero-title">
            <span className="title-line1">Achmad Naufal</span><br />
            <span className="gradient-text">Amirul Hidayat</span>
          </h1>

          <div className="hero-role">
            <span className="role-prefix">I'm a </span>
            <span className="typed-text">{text}</span>
            <span className="cursor-blink">|</span>
          </div>

          <p className="hero-desc">
            Mahasiswa Informatika yang berdedikasi tinggi di bidang <span className="highlight">rekayasa perangkat lunak</span>, pengembangan <span className="highlight">aplikasi mobile</span>, dan solusi <span className="highlight">Internet of Things (IoT)</span>. Berkomitmen menciptakan teknologi inovatif bernilai tinggi.
          </p>

          <div className="hero-actions">
            <button onClick={() => handleScrollTo('projects')} className="btn-primary">
              Lihat Projek
              <ArrowUpRight size={16} />
            </button>
            <button onClick={() => handleScrollTo('contact')} className="btn-secondary">
              Hubungi Saya
            </button>
          </div>

          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-num">15+</span>
              <span className="stat-label">Projects</span>
            </div>
            <div className="stat-item">
              <span className="stat-num">8+</span>
              <span className="stat-label">IoT Prototypes</span>
            </div>
            <div className="stat-item">
              <span className="stat-num">3.85</span>
              <span className="stat-label">GPA</span>
            </div>
          </div>
        </div>

        <div className="hero-visual">
          <div className="avatar-ring outer-ring"></div>
          <div className="avatar-ring mid-ring"></div>
          <div className="avatar-card">
            <span className="avatar-initials">AN</span>
            <div className="avatar-glow"></div>
          </div>
          <div className="orbit-dot dot1"></div>
          <div className="orbit-dot dot2"></div>
          <div className="orbit-dot dot3"></div>
        </div>
      </div>
    </section>
  );
}
