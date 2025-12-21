import React, { useContext } from 'react';
import { AppContext } from '../AppProvider';

const References = () => {
  const { refs } = useContext(AppContext);

  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
      <h3 className="text-2xl font-semibold mb-4 text-purple-300" data-i18n="references_title">
        References
      </h3>
      <ol className="list-decimal list-inside space-y-3 text-gray-300">
        {refs.map((ref, i) => (
          <li key={i}>{ref}</li>
        ))}
      </ol>
    </div>
  );
};

export default References;