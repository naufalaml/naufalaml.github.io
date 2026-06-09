import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, Cpu, Smartphone } from 'lucide-react';

interface TimelineNode {
  id: number;
  year: string;
  title: string;
  institution: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  tech: string[];
}

export default function Experience() {
  const timelineNodes: TimelineNode[] = [
    {
      id: 1,
      year: '2024 - Sekarang',
      title: 'Studi S1 Informatika',
      institution: 'Universitas Nusantara',
      description: 'Mendalami algoritma kompleks, rekayasa perangkat lunak, sistem terdistribusi, dan kecerdasan buatan. Terlibat aktif dalam riset teknologi terapan dengan indeks IPK berjalan 3.85.',
      icon: <GraduationCap size={16} />,
      color: '#6366f1',
      tech: ['Struktur Data', 'Algoritma', 'Sistem Cerdas', 'Software Engineering']
    },
    {
      id: 2,
      year: '2025',
      title: 'Lead Developer - IoT Smart Compost',
      institution: 'Projek Kolaborasi Riset',
      description: 'Memimpin riset perangkat IoT untuk mendeteksi dekomposisi pupuk organik kandang. Merancang sirkuit sensor gas amonia MQ-135, temperatur probe DS18B20, serta integrasi dashboard telemetri REST API.',
      icon: <Cpu size={16} />,
      color: '#10b981',
      tech: ['ESP32', 'C++ / Arduino', 'Sensors Telemetry', 'REST API']
    },
    {
      id: 3,
      year: '2024',
      title: 'Mobile App Developer Intern',
      institution: 'Creata Tech Agency',
      description: 'Mengembangkan antarmuka fungsional transaksi keuangan digital. Mengintegrasikan API perbankan ke kerangka hybrid Framework7, dan membungkus bundle installer APK via Apache Cordova.',
      icon: <Smartphone size={16} />,
      color: '#8B5CF6',
      tech: ['Framework7', 'Apache Cordova', 'React.js', 'Finance API']
    },
    {
      id: 4,
      year: '2024',
      title: 'Asisten Riset Smart Irrigation Automation',
      institution: 'Laboratorium Riset Terpadu',
      description: 'Merancang sistem irigasi otomatis berbasis sensor kelembaban tanah (soil moisture probe) menggunakan relay dan mikrokontroler untuk optimalisasi penggunaan air di sektor pertanian presisi.',
      icon: <Cpu size={16} />,
      color: '#06B6D4',
      tech: ['ESP8266', 'Sensors Calibration', 'Relay Control', 'WiFi Client']
    },
    {
      id: 5,
      year: '2023',
      title: 'Sertifikasi IT Support Google Terverifikasi',
      institution: 'Google Professional Credentials',
      description: 'Menyelesaikan modul kompetensi mencakup administrasi sistem operasi server Linux/Windows, troubleshooting jaringan, keamanan siber, dan manajemen infrastruktur IT skala menengah.',
      icon: <Award size={16} />,
      color: '#f97316',
      tech: ['Linux Server', 'Network Troubleshooting', 'Cyber Security', 'IT Management']
    }
  ];

  return (
    <section id="experience" className="py-36 relative overflow-hidden bg-[#05050A] border-t border-slate-950">
      <div className="container space-y-16">
        
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <h2 className="section-title">Pengalaman & Perjalanan</h2>
          <p className="text-slate-400 text-sm leading-relaxed">
            Perjalanan akademis, magang profesional, proyek laboratorium Internet of Things (IoT), riset sistem cerdas, serta pencapaian sertifikasi terapan.
          </p>
        </div>

        <div className="relative max-w-3xl mx-auto pl-8 sm:pl-12 mt-16">
          {/* Static Timeline Line */}
          <div className="absolute left-4 sm:left-6 top-2 bottom-2 w-[1px] bg-slate-900" />
          
          <div className="space-y-16">
            {timelineNodes.map((node, idx) => (
              <div key={node.id} className="relative flex flex-col items-start">
                
                {/* Timeline dot */}
                <div 
                  className="absolute left-[-22px] sm:left-[-30px] top-1 w-5 h-5 rounded-md bg-slate-950 border flex items-center justify-center shadow-sm"
                  style={{ borderColor: 'rgba(255,255,255,0.08)', color: node.color }}
                >
                  {node.icon}
                </div>

                {/* Raw typography details */}
                <motion.div 
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: idx * 0.05 }}
                  className="space-y-3 pl-4 sm:pl-6 w-full"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span 
                      className="px-2 py-0.5 rounded text-[9px] font-mono font-bold tracking-wider bg-slate-900 border"
                      style={{ borderColor: 'rgba(255,255,255,0.06)', color: node.color }}
                    >
                      {node.year}
                    </span>
                    <span className="text-[9px] font-mono text-slate-600 uppercase">
                      log_entry: 0{node.id}
                    </span>
                  </div>

                  <div className="space-y-1">
                    <h3 className="text-base sm:text-lg font-bold font-heading text-white">
                      {node.title}
                    </h3>
                    <p className="text-xs text-indigo-400 font-semibold tracking-wider uppercase font-heading">
                      {node.institution}
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-body max-w-2xl">
                    {node.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {node.tech.map((t, tIdx) => (
                      <span 
                        key={tIdx} 
                        className="px-2 py-0.5 rounded text-[9px] font-mono bg-slate-950 border border-slate-900 text-slate-500"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </motion.div>

              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
