import React, { useState } from "react";
import "./Store.css";

function Store() {
  const [cart, setCart] = useState([]);

  const games = [
    {
      id: 1,
      name: "Cyber Strike",
      price: 25,
      originalPrice: 39.99,
      rating: 4.5,
      trending: true,
      discount: "37% OFF",
      img: "https://images.unsplash.com/photo-1606112219348-204d7d8b94ee?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 2,
      name: "Racing Fury",
      price: null,
      originalPrice: null,
      rating: 4.2,
      trending: true,
      discount: "FREE TO PLAY",
      img: "https://wallpapercave.com/wp/wp9429418.jpg",
    },
    {
      id: 3,
      name: "Galaxy Raider",
      price: 22,
      originalPrice: 35.99,
      rating: 3.8,
      trending: false,
      discount: "39% OFF",
      img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 4,
      name: "Mystic Quest",
      price: null,
      originalPrice: null,
      rating: 4.7,
      trending: true,
      discount: "FREE TO PLAY",
      img: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 5,
      name: "Shadow Assassin",
      price: 28,
      originalPrice: 44.99,
      rating: 4.3,
      trending: false,
      discount: "38% OFF",
      img: "https://images.unsplash.com/photo-1551103782-8ab07afd45c1?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 6,
      name: "Battle Royale",
      price: 20,
      originalPrice: 29.99,
      rating: 4.1,
      trending: true,
      discount: "15% OFF",
      img: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 7,
      name: "Zombie Outbreak",
      price: 32,
      originalPrice: 54.99,
      rating: 4.4,
      trending: false,
      discount: "42% OFF",
      img: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 8,
      name: "Dragon's Lair",
      price: 40,
      originalPrice: 69.99,
      rating: 4.8,
      trending: true,
      discount: "43% OFF",
      img: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 9,
      name: "Neon Drift",
      price: 27,
      originalPrice: 42.99,
      rating: 4.6,
      trending: true,
      discount: "37% OFF",
      img: "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=800&q=80",
    },
  ];

  const renderStars = (rating) => {
    return (
      <div className="rating">
        {[...Array(5)].map((_, i) => (
          <span key={i} className={i < Math.floor(rating) ? "star filled" : "star"}>
            ★
          </span>
        ))}
      </div>
    );
  };

  const addToCart = (game) => {
    if (!cart.find((item) => item.id === game.id)) {
      setCart([...cart, game]);
      alert(`${game.name} added to cart!`);
    } else {
      alert(`${game.name} is already in your cart!`);
    }
  };

  return (
    <div className="store-container">
      <h1 className="store-title">🎮 Game Store</h1>
      <div className="games-grid">
        {games.map((game) => (
          <div key={game.id} className="game-card">
            <div className="image-wrapper">
              <img src={game.img} alt={game.name} className="game-image" />
              {game.trending && <div className="trending-badge">🔥</div>}
            </div>
            <h3>{game.name}</h3>
            {renderStars(game.rating)}
            {game.price !== null ? (
              <div className="price-section">
                <span className="original-price">${game.originalPrice.toFixed(2)}</span>
                <span className="current-price">${game.price.toFixed(2)}</span>
              </div>
            ) : (
              <div className="free-badge">{game.discount}</div>
            )}
            {game.discount && game.price !== null && <div className="discount-label">{game.discount}</div>}
            <button onClick={() => addToCart(game)} className="buy-btn">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Store;
