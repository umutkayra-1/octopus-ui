export function SupportPreviewCard() {
  return (
    <svg viewBox="0 0 560 320" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%', display: 'block' }}>
      <rect width="560" height="320" rx="2" fill="#FCFCFB"/>

      {/* Header */}
      <rect y="0" width="560" height="38" fill="#FCFCFB"/>
      <line x1="0" y1="38" x2="560" y2="38" stroke="#EAE7E1" strokeWidth="1"/>
      <text x="18" y="25" fontFamily="Georgia, serif" fontSize="12" fontWeight="500" fill="#1A1A1A">YourBrand</text>
      <text x="90" y="25" fontFamily="Georgia, serif" fontSize="10" fill="#9A968E">Destek</text>

      {/* Header nav */}
      <rect x="390" y="14" width="48" height="18" rx="5" stroke="#EAE7E1" strokeWidth="0.8" fill="#fff"/>
      <text x="400" y="26" fontSize="7" fill="#9A968E" fontFamily="sans-serif">Ara   ⌘K</text>
      <rect x="446" y="14" width="22" height="18" rx="5" stroke="#EAE7E1" strokeWidth="0.8" fill="#fff"/>
      <text x="450" y="26" fontSize="7.5" fontWeight="600" fill="#1A1A1A" fontFamily="sans-serif">EN</text>

      {/* Nav links */}
      <text x="290" y="26" fontSize="7.5" fill="#6E6C68" fontFamily="sans-serif">Ana Sayfa</text>
      <text x="340" y="26" fontSize="7.5" fill="#6E6C68" fontFamily="sans-serif">Hakkımızda</text>

      {/* Sidebar */}
      <rect x="0" y="38" width="140" height="282" fill="#FCFCFB"/>
      <line x1="140" y1="38" x2="140" y2="320" stroke="#EAE7E1" strokeWidth="1"/>

      <text x="14" y="62" fontSize="6" fontWeight="700" letterSpacing="1" fill="#9A968E" fontFamily="sans-serif">KONULAR</text>

      {/* Sidebar items */}
      {[
        { y: 74, icon: '🚀', label: 'Başlarken', active: false },
        { y: 96, icon: '⚙️', label: 'Hesap Yönetimi', active: false },
        { y: 118, icon: '📦', label: 'Ödeme & Faturalama', active: false },
        { y: 140, icon: '🔧', label: 'Sorun Giderme', active: false },
      ].map((item, i) => (
        <g key={i}>
          {item.active && <rect x="8" y={item.y - 10} width="124" height="20" rx="5" fill="#F1EEE8"/>}
          <circle cx="22" cy={item.y} r="4" fill={item.active ? '#F1EEE8' : '#F4F2ED'} stroke="#EAE7E1" strokeWidth="0.5"/>
          <text x="32" y={item.y + 3.5} fontSize="8" fill={item.active ? '#1A1A1A' : '#6E6C68'} fontWeight={item.active ? '600' : '500'} fontFamily="sans-serif">{item.label}</text>
          <text x="124" y={item.y + 3} fontSize="7" fill="#BFBAB1" fontFamily="sans-serif">›</text>
        </g>
      ))}

      {/* Main content area */}
      {/* Hero title */}
      <text x="168" y="86" fontFamily="Georgia, serif" fontSize="28" fontWeight="400" fill="#1A1A1A" letterSpacing="-0.8">Yanıtını ara ya da</text>
      <text x="168" y="118" fontFamily="Georgia, serif" fontSize="28" fontWeight="400" fill="#1A1A1A" letterSpacing="-0.8">konuya göz at</text>

      {/* Search bar */}
      <rect x="168" y="136" width="220" height="28" rx="7" stroke="#EAE7E1" strokeWidth="1" fill="#fff"/>
      <circle cx="182" cy="150" r="5" stroke="#9A968E" strokeWidth="1.2" fill="none"/>
      <line x1="186" y1="153" x2="188" y2="155" stroke="#9A968E" strokeWidth="1.2"/>
      <text x="196" y="153" fontSize="8" fill="#9A968E" fontFamily="sans-serif">Makalelerde ara...</text>

      {/* Popular articles */}
      {[
        { y: 180, title: 'Ürünümüz nedir?' },
        { y: 200, title: 'Hızlı başlangıç rehberi' },
        { y: 220, title: 'Şifre değiştirme' },
        { y: 240, title: 'Giriş yapamıyorum' },
      ].map((article, i) => (
        <g key={i}>
          <line x1="168" y1={article.y - 8} x2="420" y2={article.y - 8} stroke="#F1EFEA" strokeWidth="0.7"/>
          <text x="170" y={article.y + 3} fontSize="8.5" fill="#1A1A1A" fontFamily="sans-serif">{article.title}</text>
          <rect x="408" y={article.y - 5} width="10" height="12" rx="2" stroke="#BFBAB1" strokeWidth="0.6" fill="none"/>
          <line x1="411" y1={article.y + 1} x2="415" y2={article.y + 1} stroke="#BFBAB1" strokeWidth="0.5"/>
          <line x1="411" y1={article.y + 3.5} x2="414" y2={article.y + 3.5} stroke="#BFBAB1" strokeWidth="0.5"/>
        </g>
      ))}
      <line x1="168" y1="248" x2="420" y2="248" stroke="#F1EFEA" strokeWidth="0.7"/>

      {/* Collection cards */}
      <text x="168" y="274" fontFamily="Georgia, serif" fontSize="13" fontWeight="500" fill="#1A1A1A" letterSpacing="-0.3">Konular</text>

      {/* Card 1 */}
      <rect x="168" y="284" width="110" height="32" rx="7" stroke="#EAE7E1" strokeWidth="0.8" fill="#fff"/>
      <rect x="176" y="289" width="16" height="16" rx="4" fill="#FDF1EE"/>
      <text x="198" y="300" fontSize="7" fontWeight="500" fill="#1A1A1A" fontFamily="Georgia, serif">Başlarken</text>

      {/* Card 2 */}
      <rect x="286" y="284" width="110" height="32" rx="7" stroke="#EAE7E1" strokeWidth="0.8" fill="#fff"/>
      <rect x="294" y="289" width="16" height="16" rx="4" fill="#F2F6FA"/>
      <text x="316" y="300" fontSize="7" fontWeight="500" fill="#1A1A1A" fontFamily="Georgia, serif">Hesap Yönetimi</text>

      {/* Card 3 */}
      <rect x="404" y="284" width="110" height="32" rx="7" stroke="#EAE7E1" strokeWidth="0.8" fill="#fff"/>
      <rect x="412" y="289" width="16" height="16" rx="4" fill="#FFF7ED"/>
      <text x="434" y="300" fontSize="7" fontWeight="500" fill="#1A1A1A" fontFamily="Georgia, serif">Ödeme & Fatura</text>
    </svg>
  )
}

