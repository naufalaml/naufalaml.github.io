import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, Target, Flame, Lightbulb, Activity } from 'lucide-react';
import TiltCard from './TiltCard';

interface Achievement {
  id: number;
  category: 'academic' | 'iot' | 'mobile' | 'research' | 'tech';
  categoryLabel: string;
  title: string;
  desc: string;
  date: string;
  icon: React.ReactNode;
  color: string;
}

export default function Achievements() {
  const [activeTab, setActiveTab] = useState<'all' | 'academic' | 'iot' | 'mobile' | 'research' | 'tech'>('all');

  const achievements: Achievement[] = [
    {
      id: 1,
      category: 'iot',
      categoryLabel: 'IoT Innovation',
      title: 'Smart Compost Maturity Monitor Prototype',
      desc: 'Pengembangan IoT Node terintegrasi sensor gas amonia (MQ-135) dan temperatur probe DS18B20 untuk monitoring proses dekomposisi pupuk secara nirkabel.',
      date: '2025',
      icon: <Flame size={16} />,
      color: '#10b981'
    },
    {
      id: 2,
      category: 'academic',
      categoryLabel: 'Academic Project',
      title: 'Virtual Mouse Interface dengan OpenCV',
      desc: 'Merancang algoritma pelacakan gestur tangan menggunakan Python dan MediaPipe untuk interaksi kursor mouse virtual tanpa perangkat keras tambahan.',
      date: '2024',
      icon: <Target size={16} />,
      color: '#6366f1'
    },
    {
      id: 3,
      category: 'mobile',
      categoryLabel: 'Mobile Dev',
      title: 'Aplikasi E-Wallet easyPay Hybrid',
      desc: 'Implementasi aplikasi keuangan berbasis hybrid menggunakan Framework7, React, dan dibungkus Apache Cordova untuk platform Android.',
      date: '2024',
      icon: <Activity size={16} />,
      color: '#8B5CF6'
    },
    {
      id: 4,
      category: 'research',
      categoryLabel: 'Research Activity',
      title: 'Smart Irrigation Automation Research Assistant',
      desc: 'Penelitian sistem pengairan otomatis berbasis kelembaban tanah menggunakan mikrokontroler untuk optimalisasi pemakaian air lahan pertanian.',
      date: '2024',
      icon: <Lightbulb size={16} />,
      color: '#06B6D4'
    },
    {
      id: 5,
      category: 'tech',
      categoryLabel: 'Technical Achievement',
      title: 'Sertifikasi IT Support Google Terverifikasi',
      desc: 'Penyelesaian kursus profesional mencakup administrasi jaringan, troubleshooting, sistem operasi server, dan keamanan informasi.',
      date: '2023',
      icon: <Award size={16} />,
      color: '#f97316'
    }
  ];

  const filtered = activeTab === 'all' 
    ? achievements 
    : achievements.filter(item => item.category === activeTab);

  return (
    <section id="achievements" className="py-36 relative overflow-hidden bg-[#05050A] border-t border-slate-950">
      <div className="container space-y-16">
        
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <h2 className="section-title">Pencapaian & Inovasi</h2>
          <p className="text-slate-400 text-sm leading-relaxed">
            Rangkuman milestone riset teknologi, pembuatan aplikasi mobile, sistem tertanam IoT, serta penghargaan akademis yang telah saya raih.
          </p>
        </div>

        {/* Categories Tab Selector */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {[
            { id: 'all', label: 'Semua Milestone' },
            { id: 'iot', label: 'IoT Innovations' },
            { id: 'mobile', label: 'Mobile Dev' },
            { id: 'academic', label: 'Academic' },
            { id: 'research', label: 'Research' },
            { id: 'tech', label: 'Technical' }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-4 py-2 rounded-lg text-xs font-heading font-bold border transition-all duration-200 uppercase tracking-wider ${
                activeTab === tab.id
                  ? 'bg-indigo-600/10 border-indigo-500/40 text-indigo-400'
                  : 'bg-[#0E0E17] border-slate-900 text-slate-400 hover:text-slate-200'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Flat Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="wait">
            {filtered.map((item, idx) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                className="h-full"
              >
                <TiltCard className="glass-panel p-8 border-slate-900 bg-[#0E0E17] flex flex-col justify-between h-full group">
                  <div className="space-y-5">
                    {/* Header Info */}
                    <div className="flex justify-between items-center">
                      <div 
                        className="w-9 h-9 rounded-lg bg-slate-900 flex items-center justify-center border border-slate-800"
                        style={{ color: item.color }}
                      >
                        {item.icon}
                      </div>
                      <span className="text-[9px] font-mono text-slate-500">{item.date}</span>
                    </div>

                    {/* Content */}
                    <div className="space-y-2">
                      <h3 className="text-sm sm:text-base font-bold font-heading text-white">
                        {item.title}
                      </h3>
                      <p className="text-xs text-slate-400 leading-relaxed font-body">
                        {item.desc}
                      </p>
                    </div>
                  </div>

                  <div className="flex justify-between items-center border-t border-slate-900/60 pt-4 mt-6 text-[8px] font-mono text-slate-600 uppercase tracking-wider">
                    <span>{item.categoryLabel}</span>
                    <span>milestone_0{item.id}</span>
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
