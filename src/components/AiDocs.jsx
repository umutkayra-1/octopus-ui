import { Link } from 'react-router-dom'
import { ArrowLeft, Bot, Copy, Check, Download, Github, Terminal, FileText, Cpu } from 'lucide-react'
import { useState } from 'react'
import Layout from './Layout'
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
  const aiTemplates = templates.filter(t => t.aiSkill)

  return (
    <Layout>
      <style>{`
        .oui-ai { padding: 48px 0; max-width: 800px; }
        .oui-ai-back {
          display: inline-flex; align-items: center; gap: 6px;
          color: var(--text-muted); text-decoration: none; font-size: 13.5px;
          font-weight: 500; margin-bottom: 32px; transition: color 0.2s;
        }
        .oui-ai-back:hover { color: var(--text-primary); }
        .oui-ai h1 {
          font-family: 'Playfair Display', serif;
          font-size: clamp(28px, 4vw, 40px);
          font-weight: 500; letter-spacing: -1px; margin-bottom: 12px;
        }
        .oui-ai h1 em { font-style: italic; color: var(--cyan); }
        .oui-ai-sub {
          font-size: 17px; color: var(--text-secondary); line-height: 1.65;
          margin-bottom: 40px; max-width: 600px;
        }

        .oui-ai-steps {
          display: grid; grid-template-columns: repeat(3, 1fr);
          gap: 16px; margin-bottom: 48px;
        }
        .oui-ai-step {
          border: 1px solid var(--border); border-radius: 14px;
          background: var(--bg-card); padding: 20px;
        }
        .oui-ai-step-num {
          width: 28px; height: 28px; border-radius: 8px;
          background: rgba(0, 180, 216, 0.1); color: var(--cyan);
          display: flex; align-items: center; justify-content: center;
          font-size: 12px; font-weight: 700; margin-bottom: 12px;
        }
        .oui-ai-step h3 {
          font-size: 14px; font-weight: 600; margin-bottom: 6px;
        }
        .oui-ai-step p {
          font-size: 13px; color: var(--text-muted); line-height: 1.5;
        }

        .oui-ai-section {
          margin-bottom: 40px;
        }
        .oui-ai-section h2 {
          font-size: 20px; font-weight: 600; letter-spacing: -0.3px;
          margin-bottom: 16px; display: flex; align-items: center; gap: 10px;
        }
        .oui-ai-section h2 svg { color: var(--cyan); }
        .oui-ai-section > p {
          font-size: 15px; color: var(--text-secondary); line-height: 1.7;
          margin-bottom: 16px;
        }

        .oui-ai-copyblock { margin-bottom: 20px; }
        .oui-ai-label {
          font-size: 12px; font-weight: 600; color: var(--text-muted);
          text-transform: uppercase; letter-spacing: 0.8px;
          margin-bottom: 8px;
        }
        .oui-ai-code {
          position: relative; background: rgba(0,0,0,0.35);
          border: 1px solid var(--border); border-radius: 10px;
          padding: 16px 48px 16px 16px; overflow-x: auto;
        }
        .oui-ai-code pre {
          font-family: 'SF Mono', 'Fira Code', monospace;
          font-size: 13px; color: var(--text-secondary);
          white-space: pre; line-height: 1.65; margin: 0;
        }
        .oui-ai-copybtn {
          position: absolute; top: 10px; right: 10px;
          background: rgba(248,249,250,0.06); border: 1px solid var(--border);
          border-radius: 6px; padding: 6px; cursor: pointer;
          color: var(--text-muted); transition: all 0.2s; display: flex;
        }
        .oui-ai-copybtn:hover { color: var(--text-primary); background: rgba(248,249,250,0.1); }

        .oui-ai-note {
          border-left: 2px solid var(--cyan);
          background: rgba(0, 180, 216, 0.04);
          border-radius: 0 10px 10px 0;
          padding: 14px 18px; margin: 20px 0;
          font-size: 14px; color: var(--text-secondary); line-height: 1.6;
        }

        @media (max-width: 640px) {
          .oui-ai { padding: 32px 0; }
          .oui-ai-steps { grid-template-columns: 1fr; }
        }
      `}</style>

      <div className="oui-ai">
        <Link to="/" className="oui-ai-back">
          <ArrowLeft size={15} /> All templates
        </Link>

        <h1>AI Agent <em>Integration</em></h1>
        <p className="oui-ai-sub">
          Use Octopus UI templates directly from your AI agent. Download the skill
          file and let your AI scaffold complete UI projects automatically.
        </p>

        <div className="oui-ai-steps">
          <div className="oui-ai-step">
            <div className="oui-ai-step-num">1</div>
            <h3>Download Skill</h3>
            <p>Copy the skill markdown file into your AI agent's skill directory.</p>
          </div>
          <div className="oui-ai-step">
            <div className="oui-ai-step-num">2</div>
            <h3>Invoke Skill</h3>
            <p>Ask your AI to use Octopus UI when you need a support page or FAQ.</p>
          </div>
          <div className="oui-ai-step">
            <div className="oui-ai-step-num">3</div>
            <h3>Customize</h3>
            <p>Edit config.js and content.js to match your brand and articles.</p>
          </div>
        </div>

        <div className="oui-ai-section">
          <h2><FileText size={18} /> Skill File for AI Agents</h2>
          <p>
            Save the content below as <code style={{ background: 'rgba(0,180,216,0.08)', padding: '2px 6px', borderRadius: '4px', fontSize: '13px' }}>octopus-ui.md</code> in
            your AI agent's skills or instructions directory.
          </p>
          <CopyBlock text={SKILL_MD} label="octopus-ui.md" />
        </div>

        <div className="oui-ai-section">
          <h2><Terminal size={18} /> Claude Code Setup</h2>
          <p>
            For Claude Code, save the skill file to your project or user skills directory:
          </p>
          <CopyBlock
            label="Save to project skills"
            text={`mkdir -p .claude/skills\ncurl -o .claude/skills/octopus-ui.md https://raw.githubusercontent.com/octopuslab-tr/octopus-ui/main/skills/octopus-ui.md`}
          />
          <div className="oui-ai-note">
            Once saved, you can invoke the skill by asking your AI: "Use Octopus UI
            to create a support center for my project" — the agent will scaffold
            the template and customize it based on your requirements.
          </div>
        </div>

        <div className="oui-ai-section">
          <h2><Cpu size={18} /> Compatible AI Agents</h2>
          <p>
            The skill file works with any AI coding agent that supports markdown-based
            skill/instruction files:
          </p>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {[
              'Claude Code (Anthropic)',
              'GitHub Copilot Workspace',
              'Cursor AI',
              'Windsurf / Codeium',
              'Any agent supporting .md instructions'
            ].map(a => (
              <li key={a} style={{
                padding: '10px 0', borderBottom: '1px solid var(--border)',
                fontSize: '14px', color: 'var(--text-secondary)',
                display: 'flex', alignItems: 'center', gap: '10px'
              }}>
                <span style={{ width: '6px', height: '6px', borderRadius: '3px', background: 'var(--cyan)', flexShrink: 0 }} />
                {a}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Layout>
  )
}
