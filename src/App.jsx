import React, { useState, useEffect } from 'react';

const products = [
  {
    id: 1,
    name: 'Festival Bread (Standard Sliced)',
    price: '₦1,000',
    desc: 'Our classic festival sliced bread, soft and perfect for every home.',
    image: '/images/products/prod_1.jpg'
  },
  {
    id: 2,
    name: 'Festival Bread (Family Large)',
    price: '₦1,500',
    desc: 'Our jumbo premium loaf, perfectly baked for the entire family breakfast.',
    image: '/images/products/prod_2.jpg'
  },
  {
    id: 3,
    name: 'Festival Special (Golden Loaf)',
    price: '₦600',
    desc: 'A premium golden-brown loaf with a rich, buttery aroma that melts in your mouth.',
    image: '/images/products/prod_3.jpg'
  },
  {
    id: 4,
    name: 'Festival Bread Rolls (Maxi Pack)',
    price: '₦1,000',
    desc: 'Large pack of our signature soft rolls. Perfect for burgers, sliders, or just snacking.',
    image: '/images/products/prod_4.jpg'
  },
  {
    id: 5,
    name: 'Festival Special (Classic)',
    price: '₦400',
    desc: 'The all-time favorite special loaf. Balanced sweetness and soft texture for daily joy.',
    image: '/images/products/prod_5.jpg'
  },
  {
    id: 6,
    name: 'Festival Special (Standard)',
    price: '₦200',
    desc: 'Our most affordable special loaf, packed with the same high-quality ingredients.',
    image: '/images/products/prod_6.jpg'
  },
  {
    id: 7,
    name: 'Festival Special (Long Loaf)',
    price: '₦500',
    desc: 'An extra-long specialty loaf, great for making long sandwiches or sharing with friends.',
    image: '/images/products/prod_7.jpg'
  },
  {
    id: 8,
    name: 'Festival Special (Round)',
    price: '₦300',
    desc: 'A uniquely shaped round loaf, extra fluffy and perfect for a quick individual meal.',
    image: '/images/products/prod_8.jpg'
  },
  {
    id: 9,
    name: 'Festival Premium Special Bun',
    price: '₦300',
    desc: 'Our largest premium round bun. Rich in flavor and perfect for a hearty snack.',
    image: '/images/products/prod_9.jpg'
  },
  {
    id: 10,
    name: 'Festival Special Mini Rolls',
    price: '₦400',
    desc: 'A pack of mini delights. Soft, bite-sized rolls that kids and adults absolutely love.',
    image: '/images/products/prod_10.jpg'
  }
];

const cakeProducts = [
  { id: 101, name: 'Velvet Dream Cake', desc: 'A rich, velvety texture with a hint of cocoa and premium cream cheese frosting.', image: '/images/cakes/1778083734937.jpg' },
  { id: 102, name: 'Golden Celebration', desc: 'Our signature golden sponge cake, perfect for birthdays and anniversaries.', image: '/images/cakes/1778083747062.jpg' },
  { id: 103, name: 'Chocolate Overload', desc: 'Triple layers of Belgian chocolate with a smooth ganache finish.', image: '/images/cakes/1778083824638.jpg' },
  { id: 104, name: 'Vanilla Bean Classic', desc: 'Pure Madagascar vanilla bean sponge with light buttercream.', image: '/images/cakes/1778083880798.jpg' },
  { id: 105, name: 'Strawberry Delight', desc: 'Fresh strawberry-infused layers with real fruit compote.', image: '/images/cakes/1778083936292.jpg' },
  { id: 106, name: 'Caramel Crunch', desc: 'Salted caramel layers with crunchy praline bits.', image: '/images/cakes/1778083952237.jpg' },
  { id: 107, name: 'Red Velvet Royale', desc: 'The king of cakes. Deep red layers with a royal touch of flavor.', image: '/images/cakes/1778084029051.jpg' },
  { id: 108, name: 'Mocha Magic', desc: 'Coffee-infused sponge for that perfect morning or evening treat.', image: '/images/cakes/1778084060792.jpg' },
  { id: 109, name: 'Fruit Fantasy', desc: 'Loaded with seasonal fresh fruits and light whipped cream.', image: '/images/cakes/1778084065579.jpg' },
  { id: 110, name: 'Traditional Wedding Drum', desc: 'Beautifully crafted drum cake for traditional ceremonies.', image: '/images/cakes/1778084101735.jpg' },
  { id: 111, name: 'Royal Purple Couple', desc: 'Elegant traditional couple cake in royal purple attire.', image: '/images/cakes/1778084110564.jpg' },
  { id: 112, name: 'Coral Beads Masterpiece', desc: 'Stunning cake adorned with edible traditional coral beads.', image: '/images/cakes/1778084115245.jpg' },
  { id: 113, name: 'Pink & Blue Traditional', desc: 'Vibrant traditional couple design with matching accessories.', image: '/images/cakes/1778084118525.jpg' },
  { id: 114, name: 'Golden Drip Cherry', desc: 'Delicious vanilla cake with a golden drip and fresh cherries.', image: '/images/cakes/download (5).jpeg' },
  { id: 115, name: 'Pink Rose Swirls', desc: 'Beautiful cake decorated with delicate pink and white rose swirls.', image: '/images/cakes/images (18).jpeg' },
  { id: 116, name: 'Chocolate Oreo Drip', desc: 'Decadent chocolate cake with Oreo toppings and chocolate drip.', image: '/images/cakes/images (19).jpeg' },
  { id: 117, name: 'Pink & Gold 70th', desc: 'Elegant 70th birthday cake with pink base and gold leaves.', image: '/images/cakes/images (20).jpeg' },
  { id: 118, name: 'Oreo & Chocolate Bliss', desc: 'Smooth buttercream cake topped with Oreos and chocolate treats.', image: '/images/cakes/images (21).jpeg' },
  { id: 119, name: 'Sweet Mum Birthday', desc: 'Special birthday cake with gold bars and sweet message.', image: '/images/cakes/images (22).jpeg' },
  { id: 120, name: 'Strawberry Layer Cake', desc: 'Classic double layer sponge cake with fresh strawberries and cream.', image: '/images/cakes/images (23).jpeg' },
  { id: 121, name: 'Abstract Gold & Black', desc: 'Modern abstract design with gold spheres and artistic patterns.', image: '/images/cakes/images (24).jpeg' }
];



