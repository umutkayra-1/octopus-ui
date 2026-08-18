import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Search, Download, Github, Bot, ArrowRight, Tag, ExternalLink, Sparkles, Zap, Code2 } from 'lucide-react'
import Layout from './Layout'
import { useLang } from '../i18n'
import { templates, categories } from '../templates'
import { SupportPreviewCard } from './SupportPreview'

const PREVIEW_MAP = {
  'support-center': SupportPreviewCard,
}

function TemplateCard({ t, i }) {
  const Preview = PREVIEW_MAP[t.id]
  return (
    <Link to={`/template/${t.id}`} className="oui-card">
      <div className="oui-card-preview">
        {Preview ? (
          <>
            <div className="oui-card-browser">
              <div className="oui-card-browser-bar">
                <div className="oui-card-browser-dots">
                  <span style={{ background: '#FF5F56' }} />
                  <span style={{ background: '#FFBD2E' }} />
                  <span style={{ background: '#27C93F' }} />
                </div>
                <div className="oui-card-browser-url">yourbrand.com/support</div>
              </div>
              <div className="oui-card-browser-content">
                <Preview />
              </div>
            </div>
            <div className="oui-card-preview-shine" />
          </>
        ) : (
          <div className="oui-card-preview-placeholder">
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
              <rect x="4" y="4" width="40" height="40" rx="8" stroke="rgba(0,180,216,0.2)" strokeWidth="1.5" fill="none"/>
              <rect x="8" y="8" width="32" height="6" rx="2" fill="rgba(0,180,216,0.15)"/>
              <rect x="8" y="18" width="12" height="22" rx="2" fill="rgba(0,180,216,0.06)"/>
              <rect x="24" y="18" width="16" height="10" rx="2" fill="rgba(0,180,216,0.06)"/>
              <rect x="24" y="32" width="16" height="8" rx="2" fill="rgba(0,180,216,0.06)"/>
            </svg>
          </div>
        )}
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
          <span className="oui-card-cta">
            {i('viewTemplate')} <ArrowRight size={13} />
          </span>
        </div>
      </div>
    </Link>
  )
}

function FeatureChip({ icon: Icon, label }) {
  return (
    <div className="oui-feature-chip">
      <Icon size={14} />
      <span>{label}</span>
    </div>
  )
}

