import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Search, Download, Github, Bot, ArrowRight, Tag, ExternalLink } from 'lucide-react'
import Layout from './Layout'
import { templates, categories } from '../templates'

function TemplateCard({ t }) {
  return (
    <Link to={`/template/${t.id}`} className="oui-card">
      <div className="oui-card-preview">
        <div className="oui-card-preview-placeholder">
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
            <rect x="4" y="4" width="40" height="40" rx="8" stroke="rgba(248,249,250,0.15)" strokeWidth="1.5" fill="none"/>
            <rect x="8" y="8" width="32" height="6" rx="2" fill="rgba(0,180,216,0.15)"/>
            <rect x="8" y="18" width="12" height="22" rx="2" fill="rgba(248,249,250,0.05)"/>
            <rect x="24" y="18" width="16" height="10" rx="2" fill="rgba(248,249,250,0.05)"/>
            <rect x="24" y="32" width="16" height="8" rx="2" fill="rgba(248,249,250,0.05)"/>
          </svg>
        </div>
      </div>
      <div className="oui-card-body">
        <div className="oui-card-head">
          <h3 className="oui-card-title">{t.name}</h3>
          {t.aiSkill && (
            <span className="oui-badge-ai" title="AI skill available">
              <Bot size={11} /> AI
            </span>
          )}
        </div>
        <p className="oui-card-desc">{t.tagline}</p>
        <div className="oui-card-tags">
          {t.tags.slice(0, 4).map(tag => (
            <span key={tag} className="oui-tag">{tag}</span>
          ))}
        </div>
        <div className="oui-card-footer">
          <span className="oui-card-version">v{t.version}</span>
          <span className="oui-card-arrow"><ArrowRight size={14} /></span>
        </div>
      </div>
    </Link>
  )
}

