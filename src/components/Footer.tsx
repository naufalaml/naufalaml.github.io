export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-logo flex items-center gap-2">
          <img src="/logo.png" alt="AN Logo" className="w-5 h-5 object-contain" />
          <div className="flex items-center">
            <span className="logo-bracket">&#123;</span>
            <span className="logo-name">naufal.dev</span>
            <span className="logo-bracket">&#125;</span>
          </div>
        </div>
        <div className="footer-copy">
          &copy; {new Date().getFullYear()} Achmad Naufal. All rights reserved.
        </div>
        <div className="footer-socials">
          <a href="https://github.com/naufalaml" target="_blank" rel="noreferrer" className="social-link">GitHub</a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="social-link">LinkedIn</a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer" className="social-link">Instagram</a>
        </div>
      </div>
    </footer>
  );
}
