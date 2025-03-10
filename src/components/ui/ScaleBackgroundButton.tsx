// ScaleBackgroundButton.tsx
import React from 'react';

const ScaleBackgroundButton = ({ onToggleScale }: { onToggleScale: () => void }) => {
  return (
    <button onClick={onToggleScale}>
      Toggle Background Scale
    </button>
  );
};

export default ScaleBackgroundButton;
