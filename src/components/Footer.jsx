import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-center py-5 mt-auto text-gray-400 text-sm">
      <div className="container mx-auto px-4">
        &copy; {new Date().getFullYear()} - Mariela Montaldo. All Rights Reserved.
        <span className="mx-2">|</span>
        <a 
          target="_blank" 
          rel="noopener noreferrer" 
          href="https://icons8.com/icon/rue7kq0Pgo0B/crossword" 
          className="text-purple-400 hover:underline mx-1"
        >
          Crossword
        </a>
        icon by
        <a 
          target="_blank" 
          rel="noopener noreferrer" 
          href="https://icons8.com" 
          className="text-purple-400 hover:underline mx-1"
        >
          Icons8
        </a>
      </div>
    </footer>
  );
};

export default Footer;