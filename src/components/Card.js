import { useState } from 'react';
import SharePopup from "../components/SharePopup";
import "../styles/Card.css";

const Card = ({ product }) => {
  const productUrl = `https://furrl.in/productDetail?id=${product.id}&ref=vibeResults_HomeHunts`;
  const [isSharePopupOpen, setIsSharePopupOpen] = useState(false);

  const handleShareClick = () => {
    setIsSharePopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsSharePopupOpen(false);
  };

  return (
    <div className="card-container">
      <img
        src={product.images[0].src}
        alt={product.title}
        className="product-image"
      />
      <button className="share-button" onClick={handleShareClick}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="21"
          height="21"
          viewBox="0 0 26 20"
          id="share"
        >
          <path
            stroke="#FFF"
            fill="#FFF"
            d="M20 15.5V12c0-.6-.4-1-1-1s-1 .4-1 1v3.5c0 1.4-1.1 2.5-2.5 2.5h-7C7.1 18 6 16.9 6 15.5v-7C6 7.1 7.1 6 8.5 6H12c.6 0 1-.4 1-1s-.4-1-1-1H8.5C6 4 4 6 4 8.5v7C4 18 6 20 8.5 20h7c2.5 0 4.5-2 4.5-4.5z"
          ></path>
          <path
            stroke="#FFF"
            fill="#FFF"
            d="M21 9V4c0-.1 0-.3-.1-.4-.1-.2-.3-.4-.5-.5-.1-.1-.3-.1-.4-.1h-4.8c-.6 0-1 .4-1 1s.4 1 1 1h2.4l-6.3 6.3c-.4.4-.4 1 0 1.4.2.2.5.3.7.3s.5-.1.7-.3L19 6.4V9c0 .6.4 1 1 1s1-.4 1-1z"
          ></path>
        </svg>
      </button>
      {isSharePopupOpen && (
        <SharePopup productUrl={productUrl} onClose={handleClosePopup} />
      )}
      <a href={productUrl} className="group block">
        <div className="product-info">
          <h3 className="product-vendor">{product.vendor}</h3>
          <h3 className="product-title">{product.title}</h3>
          <div className="product-pricing">
            <p className="product-price">Rs. {product.price.value}</p>
            <p className="product-mrp">Rs.{product.MRP.value}</p>
            <p className="product-discount">{product.discountPercent}%</p>
          </div>
        </div>
      </a>
    </div>
  );
};

export default Card;
