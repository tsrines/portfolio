import React, { useEffect } from 'react';

const AdSlot320x50 = () => {
  useEffect(() => {
    (window.adsbygoogle = window.adsbygoogle || []).push({});
  }, []);
  return (
    <ins
      class="adsbygoogle"
      style={{ display: 'inline-block', width: '320px', height: '50px' }}
      data-ad-client="ca-pub-4361391469035574"
      data-ad-slot="4853401776"
    ></ins>
  );
};

export default AdSlot320x50;
