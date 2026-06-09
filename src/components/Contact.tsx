import React, { useState } from 'react';
import { Mail, Phone, MapPin, ArrowRight, Check } from 'lucide-react';
import confetti from 'canvas-confetti';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validate = (): boolean => {
    const tempErrors: FormErrors = {};
    if (!formData.name.trim()) tempErrors.name = 'Nama lengkap wajib diisi.';
    if (!formData.email.trim()) {
      tempErrors.email = 'Alamat email wajib diisi.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = 'Format email tidak valid.';
    }
    if (!formData.subject.trim()) tempErrors.subject = 'Subjek pesan wajib diisi.';
    if (!formData.message.trim()) {
      tempErrors.message = 'Pesan tidak boleh kosong.';
    } else if (formData.message.length < 10) {
      tempErrors.message = 'Pesan minimal terdiri dari 10 karakter.';
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      
      confetti({
        particleCount: 120,
        spread: 60,
        origin: { y: 0.65 },
        colors: ['#6c3dff', '#00f5ff', '#8b5fff']
      });

      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });

      setTimeout(() => {
        setIsSuccess(false);
      }, 5000);
    }, 1200);
  };

  return (
    <section id="contact" className="contact">
      <div className="section-inner">
        <span className="section-label">Contact</span>
        <h2 className="section-title">
          Hubungi Saya & <br />
          <span className="gradient-text">Mari Berkolaborasi</span>
        </h2>

        <div className="contact-grid">
          {/* Left Column: Contact details & intro */}
          <div>
            <p className="contact-intro">
              Hubungi saya untuk mendiskusikan projek IoT cerdas, pengembangan sistem backend/frontend, integrasi mobile wallet hibrida, atau sekadar berdiskusi teknologi.
            </p>

            <div className="contact-list">
              <a href="mailto:naufal@naufal.dev" className="contact-item">
                <div className="contact-icon text-[#00f5ff]"><Mail size={20} /></div>
                <div>
                  <div className="contact-label">Email</div>
                  <div className="contact-value">naufal@naufal.dev</div>
                </div>
                <ArrowRight className="contact-arrow" size={16} />
              </a>

              <a href="https://wa.me/6281234567890" target="_blank" rel="noreferrer" className="contact-item">
                <div className="contact-icon text-[#6c3dff]"><Phone size={20} /></div>
                <div>
                  <div className="contact-label">WhatsApp</div>
                  <div className="contact-value">+62 812-3456-7890</div>
                </div>
                <ArrowRight className="contact-arrow" size={16} />
              </a>

              <div className="contact-item cursor-default">
                <div className="contact-icon text-[#b89eff]"><MapPin size={20} /></div>
                <div>
                  <div className="contact-label">Location</div>
                  <div className="contact-value">Jakarta, Indonesia</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact form */}
          <div>
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label>Nama Lengkap</label>
                <input 
                  type="text" 
                  name="name" 
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Nama Anda"
                  required
                />
                {errors.name && <span className="text-xs text-red-500">{errors.name}</span>}
              </div>

              <div className="form-group">
                <label>Alamat Email</label>
                <input 
                  type="email" 
                  name="email" 
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="email@domain.com"
                  required
                />
                {errors.email && <span className="text-xs text-red-500">{errors.email}</span>}
              </div>

              <div className="form-group">
                <label>Subjek</label>
                <input 
                  type="text" 
                  name="subject" 
                  value={formData.subject}
                  onChange={handleInputChange}
                  placeholder="Topik Pembicaraan"
                  required
                />
                {errors.subject && <span className="text-xs text-red-500">{errors.subject}</span>}
              </div>

              <div className="form-group">
                <label>Pesan</label>
                <textarea 
                  name="message" 
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tulis pesan lengkap..."
                  required
                />
                {errors.message && <span className="text-xs text-red-500">{errors.message}</span>}
              </div>

              <button 
                type="submit" 
                disabled={isSubmitting}
                className={`submit-btn ${isSuccess ? 'sent' : ''}`}
              >
                {isSubmitting ? (
                  <span>Mengirim...</span>
                ) : isSuccess ? (
                  <>
                    <span>Pesan Terkirim</span>
                    <Check size={16} />
                  </>
                ) : (
                  <>
                    <span>Kirim Pesan</span>
                    <ArrowRight size={16} />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
