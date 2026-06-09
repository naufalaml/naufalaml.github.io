import { Layers, Smartphone, Cpu, Brain } from 'lucide-react';

export default function About() {
  const cards = [
    {
      icon: <Cpu className="text-[#00f5ff]" size={28} />,
      title: 'Embedded & IoT Systems',
      desc: 'Integrasi mikrokontroler ESP32, sensor telemetri, protokol komunikasi nirkabel, dan otomasi sirkuit cerdas.'
    },
    {
      icon: <Layers className="text-[#6c3dff]" size={28} />,
      title: 'Full Stack Development',
      desc: 'Arsitektur database MySQL, API Laravel, serta pengembangan antarmuka visual responsif React/TS.'
    },
    {
      icon: <Smartphone className="text-[#b89eff]" size={28} />,
      title: 'Mobile Architecture',
      desc: 'Pembuatan aplikasi seluler hibrida Framework7, Apache Cordova, dan native Java untuk transaksi digital.'
    },
    {
      icon: <Brain className="text-[#00f5ff]" size={28} />,
      title: 'AI & Computer Vision',
      desc: 'Pengolahan citra digital OpenCV, pelacakan gesture MediaPipe, dan pemanfaatan model Naive Bayes.'
    }
  ];

  return (
    <section id="about" className="about">
      <div className="section-inner">
        <span className="section-label">About Me</span>
        <h2 className="section-title">
          Kenali Lebih Dekat <br />
          <span className="gradient-text">Fokus & Latar Belakang</span>
        </h2>

        <div className="about-grid">
          {/* Left Column: Biography text */}
          <div className="about-text">
            <p>
              Halo! Saya <strong>Achmad Naufal Amirul Hidayat</strong>, mahasiswa Informatika yang berdedikasi tinggi dalam mengeksplorasi teknologi rekayasa perangkat lunak, Internet of Things (IoT), dan pengembangan aplikasi mobile.
            </p>
            <p>
              Tujuan saya adalah menciptakan produk teknologi cerdas yang mampu menghubungkan perangkat keras mikrokontroler dengan aplikasi web atau ponsel pintar guna mempermudah kehidupan sehari-hari dan transaksi digital.
            </p>
            <p>
              Saya senang memecahkan masalah kompleks, merancang basis data yang terstruktur, serta menulis kode program yang bersih, modular, dan mudah dipelihara.
            </p>
            
            <div className="about-tags">
              <span className="tag">#FullStack</span>
              <span className="tag">#IoTDeveloper</span>
              <span className="tag">#MobileEngineer</span>
              <span className="tag">#InformaticsStudent</span>
            </div>
          </div>

          {/* Right Column: Cards */}
          <div className="about-cards">
            {cards.map((card, idx) => (
              <div key={idx} className="about-card">
                <div className="card-shine"></div>
                <div className="card-icon">{card.icon}</div>
                <h4>{card.title}</h4>
                <p>{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
