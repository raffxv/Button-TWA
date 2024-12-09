import React from 'react';

const App = () => {
  const openTelegramApp = () => {
    window.open('https://t.me/dogencryptobotT?start=S539S35DGN', '_blank');
  };

  return (
    <div className="flex justify-center items-center">
      <button
        onClick={openTelegramApp}
        className="px-6 py-3 bg-blue-500 text-white rounded-lg flex items-center space-x-2 hover:bg-blue-600 transition"
      >
        <img
          src="dogen-cover.png"
          alt="Telegram Logo"
          className="w-8 h-8"
        />
        <span className="text-lg">Open DOGEN APP</span>
      </button>
    </div>
  );
};

export default App;