export function SupportPreviewHero() {
  return (
    <div style={{ position: 'relative', borderRadius: '16px', overflow: 'hidden', border: '1px solid rgba(248,249,250,0.1)', boxShadow: '0 24px 60px rgba(0,0,0,0.4)' }}>
      {/* Browser chrome */}
      <div style={{
        background: '#2A2A3A', padding: '10px 16px',
        display: 'flex', alignItems: 'center', gap: '8px'
      }}>
        <div style={{ display: 'flex', gap: '6px' }}>
          <div style={{ width: '10px', height: '10px', borderRadius: '5px', background: '#FF5F56' }} />
          <div style={{ width: '10px', height: '10px', borderRadius: '5px', background: '#FFBD2E' }} />
          <div style={{ width: '10px', height: '10px', borderRadius: '5px', background: '#27C93F' }} />
        </div>
        <div style={{
          flex: 1, background: 'rgba(255,255,255,0.08)', borderRadius: '6px',
          padding: '4px 12px', fontSize: '11px', color: 'rgba(255,255,255,0.5)',
          fontFamily: 'SF Mono, monospace', textAlign: 'center'
        }}>
          yourbrand.com/support
        </div>
      </div>
      {/* Page content */}
      <div style={{ background: '#FCFCFB' }}>
        <SupportPreviewCard />
      </div>
    </div>
  )
}
