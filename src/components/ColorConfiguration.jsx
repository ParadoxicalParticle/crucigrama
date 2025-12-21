import React, { useContext, useState, useEffect } from 'react';
import { AppContext } from '../AppProvider';

const ColorConfiguration = () => {
  const { colors, setColors, original_colors } = useContext(AppContext);

  const [initialModalColors, setInitialModalColors] = useState(null);

  useEffect(() => {
    const modalElement = document.getElementById('configurationModal');
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === 'class' && modalElement.classList.contains('show')) {
          setInitialModalColors(colors);
        }
      });
    });

    if (modalElement) {
      observer.observe(modalElement, { attributes: true });
    }

    return () => observer.disconnect();
  }, [colors]);

  const handleColorChange = (e) => {
    const { name, value } = e.target;
    setColors(prevColors => ({ ...prevColors, [name]: value }));
  };

  const handleCancel = () => {
    if (initialModalColors) {
      setColors(initialModalColors);
    }
  };

  const handleResetToDefaults = () => {
    setColors(original_colors.current);
  };

  const ColorSettingRow = ({ labelKey, colorKey, value }) => (
    <div className="flex items-center justify-between p-3 bg-gray-900 rounded-lg">
      <div>
        <label data-i18n={labelKey} className="font-medium text-gray-300">
          {labelKey.replace(/_/g, ' ')}
        </label>
        <code className="block text-xs text-gray-500 uppercase">{value}</code>
      </div>
      <div 
        className="relative w-16 h-10 rounded-md border-2 border-gray-600 overflow-hidden" 
        style={{ backgroundColor: value }}
      >
        <input
          type="color"
          name={colorKey}
          value={value}
          onChange={handleColorChange}
          className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
        />
      </div>
    </div>
  );

  return (
    <div className="modal fade mb-3" id="configurationModal" tabIndex="-1" data-bs-backdrop="static" aria-labelledby="configModalLabel" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content bg-gray-800 text-gray-200 border border-gray-700 shadow-2xl rounded-xl">
          <div className="modal-header border-b border-gray-700 p-4 flex justify-between items-center">
            <h1 data-i18n="config_modal_title" className="modal-title text-xl font-semibold text-purple-400 flex items-center gap-2" id="configModalLabel">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
              Appearance Settings
            </h1>
            <button type="button" className="text-gray-400 hover:text-white" data-bs-dismiss="modal" aria-label="Close" onClick={handleCancel}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
          </div>
          {/* Refined: Increased padding from p-4 to p-6 for more space below the content */}
          <div className="modal-body p-6 space-y-4">
            <ColorSettingRow labelKey="config_vertical_setting" colorKey="--c" value={colors['--c']} />
            <ColorSettingRow labelKey="config_border_setting" colorKey="--d" value={colors['--d']} />
            <ColorSettingRow labelKey="config_empty_cell_setting" colorKey="--e" value={colors['--e']} />
            <ColorSettingRow labelKey="config_correct_cell_setting" colorKey="--f" value={colors['--f']} />
          </div>
          <div className="modal-footer flex justify-between items-center border-t border-gray-700 p-4">
            <button data-i18n="config_reset_settings" type="button" onClick={handleResetToDefaults}
              className="px-4 py-2 bg-yellow-600 hover:bg-yellow-700 text-white font-bold rounded-md transition-colors flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h5" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12A8 8 0 1013.44 5.23" /></svg>
              Reset to Default
            </button>
            <div className="space-x-2">
              <button type="button" data-bs-dismiss="modal" onClick={handleCancel}
                className="px-4 py-2 bg-gray-600 hover:bg-gray-700 text-white font-bold rounded-md transition-colors">
                Cancel
              </button>
              <button type="button" data-bs-dismiss="modal"
                className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-md transition-colors">
                Done
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ColorConfiguration;