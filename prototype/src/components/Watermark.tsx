import React from 'react';

const Watermark: React.FC = () => {
  return (
    <div className="fixed bottom-4 right-4 z-50 pointer-events-none">
      <div className="bg-black/70 backdrop-blur-sm px-3 py-1 rounded-full text-sm text-white shadow-lg">
        Created by: Sheheryar Yousaf
      </div>
    </div>
  );
};

export default Watermark; 