export default function DataDeletion() {
  return (
    <main style={{ minHeight: '100vh', padding: '80px 32px', maxWidth: '720px', margin: '0 auto' }}>
      <a href="/" style={{ color: '#00E676', fontSize: '14px', display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '40px', textDecoration: 'none' }}>
        ← Back to Finni AI
      </a>

      <h1 style={{ fontSize: '40px', fontWeight: '800', color: '#fff', marginBottom: '16px' }}>
        Request Data Deletion
      </h1>
      <p style={{ color: '#8892A4', fontSize: '16px', marginBottom: '48px', lineHeight: '1.7' }}>
        We take your privacy seriously. You can request the deletion of your account and all associated data at any time.
      </p>

      <div style={{ backgroundColor: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '16px', padding: '32px', marginBottom: '32px' }}>
        <h2 style={{ color: '#fff', fontWeight: '700', fontSize: '20px', marginBottom: '16px' }}>
          How to request deletion
        </h2>
        <p style={{ color: '#8892A4', fontSize: '15px', lineHeight: '1.8', marginBottom: '16px' }}>
          To delete your account and all associated data, send an email to:
        </p>
        <a href="mailto:company@heyfinni.com" style={{ color: '#00E676', fontWeight: '700', fontSize: '18px' }}>
          company@heyfinni.com
        </a>
        <p style={{ color: '#8892A4', fontSize: '14px', marginTop: '16px', lineHeight: '1.7' }}>
          Please use the subject line: <strong style={{ color: '#fff' }}>"Data Deletion Request"</strong> and include the email address associated with your account.
        </p>
      </div>

      <div style={{ backgroundColor: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '16px', padding: '32px', marginBottom: '32px' }}>
        <h2 style={{ color: '#fff', fontWeight: '700', fontSize: '20px', marginBottom: '16px' }}>
          What gets deleted
        </h2>
        <ul style={{ color: '#8892A4', fontSize: '15px', lineHeight: '2', paddingLeft: '20px' }}>
          <li>Your account and profile information</li>
          <li>All financial data and transaction history</li>
          <li>Budget goals and savings plans</li>
          <li>All chat history with Finni AI</li>
          <li>Any preferences and settings</li>
        </ul>
      </div>

      <div style={{ backgroundColor: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '16px', padding: '32px' }}>
        <h2 style={{ color: '#fff', fontWeight: '700', fontSize: '20px', marginBottom: '16px' }}>
          Timeline
        </h2>
        <p style={{ color: '#8892A4', fontSize: '15px', lineHeight: '1.8' }}>
          We will process your deletion request within <strong style={{ color: '#fff' }}>30 days</strong> of receiving it. You will receive a confirmation email once your data has been permanently deleted.
        </p>
      </div>

      <p style={{ color: '#8892A4', fontSize: '13px', marginTop: '40px', lineHeight: '1.7' }}>
        For any questions, contact us at{' '}
        <a href="mailto:company@heyfinni.com" style={{ color: '#00E676' }}>company@heyfinni.com</a>
      </p>
    </main>
  )
}
