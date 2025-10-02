import React from 'react';
import Controls from './Controls';
import References from './References';

const SidePanel = ({ handleRestart }) => {
  return (
    <div className="flex flex-col gap-6">
      <Controls handleRestart={handleRestart} />
      <References />
    </div>
  );
};

export default SidePanel;