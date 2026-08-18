import { useParams, Link, Navigate } from 'react-router-dom'
import { ArrowLeft, Github, Download, Bot, Copy, Check, ExternalLink, Tag } from 'lucide-react'
import { useState } from 'react'
import Layout from './Layout'
import { templates } from '../templates'
import { SupportPreviewHero } from './SupportPreview'

const HERO_MAP = {
  'support-center': SupportPreviewHero,
}

function CopyBlock({ text, label }) {
  const [copied, setCopied] = useState(false)
  const copy = () => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    })
  }
  return (
    <div className="oui-copyblock">
      {label && <p className="oui-copyblock-label">{label}</p>}
      <div className="oui-copyblock-code">
        <pre>{text}</pre>
        <button className="oui-copybtn" onClick={copy} aria-label="Copy">
          {copied ? <Check size={14} /> : <Copy size={14} />}
        </button>
      </div>
    </div>
  )
}

export default function TemplateDetail() {
  const { id } = useParams()
  const t = templates.find(x => x.id === id)
  if (!t) return <Navigate to="/" replace />

  return (
    <Layout>
      <style>{`
        .oui-detail { padding: 48px 0; }
        .oui-back {
          display: inline-flex; align-items: center; gap: 6px;
          color: var(--text-muted); text-decoration: none; font-size: 13.5px;
          font-weight: 500; margin-bottom: 32px; transition: color 0.2s;
        }
        .oui-back:hover { color: var(--text-primary); }

        .oui-detail-head {
          display: flex; align-items: flex-start; gap: 40px;
          margin-bottom: 48px; flex-wrap: wrap;
        }
        .oui-detail-info { flex: 1; min-width: 300px; }
        .oui-detail-info h1 {
          font-family: 'Playfair Display', serif;
          font-size: clamp(28px, 4vw, 40px);
          font-weight: 500; letter-spacing: -1px;
          margin-bottom: 12px;
        }
        .oui-detail-tagline {
          font-size: 17px; color: var(--text-secondary); line-height: 1.65;
          margin-bottom: 20px;
        }
        .oui-detail-meta {
          display: flex; gap: 16px; align-items: center; flex-wrap: wrap;
          margin-bottom: 24px;
        }
        .oui-detail-meta .oui-tag { font-size: 12px; }
        .oui-detail-actions {
          display: flex; gap: 12px; flex-wrap: wrap;
        }
        .oui-btn {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 11px 20px; border-radius: 10px;
          font-size: 14px; font-weight: 600; text-decoration: none;
          cursor: pointer; border: none; font-family: inherit;
          transition: all 0.2s ease;
        }
        .oui-btn-primary {
          background: var(--cyan); color: #0A0E1A;
        }
        .oui-btn-primary:hover { background: #00C5EC; }
        .oui-btn-secondary {
          background: transparent; color: var(--text-primary);
          border: 1px solid var(--border);
        }
        .oui-btn-secondary:hover { border-color: var(--border-hover); background: var(--bg-card); }

        .oui-detail-body {
          display: grid; grid-template-columns: 1fr 360px; gap: 48px;
        }
        .oui-section { margin-bottom: 40px; }
        .oui-section h2 {
          font-size: 18px; font-weight: 600; letter-spacing: -0.3px;
          margin-bottom: 16px; padding-bottom: 12px;
          border-bottom: 1px solid var(--border);
        }
        .oui-section p {
          font-size: 15px; color: var(--text-secondary); line-height: 1.7;
        }
        .oui-features {
          list-style: none; padding: 0;
        }
        .oui-features li {
          display: flex; align-items: flex-start; gap: 10px;
          padding: 10px 0; font-size: 14.5px; color: var(--text-secondary);
          border-bottom: 1px solid rgba(248,249,250,0.04);
        }
        .oui-features li::before {
          content: ''; flex-shrink: 0;
          width: 6px; height: 6px; border-radius: 3px;
          background: var(--cyan); margin-top: 8px;
        }

        .oui-sidebar {
          position: sticky; top: 88px; align-self: start;
        }
        .oui-sidebar-card {
          border: 1px solid var(--border); border-radius: 16px;
          background: var(--bg-card); padding: 24px;
          margin-bottom: 20px;
        }
        .oui-sidebar-card h3 {
          font-size: 14px; font-weight: 600; margin-bottom: 16px;
          display: flex; align-items: center; gap: 8px;
        }

        .oui-copyblock { margin-bottom: 16px; }
        .oui-copyblock-label {
          font-size: 12px; font-weight: 600; color: var(--text-muted);
          text-transform: uppercase; letter-spacing: 0.8px;
          margin-bottom: 8px;
        }
        .oui-copyblock-code {
          position: relative; background: rgba(0,0,0,0.3);
          border: 1px solid var(--border); border-radius: 10px;
          padding: 14px 48px 14px 16px; overflow-x: auto;
        }
        .oui-copyblock-code pre {
          font-family: 'SF Mono', 'Fira Code', monospace;
          font-size: 13px; color: var(--text-secondary);
          white-space: pre; line-height: 1.6; margin: 0;
        }
        .oui-copybtn {
          position: absolute; top: 10px; right: 10px;
          background: rgba(248,249,250,0.06); border: 1px solid var(--border);
          border-radius: 6px; padding: 6px; cursor: pointer;
          color: var(--text-muted); transition: all 0.2s;
          display: flex;
        }
        .oui-copybtn:hover { color: var(--text-primary); background: rgba(248,249,250,0.1); }

        @media (max-width: 880px) {
          .oui-detail-body { grid-template-columns: 1fr; }
          .oui-sidebar { position: static; }
        }
        @media (max-width: 640px) {
          .oui-detail { padding: 32px 0; }
        }
      `}</style>

      <div className="oui-detail">
        <Link to="/" className="oui-back">
          <ArrowLeft size={15} /> All templates
        </Link>

        <div className="oui-detail-head">
          <div className="oui-detail-info">
            <h1>{t.name}</h1>
            <p className="oui-detail-tagline">{t.description}</p>
            <div className="oui-detail-meta">
              {t.tags.map(tag => <span key={tag} className="oui-tag">{tag}</span>)}
              {t.aiSkill && (
                <span className="oui-badge-ai" style={{ fontSize: '11px', padding: '3px 8px' }}>
                  <Bot size={12} /> AI Ready
                </span>
              )}
            </div>
            <div className="oui-detail-actions">
              <a href={t.github} target="_blank" rel="noopener noreferrer" className="oui-btn oui-btn-primary">
                <Github size={16} /> View on GitHub
              </a>
              {t.aiSkill && (
                <Link to="/ai" className="oui-btn oui-btn-secondary">
                  <Bot size={16} /> AI Skill Docs
                </Link>
              )}
            </div>
          </div>
        </div>

        {HERO_MAP[t.id] && (
          <div style={{ marginBottom: '48px', maxWidth: '860px' }}>
            {(() => { const HeroPreview = HERO_MAP[t.id]; return <HeroPreview /> })()}
          </div>
        )}

        <div className="oui-detail-body">
          <div>
            <div className="oui-section">
              <h2>Features</h2>
              <ul className="oui-features">
                {t.features.map((f, i) => <li key={i}>{f}</li>)}
              </ul>
            </div>
            <div className="oui-section">
              <h2>About</h2>
              <p>{t.description}</p>
            </div>
          </div>

          <div className="oui-sidebar">
            <div className="oui-sidebar-card">
              <h3><Download size={15} /> Quick Install</h3>
              <CopyBlock text={t.install} />
            </div>
            <div className="oui-sidebar-card">
              <h3><Tag size={15} /> Info</h3>
              <div style={{ fontSize: '13px', color: 'var(--text-secondary)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 0', borderBottom: '1px solid var(--border)' }}>
                  <span style={{ color: 'var(--text-muted)' }}>Version</span>
                  <span>{t.version}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 0', borderBottom: '1px solid var(--border)' }}>
                  <span style={{ color: 'var(--text-muted)' }}>Category</span>
                  <span>{t.category}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 0', borderBottom: '1px solid var(--border)' }}>
                  <span style={{ color: 'var(--text-muted)' }}>Updated</span>
                  <span>{t.updatedAt}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 0' }}>
                  <span style={{ color: 'var(--text-muted)' }}>License</span>
                  <span>MIT</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
