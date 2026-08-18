import { createContext, useContext, useState, useCallback } from 'react'

const T = {
  tr: {
    heroTag: 'Acik Kaynak Sablonlar',
    heroTitle1: 'Harika UI',
    heroTitle2: 'hemen kullanima hazir.',
    heroSub: 'Saniyeler icinde kurabileceginiz, uretim kalitesinde React sablonlari. Config dosyasiyla ozellestirin — ya da AI ajansa birak.',
    chipInstall: 'Tek komutla kur',
    chipAi: 'AI Agent uyumlu',
    chipCustom: 'Tamamen ozellestirilebilir',
    searchPlaceholder: 'Sablon ara...',
    templatesLabel: 'Sablonlar',
    noResults: 'Sablon bulunamadi. Baska bir arama deneyin.',
    viewTemplate: 'Sablonu incele',
    allTemplates: 'Tum sablonlar',
    features: 'Ozellikler',
    about: 'Hakkinda',
    quickInstall: 'Hizli Kurulum',
    info: 'Bilgi',
    version: 'Versiyon',
    category: 'Kategori',
    updated: 'Guncelleme',
    license: 'Lisans',
    viewOnGithub: 'GitHub\'da Gor',
    aiSkillDocs: 'AI Skill Dokumani',
    aiTitle1: 'AI Agent',
    aiTitle2: 'Entegrasyonu',
    aiSub: 'Octopus UI sablonlarini dogrudan AI ajaninizdan kullanin. Skill dosyasini indirin ve AI\'nizin otomatik olarak UI projeleri olusturmasini saglayin.',
    step1Title: 'Skill\'i Indir',
    step1Desc: 'Skill markdown dosyasini AI ajaninizin skill dizinine kopyalayin.',
    step2Title: 'Skill\'i Calistir',
    step2Desc: 'Destek sayfasi veya SSS gerektiginde AI\'ya Octopus UI\'yi kullanmasini soyleyin.',
    step3Title: 'Ozellestir',
    step3Desc: 'config.js ve content.js dosyalarini markaniza ve makalelerinize gore duzenleyin.',
    skillFileTitle: 'AI Ajanlari icin Skill Dosyasi',
    skillFileDesc: 'Asagidaki icerigi AI ajaninizin skills veya instructions dizinine kaydedin.',
    claudeSetupTitle: 'Claude Code Kurulumu',
    claudeSetupDesc: 'Claude Code icin, skill dosyasini proje veya kullanici skills dizinine kaydedin:',
    claudeSetupLabel: 'Proje skill\'lerine kaydet',
    claudeNote: 'Kaydedildikten sonra, AI\'niza soyle: "Projem icin Octopus UI kullanarak bir destek merkezi olustur" — ajan sablonu olusturup gereksinimlerinize gore ozellestirecektir.',
    compatibleTitle: 'Uyumlu AI Ajanlari',
    compatibleDesc: 'Skill dosyasi, markdown tabanli skill/instruction dosyalarini destekleyen tum AI kodlama ajanlariyla calisir:',
    compatibleNote: '.md instruction destekleyen tum ajanlar',
    footerBuiltBy: 'Yapimci',
    footerTagline: 'Insanlar ve AI ajanlari icin acik kaynak UI sablonlari.',
    templates: 'Sablonlar',
    aiAgents: 'AI Ajanlari',
  },
  en: {
    heroTag: 'Open Source Templates',
    heroTitle1: 'Beautiful UI',
    heroTitle2: 'ready to ship.',
    heroSub: 'Production-ready React templates you can install in seconds. Customize with a config file — or let your AI agent do it.',
    chipInstall: 'One-command install',
    chipAi: 'AI Agent ready',
    chipCustom: 'Fully customizable',
    searchPlaceholder: 'Search templates...',
    templatesLabel: 'Templates',
    noResults: 'No templates found. Try a different search.',
    viewTemplate: 'View template',
    allTemplates: 'All templates',
    features: 'Features',
    about: 'About',
    quickInstall: 'Quick Install',
    info: 'Info',
    version: 'Version',
    category: 'Category',
    updated: 'Updated',
    license: 'License',
    viewOnGithub: 'View on GitHub',
    aiSkillDocs: 'AI Skill Docs',
    aiTitle1: 'AI Agent',
    aiTitle2: 'Integration',
    aiSub: 'Use Octopus UI templates directly from your AI agent. Download the skill file and let your AI scaffold complete UI projects automatically.',
    step1Title: 'Download Skill',
    step1Desc: 'Copy the skill markdown file into your AI agent\'s skill directory.',
    step2Title: 'Invoke Skill',
    step2Desc: 'Ask your AI to use Octopus UI when you need a support page or FAQ.',
    step3Title: 'Customize',
    step3Desc: 'Edit config.js and content.js to match your brand and articles.',
    skillFileTitle: 'Skill File for AI Agents',
    skillFileDesc: 'Save the content below in your AI agent\'s skills or instructions directory.',
    claudeSetupTitle: 'Claude Code Setup',
    claudeSetupDesc: 'For Claude Code, save the skill file to your project or user skills directory:',
    claudeSetupLabel: 'Save to project skills',
    claudeNote: 'Once saved, you can invoke the skill by asking your AI: "Use Octopus UI to create a support center for my project" — the agent will scaffold the template and customize it based on your requirements.',
    compatibleTitle: 'Compatible AI Agents',
    compatibleDesc: 'The skill file works with any AI coding agent that supports markdown-based skill/instruction files:',
    compatibleNote: 'Any agent supporting .md instructions',
    footerBuiltBy: 'Built by',
    footerTagline: 'Open-source UI templates for humans and AI agents.',
    templates: 'Templates',
    aiAgents: 'AI Agents',
  }
}

const LangCtx = createContext()

export function LangProvider({ children }) {
  const [lang, setLang] = useState('tr')
  const toggle = useCallback(() => setLang(l => l === 'tr' ? 'en' : 'tr'), [])
  const t = useCallback((key) => T[lang][key] || T.en[key] || key, [lang])
  return (
    <LangCtx.Provider value={{ lang, toggle, t }}>
      {children}
    </LangCtx.Provider>
  )
}

export function useLang() {
  return useContext(LangCtx)
}
