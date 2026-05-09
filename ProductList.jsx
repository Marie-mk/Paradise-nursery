import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { addItem, selectCartCount, selectIsInCart } from '../store/CartSlice';

const categories = [
  {
    name: 'Tropical Beauties',
    subtitle: 'Lush, dramatic foliage that brings the jungle indoors.',
    plants: [
      { id: 'tp1', name: 'Monstera Deliciosa', description: 'Iconic split leaves, thrives in indirect light.', price: 24.99, image: 'https://images.unsplash.com/photo-1614594975525-e45190c55d0b?w=400&auto=format&fit=crop' },
      { id: 'tp2', name: 'Bird of Paradise', description: 'Bold tropical look, produces stunning blooms.', price: 39.99, image: 'https://images.unsplash.com/photo-1598880943693-70878938de93?w=400&auto=format&fit=crop' },
      { id: 'tp3', name: 'Fiddle Leaf Fig', description: 'Large glossy leaves, a designer favorite.', price: 34.99, image: 'https://images.unsplash.com/photo-1586093021307-c4a7d7ff5a04?w=400&auto=format&fit=crop' },
      { id: 'tp4', name: 'Philodendron Brasil', description: 'Heart-shaped leaves with golden variegation.', price: 14.99, image: 'https://images.unsplash.com/photo-1609012046706-7b6d5eb4d78a?w=400&auto=format&fit=crop' },
      { id: 'tp5', name: 'Calathea Orbifolia', description: 'Stunning silver-striped, prayer plant family.', price: 19.99, image: 'https://images.unsplash.com/photo-1616500220404-e0af936a6bff?w=400&auto=format&fit=crop' },
      { id: 'tp6', name: 'Alocasia Polly', description: 'Arrow-shaped leaves with bold white veins.', price: 21.99, image: 'https://images.unsplash.com/photo-1599598425947-5202edd56bdb?w=400&auto=format&fit=crop' },
    ],
  },
  {
    name: 'Succulents & Cacti',
    subtitle: 'Low-maintenance desert gems perfect for any shelf.',
    plants: [
      { id: 'sc1', name: 'Echeveria Elegans', description: 'Rosette succulent with soft blue-green leaves.', price: 7.99, image: 'https://images.unsplash.com/photo-1459156212016-c812468e2115?w=400&auto=format&fit=crop' },
      { id: 'sc2', name: 'Aloe Vera', description: 'Soothing gel inside, loves bright sunny spots.', price: 9.99, image: 'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?w=400&auto=format&fit=crop' },
      { id: 'sc3', name: 'Barrel Cactus', description: 'Classic golden spines, drought-tolerant champion.', price: 12.99, image: 'https://images.unsplash.com/photo-1518398046578-8cca57782e17?w=400&auto=format&fit=crop' },
      { id: 'sc4', name: 'Haworthia Fasciata', description: '"Zebra plant" with white horizontal stripes.', price: 8.99, image: 'https://images.unsplash.com/photo-1620803366004-119b57f54cd6?w=400&auto=format&fit=crop' },
      { id: 'sc5', name: 'Prickly Pear Cactus', description: 'Paddle-shaped pads, colorful edible fruits.', price: 11.99, image: 'https://images.unsplash.com/photo-1554296520-a6d59b1e0df8?w=400&auto=format&fit=crop' },
      { id: 'sc6', name: 'String of Pearls', description: 'Cascading bead-like leaves, beautiful in hanging pots.', price: 13.99, image: 'https://images.unsplash.com/photo-1614594575650-7cd4c96e71d3?w=400&auto=format&fit=crop' },
    ],
  },
  {
    name: 'Air-Purifying Plants',
    subtitle: "Nature's air filters — beautiful and functional.",
    plants: [
      { id: 'ap1', name: 'Peace Lily', description: 'White blooms, removes toxins from the air.', price: 16.99, image: 'https://images.unsplash.com/photo-1616690248008-b5e7c47a0de2?w=400&auto=format&fit=crop' },
      { id: 'ap2', name: 'Snake Plant', description: 'Nearly indestructible, excellent air purifier.', price: 18.99, image: 'https://images.unsplash.com/photo-1572688484438-313a6e50c333?w=400&auto=format&fit=crop' },
      { id: 'ap3', name: 'Pothos Golden', description: 'Trailing vines, thrives in low light conditions.', price: 9.99, image: 'https://images.unsplash.com/photo-1601598851547-4302969d0614?w=400&auto=format&fit=crop' },
      { id: 'ap4', name: 'Spider Plant', description: 'Produces baby "spiderettes," easy to propagate.', price: 10.99, image: 'https://images.unsplash.com/photo-1530968033775-2c92736b131e?w=400&auto=format&fit=crop' },
      { id: 'ap5', name: 'Rubber Plant', description: 'Deep burgundy glossy leaves, removes CO₂.', price: 22.99, image: 'https://images.unsplash.com/photo-1592150621744-aca64f48394a?w=400&auto=format&fit=crop' },
      { id: 'ap6', name: 'Boston Fern', description: 'Feathery fronds, natural humidifier.', price: 15.99, image: 'https://images.unsplash.com/photo-1616410011236-7a42121b9e6f?w=400&auto=format&fit=crop' },
    ],
  },
];

function Navbar() {
  const cartCount = useSelector(selectCartCount);
  return (
    <nav className="navbar">
      <Link to="/" className="navbar-brand">🌿 Paradise Nursery</Link>
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/products">Plants</Link></li>
        <li>
          <Link to="/cart" className="cart-icon-wrapper">
            🛒
            {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
          </Link>
        </li>
      </ul>
    </nav>
  );
}

function PlantCard({ plant }) {
  const dispatch = useDispatch();
  const inCart = useSelector(selectIsInCart(plant.id));
  return (
    <div className="plant-card">
      <img src={plant.image} alt={plant.name} />
      <div className="plant-info">
        <div className="plant-name">{plant.name}</div>
        <div className="plant-description">{plant.description}</div>
        <div className="plant-price">${plant.price.toFixed(2)}</div>
        <button className="btn-add-cart" onClick={() => dispatch(addItem(plant))} disabled={inCart}>
          {inCart ? '✓ Added' : 'Add to Cart'}
        </button>
      </div>
    </div>
  );
}

function ProductList() {
  return (
    <div className="product-page">
      <Navbar />
      <div className="product-page-header">
        <h1>Our Plant Collection</h1>
        <p>Hand-selected beauties for every home and skill level</p>
      </div>
      {categories.map((cat) => (
        <div className="category-section" key={cat.name}>
          <h2 className="category-title">{cat.name}</h2>
          <p className="category-subtitle">{cat.subtitle}</p>
          <div className="plant-grid">
            {cat.plants.map((plant) => (
              <PlantCard key={plant.id} plant={plant} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export { Navbar };
export default ProductList;