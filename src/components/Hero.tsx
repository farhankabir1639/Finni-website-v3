import ChatMockup from './ChatMockup'

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center" style={{ paddingTop: '80px', paddingBottom: '40px' }}>
      <div className="w-full max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        {/* Left col */}
        <div>
          <h1 style={{ fontSize: '56px', fontWeight: '800', lineHeight: '1.1', color: '#fff', marginBottom: '24px' }}>
            Your money, finally<br />making sense.
          </h1>
          <p style={{ fontSize: '18px', color: '#8892A4', lineHeight: '1.7', marginBottom: '40px', maxWidth: '480px' }}>
            Finni AI is your personal money buddy. Just tell it what you spent — it handles the rest. No confusing charts. No boring spreadsheets. Just you and your money, finally on the same team.
          </p>
          <button
            className="btn-coming-soon"
            style={{ fontSize: '16px', padding: '16px 40px', display: 'block', marginBottom: '16px' }}
          >
            Coming Soon
          </button>
          <p style={{ color: '#8892A4', fontSize: '14px' }}>Be the first to know when we launch.</p>
        </div>

        {/* Right col */}
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <ChatMockup />
        </div>

      </div>
    </section>
  )
}
