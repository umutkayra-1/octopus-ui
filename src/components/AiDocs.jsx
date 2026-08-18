import { Link } from 'react-router-dom'
import { ArrowLeft, Bot, Copy, Check, Download, Github, Terminal, FileText, Cpu } from 'lucide-react'
import { useState } from 'react'
import Layout from './Layout'
import { useLang } from '../i18n'
import { templates } from '../templates'

function CopyBlock({ text, label }) {
  const [copied, setCopied] = useState(false)
  const copy = () => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    })
  }
  return (
    <div className="oui-ai-copyblock">
      {label && <p className="oui-ai-label">{label}</p>}
      <div className="oui-ai-code">
        <pre>{text}</pre>
        <button className="oui-ai-copybtn" onClick={copy} aria-label="Copy">
          {copied ? <Check size={14} /> : <Copy size={14} />}
        </button>
      </div>
    </div>
  )
}

const SKILL_MD = `# Octopus UI Templates — AI Agent Skill

Use this skill to scaffold production-ready UI templates from [Octopus UI](https://octopuslab.tr/ui).

## Available Templates

### support-center
**Bilingual FAQ & Help Center Template**

A customizable, bilingual (TR/EN) support center with full-text search,
collection-based navigation, article feedback, and responsive design.

**Install:**
\`\`\`bash
npx degit octopuslab-tr/support-center-template my-support
cd my-support
npm install
\`\`\`

**Customization files:**
- \`src/config.js\` — Brand name, logo, colors, nav links, footer, CTA
- \`src/content.js\` — Collections and articles (bilingual tr/en)

**Article block types:**
| Type | Usage |
|------|-------|
| \`{ t: 'p', x: '...' }\` | Paragraph |
| \`{ t: 'h', x: '...' }\` | Heading |
| \`{ t: 'ul', x: [...] }\` | Bullet list |
| \`{ t: 'ol', x: [...] }\` | Numbered list |
| \`{ t: 'note', x: '...' }\` | Highlighted note |
| \`{ t: 'code', x: '...' }\` | Code block |
| \`{ t: 'link', x: '...', href: '...' }\` | Link |

**Sidebar icons:** rocket, edit, paw, search, settings, box, shield, heart, wrench, briefcase

**When to use:** User asks for a support page, FAQ section, help center,
knowledge base, or documentation site with bilingual support.

---

*Templates by [octopuslab.tr](https://octopuslab.tr)*
`

