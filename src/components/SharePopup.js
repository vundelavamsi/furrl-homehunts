import React from 'react';
import '../styles/SharePopup.css';

const SharePopup = ({ productUrl, onClose }) => {
  const handleCopy = () => {
    navigator.clipboard.writeText(productUrl).then(() => {
      alert('Link copied!');
    });
  };

  return (
    <div className="share-popup">
      <div className="share-popup-content">
        <p>Share this product:</p>
        <a href={productUrl} target="_blank" rel="noopener noreferrer" className="share-link">
          {productUrl}
        </a>
        <div className='button-group'>
          <button onClick={handleCopy} className="copy-button">
            Copy Link
          </button>
          <button onClick={onClose} className="close-button">
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default SharePopup;
