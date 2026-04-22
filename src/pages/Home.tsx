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
          fontWeight: 500,
          lineHeight: 1.15,
          letterSpacing: '-0.02em',
          color: '#0a0a0a',
          maxWidth: '560px',
          marginBottom: '40px',
        }}>
          The decentralized memory <br />layer for AI agents.
        </h1>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0px' }}>
          <button
            onClick={() => navigate('/docs')}
            style={{
              padding: '12px 24px',
              backgroundColor: '#fff',
              color: '#0a0a0a',
              border: '0.5px solid #0a0a0a',
              borderRadius: '11%',
              fontSize: '0.65rem',
              letterSpacing: '0.03em',
              cursor: 'pointer',
              fontFamily: 'inherit',
              fontWeight: 400,
            }}
          >
            Read v0 Docs ↗
          </button>
        </div>
      </div>

      {/* Two Column Section */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1px 1fr',
        borderTop: '1px solid #f0f0f0',
        borderBottom: '1px solid #f0f0f0',
        maxWidth: '950px',
        margin: '0 auto',
      }}>

        {/* Left — Backed by + Built with */}
        <div style={{ padding: '48px 48px 48px 0', display: 'flex', flexDirection: 'column' }}>
          
          {/* Backed by */}
          <p style={{
            fontSize: '0.7rem',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            color: '#bbb',
            marginBottom: '16px',
          }}>
            Backed by
          </p>
          <div style={{ marginBottom: '40px' }}>
            <div style={{
              display: 'inline-block',
              border: '1px solid #f0f0f0',
              borderRadius: '8px',
              padding: '12px 24px',
              fontSize: '0.8rem',
              color: '#bbb',
              fontWeight: 300,
            }}>
              Announcing soon
            </div>
          </div>

          {/* Built with */}
          <p style={{
            fontSize: '0.7rem',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            color: '#454545',
            marginBottom: '24px',
          }}>
            Built with
          </p>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '16px',
          }}>
            {[
              { name: 'Shelby', logo: './logo1.png' },
             
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
            color: '#535353',
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
            When your AI agent relies on central servers for memory, your privacy is at risk. The company hosting that server can potentially read, monitor, or use your data.
            <br /><br />
            Synapse uses Shelby's decentralized network to ensure your agent's memory is saved securely and retrieved quickly, meaning your private conversations stay private.
          </p>
        </div>
      </div>

      {/* Dot divider */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        padding: '40px 80px',
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
          <span style={{ color: '#0a0a0a', fontWeight: 400 }}>Synapse</span> integration.
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