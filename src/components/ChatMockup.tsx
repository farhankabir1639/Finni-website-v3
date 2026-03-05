export default function ChatMockup() {
  return (
    <div style={{
      width: '300px',
      backgroundColor: '#1A1F2E',
      borderRadius: '40px',
      border: 'none',
      padding: '16px',
      boxShadow: '0 40px 80px rgba(0,0,0,0.6)',
    }}>
      {/* Screen */}
      <div style={{
        backgroundColor: '#0D1525',
        borderRadius: '28px',
        overflow: 'hidden',
        padding: '20px 16px',
        display: 'flex',
        flexDirection: 'column',
        gap: '12px',
      }}>
        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div style={{
            width: '36px', height: '36px', borderRadius: '50%',
            backgroundColor: '#00E676', display: 'flex', alignItems: 'center',
            justifyContent: 'center', fontWeight: 'bold', fontSize: '14px',
            color: '#0A0F1E', flexShrink: 0,
          }}>F</div>
          <span style={{ color: '#fff', fontWeight: '600', fontSize: '14px' }}>Finni</span>
          <span style={{ color: '#8892A4', fontSize: '12px', marginLeft: 'auto' }}>Now</span>
        </div>

        {/* User bubble 1 */}
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <div style={{
            backgroundColor: '#00E676', color: '#0A0F1E', fontWeight: '600',
            fontSize: '13px', padding: '10px 16px',
            borderRadius: '20px 20px 4px 20px', maxWidth: '85%',
          }}>
            I spent $12 on pizza 🍕
          </div>
        </div>

        {/* Finni card 1 */}
        <div style={{
          backgroundColor: '#131D30', borderRadius: '16px', padding: '14px',
          border: '1px solid rgba(255,255,255,0.07)',
        }}>
          <p style={{ color: '#fff', fontWeight: '600', fontSize: '13px', marginBottom: '10px' }}>Got it! 🍕</p>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
            <span style={{ color: '#8892A4', fontSize: '12px' }}>Category:</span>
            <span style={{ color: '#00E676', fontWeight: '600', fontSize: '12px' }}>Food & Dining</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
            <span style={{ color: '#8892A4', fontSize: '12px' }}>Amount:</span>
            <span style={{ color: '#fff', fontWeight: '700', fontSize: '12px' }}>$12.00</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
            <span style={{ color: '#8892A4', fontSize: '12px' }}>This week:</span>
            <span style={{ color: '#fff', fontWeight: '700', fontSize: '12px' }}>$45.00</span>
          </div>
          <p style={{ color: '#8892A4', fontSize: '11px' }}>
            You're doing great! Still under your food budget 💪
          </p>
        </div>

        {/* User bubble 2 */}
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <div style={{
            backgroundColor: '#00E676', color: '#0A0F1E', fontWeight: '600',
            fontSize: '13px', padding: '10px 16px',
            borderRadius: '20px 20px 4px 20px', maxWidth: '85%',
          }}>
            Can I afford a PS5? 🎮
          </div>
        </div>

        {/* Finni card 2 */}
        <div style={{
          backgroundColor: '#131D30', borderRadius: '16px', padding: '14px',
          border: '1px solid rgba(255,255,255,0.07)',
        }}>
          <p style={{ color: '#fff', fontWeight: '600', fontSize: '13px', marginBottom: '8px' }}>Let me check... 🤔</p>
          <p style={{ color: '#8892A4', fontSize: '11px', lineHeight: '1.6' }}>
            Save $50/week and you'll have it in <span style={{ color: '#00E676', fontWeight: '600' }}>10 weeks</span>. Want me to set a goal?
          </p>
        </div>

        {/* Input bar */}
        <div style={{
          backgroundColor: '#131D30', border: '1px solid rgba(255,255,255,0.1)',
          borderRadius: '999px', padding: '10px 14px',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          marginTop: '4px',
        }}>
          <span style={{ color: '#8892A4', fontSize: '12px' }}>Tell me what you spent..</span>
          <div style={{
            width: '28px', height: '28px', borderRadius: '50%',
            backgroundColor: '#00E676', display: 'flex',
            alignItems: 'center', justifyContent: 'center', flexShrink: 0,
          }}>
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M6 10V2M6 2L2 6M6 2L10 6" stroke="#0A0F1E" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </div>
        </div>
      </div>
    </div>
  )
}
