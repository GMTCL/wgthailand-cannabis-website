import './App.css'

// SparklesText Component
const SparklesText = ({ children, className = "", ...props }) => {
  return (
    <span
      className={`relative inline-block ${className}`}
      {...props}
    >
      <span
        className="relative z-10"
        style={{
          background: 'linear-gradient(45deg, #68d391, #9ae6b4, #c6f6d5, #9ae6b4, #68d391)',
          backgroundSize: '300% 300%',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          animation: 'sparkle 3s ease-in-out infinite'
        }}
      >
        {children}
      </span>
      <span
        className="absolute inset-0 z-0"
        style={{
          background: 'linear-gradient(45deg, #68d391, #9ae6b4, #c6f6d5, #9ae6b4, #68d391)',
          backgroundSize: '300% 300%',
          filter: 'blur(8px)',
          opacity: 0.7,
          animation: 'sparkle 3s ease-in-out infinite'
        }}
      />
      <span
        className="absolute -top-1 -right-1 text-yellow-400"
        style={{
          animation: 'sparkle 2s ease-in-out infinite 0.5s'
        }}
      >
        ✨
      </span>
      <span
        className="absolute -bottom-1 -left-1 text-yellow-400"
        style={{
          animation: 'sparkle 2.5s ease-in-out infinite 1s'
        }}
      >
        ⭐
      </span>
    </span>
  )
}

// ShineBorder Component
const ShineBorder = ({ children, shineColor = ["#A07CFE", "#FE8FB5", "#FFBE7B"], borderWidth = 2, duration = 14, className = "" }) => {
  return (
    <div className={`relative ${className}`} style={{ position: 'relative' }}>
      <div
        style={{
          "--border-width": `${borderWidth}px`,
          "--duration": `${duration}s`,
          backgroundImage: `radial-gradient(transparent,transparent, ${
            Array.isArray(shineColor) ? shineColor.join(",") : shineColor
          },transparent,transparent)`,
          backgroundSize: "300% 300%",
          mask: `linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)`,
          WebkitMask: `linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)`,
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
          padding: "var(--border-width)",
          position: 'absolute',
          inset: 0,
          borderRadius: 'inherit',
          animation: 'shine var(--duration) infinite linear',
          pointerEvents: 'none'
        }}
      />
      <div style={{ position: 'relative', zIndex: 1 }}>
        {children}
      </div>
    </div>
  )
}

