import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css';

function Home() {
  const trendingDestinations = [
    {
      name: 'Bali, Indonesia',
      image: 'https://cdn.pixabay.com/photo/2013/11/16/13/58/temple-211558_1280.jpg',
      tag: 'Trending',
      price: 'From $499',
      blurb: 'Sunset temples, jungle stays, and beach clubs in one trip.',
    },
    {
      name: 'Swiss Alps',
      image: 'https://cdn.pixabay.com/photo/2020/02/26/19/40/snow-4882626_1280.jpg',
      tag: 'Best Seller',
      price: 'From $799',
      blurb: 'Scenic train routes, alpine villages, and glacier views.',
    },
    {
      name: 'Paris, France',
      image: 'https://cdn.pixabay.com/photo/2021/11/17/15/07/paris-6803796_1280.jpg',
      tag: 'Romantic',
      price: 'From $699',
      blurb: 'Cafe culture, iconic landmarks, and timeless city walks.',
    },
    {
      name: 'Dubai, UAE',
      image: 'https://cdn.pixabay.com/photo/2018/02/17/22/31/city-3161105_1280.jpg',
      tag: 'Luxury',
      price: 'From $649',
      blurb: 'Skyline views, desert safaris, and world-class shopping.',
    },
  ];

  const quickPicks = [
    { title: 'Weekend Escapes', subtitle: '2-3 days', badge: 'WE' },
    { title: 'Family Trips', subtitle: 'Kid friendly', badge: 'FT' },
    { title: 'Honeymoon Specials', subtitle: 'Curated romance', badge: 'HS' },
    { title: 'Adventure Trails', subtitle: 'Thrill packed', badge: 'AT' },
  ];

  return (
    <main className="home-page">
      <section className="hero-shell">
        <div className="hero-overlay" />
        <div className="container hero-content">
          <p className="hero-kicker">Discover what is hot this season</p>
          <h1 className="hero-title">Plan your next trending escape with TravelMate</h1>
          <p className="hero-subtitle">
            Handpicked destinations, best-time deals, and flexible itineraries for modern travelers.
          </p>

          <div className="search-strip row g-2 g-md-3">
            <div className="col-12 col-md-4">
              <input className="form-control travel-input" placeholder="Where to?" />
            </div>
            <div className="col-6 col-md-3">
              <input className="form-control travel-input" type="date" />
            </div>
            <div className="col-6 col-md-3">
              <select className="form-select travel-input" defaultValue="Travelers">
                <option disabled>Travelers</option>
                <option>1 Adult</option>
                <option>2 Adults</option>
                <option>Family</option>
                <option>Group</option>
              </select>
            </div>
            <div className="col-12 col-md-2 d-grid">
              <button className="btn explore-btn">Explore</button>
            </div>
          </div>

          <div className="chip-row">
            <span>Popular:</span>
            <button className="chip-btn">Beach</button>
            <button className="chip-btn">Mountains</button>
            <button className="chip-btn">City Breaks</button>
            <button className="chip-btn">Adventure</button>
          </div>
        </div>
      </section>

      <section className="trending-section container">
        <div className="section-head">
          <h2>Trending Right Now</h2>
          <a href="/services" className="view-all-link">View all trips</a>
        </div>

        <div className="row g-4">
          {trendingDestinations.map((trip, index) => (
            <div className="col-12 col-md-6 col-xl-3" key={trip.name}>
              <article className="trend-card" style={{ animationDelay: `${index * 0.08}s` }}>
                <div className="trend-img-wrap">
                  <img src={trip.image} alt={trip.name} className="trend-img" />
                  <span className="trend-tag">{trip.tag}</span>
                </div>
                <div className="trend-body">
                  <h3>{trip.name}</h3>
                  <p>{trip.blurb}</p>
                  <div className="trend-meta">
                    <strong>{trip.price}</strong>
                    <button className="btn btn-sm trend-btn">Book now</button>
                  </div>
                </div>
              </article>
            </div>
          ))}
        </div>
      </section>

      <section className="quick-picks container">
        <h2>Quick Picks for Your Mood</h2>
        <div className="row g-3">
          {quickPicks.map((pick, index) => (
            <div className="col-12 col-sm-6 col-lg-3" key={pick.title}>
              <div className="pick-card" style={{ animationDelay: `${index * 0.05}s` }}>
                <div className="pick-badge">{pick.badge}</div>
                <h3>{pick.title}</h3>
                <p>{pick.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="stats-band">
        <div className="container stats-grid">
          <div>
            <h3>50K+</h3>
            <p>Trips planned</p>
          </div>
          <div>
            <h3>120+</h3>
            <p>Destinations</p>
          </div>
          <div>
            <h3>4.8/5</h3>
            <p>Traveler rating</p>
          </div>
          <div>
            <h3>24/7</h3>
            <p>Support</p>
          </div>
        </div>
      </section>

      <section className="cta-shell container">
        <div className="cta-card">
          <h2>Ready for your next adventure?</h2>
          <p>Sign up now and unlock member-only flight and hotel bundles.</p>
          <div className="cta-actions">
            <a href="/register" className="btn cta-primary">Get Started</a>
            <a href="/contact" className="btn cta-secondary">Talk to an Expert</a>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;
