import React from 'react';

const Contact = () => {
  return (
    <div style={{ padding: '50px 20px', maxWidth: '600px', margin: '0 auto' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '30px' }}>Biz bilan bog'laning</h1>
      
      <form style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        <input 
          type="text" 
          placeholder="Ismingiz" 
          style={{ padding: '12px', borderRadius: '5px', border: '1px solid #ddd' }} 
        />
        <input 
          type="email" 
          placeholder="Email manzilingiz" 
          style={{ padding: '12px', borderRadius: '5px', border: '1px solid #ddd' }} 
        />
        <textarea 
          placeholder="Xabaringizni yozing..." 
          rows="5" 
          style={{ padding: '12px', borderRadius: '5px', border: '1px solid #ddd' }}
        ></textarea>
        
        <button 
          type="submit" 
          style={{ 
            padding: '12px', 
            backgroundColor: '#ff6347', 
            color: 'white', 
            border: 'none', 
            borderRadius: '5px', 
            cursor: 'pointer',
            fontSize: '16px'
          }}
        >
          Xabarni yuborish
        </button>
      </form>

      <div style={{ marginTop: '40px', textAlign: 'center', color: '#666' }}>
        <p>📍 Manzil: Toshkent shahri, Amir Temur ko'chasi 15-uy</p>
        <p>📞 Tel: +998 90 123 45 67</p>
        <p>📧 Email: info@restoran.uz</p>
      </div>
    </div>
  );
};

export default Contact;