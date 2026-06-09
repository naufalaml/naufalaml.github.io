import { motion } from 'framer-motion';
import { Shield } from 'lucide-react';
import TiltCard from './TiltCard';

interface Certificate {
  id: number;
  title: string;
  issuer: string;
  date: string;
  credentialId: string;
}

export default function Certificates() {
  const certificates: Certificate[] = [
    {
      id: 1,
      title: 'Google IT Support Professional Certificate',
      issuer: 'Google / Coursera',
      date: '2023',
      credentialId: 'COUR-IT-SUPPORT-9921'
    },
    {
      id: 2,
      title: 'React Native & Advanced React Certification',
      issuer: 'Meta Career Academy',
      date: '2024',
      credentialId: 'META-REACT-ADV-8824'
    },
    {
      id: 3,
      title: 'Internet of Things (IoT) Fundamentals',
      issuer: 'Cisco Networking Academy',
      date: '2024',
      credentialId: 'CISCO-IOT-FUND-7742'
    },
    {
      id: 4,
      title: 'Database Programming with SQL',
      issuer: 'Oracle Academy',
      date: '2023',
      credentialId: 'ORACLE-SQL-PROG-6612'
    }
  ];

  return (
    <section id="certificates" className="py-36 relative overflow-hidden bg-[#05050A] border-t border-slate-950">
      <div className="container space-y-16">
        
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <h2 className="section-title">Sertifikasi & Kredensial</h2>
          <p className="text-slate-400 text-sm leading-relaxed">
            Kredensial profesional terverifikasi yang membuktikan kompetensi teknis saya dalam teknologi rekayasa perangkat lunak, database, dan IoT.
          </p>
        </div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {certificates.map((cert, idx) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
            >
              <TiltCard className="glass-panel p-8 border-slate-900 bg-[#0E0E17] flex flex-col justify-between h-full group">
                <div className="space-y-4 w-full">
                  <div className="flex justify-between items-start">
                    <div className="w-10 h-10 rounded-lg bg-slate-900 flex items-center justify-center text-indigo-400 border border-slate-800 shadow-sm">
                      <Shield size={18} />
                    </div>
                    <span className="px-2.5 py-0.5 rounded-full text-[9px] font-mono font-bold bg-slate-950 text-slate-500 border border-slate-900">
                      {cert.date}
                    </span>
                  </div>

                  <div className="space-y-1 pt-2">
                    <h3 className="text-base font-bold font-heading text-white leading-tight">
                      {cert.title}
                    </h3>
                    <p className="text-xs text-indigo-400 font-semibold font-heading tracking-wide uppercase">
                      {cert.issuer}
                    </p>
                  </div>
                </div>

                <div className="border-t border-slate-900/60 pt-4 mt-6 text-[9.5px] font-mono text-slate-500">
                  ID Kredensial: {cert.credentialId}
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