export default function Home() {
  const [q, setQ] = useState('')
  const [cat, setCat] = useState('All')

  const filtered = templates.filter(t => {
    const matchCat = cat === 'All' || t.category === cat
    const matchQ = !q.trim() || [t.name, t.tagline, t.description, ...t.tags]
      .join(' ').toLowerCase().includes(q.toLowerCase())
    return matchCat && matchQ
  })

  return (
    <Layout>
      <style>{`
        .oui-hero {
          padding: 80px 0 56px; text-align: center;
        }
        .oui-hero-badge {
          display: inline-flex; align-items: center; gap: 6px;
          padding: 6px 14px; border-radius: 20px;
          border: 1px solid var(--border);
          font-size: 12px; font-weight: 500; color: var(--cyan);
          margin-bottom: 24px; background: rgba(0, 180, 216, 0.05);
        }
        .oui-hero h1 {
          font-family: 'Playfair Display', serif;
          font-size: clamp(36px, 5vw, 56px);
          font-weight: 500; letter-spacing: -1.5px;
          line-height: 1.1; margin-bottom: 20px;
        }
        .oui-hero h1 em {
          font-style: italic; color: var(--cyan);
        }
        .oui-hero-sub {
          font-size: 17px; color: var(--text-secondary);
          max-width: 540px; margin: 0 auto 40px; line-height: 1.7;
        }

        .oui-searchbar {
          display: flex; align-items: center; gap: 12px;
          max-width: 480px; margin: 0 auto 16px;
          border: 1px solid var(--border); border-radius: 12px;
          padding: 12px 16px; background: var(--bg-card);
          transition: border-color 0.2s;
        }
        .oui-searchbar:focus-within { border-color: var(--cyan); }
        .oui-searchbar input {
          flex: 1; border: none; outline: none; background: transparent;
          font: inherit; font-size: 15px; color: var(--text-primary);
        }
        .oui-searchbar input::placeholder { color: var(--text-muted); }

        .oui-cats {
          display: flex; justify-content: center; gap: 8px;
          margin-bottom: 48px; flex-wrap: wrap;
        }
        .oui-cat {
          padding: 7px 16px; border-radius: 8px;
          font-size: 13px; font-weight: 500; color: var(--text-secondary);
          border: 1px solid var(--border); background: transparent;
          cursor: pointer; font-family: inherit; transition: all 0.2s;
        }
        .oui-cat:hover { border-color: var(--border-hover); color: var(--text-primary); }
        .oui-cat.active {
          background: rgba(0, 180, 216, 0.1); border-color: rgba(0, 180, 216, 0.3);
          color: var(--cyan);
        }

        .oui-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
          gap: 20px;
        }
        .oui-card {
          border: 1px solid var(--border); border-radius: 16px;
          background: var(--bg-card); text-decoration: none; color: inherit;
          overflow: hidden;
          transition: transform 0.25s cubic-bezier(0.16, 1, 0.3, 1),
                      border-color 0.25s, box-shadow 0.25s;
        }
        .oui-card:hover {
          transform: translateY(-4px);
          border-color: var(--border-hover);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
        }
        .oui-card-preview {
          height: 180px; background: linear-gradient(135deg, rgba(0,180,216,0.04) 0%, rgba(15,46,92,0.08) 100%);
          display: flex; align-items: center; justify-content: center;
          border-bottom: 1px solid var(--border);
        }
        .oui-card-preview-placeholder { opacity: 0.6; }
        .oui-card-body { padding: 20px; }
        .oui-card-head {
          display: flex; align-items: center; gap: 8px; margin-bottom: 8px;
        }
        .oui-card-title {
          font-size: 17px; font-weight: 600; letter-spacing: -0.3px;
        }
        .oui-badge-ai {
          display: inline-flex; align-items: center; gap: 3px;
          padding: 2px 7px; border-radius: 5px;
          font-size: 10px; font-weight: 700; letter-spacing: 0.5px;
          background: rgba(0, 180, 216, 0.12); color: var(--cyan);
          border: 1px solid rgba(0, 180, 216, 0.2);
        }
        .oui-card-desc {
          font-size: 14px; color: var(--text-secondary); line-height: 1.5;
          margin-bottom: 14px;
        }
        .oui-card-tags { display: flex; gap: 6px; flex-wrap: wrap; margin-bottom: 16px; }
        .oui-tag {
          padding: 3px 9px; border-radius: 6px;
          font-size: 11.5px; font-weight: 500; color: var(--text-muted);
          background: rgba(248, 249, 250, 0.04);
          border: 1px solid rgba(248, 249, 250, 0.06);
        }
        .oui-card-footer {
          display: flex; justify-content: space-between; align-items: center;
          padding-top: 14px; border-top: 1px solid var(--border);
        }
        .oui-card-version { font-size: 12px; color: var(--text-muted); }
        .oui-card-arrow {
          color: var(--text-muted); transition: color 0.2s, transform 0.2s;
        }
        .oui-card:hover .oui-card-arrow { color: var(--cyan); transform: translateX(3px); }

        .oui-empty {
          text-align: center; padding: 60px 20px; color: var(--text-muted);
          font-size: 15px;
        }

        @media (max-width: 640px) {
          .oui-hero { padding: 48px 0 40px; }
          .oui-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      <section className="oui-hero">
        <div className="oui-hero-badge">
          <Tag size={12} /> Open Source
        </div>
        <h1>
          Production-ready<br />
          UI <em>templates.</em>
        </h1>
        <p className="oui-hero-sub">
          Beautiful, customizable React templates you can download and use instantly
          — as a developer or through your AI agent.
        </p>
        <div className="oui-searchbar">
          <Search size={17} color="rgba(248,249,250,0.4)" />
          <input
            value={q} onChange={e => setQ(e.target.value)}
            placeholder="Search templates..."
          />
        </div>
        <div className="oui-cats">
          {categories.map(c => (
            <button key={c} className={`oui-cat ${cat === c ? 'active' : ''}`}
              onClick={() => setCat(c)}>
              {c}
            </button>
          ))}
        </div>
      </section>

      {filtered.length > 0 ? (
        <div className="oui-grid">
          {filtered.map(t => <TemplateCard key={t.id} t={t} />)}
        </div>
      ) : (
        <div className="oui-empty">No templates found. Try a different search.</div>
      )}
    </Layout>
  )
}