export default function Home() {
  const { t } = useLang()
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
          padding: 100px 0 72px; text-align: center;
          position: relative;
        }
        .oui-hero::before {
          content: '';
          position: absolute; top: -60px; left: 50%; transform: translateX(-50%);
          width: 600px; height: 600px;
          background: radial-gradient(circle, rgba(0, 180, 216, 0.08) 0%, transparent 65%);
          pointer-events: none;
        }

        .oui-hero-badge {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 7px 18px; border-radius: 999px;
          border: 1px solid rgba(0, 180, 216, 0.15);
          font-size: 12.5px; font-weight: 600; color: var(--cyan);
          margin-bottom: 28px;
          background: rgba(0, 180, 216, 0.05);
          backdrop-filter: blur(8px);
          letter-spacing: 0.3px;
        }

        .oui-hero h1 {
          font-family: 'Playfair Display', serif;
          font-size: clamp(40px, 6vw, 64px);
          font-weight: 500; letter-spacing: -2px;
          line-height: 1.08; margin-bottom: 24px;
        }
        .oui-hero h1 em {
          font-style: italic;
          background: linear-gradient(135deg, var(--cyan) 0%, #4DD0E1 50%, #80DEEA 100%);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .oui-hero-sub {
          font-size: 17px; color: var(--text-secondary);
          max-width: 520px; margin: 0 auto 36px; line-height: 1.75;
          font-weight: 300;
        }

        .oui-feature-chips {
          display: flex; justify-content: center; gap: 12px;
          margin-bottom: 44px; flex-wrap: wrap;
        }
        .oui-feature-chip {
          display: flex; align-items: center; gap: 7px;
          padding: 8px 16px; border-radius: 999px;
          font-size: 12.5px; font-weight: 500;
          color: var(--text-secondary);
          background: rgba(15, 46, 92, 0.3);
          border: 1px solid rgba(0, 180, 216, 0.08);
        }
        .oui-feature-chip svg { color: var(--cyan); opacity: 0.8; }

        .oui-searchbar {
          display: flex; align-items: center; gap: 12px;
          max-width: 500px; margin: 0 auto 16px;
          border: 1px solid rgba(0, 180, 216, 0.1);
          border-radius: 999px;
          padding: 14px 22px;
          background: rgba(15, 46, 92, 0.15);
          backdrop-filter: blur(12px);
          transition: border-color 0.3s, box-shadow 0.3s;
        }
        .oui-searchbar:focus-within {
          border-color: rgba(0, 180, 216, 0.3);
          box-shadow: 0 0 0 4px rgba(0, 180, 216, 0.06), 0 0 24px rgba(0, 180, 216, 0.08);
        }
        .oui-searchbar input {
          flex: 1; border: none; outline: none; background: transparent;
          font: inherit; font-size: 15px; color: var(--text-primary);
          font-weight: 300;
        }
        .oui-searchbar input::placeholder { color: var(--text-muted); }

        .oui-cats {
          display: flex; justify-content: center; gap: 8px;
          margin-bottom: 56px; flex-wrap: wrap;
        }
        .oui-cat {
          padding: 8px 20px; border-radius: 999px;
          font-size: 13px; font-weight: 500; color: var(--text-secondary);
          border: 1px solid rgba(0, 180, 216, 0.08);
          background: transparent;
          cursor: pointer; font-family: inherit;
          transition: all 0.25s ease;
        }
        .oui-cat:hover {
          border-color: rgba(0, 180, 216, 0.2);
          color: var(--text-primary);
          background: rgba(0, 180, 216, 0.05);
        }
        .oui-cat.active {
          background: rgba(0, 180, 216, 0.1);
          border-color: rgba(0, 180, 216, 0.3);
          color: var(--cyan);
          box-shadow: 0 0 16px rgba(0, 180, 216, 0.1);
        }

        .oui-section-label {
          font-size: 11px; font-weight: 700; letter-spacing: 2px;
          text-transform: uppercase; color: var(--cyan); opacity: 0.6;
          margin-bottom: 24px;
        }

        .oui-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
          gap: 28px;
        }
        .oui-card {
          border: 1px solid rgba(0, 180, 216, 0.1);
          border-radius: 24px;
          background: linear-gradient(165deg, rgba(15, 46, 92, 0.2) 0%, rgba(7, 11, 20, 0.6) 100%);
          backdrop-filter: blur(12px);
          text-decoration: none; color: inherit;
          overflow: hidden;
          transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1),
                      border-color 0.3s, box-shadow 0.4s;
        }
        .oui-card:hover {
          transform: translateY(-8px) scale(1.01);
          border-color: rgba(0, 180, 216, 0.25);
          box-shadow:
            0 32px 80px rgba(0, 0, 0, 0.5),
            0 0 0 1px rgba(0, 180, 216, 0.12),
            0 0 60px rgba(0, 180, 216, 0.08);
        }
        .oui-card-preview {
          height: 240px;
          background: linear-gradient(145deg, rgba(15, 46, 92, 0.15) 0%, rgba(7, 11, 20, 0.5) 100%);
          display: flex; align-items: center; justify-content: center;
          border-bottom: 1px solid rgba(0, 180, 216, 0.06);
          position: relative;
          overflow: hidden;
          padding: 20px 24px 16px;
        }
        .oui-card-preview::before {
          content: '';
          position: absolute; top: -40px; right: -40px;
          width: 200px; height: 200px;
          background: radial-gradient(circle, rgba(0, 180, 216, 0.07) 0%, transparent 65%);
          pointer-events: none;
        }
        .oui-card-preview-shine {
          position: absolute; top: 0; left: 0; right: 0; bottom: 0;
          background: linear-gradient(115deg, transparent 40%, rgba(255,255,255,0.02) 50%, transparent 60%);
          pointer-events: none;
        }

        .oui-card-browser {
          width: 100%; height: 100%;
          border-radius: 10px;
          overflow: hidden;
          box-shadow: 0 8px 40px rgba(0,0,0,0.4), 0 0 0 1px rgba(255,255,255,0.06);
          display: flex; flex-direction: column;
          transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .oui-card:hover .oui-card-browser {
          transform: scale(1.02);
        }
        .oui-card-browser-bar {
          background: #1E2030;
          padding: 8px 14px;
          display: flex; align-items: center; gap: 10px;
          flex-shrink: 0;
          border-bottom: 1px solid rgba(255,255,255,0.04);
        }
        .oui-card-browser-dots {
          display: flex; gap: 5px;
        }
        .oui-card-browser-dots span {
          width: 8px; height: 8px; border-radius: 50%;
          display: block;
        }
        .oui-card-browser-url {
          flex: 1;
          background: rgba(255,255,255,0.05);
          border-radius: 5px;
          padding: 3px 10px;
          font-size: 10px; color: rgba(255,255,255,0.35);
          font-family: 'SF Mono', 'Fira Code', monospace;
          text-align: center;
        }
        .oui-card-browser-content {
          flex: 1; overflow: hidden;
          background: #FCFCFB;
        }

        .oui-card-preview-placeholder { opacity: 0.5; }
        .oui-card-body { padding: 24px 28px 28px; }
        .oui-card-head {
          display: flex; align-items: center; gap: 10px; margin-bottom: 10px;
        }
        .oui-card-title {
          font-family: 'Playfair Display', serif;
          font-size: 22px; font-weight: 500; letter-spacing: -0.5px;
        }
        .oui-badge-ai {
          display: inline-flex; align-items: center; gap: 4px;
          padding: 3px 10px; border-radius: 999px;
          font-size: 10px; font-weight: 700; letter-spacing: 0.5px;
          background: rgba(0, 180, 216, 0.1); color: var(--cyan);
          border: 1px solid rgba(0, 180, 216, 0.2);
        }
        .oui-card-desc {
          font-size: 14.5px; color: var(--text-secondary); line-height: 1.6;
          margin-bottom: 18px; font-weight: 300;
        }
        .oui-card-tags { display: flex; gap: 6px; flex-wrap: wrap; margin-bottom: 20px; }
        .oui-tag {
          padding: 4px 12px; border-radius: 999px;
          font-size: 11px; font-weight: 500; color: var(--text-muted);
          background: rgba(0, 180, 216, 0.04);
          border: 1px solid rgba(0, 180, 216, 0.08);
        }
        .oui-card-footer {
          display: flex; justify-content: space-between; align-items: center;
          padding-top: 18px; border-top: 1px solid rgba(0, 180, 216, 0.06);
        }
        .oui-card-version { font-size: 12px; color: var(--text-muted); }
        .oui-card-cta {
          display: inline-flex; align-items: center; gap: 6px;
          font-size: 13px; font-weight: 600; color: var(--cyan);
          opacity: 0.7; transition: opacity 0.2s, gap 0.3s;
        }
        .oui-card:hover .oui-card-cta {
          opacity: 1; gap: 10px;
        }

        .oui-empty {
          text-align: center; padding: 80px 20px; color: var(--text-muted);
          font-size: 15px;
        }

        @media (max-width: 640px) {
          .oui-hero { padding: 64px 0 48px; }
          .oui-grid { grid-template-columns: 1fr; }
          .oui-feature-chips { gap: 8px; }
        }
      `}</style>

      <section className="oui-hero">
        <div className="oui-hero-badge">
          <Sparkles size={13} /> {t('heroTag')}
        </div>
        <h1>
          {t('heroTitle1')}<br />
          <em>{t('heroTitle2')}</em>
        </h1>
        <p className="oui-hero-sub">
          {t('heroSub')}
        </p>

        <div className="oui-feature-chips">
          <FeatureChip icon={Zap} label={t('chipInstall')} />
          <FeatureChip icon={Bot} label={t('chipAi')} />
          <FeatureChip icon={Code2} label={t('chipCustom')} />
        </div>

        <div className="oui-searchbar">
          <Search size={17} color="rgba(0,180,216,0.5)" />
          <input
            value={q} onChange={e => setQ(e.target.value)}
            placeholder={t('searchPlaceholder')}
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

      <p className="oui-section-label">{t('templatesLabel')}</p>

      {filtered.length > 0 ? (
        <div className="oui-grid">
          {filtered.map(tmpl => <TemplateCard key={tmpl.id} t={tmpl} i={t} />)}
        </div>
      ) : (
        <div className="oui-empty">{t('noResults')}</div>
      )}
    </Layout>
  )
}
