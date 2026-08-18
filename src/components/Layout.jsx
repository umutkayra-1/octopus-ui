import { Link, useLocation } from 'react-router-dom'
import { Github, Bot, Package } from 'lucide-react'

export default function Layout({ children }) {
  const { pathname } = useLocation()

  return (
    <div className="oui-root">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Playfair+Display:ital,wght@0,400;0,500;0,600;1,400&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        .oui-root {
          --navy: #0F2E5C;
          --cyan: #00B4D8;
          --orange: #FF6B35;
          --offwhite: #F8F9FA;
          --darkgray: #1A1A2E;
          --bg: #0A0E1A;
          --bg-card: rgba(248, 249, 250, 0.03);
          --bg-card-hover: rgba(248, 249, 250, 0.06);
          --border: rgba(248, 249, 250, 0.08);
          --border-hover: rgba(248, 249, 250, 0.16);
          --text-primary: #F8F9FA;
          --text-secondary: rgba(248, 249, 250, 0.7);
          --text-muted: rgba(248, 249, 250, 0.4);
          min-height: 100vh;
          background: var(--bg);
          color: var(--text-primary);
          font-family: 'Inter', -apple-system, sans-serif;
          font-size: 15px;
          line-height: 1.6;
          -webkit-font-smoothing: antialiased;
        }

        .oui-header {
          position: sticky; top: 0; z-index: 60;
          background: rgba(10, 14, 26, 0.85);
          backdrop-filter: blur(16px);
          border-bottom: 1px solid var(--border);
        }
        .oui-header-in {
          max-width: 1200px; margin: 0 auto;
          height: 64px; padding: 0 24px;
          display: flex; align-items: center; gap: 32px;
        }
        .oui-brand {
          display: flex; align-items: center; gap: 10px;
          text-decoration: none; color: var(--text-primary);
          font-family: 'Playfair Display', serif;
          font-size: 20px; font-weight: 500; letter-spacing: -0.3px;
        }
        .oui-brand-dot { color: var(--cyan); }
        .oui-nav { margin-left: auto; display: flex; align-items: center; gap: 8px; }
        .oui-navlink {
          display: flex; align-items: center; gap: 6px;
          padding: 7px 14px; border-radius: 8px;
          font-size: 13.5px; font-weight: 500; color: var(--text-secondary);
          text-decoration: none; transition: all 0.2s ease;
          cursor: pointer; border: none; background: none; font-family: inherit;
        }
        .oui-navlink:hover { color: var(--text-primary); background: var(--bg-card-hover); }
        .oui-navlink.active { color: var(--cyan); background: rgba(0, 180, 216, 0.08); }
        .oui-navlink-cta {
          background: var(--cyan); color: #0A0E1A; font-weight: 600;
          border: none; cursor: pointer;
        }
        .oui-navlink-cta:hover { background: #00C5EC; color: #0A0E1A; }

        .oui-main { max-width: 1200px; margin: 0 auto; padding: 0 24px; }

        .oui-footer {
          border-top: 1px solid var(--border);
          padding: 48px 24px 36px; margin-top: 80px;
        }
        .oui-footer-in {
          max-width: 1200px; margin: 0 auto;
          display: flex; justify-content: space-between; align-items: center;
          flex-wrap: wrap; gap: 16px;
        }
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
        .oui-footer-right a:hover { color: var(--text-primary); }

        @media (max-width: 640px) {
          .oui-header-in { gap: 16px; }
          .oui-navlink span { display: none; }
        }
      `}</style>

      <header className="oui-header">
        <div className="oui-header-in">
          <Link to="/" className="oui-brand">
            <svg width="26" height="26" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="16" cy="12" r="8" fill="var(--cyan)" opacity="0.15"/>
              <circle cx="16" cy="12" r="5" fill="var(--cyan)" opacity="0.3"/>
              <circle cx="16" cy="12" r="2.5" fill="var(--cyan)"/>
              <path d="M8 20 Q6 28 4 30" stroke="var(--cyan)" strokeWidth="1.5" strokeLinecap="round" opacity="0.4"/>
              <path d="M11 21 Q10 28 9 30" stroke="var(--cyan)" strokeWidth="1.5" strokeLinecap="round" opacity="0.5"/>
              <path d="M16 22 Q16 28 16 30" stroke="var(--cyan)" strokeWidth="1.5" strokeLinecap="round" opacity="0.6"/>
              <path d="M21 21 Q22 28 23 30" stroke="var(--cyan)" strokeWidth="1.5" strokeLinecap="round" opacity="0.5"/>
              <path d="M24 20 Q26 28 28 30" stroke="var(--cyan)" strokeWidth="1.5" strokeLinecap="round" opacity="0.4"/>
            </svg>
            Octopus<span className="oui-brand-dot">UI</span>
          </Link>
          <nav className="oui-nav">
            <Link to="/" className={`oui-navlink ${pathname === '/' ? 'active' : ''}`}>
              <Package size={15} /> <span>Templates</span>
            </Link>
            <Link to="/ai" className={`oui-navlink ${pathname === '/ai' ? 'active' : ''}`}>
              <Bot size={15} /> <span>AI Agents</span>
            </Link>
            <a href="https://github.com/octopuslab-tr" target="_blank" rel="noopener noreferrer" className="oui-navlink">
              <Github size={15} /> <span>GitHub</span>
            </a>
          </nav>
        </div>
      </header>

      <main className="oui-main">
        {children}
      </main>

      <footer className="oui-footer">
        <div className="oui-footer-in">
          <div className="oui-footer-left">
            Built by <a href="https://octopuslab.tr" target="_blank" rel="noopener noreferrer">octopuslab.tr</a> — Open-source UI templates for humans and AI agents.
          </div>
          <div className="oui-footer-right">
            <a href="https://github.com/octopuslab-tr" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://octopuslab.tr" target="_blank" rel="noopener noreferrer">OctopusLab</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
