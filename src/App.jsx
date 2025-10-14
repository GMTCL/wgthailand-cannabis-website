import './App.css'

function App() {
  return (
    <div style={{ 
      minHeight: '100vh', 
      background: 'linear-gradient(135deg, #1a202c 0%, #2d3748 50%, #1a202c 100%)',
      color: 'white',
      padding: '2rem',
      fontFamily: 'Arial, sans-serif'
    }}>
      <h1 style={{ 
        fontSize: '3rem', 
        textAlign: 'center', 
        marginBottom: '2rem',
        background: 'linear-gradient(45deg, #68d391, #9ae6b4)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text'
      }}>
        WGThailand
      </h1>
      
      <div style={{ 
        textAlign: 'center', 
        fontSize: '1.2rem',
        marginBottom: '3rem'
      }}>
        Premium Cannabis Collection
      </div>
      
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '2rem',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        <div style={{
          background: 'rgba(104, 211, 145, 0.1)',
          border: '1px solid rgba(104, 211, 145, 0.3)',
          borderRadius: '16px',
          padding: '2rem',
          textAlign: 'center'
        }}>
          <h3 style={{ color: '#68d391', marginBottom: '1rem' }}>🌿 สินค้าคุณภาพ</h3>
          <p>กัญชาสายพันธุ์หลากหลาย คัดสรรคุณภาพดี</p>
        </div>
        
        <div style={{
          background: 'rgba(104, 211, 145, 0.1)',
          border: '1px solid rgba(104, 211, 145, 0.3)',
          borderRadius: '16px',
          padding: '2rem',
          textAlign: 'center'
        }}>
          <h3 style={{ color: '#68d391', marginBottom: '1rem' }}>📱 Line OA</h3>
          <p>สั่งซื้อและรับคำแนะนำผ่าน Line</p>
        </div>
        
        <div style={{
          background: 'rgba(104, 211, 145, 0.1)',
          border: '1px solid rgba(104, 211, 145, 0.3)',
          borderRadius: '16px',
          padding: '2rem',
          textAlign: 'center'
        }}>
          <h3 style={{ color: '#68d391', marginBottom: '1rem' }}>🚚 ส่งด่วน</h3>
          <p>บริการส่งสินค้าอย่างปลอดภัย</p>
        </div>
      </div>
      
      <div style={{
        textAlign: 'center',
        marginTop: '3rem'
      }}>
        <a 
          href="https://lin.ee/D8bgdJlk"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-block',
            background: 'linear-gradient(135deg, #68d391, #9ae6b4)',
            color: 'white',
            padding: '1rem 2rem',
            borderRadius: '25px',
            textDecoration: 'none',
            fontSize: '1.1rem',
            fontWeight: 'bold',
            boxShadow: '0 4px 15px rgba(104, 211, 145, 0.3)',
            transition: 'all 0.3s ease'
          }}
          onMouseEnter={(e) => {
            e.target.style.transform = 'translateY(-2px)'
            e.target.style.boxShadow = '0 6px 20px rgba(104, 211, 145, 0.4)'
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = 'translateY(0)'
            e.target.style.boxShadow = '0 4px 15px rgba(104, 211, 145, 0.3)'
          }}
        >
          📱 สั่งซื้อผ่าน Line OA
        </a>
      </div>
    </div>
  )
}

export default App