import React from 'react';

const About = () => {
  return (
    <div style={{ padding: '50px 20px', textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '36px', marginBottom: '20px' }}>Restoran haqida</h1>
      <p style={{ fontSize: '18px', color: '#555', lineHeight: '1.6' }}>
        Bizning restoran 2010-yildan beri mijozlarga eng sara milliy va yevropa taomlarini taqdim etib kelmoqda. 
        Asosiy maqsadimiz — mahsulotlarning yangiligi va haqiqiy o'zbekona mehmondorchilikni ko'rsatishdir.
      </p>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px', marginTop: '40px' }}>
        <div style={{ padding: '20px', backgroundColor: '#f9f9f9', borderRadius: '10px' }}>
          <h3 style={{ color: '#ff6347' }}>15+ Yillik tajriba</h3>
        </div>
        <div style={{ padding: '20px', backgroundColor: '#f9f9f9', borderRadius: '10px' }}>
          <h3 style={{ color: '#ff6347' }}>50+ Turdagi taomlar</h3>
        </div>
        <div style={{ padding: '20px', backgroundColor: '#f9f9f9', borderRadius: '10px' }}>
          <h3 style={{ color: '#ff6347' }}>100% Halol</h3>
        </div>
      </div>
    </div>
  );
};

export default About;