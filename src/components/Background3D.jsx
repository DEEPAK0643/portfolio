import React from 'react';

const Background3D = () => (
  <div className="absolute inset-0 z-0 h-full w-full pointer-events-none">
    <div
      className="absolute inset-0 bg-cover bg-center opacity-30 mix-blend-screen"
      style={{ backgroundImage: "url('https://images.unsplash.com/photo-1519501025264-65ba15a82390?q=80&w=2000&auto=format&fit=crop')" }}
    />
    <div className="absolute inset-0 bg-gradient-to-r from-[#05050A] via-transparent to-[#05050A]/80" />
  </div>
);

export default Background3D;
