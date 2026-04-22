import { useNavigate } from 'react-router-dom'

export default function Home() {
  const navigate = useNavigate()

  return (
    <div style={{ paddingTop: '80px' }}>

      {/* Hero */}
      <div style={{
        padding: '140px 80px 80px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
      }}>

        <h1 style={{
          fontSize: '2.0rem',
          fontWeight: 300,
          lineHeight: 1.15,
          letterSpacing: '-0.02em',
          color: '#0a0a0a',
          maxWidth: '560px',
          marginBottom: '40px',
        }}>
          The decentralized memory <br />layer for AI agents.
        </h1>

        {/* CTA Button */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0px' }}>
          <button
            onClick={() => navigate('/docs')}
            style={{
              padding: '12px 24px',
              backgroundColor: '#0a0a0a',
              color: '#fff',
              borderRadius: '30%',
              fontSize: '0.65rem',
              letterSpacing: '0.03em',
              cursor: 'pointer',
              fontFamily: 'inherit',
              fontWeight: 400,
            }}
          >
            Read Docs
          </button>
          <div
            onClick={() => navigate('/docs')}
            style={{
              width: '32px',
              height: '32px',
              backgroundColor: '#0a0a0a',
              borderRadius: '30%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
            }}
          >
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
              <path d="M8 3L8 13M8 13L3 8M8 13L13 8" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>
      </div>
      {/* Two Column Section */}
<div style={{
  padding: '0 80px 80px',
  display: 'grid',
  gridTemplateColumns: '1fr 1px 1fr',
  gap: '0',
  borderTop: '1px solid #f0f0f0',
  borderBottom: '1px solid #f0f0f0',
  maxWidth: '950px',
  alignItems: 'center',
  margin: '0 auto',
}}>
  
  {/* Left — Built with */}
<div style={{ padding: '48px 48px 48px 0' }}>
  <p style={{
    fontSize: '0.7rem',
    letterSpacing: '0.15em',
    textTransform: 'uppercase',
    color: '#454545',
    marginBottom: '32px',
  }}>
    Built with
  </p>
  <div style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '16px',
  }}>
    {[
      { name: 'Shelby', logo: '/logo1.png' },
      { name: 'Aptos', logo: '/src/assets/aptos.png' },
      { name: 'Claude', logo: '/src/assets/claude.png' },
      { name: 'TypeScript', logo: '/src/assets/typescript.png' },
    ].map((item) => (
      <div
        key={item.name}
        style={{
          border: '1px solid #f0f0f0',
          borderRadius: '8px',
          padding: '24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <img
          src={item.logo}
          alt={item.name}
          style={{
            height: '28px',
            objectFit: 'contain',
            filter: 'grayscale(100%)',
            opacity: 0.6,
          }}
          onError={(e) => {
            e.currentTarget.style.display = 'none'
            e.currentTarget.parentElement!.innerHTML = `<p style="font-size:0.85rem;color:#bbb">${item.name}</p>`
          }}
        />
      </div>
    ))}
  </div>
</div>
  {/* Vertical divider */}
  <div style={{ backgroundColor: '#f0f0f0' }} />

  {/* Right — The problem */}
  <div style={{ padding: '48px 0 48px 48px' }}>
    <p style={{
      fontSize: '0.7rem',
      letterSpacing: '0.15em',
      textTransform: 'uppercase',
      color: '##535353',
      marginTop: '20px',
      marginBottom: '32px',
    }}>
      The problem
    </p>
    <p style={{
      fontSize: '1.4rem',
      fontWeight: 300,
      lineHeight: 1.6,
      color: '#0a0a0a',
      letterSpacing: '-0.01em',
      marginBottom: '24px',
    }}>
      AI agents forget everything the moment a conversation ends.
    </p>
    <p style={{
      fontSize: '0.9rem',
      fontWeight: 300,
      lineHeight: 1.8,
      color: '#888',
    }}>
      Existing memory solutions store your data on centralized servers — 
      meaning a company owns your agent's memory. Synapse changes that. 
      Memory is saved to Shelby's decentralized network, retrieved fast, 
      and owned entirely by the user. No middleman. No single point of failure.
    </p>
  </div>
</div>

      {/* Divider dots like reference */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        padding: '0 80px',
        marginBottom: '60px',
      }}>
      </div>

      {/* Three Cards */}
      
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        padding: '0 80px',
        marginBottom: '60px',
      }}>
        {[0,1,2,3].map(i => (
          <div key={i} style={{ width: '4px', height: '4px', borderRadius: '50%', backgroundColor: '#ddd' }} />
        ))}
      </div>

      {/* Showcase Section */}
      <div style={{ padding: '0 80px 120px' }}>
        <p style={{
          fontSize: '1rem',
          color: '#888',
          marginBottom: '32px',
          fontWeight: 300,
        }}>
          See <span style={{ color: '#0a0a0a', fontWeight: 400 }}>Synapse</span> in action.
        </p>
        <div style={{
          border: '1px solid #f0f0f0',
          borderRadius: '12px',
          padding: '48px',
          minHeight: '300px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#fafafa',
        }}>
          <p style={{
            fontSize: '0.875rem',
            color: '#bbb',
            letterSpacing: '0.05em',
            textTransform: 'uppercase',
          }}>
            Demo coming soon
          </p>
        </div>
      </div>

    </div>
  )
}