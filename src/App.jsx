import React from 'react'

function App() {
  return (
    <div style={{ 
      minHeight: '100vh', 
      background: 'linear-gradient(135deg, #1a202c 0%, #2d3748 50%, #1a202c 100%)',
      color: 'white',
      padding: '2rem',
      fontFamily: 'Arial, sans-serif',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <h1 style={{ 
        fontSize: '4rem', 
        marginBottom: '1rem',
        background: 'linear-gradient(45deg, #68d391, #9ae6b4)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text'
      }}>
        WGThailand
      </h1>
      
      <p style={{ 
        fontSize: '1.5rem',
        marginBottom: '2rem',
        textAlign: 'center'
      }}>
        Premium Cannabis Collection
      </p>
      
      <a 
        href="https://lin.ee/D8bgdJlk"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          background: 'linear-gradient(135deg, #68d391, #9ae6b4)',
          color: 'white',
          padding: '1rem 2rem',
          borderRadius: '25px',
          textDecoration: 'none',
          fontSize: '1.2rem',
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
  )
}

export default App