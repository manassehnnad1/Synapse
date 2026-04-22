import { NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav
      style={{ paddingLeft: '80px', paddingRight: '80px', paddingTop: '28px', paddingBottom: '28px' }}
      className="fixed top-0 left-0 w-full z-50 flex items-center justify-between bg-white"
    >
      <NavLink to="/" className="text-sm font-medium  text-black" >
        Synapse
      </NavLink>

      <div style={{ display: 'flex', alignItems: 'center', gap: '18px' }}>
        
        {/* PFP — links to X */}
        
          <a href="https://x.com/islathebuilder"
          target="_blank"
          rel="noreferrer"
        >
          <div style={{
            width: '22px',
            height: '22px',
            borderRadius: '50%',
            backgroundColor: '#f0f0f0',
            overflow: 'hidden',
          }}>
            {/* swap src later */}
            <img
              src="/img1.jpg"
              alt="pfp"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
        </a>

        {/* Read Docs button */}
        <NavLink
          to="/docs"
          style={{
            fontSize: '0.65rem',
            fontWeight: 300,
            color: '#0a0a0a',
            textDecoration: 'none',
            border: '0.5px solid #0a0a0a',
            borderRadius: '450px',
            padding: '8px 20px',
            letterSpacing: '0.03em',
          }}
        >
          Start Free ↗
        </NavLink>

        {/* About */}
        <NavLink
          to="/about"
          style={{ fontSize: '0.65rem', color: '#888', textDecoration: 'underline' }}
        >
          ABOUT
        </NavLink>

      </div>
    </nav>
  )
}