function App() {
  const [scrolled, setScrolled] = useState(false);
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [quantities, setQuantities] = useState({});
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [view, setView] = useState('bread'); // 'bread' or 'cake'


  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleQuantityChange = (productId, delta) => {
    setQuantities(prev => ({
      ...prev,
      [productId]: Math.max(1, (prev[productId] || 1) + delta)
    }));
  };

  const handleInputQuantity = (productId, value) => {
    if (value === '') {
      setQuantities(prev => ({
        ...prev,
        [productId]: ''
      }));
      return;
    }
    const qty = parseInt(value);
    if (!isNaN(qty)) {
      setQuantities(prev => ({
        ...prev,
        [productId]: Math.max(1, qty)
      }));
    }
  };

  const addToCart = (product) => {
    const qtyVal = quantities[product.id];
    const qty = (qtyVal === '' || isNaN(parseInt(qtyVal))) ? 1 : parseInt(qtyVal);
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + qty } : item
        );
      }
      return [...prev, { ...product, quantity: qty }];
    });
    // Reset quantity for that product after adding
    setQuantities(prev => ({ ...prev, [product.id]: 1 }));
  };

  const removeFromCart = (id) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  const cartTotal = cart.reduce((total, item) => {
    const price = parseInt(item.price.replace(/[^\d]/g, ''));
    return total + (price * item.quantity);
  }, 0);

  const orderViaWhatsApp = () => {
    const phone1 = '2348033837951';
    const message = encodeURIComponent(
      `Hello Festival Special Bread & Cakes, I would like to place an order (from your website):\n\n${cart.map(item => `- ${item.name} (${item.quantity} units)`).join('\n')}\n\nPlease let me know when it will be ready!`
    );
    window.open(`https://wa.me/${phone1}?text=${message}`, '_blank');
  };



  const currentProducts = view === 'bread' ? products : cakeProducts;

  const filteredProducts = currentProducts.filter(p =>
    p.name.toLowerCase().includes(searchQuery.toLowerCase())
  );


  return (
    <div className="app">
      {/* Floating Cart Button */}
      <button className="cart-badge" onClick={() => setIsCartOpen(true)} aria-label="Open Cart">
        <span>🛒</span>
        {cart.length > 0 && <div className="badge">{cart.reduce((a, b) => a + b.quantity, 0)}</div>}
      </button>

      {/* Cart Drawer Overlay */}
      <div className={`cart-drawer-overlay ${isCartOpen ? 'open' : ''}`} onClick={() => setIsCartOpen(false)}></div>

      {/* Cart Drawer */}
      <div className={`cart-drawer ${isCartOpen ? 'open' : ''}`}>
        <div className="cart-header">
          <h3>Your Basket</h3>
          <button className="close-btn" onClick={() => setIsCartOpen(false)}>&times;</button>
        </div>
        <div className="cart-content">
          {cart.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '2rem', opacity: 0.6 }}>Your basket is empty</div>
          ) : (
            cart.map(item => (
              <div key={item.id} className="cart-item">
                <img src={item.image} alt={item.name} loading="lazy" width="60" height="60" />
                <div className="cart-item-info">
                  <h4>{item.name}</h4>
                  <p>Quantity: {item.quantity}</p>
                </div>

                <button onClick={() => removeFromCart(item.id)} className="remove-item">&times;</button>
              </div>
            ))
          )}
        </div>
        {cart.length > 0 && (
          <div className="cart-footer">
            <button className="btn btn-primary" style={{ width: '100%', marginTop: '1rem' }} onClick={orderViaWhatsApp}>
              Checkout via WhatsApp
            </button>
          </div>

        )}
      </div>

      <nav className={scrolled ? 'scrolled' : ''}>
        <div className="logo">
          FESTIVAL <span>SPECIAL BREAD</span>
        </div>

        {/* Mobile Menu Icon */}
        <div className="menu-icon" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          <div className={`bar ${isMobileMenuOpen ? 'open' : ''}`}></div>
          <div className={`bar ${isMobileMenuOpen ? 'open' : ''}`}></div>
          <div className={`bar ${isMobileMenuOpen ? 'open' : ''}`}></div>
        </div>

        <ul className={`nav-links ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
          <li><a href="#home" onClick={() => setIsMobileMenuOpen(false)}>Home</a></li>

          <li><a href="#products" onClick={() => setIsMobileMenuOpen(false)}>Products</a></li>
          <li><a href="#about" onClick={() => setIsMobileMenuOpen(false)}>About</a></li>
          <li><a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>Contact</a></li>
          <li className="mobile-only">

            <button className="btn btn-primary" onClick={() => { setIsCartOpen(true); setIsMobileMenuOpen(false); }}>
              Basket ({cart.reduce((a, b) => a + b.quantity, 0)})
            </button>
          </li>
        </ul>

        <div className="nav-actions desktop-only">
          <button className="btn btn-primary" onClick={() => setIsCartOpen(true)}>
            Basket ({cart.reduce((a, b) => a + b.quantity, 0)})
          </button>
        </div>
      </nav>

      <div className="mobile-view-switcher-container" style={{ background: 'var(--card-bg)', borderBottom: '1px solid #eaeaea', paddingTop: scrolled ? '70px' : '0' }}>
        <div className="view-switcher-nav" style={{ justifyContent: 'center', padding: '1rem' }}>
          <button 
            className={`switch-btn ${view === 'bread' ? 'active' : ''}`} 
            onClick={() => { setView('bread'); }}
            style={{ padding: '0.8rem 2rem', fontSize: '1.1rem' }}
          >
            🥖 Bread
          </button>
          <button 
            className={`switch-btn ${view === 'cake' ? 'active' : ''}`} 
            onClick={() => { setView('cake'); }}
            style={{ padding: '0.8rem 2rem', fontSize: '1.1rem' }}
          >
            🎂 Cakes
          </button>
        </div>
      </div>

      <section id="home" className={`hero ${view === 'cake' ? 'cake-hero' : ''}`} style={{ marginTop: '0' }}>
        <h1>{view === 'bread' ? 'Freshly Baked Daily' : 'Exquisite Festival Cakes'}</h1>
        <p>
          {view === 'bread' 
            ? 'Experience the festive taste in your home. 100% natural ingredients, zero bromate, pure joy in every bite.'
            : 'Premium custom cakes for your special moments. Handcrafted with love, finest ingredients, and artistic design.'}
        </p>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
          <a href="#products" className="btn btn-primary">{view === 'bread' ? 'View Products' : 'Explore Cakes'}</a>
          <a href="#about" className="btn" style={{ color: 'white', border: '1px solid white' }}>Our Story</a>
        </div>
      </section>


      {/* NEW: Ad Video / Marquee Section */}
      {view === 'bread' && (
        <section className="ad-video-section">
          <div className="ad-video-header">
            <h3>✨ Festival Spotlight ✨</h3>
            <div className="ad-controls">
              <button className="ad-btn" onClick={() => {
                const text = "Welcome to Festival Special Bread. We bake the finest, freshest bread in Lagos daily. From our Family Large Loaf to our sweet Golden Special, every bite is a joy. High quality, zero bromate, and perfect for your home. Order now!";
                const utterance = new SpeechSynthesisUtterance(text);
                utterance.rate = 0.9;
                utterance.pitch = 1.1;
                window.speechSynthesis.cancel();
                window.speechSynthesis.speak(utterance);
              }}>
                🔊 Play Audio Ad
              </button>
            </div>
          </div>

          <div className="ad-track-container">
            <div className="ad-track">
              {[...products, ...products].map((product, index) => (
              <div key={`${product.id}-${index}`} className="ad-card">
                <img src={product.image} alt={product.name} />
                <div className="ad-overlay">
                  <div className="ad-name">{product.name}</div>
                </div>
              </div>

              ))}
            </div>
          </div>
        </section>
      )}


      <section className="section">
        <div className="discovery-grid">
          <div className="discovery-text">
            <h2>{view === 'bread' ? 'Hand-Crafted Excellence' : 'Artisanal Cake Mastery'}</h2>
            <p>
              {view === 'bread' 
                ? 'Our masters use traditional techniques passed down through generations to create the fluffiest, most flavorful bread in Lagos. Every loaf is a celebration of quality.'
                : 'From weddings to birthday celebrations, our cakes are designed to be the centerpiece of your joy. Each cake is a masterpiece of flavor and elegance.'}
            </p>
            <a href="#products" className="btn btn-primary">Discover More</a>
          </div>
          <div className="discovery-image">
            <img src={view === 'bread' ? "/bakery_full_display.png" : "https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"} alt="Display" loading="lazy" />
          </div>
        </div>
      </section>


      <section id="products" className="section">
        <div className="section-title">
          <h2>{view === 'bread' ? 'Our Bread Collection' : 'Our Cake Masterpieces'}</h2>
          <p>
            {view === 'bread' 
              ? 'Choose from our wide variety of freshly baked loaves. We sell in very large quantities!'
              : 'Discover our range of premium cakes, baked to perfection for every celebration.'}
          </p>
          <div className="search-container" style={{ marginTop: '2rem', maxWidth: '500px', margin: '2rem auto' }}>
            <input
              type="text"
              placeholder={view === 'bread' ? "Search for your favorite bread..." : "Search for your favorite cake..."}
              className="search-input"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        <div className="product-grid">
          {filteredProducts.map(product => (
            <div key={product.id} className="product-card">
              <div className="product-img-container">
                <img src={product.image} alt={product.name} className="product-img" loading="lazy" />
              </div>

              <div className="product-info">
                <h3 className="product-name">{product.name}</h3>
                <p className="product-desc">{product.desc}</p>

                <div className="quantity-selector">
                  <button onClick={() => handleQuantityChange(product.id, -1)}>-</button>
                  <input
                    type="number"
                    className="quantity-input"
                    value={quantities[product.id] === undefined ? 1 : quantities[product.id]}
                    onChange={(e) => handleInputQuantity(product.id, e.target.value)}
                    min="1"
                  />
                  <button onClick={() => handleQuantityChange(product.id, 1)}>+</button>
                </div>

                <button
                  className="btn btn-primary"
                  style={{ marginTop: '1rem', width: '100%', border: 'none' }}
                  onClick={() => addToCart(product)}
                >
                  Add to Basket
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section-title">
          <h2 style={{ color: 'var(--primary)' }}>What Our Customers Say</h2>
          <p style={{ color: 'var(--text-muted)' }}>
            {view === 'bread' ? 'Real feedback from our happy bread lovers.' : 'Hear from those who celebrated with our cakes.'}
          </p>
        </div>
        <div className="testimonial-grid">
          {view === 'bread' ? (
            <>
              <div className="testimonial-card">
                <p>"The best bread in Festac! Always fresh, soft and the large size is perfect for my family."</p>
                <h4>- Mrs. Adebayo, Lagos</h4>
              </div>
              <div className="testimonial-card">
                <p>"We order in bulk for our restaurant and the quality is consistently high. Zero bromate is a huge plus."</p>
                <h4>- Chef Michael, Island Lounge</h4>
              </div>
              <div className="testimonial-card">
                <p>"My kids love the Mini Special breads. It's their favorite snack for school!"</p>
                <h4>- Sarah J., Parent</h4>
              </div>
            </>
          ) : (
            <>
              <div className="testimonial-card">
                <p>"The Red Velvet cake we ordered for my daughter's birthday was not only beautiful but delicious!"</p>
                <h4>- Mrs. Okafor, Lekki</h4>
              </div>
              <div className="testimonial-card">
                <p>"Best chocolate cake I've had in Lagos. The moisture and richness are unmatched."</p>
                <h4>- David E., Foodie</h4>
              </div>
              <div className="testimonial-card">
                <p>"Festival Special Cakes made our wedding day extra special. Professional service and stunning design."</p>
                <h4>- The Williams Family</h4>
              </div>
            </>
          )}
        </div>
      </section>

      {view === 'cake' && (
        <section className="section cake-article glass" style={{ margin: '0 5% 5rem 5%', padding: '4rem' }}>
          <div className="article-content" style={{ maxWidth: '900px', margin: '0 auto' }}>
            <h2 style={{ color: 'var(--primary)', fontSize: '2.5rem', marginBottom: '2rem', textAlign: 'center' }}>The Art of the Perfect Cake</h2>
            <p style={{ fontSize: '1.2rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
              At Festival Special Cakes, we believe that every celebration deserves a centerpiece that is as beautiful as it is delicious. Our journey into the world of confectionery began with a simple mission: to bring the same dedication to quality and tradition from our famous bread to the world of premium cakes.
            </p>
            <p style={{ fontSize: '1.2rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
              What makes a Festival cake special? It starts with the ingredients. We use only the finest Belgian chocolates, pure Madagascar vanilla, and fresh dairy. But the real secret lies in our baking process. Each layer is baked with precision to ensure a moist, tender crumb that melts in your mouth.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', margin: '3rem 0' }}>
              <div className="article-feature">
                <h4 style={{ color: 'var(--primary)', marginBottom: '0.5rem' }}>Custom Designs</h4>
                <p>Every cake is a unique creation tailored to your vision and event theme.</p>
              </div>
              <div className="article-feature">
                <h4 style={{ color: 'var(--primary)', marginBottom: '0.5rem' }}>Premium Flavors</h4>
                <p>From classic vanilla to exotic fruit infusions, our flavor profiles are expertly balanced.</p>
              </div>
              <div className="article-feature">
                <h4 style={{ color: 'var(--primary)', marginBottom: '0.5rem' }}>Memorable Moments</h4>
                <p>We don't just bake cakes; we create memories that last long after the last slice is gone.</p>
              </div>
            </div>
            <p style={{ fontSize: '1.2rem', lineHeight: '1.8', textAlign: 'center', fontStyle: 'italic', color: 'var(--primary)' }}>
              "Life is short, make it sweet with a Festival Special Cake."
            </p>
          </div>
        </section>
      )}


      <section id="about" className="section">
        <div className="section-title">
          <h2>Why Choose Festival Special Bread?</h2>
          <p>We pride ourselves on quality, tradition, and large-scale supply.</p>
        </div>
        <div className="feature-grid">
          <div className="feature-card">
            <span className="icon">🌾</span>
            <h3>100% Natural</h3>
            <p>Made with the finest natural ingredients, no artificial preservatives added.</p>
          </div>
          <div className="feature-card">
            <span className="icon">🚫</span>
            <h3>Bromate Free</h3>
            <p>Your health is our priority. We are strictly bromate-free certified.</p>
          </div>
          <div className="feature-card">
            <span className="icon">📦</span>
            <h3>Bulk Supply</h3>
            <p>We sell in very large quantities to meet your business or event needs.</p>
          </div>
        </div>
      </section>

      <section id="contact" className="section">
        <div className="section-title">
          <h2>Visit Us</h2>
          <p>Come and experience the aroma of fresh bread.</p>
        </div>
        <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }} className="glass">
          <div style={{ padding: '3rem' }}>
            <h3 style={{ color: '#1A365D', marginBottom: '1.5rem' }}>Our Location</h3>
            <p style={{ fontSize: '1.2rem', marginBottom: '1.5rem' }}>
              House 3, 2nd Avenue 205 Road, Festac Town, Lagos, Nigeria
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
              <a
                href="https://wa.me/2348033837951"
                className="btn btn-primary"
                style={{ backgroundColor: '#25D366', color: 'white', border: 'none' }}
              >
                WhatsApp 1
              </a>
              <a
                href="https://wa.me/2349079008900"
                className="btn btn-primary"
                style={{ backgroundColor: '#25D366', color: 'white', border: 'none' }}
              >
                WhatsApp 2
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <div className="logo" style={{ color: 'white', justifyContent: 'center', marginBottom: '1.5rem' }}>
          FESTIVAL <span style={{ color: '#FFD700' }}>SPECIAL BREAD</span>
        </div>
        <p style={{ opacity: 0.7, marginBottom: '2rem' }}>"You deserve the festive taste in your home."</p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', marginBottom: '2rem', flexWrap: 'wrap' }}>
          <span>📍 Festac Town, Lagos</span>
          <span>📞 08033837951</span>
          <span>📞 09079008900</span>
        </div>
        <p style={{ fontSize: '0.8rem', opacity: 0.5 }}>&copy; 2026 Festival Special Bread. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