export default function AiDocs() {
  const { t } = useLang()
  const aiTemplates = templates.filter(x => x.aiSkill)

  return (
    <Layout>
      <style>{`
        .oui-ai { padding: 56px 0; max-width: 800px; }
        .oui-ai-back {
          display: inline-flex; align-items: center; gap: 6px;
          color: var(--text-muted); text-decoration: none; font-size: 13.5px;
          font-weight: 500; margin-bottom: 36px; transition: color 0.2s;
          border-radius: 999px; padding: 6px 14px;
          border: 1px solid transparent;
        }
        .oui-ai-back:hover {
          color: var(--text-primary);
          background: rgba(0, 180, 216, 0.05);
          border-color: rgba(0, 180, 216, 0.1);
        }
        .oui-ai h1 {
          font-family: 'Playfair Display', serif;
          font-size: clamp(28px, 4vw, 42px);
          font-weight: 500; letter-spacing: -1px; margin-bottom: 14px;
        }
        .oui-ai h1 em {
          font-style: italic;
          background: linear-gradient(135deg, var(--cyan) 0%, #4DD0E1 100%);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .oui-ai-sub {
          font-size: 17px; color: var(--text-secondary); line-height: 1.7;
          margin-bottom: 44px; max-width: 600px; font-weight: 300;
        }

        .oui-ai-steps {
          display: grid; grid-template-columns: repeat(3, 1fr);
          gap: 16px; margin-bottom: 56px;
        }
        .oui-ai-step {
          border: 1px solid rgba(0, 180, 216, 0.08);
          border-radius: 20px;
          background: rgba(15, 46, 92, 0.12);
          backdrop-filter: blur(8px);
          padding: 24px;
          transition: border-color 0.3s, box-shadow 0.3s;
        }
        .oui-ai-step:hover {
          border-color: rgba(0, 180, 216, 0.15);
          box-shadow: var(--glow-sm);
        }
        .oui-ai-step-num {
          width: 32px; height: 32px; border-radius: 10px;
          background: rgba(0, 180, 216, 0.1); color: var(--cyan);
          display: flex; align-items: center; justify-content: center;
          font-size: 13px; font-weight: 700; margin-bottom: 14px;
          border: 1px solid rgba(0, 180, 216, 0.15);
        }
        .oui-ai-step h3 {
          font-size: 15px; font-weight: 600; margin-bottom: 8px;
        }
        .oui-ai-step p {
          font-size: 13px; color: var(--text-muted); line-height: 1.55;
        }

        .oui-ai-section {
          margin-bottom: 44px;
        }
        .oui-ai-section h2 {
          font-size: 20px; font-weight: 600; letter-spacing: -0.3px;
          margin-bottom: 16px; display: flex; align-items: center; gap: 10px;
        }
        .oui-ai-section h2 svg { color: var(--cyan); }
        .oui-ai-section > p {
          font-size: 15px; color: var(--text-secondary); line-height: 1.7;
          margin-bottom: 16px; font-weight: 300;
        }

        .oui-ai-copyblock { margin-bottom: 20px; }
        .oui-ai-label {
          font-size: 11px; font-weight: 700; color: var(--text-muted);
          text-transform: uppercase; letter-spacing: 1px;
          margin-bottom: 8px;
        }
        .oui-ai-code {
          position: relative;
          background: rgba(7, 11, 20, 0.6);
          border: 1px solid rgba(0, 180, 216, 0.08);
          border-radius: 12px;
          padding: 16px 48px 16px 16px; overflow-x: auto;
        }
        .oui-ai-code pre {
          font-family: 'SF Mono', 'Fira Code', monospace;
          font-size: 13px; color: var(--text-secondary);
          white-space: pre; line-height: 1.65; margin: 0;
        }
        .oui-ai-copybtn {
          position: absolute; top: 10px; right: 10px;
          background: rgba(0, 180, 216, 0.06);
          border: 1px solid rgba(0, 180, 216, 0.1);
          border-radius: 8px; padding: 6px; cursor: pointer;
          color: var(--text-muted); transition: all 0.2s; display: flex;
        }
        .oui-ai-copybtn:hover {
          color: var(--cyan);
          background: rgba(0, 180, 216, 0.1);
        }

        .oui-ai-note {
          border-left: 2px solid var(--cyan);
          background: rgba(0, 180, 216, 0.04);
          border-radius: 0 12px 12px 0;
          padding: 16px 20px; margin: 20px 0;
          font-size: 14px; color: var(--text-secondary); line-height: 1.65;
          font-weight: 300;
        }

        .oui-agent-list {
          list-style: none; padding: 0;
        }
        .oui-agent-item {
          padding: 12px 0;
          border-bottom: 1px solid rgba(0, 180, 216, 0.06);
          font-size: 14px; color: var(--text-secondary);
          display: flex; align-items: center; gap: 12px;
        }
        .oui-agent-dot {
          width: 6px; height: 6px; border-radius: 50%;
          background: var(--cyan); flex-shrink: 0;
          box-shadow: 0 0 8px rgba(0, 180, 216, 0.4);
        }

        @media (max-width: 640px) {
          .oui-ai { padding: 32px 0; }
          .oui-ai-steps { grid-template-columns: 1fr; }
        }
      `}</style>

      <div className="oui-ai">
        <Link to="/" className="oui-ai-back">
          <ArrowLeft size={15} /> {t('allTemplates')}
        </Link>

        <h1>{t('aiTitle1')} <em>{t('aiTitle2')}</em></h1>
        <p className="oui-ai-sub">
          {t('aiSub')}
        </p>

        <div className="oui-ai-steps">
          <div className="oui-ai-step">
            <div className="oui-ai-step-num">1</div>
            <h3>{t('step1Title')}</h3>
            <p>{t('step1Desc')}</p>
          </div>
          <div className="oui-ai-step">
            <div className="oui-ai-step-num">2</div>
            <h3>{t('step2Title')}</h3>
            <p>{t('step2Desc')}</p>
          </div>
          <div className="oui-ai-step">
            <div className="oui-ai-step-num">3</div>
            <h3>{t('step3Title')}</h3>
            <p>{t('step3Desc')}</p>
          </div>
        </div>

        <div className="oui-ai-section">
          <h2><FileText size={18} /> {t('skillFileTitle')}</h2>
          <p>
            {t('skillFileDesc')} <code style={{ background: 'rgba(0,180,216,0.08)', padding: '2px 8px', borderRadius: '6px', fontSize: '13px', border: '1px solid rgba(0,180,216,0.12)' }}>octopus-ui.md</code>
          </p>
          <CopyBlock text={SKILL_MD} label="octopus-ui.md" />
        </div>

        <div className="oui-ai-section">
          <h2><Terminal size={18} /> {t('claudeSetupTitle')}</h2>
          <p>
            {t('claudeSetupDesc')}
          </p>
          <CopyBlock
            label={t('claudeSetupLabel')}
            text={`mkdir -p .claude/skills\ncurl -o .claude/skills/octopus-ui.md https://raw.githubusercontent.com/octopuslab-tr/octopus-ui/main/skills/octopus-ui.md`}
          />
          <div className="oui-ai-note">
            {t('claudeNote')}
          </div>
        </div>

        <div className="oui-ai-section">
          <h2><Cpu size={18} /> {t('compatibleTitle')}</h2>
          <p>
            {t('compatibleDesc')}
          </p>
          <ul className="oui-agent-list">
            {[
              'Claude Code (Anthropic)',
              'GitHub Copilot Workspace',
              'Cursor AI',
              'Windsurf / Codeium',
              t('compatibleNote')
            ].map(a => (
              <li key={a} className="oui-agent-item">
                <span className="oui-agent-dot" />
                {a}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Layout>
  )
}