function App() {
  return (
    <div className="plantshop-landing" style={{ minHeight: '100vh', width: '100vw', overflowX: 'hidden', background: 'linear-gradient(135deg, #f7fafc 0%, #edf2f7 50%, #e2e8f0 100%)', color: '#2d3748', fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif', position: 'relative' }}>
      {/* Animated Background - floating leaves and sparkles */}
      <div style={{ position: 'fixed', inset: 0, zIndex: 0, pointerEvents: 'none' }}>
        <svg width="100vw" height="100vh" style={{ width: '100vw', height: '100vh', position: 'absolute', left: 0, top: 0 }}>
          <defs>
            <radialGradient id="bg2" cx="50%" cy="50%" r="80%" fx="50%" fy="50%">
              <stop offset="0%" stopColor="#a5d6a7bb" />
              <stop offset="100%" stopColor="transparent" />
            </radialGradient>
          </defs>
          {/* ใบไม้ลอย */}
          {[...Array(18)].map((_, i) => (
            <circle key={i} cx={Math.random()*100+"vw"} cy={Math.random()*100+"vh"} r={Math.random()*18+8} fill="#81c784" opacity={0.18+Math.random()*0.2} style={{
              animation: `floatLeaf ${6+Math.random()*6}s ease-in-out infinite`,
            }}/>
          ))}
        </svg>
      </div>

      {/* Header */}
      <header style={{ 
        background: 'linear-gradient(135deg, rgba(45,55,72,0.95) 0%, rgba(74,85,104,0.9) 50%, rgba(45,55,72,0.95) 100%)', 
        borderBottom: '1px solid rgba(72,187,120,0.2)', 
        boxShadow: '0 2px 15px rgba(0,0,0,0.05)', 
        zIndex: 10, 
        position: 'sticky',
        top: 0,
        padding: '1.2rem 0',
        backdropFilter: 'blur(15px)',
        border: 'none'
      }}>
        <div style={{ 
          maxWidth: 1400, 
          margin: '0 auto', 
          padding: '0 clamp(1rem, 4vw, 2rem)',
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'space-between',
          gap: 'clamp(1rem, 3vw, 2rem)',
          flexWrap: 'wrap'
        }}>
          {/* Logo Section - ด้านซ้าย */}
          <div style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: '1rem',
            flex: '0 0 auto'
          }}>
            <a href="#home" style={{ textDecoration: 'none' }}>
              <h1 style={{ 
                fontSize: 'clamp(1.8rem,3vw,2.2rem)', 
                fontWeight: 800, 
                letterSpacing: 1.5, 
                margin: 0,
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}>
                <SparklesText>WGThailand</SparklesText>
              </h1>
            </a>
          </div>

          {/* Navigation Menu - ตรงกลาง */}
          <nav style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: 'clamp(0.5rem, 2vw, 1rem)',
            flex: '1',
            justifyContent: 'center',
            flexWrap: 'wrap',
            minWidth: 0
          }}>
            {/* สินค้าทั้งหมด - Dropdown */}
            <div style={{ position: 'relative', display: 'inline-block' }}>
              <button 
                style={{
                  color: '#f7fafc',
                  textDecoration: 'none',
                  fontWeight: 500,
                  fontSize: 'clamp(0.8rem, 2vw, 1rem)',
                  padding: 'clamp(10px, 2.5vw, 12px) clamp(16px, 3.5vw, 24px)',
                  borderRadius: '12px',
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  whiteSpace: 'nowrap',
                  background: 'rgba(104,211,145,0.08)',
                  border: '1px solid rgba(104,211,145,0.15)',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 'clamp(6px, 1.5vw, 10px)',
                  backdropFilter: 'blur(20px)',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
                }}
                onMouseEnter={(e) => {
                  e.target.style.color = '#9ae6b4';
                  e.target.style.background = 'rgba(104,211,145,0.15)';
                  e.target.style.borderColor = 'rgba(104,211,145,0.3)';
                  e.target.style.transform = 'translateY(-2px)';
                  e.target.style.boxShadow = '0 4px 16px rgba(104,211,145,0.2)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.color = '#f7fafc';
                  e.target.style.background = 'rgba(104,211,145,0.08)';
                  e.target.style.borderColor = 'rgba(104,211,145,0.15)';
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.boxShadow = '0 2px 8px rgba(0,0,0,0.05)';
                }}
                onClick={() => {
                  const dropdown = document.getElementById('products-dropdown');
                  dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
                }}
              >
                🌿 สินค้าทั้งหมด ▼
              </button>
              
              {/* Dropdown Menu */}
              <div 
                id="products-dropdown"
                style={{
                  display: 'none',
                  position: 'absolute',
                  top: '100%',
                  left: '0',
                  background: 'linear-gradient(135deg, #1a1a1a, #2d2d2d)',
                  border: '1px solid rgba(67,160,71,0.3)',
                  borderRadius: '8px',
                  boxShadow: '0 8px 32px rgba(0,0,0,0.4)',
                  zIndex: 1000,
                  minWidth: '200px',
                  padding: '8px 0',
                  marginTop: '4px'
                }}
              >
                {[
                  { name: 'V Series', href: '#v-series', icon: '💎' },
                  { name: 'T Series', href: '#t-series', icon: '🌟' },
                  { name: 'D Series', href: '#d-series', icon: '🔥' },
                  { name: 'S Series', href: '#s-series', icon: '⚡' },
                  { name: 'M Series', href: '#m-series', icon: '🎯' },
                  { name: 'B Series', href: '#b-series', icon: '💎' },
                  { name: 'G Series', href: '#g-series', icon: '🐉' },
                  { name: 'E Series', href: '#e-series', icon: '🌿' },
                  { name: 'A Series', href: '#a-series', icon: '🚀' },
                  { name: 'P Series', href: '#p-series', icon: '💜' }
                ].map((item, idx) => (
                  <a 
                    key={idx}
                    href={item.href}
                    style={{
                      color: '#fff',
                      textDecoration: 'none',
                      fontWeight: 500,
                      fontSize: '0.9rem',
                      padding: '10px 16px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      transition: 'all 0.3s ease',
                      borderBottom: idx < 9 ? '1px solid rgba(67,160,71,0.1)' : 'none'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.background = 'rgba(67,160,71,0.2)';
                      e.target.style.color = '#43a047';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.background = 'transparent';
                      e.target.style.color = '#fff';
                    }}
                    onClick={() => {
                      document.getElementById('products-dropdown').style.display = 'none';
                    }}
                  >
                    <span>{item.icon}</span>
                    {item.name}
                  </a>
                ))}
              </div>
            </div>

            {/* เมนูหลัก */}
            <a 
              href="#home"
              style={{
                color: '#f7fafc',
                textDecoration: 'none',
                fontWeight: 500,
                fontSize: 'clamp(0.8rem, 2vw, 1rem)',
                padding: 'clamp(10px, 2.5vw, 12px) clamp(16px, 3.5vw, 24px)',
                borderRadius: '12px',
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                whiteSpace: 'nowrap',
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.1)',
                backdropFilter: 'blur(20px)',
                boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
              }}
              onMouseEnter={(e) => {
                e.target.style.color = '#9ae6b4';
                e.target.style.background = 'rgba(104,211,145,0.15)';
                e.target.style.borderColor = 'rgba(104,211,145,0.3)';
                e.target.style.transform = 'translateY(-2px)';
                e.target.style.boxShadow = '0 4px 16px rgba(104,211,145,0.2)';
              }}
              onMouseLeave={(e) => {
                e.target.style.color = '#f7fafc';
                e.target.style.background = 'rgba(255,255,255,0.05)';
                e.target.style.borderColor = 'rgba(255,255,255,0.1)';
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = '0 2px 8px rgba(0,0,0,0.05)';
              }}
            >
              หน้าหลัก
            </a>

            {/* บทความ */}
            <a 
              href="#articles"
              style={{
                color: '#fff',
                textDecoration: 'none',
                fontWeight: 600,
                fontSize: '1rem',
                padding: '10px 20px',
                borderRadius: '6px',
                transition: 'all 0.3s ease',
                whiteSpace: 'nowrap'
              }}
              onMouseEnter={(e) => {
                e.target.style.color = '#43a047';
                e.target.style.background = 'rgba(67,160,71,0.1)';
              }}
              onMouseLeave={(e) => {
                e.target.style.color = '#fff';
                e.target.style.background = 'transparent';
              }}
            >
              บทความ
            </a>

            {/* ติดต่อเรา */}
            <a 
              href="https://lin.ee/D8bgdJlk"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: '#fff',
                textDecoration: 'none',
                fontWeight: 600,
                fontSize: 'clamp(0.8rem, 2vw, 1rem)',
                padding: 'clamp(10px, 2.5vw, 12px) clamp(16px, 3.5vw, 24px)',
                borderRadius: '12px',
                background: 'linear-gradient(135deg, rgba(104,211,145,0.9), rgba(154,230,180,0.8))',
                border: '1px solid rgba(104,211,145,0.3)',
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                boxShadow: '0 4px 20px rgba(104,211,145,0.25)',
                whiteSpace: 'nowrap',
                display: 'flex',
                alignItems: 'center',
                gap: 'clamp(6px, 1.5vw, 10px)',
                backdropFilter: 'blur(20px)'
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'translateY(-3px)';
                e.target.style.boxShadow = '0 8px 25px rgba(104,211,145,0.4)';
                e.target.style.background = 'linear-gradient(135deg, rgba(154,230,180,0.95), rgba(198,246,213,0.9))';
                e.target.style.borderColor = 'rgba(104,211,145,0.5)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = '0 4px 20px rgba(104,211,145,0.25)';
                e.target.style.background = 'linear-gradient(135deg, rgba(104,211,145,0.9), rgba(154,230,180,0.8))';
                e.target.style.borderColor = 'rgba(104,211,145,0.3)';
              }}
            >
              <div style={{ 
                width: '20px', 
                height: '20px', 
                backgroundImage: 'url(/line-at-logo-png-8.png)',
                backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center'
              }} />
              ติดต่อเรา
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" style={{ textAlign: 'center', padding: 'clamp(3rem,8vw,6rem) 2vw clamp(2rem,6vw,3rem)', position: 'relative', zIndex: 1 }}>
        <h2 style={{ fontSize: 'clamp(2rem,6vw,3.2rem)', fontWeight: 900, color: '#388e3c', textShadow: '0 0 32px #43a04788', marginBottom: 24, letterSpacing: 2 }}>สายพันธุ์กัญชาคุณภาพดี</h2>
        <p style={{ fontSize: 'clamp(1rem,3vw,1.5rem)', color: '#234d20', margin: '1.5rem 0 2rem', fontWeight: 500 }}>เลือกชมสายพันธุ์กัญชาหลากหลายที่เราคัดสรรมาอย่างดี</p>
        
        {/* สินค้าจัดกลุ่มตามสายพันธุ์ */}
        <div id="products">
        {[
          {
            category: 'V Series',
            id: 'v-series',
            items: [
              { name: 'V48-King Julce', img: '/NewRelease_Marijuana.jpg' },
              { name: 'V49-Lemon Orange', img: '/NewRelease_Marijuana.jpg' },
              { name: 'V52-Mimosa Orange Punch', img: '/NewRelease_Marijuana.jpg' },
              { name: 'V53-AK43', img: '/NewRelease_Marijuana.jpg' }
            ]
          },
          {
            category: 'T Series',
            id: 't-series',
            items: [
              { name: 'T98-Chem Berry', img: '/NewRelease_Marijuana.jpg' },
              { name: 'T02-Ursa Major', img: '/NewRelease_Marijuana.jpg' },
              { name: 'T100-OG Cake', img: '/NewRelease_Marijuana.jpg' },
              { name: 'T03-Platinum Widow', img: '/NewRelease_Marijuana.jpg' },
              { name: 'T04-Bahama Mama', img: '/NewRelease_Marijuana.jpg' }
            ]
          },
          {
            category: 'D Series',
            id: 'd-series',
            items: [
              { name: 'D10-Super Boof', img: '/NewRelease_Marijuana.jpg' },
              { name: 'D11-Ice Cream Cake', img: '/NewRelease_Marijuana.jpg' }
            ]
          },
          {
            category: 'S Series',
            id: 's-series',
            items: [
              { name: 'S03-Runtz OF Eden', img: '/NewRelease_Marijuana.jpg' },
              { name: 'S04-Super Boof', img: '/NewRelease_Marijuana.jpg' },
              { name: 'S05-Permanent Maker', img: '/NewRelease_Marijuana.jpg' },
              { name: 'S09-Sour Fuel', img: '/NewRelease_Marijuana.jpg' },
              { name: 'S10-B Runtz', img: '/NewRelease_Marijuana.jpg' }
            ]
          },
          {
            category: 'M Series',
            id: 'm-series',
            items: [
              { name: 'M18-Ricky Bobby', img: '/NewRelease_Marijuana.jpg' },
              { name: 'M19-Slap Donker', img: '/NewRelease_Marijuana.jpg' },
              { name: 'M20-Next Level', img: '/NewRelease_Marijuana.jpg' },
              { name: 'M21-OG Kush', img: '/NewRelease_Marijuana.jpg' },
              { name: 'M22-End Game', img: '/NewRelease_Marijuana.jpg' }
            ]
          },
          {
            category: 'B Series',
            id: 'b-series',
            items: [
              { name: 'B52 Dennis Poison', img: '/NewRelease_Marijuana.jpg' },
              { name: 'B64-TropicanaCherry', img: '/NewRelease_Marijuana.jpg' },
              { name: 'B68-Blissful Wizard', img: '/NewRelease_Marijuana.jpg' },
              { name: 'B73-Black Cherry', img: '/NewRelease_Marijuana.jpg' },
              { name: 'B74-Sneak Attack OG', img: '/NewRelease_Marijuana.jpg' },
              { name: 'B75-Animal Scout', img: '/NewRelease_Marijuana.jpg' },
              { name: 'B76-B Runtz', img: '/NewRelease_Marijuana.jpg' },
              { name: 'B77-Vice City', img: '/NewRelease_Marijuana.jpg' }
            ]
          },
          {
            category: 'G Series',
            id: 'g-series',
            items: [
              { name: 'G05-Dragon Breath', img: '/NewRelease_Marijuana.jpg' },
              { name: 'G06-Truffle Monkey', img: '/NewRelease_Marijuana.jpg' },
              { name: 'G07-Trop Cherry', img: '/NewRelease_Marijuana.jpg' },
              { name: 'G08-Purple Urkle', img: '/NewRelease_Marijuana.jpg' },
              { name: 'G09-Black Berry', img: '/NewRelease_Marijuana.jpg' },
              { name: 'G10-Watermelon Punch', img: '/NewRelease_Marijuana.jpg' }
            ]
          },
          {
            category: 'E Series',
            id: 'e-series',
            items: [
              { name: 'E04-Blue Forest Berry', img: '/NewRelease_Marijuana.jpg' },
              { name: 'E05-Cherry Zoop', img: '/NewRelease_Marijuana.jpg' },
              { name: 'E06-Permanent White Marker', img: '/NewRelease_Marijuana.jpg' }
            ]
          },
          {
            category: 'A Series',
            id: 'a-series',
            items: [
              { name: 'A18-Chocolate Haze', img: '/NewRelease_Marijuana.jpg' },
              { name: 'A19-G.S.C', img: '/NewRelease_Marijuana.jpg' }
            ]
          },
          {
            category: 'P Series',
            id: 'p-series',
            items: [
              { name: 'P01-Monkey Glue', img: '/NewRelease_Marijuana.jpg' },
              { name: 'P02-Blue Diesel', img: '/NewRelease_Marijuana.jpg' },
              { name: 'P03-Black Widow', img: '/NewRelease_Marijuana.jpg' }
            ]
          }
        ].map((category, categoryIdx) => (
          <div key={categoryIdx} id={category.id} style={{ marginBottom: '4rem', scrollMarginTop: '100px' }}>
            {/* หัวข้อหมวดหมู่ */}
            <h3 style={{
              fontSize: 'clamp(1.8rem,4vw,2.5rem)',
              fontWeight: 900,
              color: '#1a365d',
              textAlign: 'center',
              marginBottom: '2rem',
              textShadow: '0 4px 20px rgba(26,54,93,0.2)',
              letterSpacing: 2,
              position: 'relative'
            }}>
              {category.category}
              <div style={{
                position: 'absolute',
                bottom: '-8px',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '60px',
                height: '4px',
                background: 'linear-gradient(90deg, #48bb78, #68d391)',
                borderRadius: '2px'
              }} />
            </h3>
            
            {/* สไลด์แนวนอนอัตโนมัติ */}
            <div className="auto-slider" style={{
              display: 'flex',
              gap: 'clamp(1rem, 3vw, 1.5rem)',
              overflowX: 'visible',
              padding: '1rem clamp(2rem, 8vw, 5rem)',
              position: 'relative',
              animation: `slideLeft ${20 + categoryIdx * 2}s linear infinite`,
              width: '100%',
              maxWidth: '100vw',
              boxSizing: 'border-box',
              margin: '0 auto'
            }}>
              {[...category.items, ...category.items].map((item, idx) => (
                <div key={idx} className="cannabis-card" style={{ 
                    position: 'relative', 
                    background: 'linear-gradient(135deg,#1a1a1a 0%,#2d2d2d 50%,#1a1a1a 100%)', 
                    borderRadius: 'clamp(16px, 4vw, 24px)', 
                    padding: 0, 
                    display: 'flex', 
                    flexDirection: 'column', 
                    animation: `fadeInUp .8s ${0.1+idx*0.05}s both`, 
                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)', 
                    cursor: 'pointer', 
                    overflow: 'hidden',
                    minHeight: 'clamp(350px, 20vw, 400px)',
                    width: 'clamp(280px, 25vw, 300px)',
                    flexShrink: 0
                  }}>
                  {/* ป้ายยอดนิยม */}
                  <span style={{ 
                    position: 'absolute', 
                    top: 16, 
                    left: 16, 
                    background: 'linear-gradient(135deg,#ff6b35,#f7931e)', 
                    color: '#fff', 
                    fontWeight: 800, 
                    fontSize: 12, 
                    borderRadius: 20, 
                    padding: '6px 12px', 
                    zIndex: 3, 
                    boxShadow: '0 4px 12px rgba(255,107,53,0.4)',
                    textTransform: 'uppercase',
                    letterSpacing: 1
                  }}>ยอดนิยม</span>
                  
                  {/* รูปสินค้าเต็ม */}
                  <div style={{ 
                    width: '100%', 
                    height: 'clamp(200px, 15vw, 250px)', 
                    borderRadius: 'clamp(16px, 4vw, 20px) clamp(16px, 4vw, 20px) 0 0', 
                    overflow: 'hidden', 
                    position: 'relative',
                    background: 'linear-gradient(45deg, #1a1a1a, #2d2d2d)'
                  }}>
                    <img src={item.img} alt={item.name} style={{ 
                      width: '100%', 
                      height: '100%', 
                      objectFit: 'cover',
                      transition: 'transform 0.4s ease'
                    }} />
                    <div className="overlay" style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      background: 'linear-gradient(135deg, rgba(67,160,71,0.1) 0%, rgba(129,199,132,0.2) 100%)',
                      opacity: 0,
                      transition: 'opacity 0.3s ease'
                    }} />
                  </div>
                  
                  {/* ข้อมูลสินค้า */}
                  <div style={{ padding: 'clamp(16px, 4vw, 20px)', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                    {/* ชื่อสินค้า */}
                    <div>
                      <h3 style={{ 
                        fontWeight: 800, 
                        color: '#fff', 
                        fontSize: 'clamp(1.1rem, 3vw, 1.4rem)', 
                        margin: '0 0 clamp(6px, 2vw, 8px) 0', 
                        textShadow: '0 2px 8px rgba(0,0,0,0.5)',
                        letterSpacing: 0.5
                      }}>{item.name}</h3>
                      
                      {/* ข้อมูลเพิ่มเติม */}
                      <div style={{ 
          display: 'flex',
                        gap: '8px', 
                        marginBottom: '12px',
                        flexWrap: 'wrap'
                      }}>
                        <span style={{ 
                          background: 'rgba(67,160,71,0.2)', 
                          color: '#81c784', 
                          padding: '4px 8px', 
                          borderRadius: 12, 
                          fontSize: '0.8rem',
                          fontWeight: 600
                        }}>Premium</span>
                        <span style={{ 
                          background: 'rgba(255,193,7,0.2)', 
                          color: '#ffc107', 
                          padding: '4px 8px', 
                          borderRadius: 12, 
                          fontSize: '0.8rem',
                          fontWeight: 600
                        }}>คุณภาพดี</span>
                      </div>
                    </div>
                    
                    {/* ปุ่มสั่งซื้อสินค้า */}
                    <a href="https://lin.ee/D8bgdJlk" target="_blank" rel="noopener noreferrer" style={{ 
                      background: 'linear-gradient(135deg,#667eea,#764ba2,#667eea)', 
                      backgroundSize: '200% 200%',
                      color: '#fff', 
                      fontWeight: 700, 
                      fontSize: 'clamp(0.8rem, 2.5vw, 1rem)', 
                      borderRadius: 'clamp(12px, 3vw, 16px)', 
                      padding: 'clamp(10px, 3vw, 12px) clamp(16px, 4vw, 20px)', 
                      border: 'none', 
                      boxShadow: '0 4px 16px rgba(102,126,234,0.4)', 
                      cursor: 'pointer', 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center', 
                      gap: 'clamp(6px, 2vw, 8px)', 
                      transition: 'all 0.3s ease',
                      textTransform: 'uppercase',
                      letterSpacing: 1,
                      position: 'relative',
                      overflow: 'hidden',
                      textDecoration: 'none'
                    }}>
                      <div style={{ 
                width: 'clamp(16px, 4vw, 20px)', 
                height: 'clamp(16px, 4vw, 20px)', 
                backgroundImage: 'url(/line-at-logo-png-8.png)',
                backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center'
              }} />
                      สั่งซื้อสินค้า
                    </a>
              </div>
            </div>
          ))}
        </div>
        </div>
        ))}
        </div>

        <style>{`
          .auto-slider {
            scrollbar-width: thin;
            scrollbar-color: #43a047 transparent;
            padding-left: 5rem;
            padding-right: 5rem;
            box-sizing: border-box;
            position: relative;
            overflow: visible;
          }
          .auto-slider::-webkit-scrollbar {
            height: 0.5rem;
            background: transparent;
          }
          .auto-slider::-webkit-scrollbar-thumb {
            background: linear-gradient(90deg, #43a047, #81c784);
            border-radius: 10px;
          }
          .cannabis-card {
            flex: 0 0 auto;
            width: 300px;
            margin-right: 1.5rem;
            box-sizing: border-box;
            position: relative;
          }
          .cannabis-card:last-child {
            margin-right: 5rem;
          }
          .cannabis-card:hover {
            transform: translateY(-12px) scale(1.02);
            box-shadow: 0 20px 40px rgba(0,0,0,0.4), 0 0 0 2px rgba(67,160,71,0.6);
          }
          .cannabis-card:hover img {
            transform: scale(1.05);
          }
          .cannabis-card:hover .overlay {
            opacity: 1;
          }
          .cannabis-card button:hover {
            background-position: 100% 0;
            transform: translateY(-2px);
            box-shadow: 0 8px 20px rgba(67,160,71,0.6);
          }
        @keyframes slideLeft {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes slideArticles {
          0% { transform: translateX(0); }
          33.33% { transform: translateX(-100%); }
          66.66% { transform: translateX(-200%); }
          100% { transform: translateX(0); }
        }
          @keyframes shine {
            0% {
              background-position: 0% 0%;
            }
            50% {
              background-position: 100% 100%;
            }
            100% {
              background-position: 0% 0%;
            }
          }
          @keyframes fadeInUp {
            from { 
              opacity: 0; 
              transform: translateY(30px); 
            }
            to { 
              opacity: 1; 
              transform: translateY(0); 
            }
          }
          @keyframes floatCard {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-5px); }
          }
          .cannabis-card:nth-child(odd) {
            animation: fadeInUp 0.8s both, floatCard 6s ease-in-out infinite;
          }
          .cannabis-card:nth-child(even) {
            animation: fadeInUp 0.8s both, floatCard 6s ease-in-out infinite 3s;
          }
          @media (max-width: 1200px) {
            .cannabis-card {
              width: clamp(260px, 25vw, 300px);
              margin-right: clamp(0.8rem, 2vw, 1.5rem);
            }
            .cannabis-card:last-child {
              margin-right: clamp(2rem, 6vw, 5rem);
            }
            .auto-slider {
              padding-left: clamp(1.5rem, 6vw, 5rem);
              padding-right: clamp(1.5rem, 6vw, 5rem);
            }
          }
          @media (max-width: 768px) {
            .cannabis-card {
              width: clamp(240px, 30vw, 280px);
              margin-right: clamp(0.6rem, 2vw, 1rem);
            }
            .cannabis-card:last-child {
              margin-right: clamp(1.5rem, 5vw, 4rem);
            }
            .auto-slider {
              padding-left: clamp(1rem, 4vw, 4rem);
              padding-right: clamp(1rem, 4vw, 4rem);
            }
          }
          @media (max-width: 480px) {
            .cannabis-card {
              width: clamp(220px, 35vw, 260px);
              margin-right: clamp(0.4rem, 2vw, 0.8rem);
            }
            .cannabis-card:last-child {
              margin-right: clamp(1rem, 4vw, 3rem);
            }
            .auto-slider {
              padding-left: clamp(0.8rem, 3vw, 3rem);
              padding-right: clamp(0.8rem, 3vw, 3rem);
            }
          }
          @media (max-width: 360px) {
            .cannabis-card {
              width: clamp(200px, 40vw, 240px);
              margin-right: clamp(0.3rem, 2vw, 0.6rem);
            }
            .cannabis-card:last-child {
              margin-right: clamp(0.8rem, 3vw, 2rem);
            }
            .auto-slider {
              padding-left: clamp(0.5rem, 2vw, 2rem);
              padding-right: clamp(0.5rem, 2vw, 2rem);
            }
          }
        `}</style>
      </section>

      {/* จุดเด่นร้าน */}
      <section style={{ 
        padding: 'clamp(4rem,10vw,6rem) 2vw', 
        textAlign: 'center', 
        maxWidth: 1200, 
        margin: '0 auto', 
        zIndex: 1, 
        position: 'relative'
      }}>
        <h2 style={{ 
          fontSize: 'clamp(2.5rem,6vw,3.5rem)', 
          color: '#1a365d', 
          fontWeight: 900, 
          marginBottom: '3rem',
          textShadow: '0 4px 20px rgba(26,54,93,0.2)',
          letterSpacing: 2,
          position: 'relative'
        }}>
          ทำไมต้องซื้อกับเรา
          <div style={{
            position: 'absolute',
            bottom: '-12px',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '80px',
            height: '4px',
            background: 'linear-gradient(90deg, #48bb78, #68d391)',
            borderRadius: '2px'
          }} />
        </h2>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
          gap: '2rem', 
          marginTop: '2rem' 
        }}>
          {[
            { title: 'ให้คำแนะนำตามความต้องการ', icon: '🎯', desc: 'ผู้เชี่ยวชาญพร้อมให้คำปรึกษา' },
            { title: 'จัดส่งรวดเร็วทั่วประเทศ', icon: '🚚', desc: 'ส่งถึงบ้านภายใน 1-3 วัน' },
            { title: 'มีรีวิวจากลูกค้าจริง', icon: '⭐', desc: 'ลูกค้าพึงพอใจ 99%' }
          ].map((point, idx) => (
            <div key={idx} style={{
              padding: '2rem',
              textAlign: 'center',
              animation: `fadeInUp .8s ${0.2+idx*0.1}s both`,
              background: 'linear-gradient(135deg, #ffffff, #f7fafc)',
              borderRadius: '20px',
              border: '1px solid rgba(72,187,120,0.3)',
              boxShadow: '0 8px 32px rgba(26,54,93,0.1), 0 0 20px rgba(72,187,120,0.1)',
              backdropFilter: 'blur(10px)',
              transition: 'all 0.3s ease',
              position: 'relative',
              overflow: 'hidden'
            }}>
              <div style={{ 
                fontSize: '3.5rem', 
                marginBottom: '1.5rem',
                animation: `bounce 2s infinite ${idx * 0.2}s`,
                opacity: 0.9
              }}>{point.icon}</div>
              <h3 style={{ 
                fontSize: '1.4rem', 
                fontWeight: 700, 
                color: '#1a365d', 
                marginBottom: '1rem',
                letterSpacing: 0.3
              }}>{point.title}</h3>
              <p style={{ 
                color: '#4a5568', 
                fontSize: '1rem', 
                lineHeight: 1.6,
                margin: 0,
                opacity: 0.9
              }}>{point.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* บทความเกี่ยวกับกัญชา */}
      <section id="articles" style={{ 
        padding: 'clamp(3rem,8vw,5rem) 2vw', 
        textAlign: 'center', 
        maxWidth: 1200, 
        margin: '0 auto', 
        zIndex: 1, 
        position: 'relative'
      }}>
        <h2 style={{ 
          fontSize: 'clamp(2rem,5vw,3rem)', 
          color: '#1a365d', 
          fontWeight: 900, 
          marginBottom: 32,
          textShadow: '0 4px 20px rgba(26,54,93,0.2)',
          letterSpacing: 1
        }}>บทความเกี่ยวกับกัญชา</h2>
        
        {/* สไลด์บทความ */}
        <div style={{
          position: 'relative',
          overflow: 'hidden',
          borderRadius: '24px',
          background: 'linear-gradient(135deg, rgba(26,26,26,0.8), rgba(45,45,45,0.9))',
          border: '1px solid rgba(67,160,71,0.2)',
          boxShadow: '0 12px 40px rgba(0,0,0,0.3)',
          marginTop: '2rem'
        }}>
          <div style={{
            display: 'flex',
            transition: 'transform 0.5s ease-in-out',
            animation: 'slideArticles 15s linear infinite'
          }}>
            {[
              {
                title: 'สายพันธุ์กัญชาที่เหมาะสำหรับผู้เริ่มต้น',
                content: 'สำหรับผู้ที่เพิ่งเริ่มต้นการปลูกกัญชา แนะนำให้เลือกสายพันธุ์ที่ดูแลง่าย เช่น Autoflowering strains ที่มีวงจรชีวิตสั้น และทนทานต่อสภาพอากาศที่หลากหลาย',
                img: '/NewRelease_Marijuana.jpg',
                category: 'การปลูก',
                readTime: '5 นาที'
              },
              {
                title: 'ประโยชน์ทางการแพทย์ของกัญชา',
                content: 'กัญชามีสาร CBD และ THC ที่มีประโยชน์ทางการแพทย์ ช่วยลดอาการปวด ลดการอักเสบ และช่วยในการนอนหลับ แต่ควรใช้ภายใต้การดูแลของแพทย์',
                img: '/NewRelease_Marijuana.jpg',
                category: 'การแพทย์',
                readTime: '7 นาที'
              },
              {
                title: 'การเก็บเกี่ยวและแปรรูปกัญชา',
                content: 'การเก็บเกี่ยวที่ถูกต้องจะช่วยรักษาคุณภาพของกัญชา ควรเก็บเกี่ยวในช่วงเวลาที่เหมาะสม และใช้วิธีการอบแห้งที่ถูกต้องเพื่อรักษาสารสำคัญ',
                img: '/NewRelease_Marijuana.jpg',
                category: 'การแปรรูป',
                readTime: '6 นาที'
              }
            ].map((article, idx) => (
              <div key={idx} style={{
                minWidth: '100%',
                display: 'flex',
                alignItems: 'center',
                padding: '3rem',
                gap: '2rem'
              }}>
                {/* รูปภาพ */}
                <div style={{
                  flex: '0 0 300px',
                  height: '200px',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  position: 'relative'
                }}>
                  <img src={article.img} alt={article.title} style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }} />
                  <div style={{
                    position: 'absolute',
                    top: '12px',
                    left: '12px',
                    background: 'rgba(67,160,71,0.9)',
                    color: 'white',
                    padding: '6px 12px',
                    borderRadius: '20px',
                    fontSize: '0.8rem',
                    fontWeight: 600
                  }}>{article.category}</div>
                </div>
                
                {/* เนื้อหา */}
                <div style={{ flex: 1, textAlign: 'left' }}>
                  <h3 style={{
                    fontSize: '1.8rem',
                    color: '#43a047',
                    fontWeight: 800,
                    marginBottom: '1rem',
                    lineHeight: 1.3
                  }}>{article.title}</h3>
                  
                  <p style={{
                    fontSize: '1.1rem',
                    color: '#e0e0e0',
                    lineHeight: 1.6,
                    marginBottom: '1.5rem'
                  }}>{article.content}</p>
                  
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem',
                    marginBottom: '1.5rem'
                  }}>
                    <span style={{
                      background: 'rgba(67,160,71,0.2)',
                      color: '#81c784',
                      padding: '4px 12px',
                      borderRadius: '16px',
                      fontSize: '0.9rem',
                      fontWeight: 600
                    }}>⏱️ {article.readTime}</span>
                    <span style={{
                      background: 'rgba(67,160,71,0.1)',
                      color: '#81c784',
                      padding: '4px 12px',
                      borderRadius: '16px',
                      fontSize: '0.9rem',
                      fontWeight: 600
                    }}>📖 บทความ</span>
                  </div>
                  
                  <button style={{
                    background: 'linear-gradient(135deg, #43a047, #66bb6a)',
                    color: 'white',
                    border: 'none',
                    padding: '12px 24px',
                    borderRadius: '24px',
                    fontSize: '1rem',
                    fontWeight: 700,
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    boxShadow: '0 4px 16px rgba(67,160,71,0.3)'
                  }}>อ่านต่อ</button>
                </div>
            </div>
          ))}
          </div>
          
          {/* จุดนำทาง */}
          <div style={{
            position: 'absolute',
            bottom: '20px',
            left: '50%',
            transform: 'translateX(-50%)',
            display: 'flex',
            gap: '8px'
          }}>
            {[0, 1, 2].map((dot, idx) => (
              <div key={idx} style={{
                width: '12px',
                height: '12px',
                borderRadius: '50%',
                background: idx === 0 ? '#43a047' : 'rgba(67,160,71,0.3)',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }} />
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ 
        textAlign: 'center', 
        padding: 'clamp(1.5rem,4vw,2rem) clamp(1rem, 4vw, 2rem)', 
        color: '#4a5568', 
        fontSize: 'clamp(0.8rem,1.5vw,1rem)', 
        background: 'linear-gradient(135deg, #f7fafc 0%, #edf2f7 100%)', 
        marginTop: 'clamp(2rem, 4vw, 32px)', 
        zIndex: 1, 
        position: 'relative',
        borderTop: '2px solid rgba(72,187,120,0.3)',
        boxShadow: '0 -5px 15px rgba(26,54,93,0.1)'
      }}>
        {/* Logo WGThailand */}
        <div style={{
          marginBottom: '1rem'
        }}>
          <h3 style={{
            fontSize: 'clamp(1.2rem, 4vw, 1.8rem)',
            fontWeight: 900,
            color: '#1a365d',
            textShadow: '0 2px 10px rgba(26,54,93,0.3)',
            letterSpacing: 'clamp(0.5px, 1vw, 1px)',
            margin: 0
          }}>WGThailand</h3>
          <p style={{
            color: '#48bb78',
            fontSize: 'clamp(0.7rem, 2vw, 0.8rem)',
            margin: 'clamp(0.2rem, 1vw, 0.3rem) 0 0 0',
            fontWeight: 500,
            letterSpacing: 'clamp(0.3px, 1vw, 0.5px)'
          }}>Premium Cannabis Collection</p>
        </div>

        {/* Contact Info */}
        <div style={{
          marginBottom: '1rem'
        }}>
          <a href="https://lin.ee/D8bgdJlk" target="_blank" rel="noopener noreferrer" style={{ 
            color: '#48bb78', 
            fontWeight: 700, 
            textDecoration: 'none',
            background: 'linear-gradient(135deg, rgba(72,187,120,0.1), rgba(104,211,145,0.1))',
            padding: 'clamp(6px, 2vw, 8px) clamp(12px, 3vw, 16px)',
            borderRadius: 'clamp(12px, 3vw, 16px)',
            border: '1px solid rgba(72,187,120,0.3)',
            transition: 'all 0.3s ease',
            display: 'inline-flex',
            alignItems: 'center',
            gap: 'clamp(4px, 1vw, 8px)',
            fontSize: 'clamp(0.8rem, 2vw, 0.9rem)'
          }}>
            <div style={{ 
              width: 'clamp(14px, 3vw, 16px)', 
              height: 'clamp(14px, 3vw, 16px)', 
              backgroundImage: 'url(/line-at-logo-png-8.png)',
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center'
            }} />
            Line OA สั่งซื้อสินค้า
          </a>
        </div>

        {/* Copyright */}
        <div style={{
          borderTop: '1px solid rgba(72,187,120,0.2)',
          paddingTop: '0.8rem',
          color: '#48bb78',
          fontSize: '0.8rem'
        }}>
          © 2025 WGThailand. All rights reserved.
        </div>
      </footer>


      {/* CSS Animations */}
      <style>{`
        @keyframes floatLeaf {
          0% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-40px) scale(1.08); }
          100% { transform: translateY(0) scale(1); }
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideInUp {
          from { 
            opacity: 0; 
            transform: translateY(40px) scale(0.95); 
          }
          to { 
            opacity: 1; 
            transform: translateY(0) scale(1); 
          }
        }
        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
          40% { transform: translateY(-10px); }
          60% { transform: translateY(-5px); }
        }
        @keyframes pulse {
          0% { transform: scale(1); }
          50% { transform: scale(1.05); }
          100% { transform: scale(1); }
        }
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
        @keyframes sparkle {
          0%, 100% { 
            background-position: 0% 50%;
            transform: scale(1);
            opacity: 1;
          }
          25% { 
            background-position: 100% 50%;
            transform: scale(1.05);
            opacity: 0.8;
          }
          50% { 
            background-position: 200% 50%;
            transform: scale(1.1);
            opacity: 1;
          }
          75% { 
            background-position: 100% 50%;
            transform: scale(1.05);
            opacity: 0.8;
          }
        }
        .cannabis-card:hover {
          animation: pulse 0.6s ease-in-out;
        }
        .cannabis-card:hover img {
          animation: shimmer 1.5s ease-in-out;
        }
      `}</style>
    </div>
  );
}

export default App;