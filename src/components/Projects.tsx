import { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Github } from './SocialIcons';

interface Project {
  id: number;
  year: string;
  status: string;
  statusColor: string;
  logoText: string;
  logoBg: string;
  category: string;
  categoryLabel: string;
  title: string;
  description: string;
  tags: string[];
  liveUrl: string;
  githubUrl: string;
}

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<'all' | 'iot' | 'mobile' | 'ai'>('all');

  const projects: Project[] = [
    {
      id: 1,
      year: '2024',
      status: 'PRODUKSI',
      statusColor: '#10b981',
      logoText: 'SC',
      logoBg: 'linear-gradient(135deg, #00f5ff, #6c3dff)',
      category: 'iot',
      categoryLabel: 'IoT & Web Platform',
      title: 'Sistem Pengomposan Pintar',
      description: 'Sistem monitoring pengomposan limbah organik berbasis Internet of Things dengan sensor ESP32, integrasi REST API Laravel, dan visualisasi web dasbor.',
      tags: ['ESP32', 'Laravel API', 'React.js', 'Telemetry'],
      liveUrl: 'https://demo.compost-monitor.id',
      githubUrl: 'https://github.com/naufalaml'
    },
    {
      id: 2,
      year: '2023',
      status: 'STABLE',
      statusColor: '#00f5ff',
      logoText: 'EP',
      logoBg: 'linear-gradient(135deg, #8b5fff, #b89eff)',
      category: 'mobile',
      categoryLabel: 'Mobile App',
      title: 'easyPay Mobile App',
      description: 'Aplikasi dompet digital berbasis seluler hybrid dengan navigasi cepat, integrasi QR code scanner, serta modul simulasi pembayaran.',
      tags: ['Framework7', 'Apache Cordova', 'JavaScript', 'Mobile Wallet'],
      liveUrl: 'https://demo.easypay.id',
      githubUrl: 'https://github.com/naufalaml'
    },
    {
      id: 3,
      year: '2024',
      status: 'RISET',
      statusColor: '#b89eff',
      logoText: 'VM',
      logoBg: 'linear-gradient(135deg, #00f5ff, #00c4cc)',
      category: 'ai',
      categoryLabel: 'Computer Vision',
      title: 'Virtual Mouse Hand Gesture',
      description: 'Navigasi kursor layar komputer tanpa kontak fisik memanfaatkan webcam, pustaka OpenCV Python, dan pelacakan koordinat tangan MediaPipe.',
      tags: ['Python', 'OpenCV', 'MediaPipe', 'Otomasi'],
      liveUrl: 'https://github.com/naufalaml',
      githubUrl: 'https://github.com/naufalaml'
    },
    {
      id: 4,
      year: '2023',
      status: 'PROYEK',
      statusColor: '#6b7280',
      logoText: 'SR',
      logoBg: 'linear-gradient(135deg, #6c3dff, #8b5fff)',
      category: 'ai',
      categoryLabel: 'Machine Learning',
      title: 'Sentiment Review Classifier',
      description: 'Klasifikasi ulasan pembeli di marketplace e-commerce menjadi ulasan positif/negatif menggunakan text preprocessing TF-IDF dan algoritma Naive Bayes.',
      tags: ['Python', 'Naive Bayes', 'NLP', 'Data Science'],
      liveUrl: 'https://github.com/naufalaml',
      githubUrl: 'https://github.com/naufalaml'
    }
  ];

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(p => p.category === activeFilter);

  return (
    <section id="projects" className="projects">
      <div className="section-inner">
        <span className="section-label">Projects</span>
        <h2 className="section-title">
          Galeri Projek & <br />
          <span className="gradient-text">Studi Kasus Teknis</span>
        </h2>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {[
            { id: 'all', label: 'Semua Projek' },
            { id: 'iot', label: 'IoT & Hardware' },
            { id: 'mobile', label: 'Mobile App' },
            { id: 'ai', label: 'AI & Data Science' }
          ].map(btn => (
            <button
              key={btn.id}
              onClick={() => setActiveFilter(btn.id as any)}
              className={`px-4 py-2 rounded-lg text-xs font-semibold font-heading border transition-all duration-200 uppercase tracking-wider ${
                activeFilter === btn.id
                  ? 'bg-[#6c3dff1a] border-[#6c3dff80] text-[#00f5ff]'
                  : 'bg-[#1e233366] border-[#6c3dff1a] text-[#6b7280] hover:text-[#f0eeff] hover:border-[#6c3dff33]'
              }`}
            >
              {btn.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <div key={project.id} className="project-card">
              {/* Card Hover Glow Overlay */}
              <div 
                className="card-glow" 
                style={{
                  background: `radial-gradient(circle at 50% 0%, ${project.statusColor}22 0%, transparent 70%)`
                }}
              />

              {/* Card Header */}
              <div className="card-header">
                <span className="card-year">{project.year}</span>
                <div 
                  className="card-status"
                  style={{ 
                    borderColor: `${project.statusColor}33`, 
                    color: project.statusColor 
                  }}
                >
                  <span 
                    className="status-dot"
                    style={{ 
                      backgroundColor: project.statusColor,
                      boxShadow: `0 0 8px ${project.statusColor}`
                    }}
                  />
                  {project.status}
                </div>
              </div>

              {/* Card Body */}
              <div className="card-body">
                <div className="flex items-center gap-4 mb-4">
                  <div 
                    className="card-logo"
                    style={{ background: project.logoBg }}
                  >
                    {project.logoText}
                  </div>
                  <div className="card-meta">
                    <span className="card-subtitle">{project.categoryLabel}</span>
                    <h3 className="card-title">{project.title}</h3>
                  </div>
                </div>

                <p className="card-desc">{project.description}</p>

                {/* Tech Tags */}
                <div className="card-tags">
                  {project.tags.map((tag, tIdx) => (
                    <span 
                      key={tIdx} 
                      className="card-tag"
                      style={{
                        borderColor: 'rgba(108, 61, 255, 0.15)',
                        color: '#b89eff',
                        background: 'rgba(108, 61, 255, 0.05)'
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Links */}
                <div className="card-links">
                  <a 
                    href={project.liveUrl} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="link-btn primary-link"
                  >
                    Demo
                    <ArrowUpRight size={14} />
                  </a>
                  <a 
                    href={project.githubUrl} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="link-btn ghost-link"
                  >
                    <Github size={14} />
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
