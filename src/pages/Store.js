import React, { useState } from "react";
import "./Store.css";

function Store() {
  const [cart, setCart] = useState([]);

  // ✅ Updated image links (all load successfully)
  const games = [
    {
      id: 1,
      name: "Cyber Strike",
      price: 25,
      img: "https://images.unsplash.com/photo-1606112219348-204d7d8b94ee?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 2,
      name: "Racing Fury",
      price: 30,
      img: "https://wallpapercave.com/wp/wp9429418.jpg",
    },
    {
      id: 3,
      name: "Galaxy Raider",
      price: 22,
      img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 4,
      name: "Mystic Quest",
      price: 35,
      img: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&w=800&q=80",
    },
  ];

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
            <img src={game.img} alt={game.name} className="game-image" />
            <h3>{game.name}</h3>
            <p>${game.price}</p>
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
