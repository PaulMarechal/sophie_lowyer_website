import React from 'react';
import { ImageResponse } from 'next/og';

export const ogImageSize = { width: 1200, height: 630 };
export const ogImageContentType = 'image/png';
export const ogImageRuntime = 'edge';

// The layout is recomposed for square exports, rather than cropping the landscape card.
export function createPageOgImage({ eyebrow, title, accent, locale = 'fr' }, size = ogImageSize) {
  const square = size.height === size.width;
  return new ImageResponse(
    <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column',
      padding: square ? '104px 88px' : '56px 72px', background: 'linear-gradient(135deg, #162336, #253955)',
      color: '#f7f1e7', fontFamily: 'sans-serif', justifyContent: 'space-between' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        <div style={{ fontSize: square ? 76 : 64, fontWeight: 700, letterSpacing: -2 }}>Sophie Maréchal</div>
        <div style={{ fontSize: 23, color: '#cad5e4' }}>
          {locale === 'en' ? 'Lawyer admitted to the Paris Bar' : 'Avocate au barreau de Paris'}
        </div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: square ? 32 : 20 }}>
        <div style={{ fontSize: 22, letterSpacing: 3, textTransform: 'uppercase', color: '#a7c7ef' }}>{eyebrow}</div>
        <div style={{ fontSize: square ? 84 : 64, lineHeight: 1.1, letterSpacing: -2,
          maxWidth: square ? 1000 : 1040, fontWeight: 700 }}>{title}</div>
        <div style={{ display: 'flex', width: 88, height: 5, background: '#72a4e5', borderRadius: 3 }} />
        <div style={{ fontSize: square ? 34 : 28, color: '#d5dfec', lineHeight: 1.3 }}>{accent}</div>
      </div>
      <div style={{ display: 'flex', borderTop: '1px solid #526783', paddingTop: 22,
        fontSize: square ? 27 : 22, color: '#cad5e4' }}>sophiemarechal-avocat.fr</div>
    </div>,
    size,
  );
}
