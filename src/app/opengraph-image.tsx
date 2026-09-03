import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const alt = 'Al Ahd General Contracting';
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 128,
          background: 'linear-gradient(135deg, #050505 0%, #0B132B 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#D4AF37',
          fontWeight: 'bold',
          fontFamily: 'system-ui',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '20px',
          }}
        >
          <div>AL AHD</div>
          <div style={{ fontSize: 40, color: '#F5F5F5' }}>
            GENERAL CONTRACTING
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
