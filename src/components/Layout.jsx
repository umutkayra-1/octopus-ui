import { Link, useLocation } from 'react-router-dom'
import { Github, Bot, Package, Globe } from 'lucide-react'
import { useLang } from '../i18n'

export default function Layout({ children }) {
  const { pathname } = useLocation()
  const { lang, toggle, t } = useLang()

  return (
    <div className="oui-root">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Playfair+Display:ital,wght@0,400;0,500;0,600;1,400&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        .oui-root {
          --navy: #0F2E5C;
          --navy-deep: #091D3A;
          --cyan: #00B4D8;
          --cyan-glow: rgba(0, 180, 216, 0.15);
          --orange: #FF6B35;
          --offwhite: #F8F9FA;
          --bg: #070B14;
          --bg-surface: rgba(15, 46, 92, 0.25);
          --bg-card: rgba(15, 46, 92, 0.2);
          --bg-card-hover: rgba(15, 46, 92, 0.35);
          --bg-glass: rgba(15, 46, 92, 0.12);
          --border: rgba(0, 180, 216, 0.08);
          --border-hover: rgba(0, 180, 216, 0.2);
          --text-primary: #F0F4F8;
          --text-secondary: rgba(240, 244, 248, 0.65);
          --text-muted: rgba(240, 244, 248, 0.35);
          --glow-sm: 0 0 20px rgba(0, 180, 216, 0.08);
          --glow-md: 0 0 40px rgba(0, 180, 216, 0.1);
          min-height: 100vh;
          background: var(--bg);
          color: var(--text-primary);
          font-family: 'Inter', -apple-system, sans-serif;
          font-size: 15px;
          line-height: 1.6;
          -webkit-font-smoothing: antialiased;
          position: relative;
          overflow-x: hidden;
        }

        .oui-root::before {
          content: '';
          position: fixed; top: 0; left: 0; right: 0; bottom: 0;
          background:
            radial-gradient(ellipse 80% 60% at 50% -10%, rgba(15, 46, 92, 0.5) 0%, transparent 70%),
            radial-gradient(ellipse 40% 40% at 80% 20%, rgba(0, 180, 216, 0.06) 0%, transparent 60%),
            radial-gradient(ellipse 40% 40% at 10% 80%, rgba(0, 180, 216, 0.04) 0%, transparent 60%);
          pointer-events: none; z-index: 0;
        }

        .oui-root > * { position: relative; z-index: 1; }

        .oui-header {
          position: sticky; top: 0; z-index: 60;
          background: rgba(7, 11, 20, 0.7);
          backdrop-filter: blur(24px) saturate(1.4);
          border-bottom: 1px solid rgba(0, 180, 216, 0.06);
        }
        .oui-header-in {
          max-width: 1200px; margin: 0 auto;
          height: 72px; padding: 0 32px;
          display: flex; align-items: center; gap: 32px;
        }
        .oui-brand {
          display: flex; align-items: center; gap: 12px;
          text-decoration: none; color: var(--text-primary);
          font-family: 'Playfair Display', serif;
          font-size: 21px; font-weight: 500; letter-spacing: -0.3px;
        }
        .oui-brand img {
          height: 34px; width: auto;
          filter: drop-shadow(0 0 12px rgba(0, 180, 216, 0.3));
        }
        .oui-brand-dot { color: var(--cyan); }
        .oui-nav { margin-left: auto; display: flex; align-items: center; gap: 6px; }
        .oui-navlink {
          display: flex; align-items: center; gap: 7px;
          padding: 8px 16px; border-radius: 999px;
          font-size: 13.5px; font-weight: 500; color: var(--text-secondary);
          text-decoration: none; transition: all 0.25s ease;
          cursor: pointer; border: 1px solid transparent;
          background: none; font-family: inherit;
        }
        .oui-navlink:hover {
          color: var(--text-primary);
          background: rgba(0, 180, 216, 0.06);
          border-color: rgba(0, 180, 216, 0.1);
        }
        .oui-navlink.active {
          color: var(--cyan);
          background: rgba(0, 180, 216, 0.08);
          border-color: rgba(0, 180, 216, 0.15);
        }
        .oui-lang-btn {
          display: flex; align-items: center; gap: 5px;
          padding: 6px 12px; border-radius: 999px;
          font-size: 12px; font-weight: 700; letter-spacing: 0.5px;
          color: var(--text-secondary);
          background: rgba(0, 180, 216, 0.06);
          border: 1px solid rgba(0, 180, 216, 0.1);
          cursor: pointer; font-family: inherit;
          transition: all 0.25s ease;
        }
        .oui-lang-btn:hover {
          color: var(--cyan);
          border-color: rgba(0, 180, 216, 0.25);
          background: rgba(0, 180, 216, 0.1);
        }

        .oui-main { max-width: 1200px; margin: 0 auto; padding: 0 32px; }

        .oui-footer {
          border-top: 1px solid rgba(0, 180, 216, 0.06);
          padding: 48px 32px 40px; margin-top: 100px;
          background: rgba(7, 11, 20, 0.5);
        }
        .oui-footer-in {
          max-width: 1200px; margin: 0 auto;
          display: flex; justify-content: space-between; align-items: center;
          flex-wrap: wrap; gap: 16px;
        }
        .oui-footer-brand {
          display: flex; align-items: center; gap: 10px;
          margin-bottom: 8px;
        }
        .oui-footer-brand img { height: 24px; width: auto; opacity: 0.6; }
        .oui-footer-left {
          font-size: 13px; color: var(--text-muted);
        }
        .oui-footer-left a {
          color: var(--cyan); text-decoration: none;
        }
        .oui-footer-left a:hover { text-decoration: underline; }
        .oui-footer-right {
          display: flex; gap: 20px;
        }
        .oui-footer-right a {
          color: var(--text-muted); text-decoration: none; font-size: 13px;
          transition: color 0.2s;
        }
        .oui-footer-right a:hover { color: var(--cyan); }

        @media (max-width: 640px) {
          .oui-header-in { gap: 16px; padding: 0 20px; }
          .oui-main { padding: 0 20px; }
          .oui-navlink span { display: none; }
          .oui-brand img { height: 28px; }
        }
      `}</style>

      <header className="oui-header">
        <div className="oui-header-in">
          <Link to="/" className="oui-brand">
            <img
              src="https://octopuslab.tr/assets/octopus_transparent.png"
              alt="OctopusLab"
            />
            Octopus<span className="oui-brand-dot">UI</span>
          </Link>
          <nav className="oui-nav">
            <Link to="/" className={`oui-navlink ${pathname === '/' ? 'active' : ''}`}>
              <Package size={15} /> <span>{t('templates')}</span>
            </Link>
            <Link to="/ai" className={`oui-navlink ${pathname === '/ai' ? 'active' : ''}`}>
              <Bot size={15} /> <span>{t('aiAgents')}</span>
            </Link>
            <a href="https://github.com/umutkayra-1" target="_blank" rel="noopener noreferrer" className="oui-navlink">
              <Github size={15} /> <span>GitHub</span>
            </a>
            <button className="oui-lang-btn" onClick={toggle} aria-label="Toggle language">
              <Globe size={13} />
              {lang === 'tr' ? 'EN' : 'TR'}
            </button>
          </nav>
        </div>
      </header>

      <main className="oui-main">
        {children}
      </main>

      <footer className="oui-footer">
        <div className="oui-footer-in">
          <div className="oui-footer-left">
            <div className="oui-footer-brand">
              <img
                src="https://octopuslab.tr/assets/octopus_transparent.png"
                alt="OctopusLab"
              />
            </div>
            {t('footerBuiltBy')} <a href="https://octopuslab.tr" target="_blank" rel="noopener noreferrer">octopuslab.tr</a> — {t('footerTagline')}
          </div>
          <div className="oui-footer-right">
            <a href="https://github.com/umutkayra-1" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://octopuslab.tr" target="_blank" rel="noopener noreferrer">OctopusLab</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
