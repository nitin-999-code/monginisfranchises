import { useState, useEffect, useRef } from 'react';

/* ============================================
   SVG ICON COMPONENTS
   ============================================ */

const CheckIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const ArrowRight = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
  </svg>
);

const PhoneIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

const ShieldIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>
);

const TrendingUpIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" /><polyline points="17 6 23 6 23 12" />
  </svg>
);

const AwardIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="8" r="7" /><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
  </svg>
);

const UsersIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

const DollarIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
  </svg>
);

const ClockIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
  </svg>
);

const BarChartIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="12" y1="20" x2="12" y2="10" /><line x1="18" y1="20" x2="18" y2="4" /><line x1="6" y1="20" x2="6" y2="16" />
  </svg>
);

const MapPinIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
  </svg>
);

const BookOpenIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" /><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
  </svg>
);

const MegaphoneIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 11l18-5v12L3 14v-3z" /><path d="M11.6 16.8a3 3 0 1 1-5.8-1.6" />
  </svg>
);

const TruckIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="1" y="3" width="15" height="13" /><polygon points="16 8 20 8 23 11 23 16 16 16 16 8" /><circle cx="5.5" cy="18.5" r="2.5" /><circle cx="18.5" cy="18.5" r="2.5" />
  </svg>
);

const StarIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="1">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);

const XIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const AlertTriangleIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" /><line x1="12" y1="9" x2="12" y2="13" /><line x1="12" y1="17" x2="12.01" y2="17" />
  </svg>
);

const LockIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" />
  </svg>
);

const IndianRupeeIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 3h12" /><path d="M6 8h12" /><path d="M6 13l8.5 8" /><path d="M6 13h2a4 4 0 0 0 0-10H6" />
  </svg>
);

const ChevronDownIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="6 9 12 15 18 9" />
  </svg>
);

const HelpCircleIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" /><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" /><line x1="12" y1="17" x2="12.01" y2="17" />
  </svg>
);


/* ============================================
   FAQ ITEM COMPONENT
   ============================================ */
function FaqItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`faq-item ${isOpen ? 'open' : ''}`}>
      <button
        className="faq-question"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <span>{question}</span>
        <span className="faq-chevron"><ChevronDownIcon /></span>
      </button>
      <div className="faq-answer">
        <p>{answer}</p>
      </div>
    </div>
  );
}


/* ============================================
   INQUIRY FORM COMPONENT
   ============================================ */
function InquiryForm({ variant = 'default', onSuccess }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    city: '',
    budget: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    // Simulate submission
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      if (onSuccess) onSuccess();
    }, 1200);
  };

  if (submitted) {
    return (
      <div className="form-success">
        <div className="form-success-icon">
          <CheckIcon />
        </div>
        <h4>Thank You!</h4>
        <p>Our franchise team will contact you within 24 hours with complete details.</p>
      </div>
    );
  }

  const isPopup = variant === 'popup';

  return (
    <form onSubmit={handleSubmit} id={isPopup ? 'popup-inquiry-form' : 'inquiry-form'}>
      <div className="form-group">
        <label htmlFor={isPopup ? 'popup-name' : 'name'}>Full Name</label>
        <input
          type="text"
          id={isPopup ? 'popup-name' : 'name'}
          name="name"
          placeholder="Enter your full name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor={isPopup ? 'popup-phone' : 'phone'}>Phone Number</label>
        <input
          type="tel"
          id={isPopup ? 'popup-phone' : 'phone'}
          name="phone"
          placeholder="Enter your phone number"
          value={formData.phone}
          onChange={handleChange}
          required
          pattern="[0-9]{10}"
          title="Please enter a valid 10-digit phone number"
        />
      </div>
      {!isPopup && (
        <>
          <div className="form-group">
            <label htmlFor="city">City</label>
            <input
              type="text"
              id="city"
              name="city"
              placeholder="Your preferred city"
              value={formData.city}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="budget">Investment Budget</label>
            <select
              id="budget"
              name="budget"
              value={formData.budget}
              onChange={handleChange}
              required
            >
              <option value="">Select your budget</option>
              <option value="5-10">₹5 Lakh – ₹10 Lakh</option>
              <option value="10-15">₹10 Lakh – ₹15 Lakh</option>
              <option value="15-20">₹15 Lakh – ₹20 Lakh</option>
              <option value="20+">₹20 Lakh+</option>
            </select>
          </div>
        </>
      )}
      <button
        type="submit"
        className="form-submit-btn"
        disabled={loading}
        id={isPopup ? 'popup-submit-btn' : 'hero-submit-btn'}
      >
        {loading ? 'Submitting...' : isPopup ? 'Send Me Details' : 'Get Franchise Details Now'}
      </button>
      {!isPopup && (
        <div className="form-reassurance">
          <div className="form-reassurance-item">
            <span className="check-icon-sm"><CheckIcon /></span>
            No prior bakery experience required
          </div>
          <div className="form-reassurance-item">
            <span className="check-icon-sm"><CheckIcon /></span>
            Quick response within 24 hours
          </div>
          <div className="form-reassurance-item">
            <span className="check-icon-sm"><CheckIcon /></span>
            100% confidential inquiry
          </div>
        </div>
      )}
      {isPopup && (
        <div className="form-trust">
          <LockIcon />
          <span>Your information is secure and confidential</span>
        </div>
      )}
    </form>
  );
}


/* ============================================
   MAIN APP COMPONENT
   ============================================ */
function App() {
  const [showStickyBar, setShowStickyBar] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [popupShown, setPopupShown] = useState(false);
  const heroFormRef = useRef(null);

  // Sticky bar visibility on scroll
  useEffect(() => {
    const handleScroll = () => {
      setShowStickyBar(window.scrollY > 700);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Exit intent popup
  useEffect(() => {
    const handleMouseLeave = (e) => {
      if (e.clientY <= 0 && !popupShown) {
        setShowPopup(true);
        setPopupShown(true);
      }
    };
    document.addEventListener('mouseleave', handleMouseLeave);
    return () => document.removeEventListener('mouseleave', handleMouseLeave);
  }, [popupShown]);

  const scrollToForm = () => {
    if (heroFormRef.current) {
      heroFormRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <>
      {/* ====== HEADER ====== */}
      <header className="header" id="header">
        <div className="header-inner">
          <a href="#" className="header-logo" id="header-logo">
            <img src="/images/logo.png" alt="Monginis" />
          </a>
          <div className="header-cta">
            <a href="tel:+919999999999" className="header-phone" id="header-phone">
              <PhoneIcon />
              <span>Call Now</span>
            </a>
          </div>
        </div>
      </header>

      {/* ====== HERO SECTION ====== */}
      <section className="hero" id="hero-section">
        <div className="hero-bg">
          <img src="/images/storefront2.jpg" alt="Monginis Store" />
        </div>
        <div className="hero-content">
          <div className="hero-left">
            <div className="hero-badge">
              <AwardIcon />
              India's Most Trusted Bakery Brand
            </div>
            <h1 className="hero-title heading-display">
              Start Your Own Profitable <span className="highlight">Monginis Franchise</span> — Backed by 65+ Years of Brand Trust
            </h1>
            <p className="hero-subtitle">
              India's most recognized bakery brand with a proven franchise model. Low investment, daily demand for bakery products, and complete business support from day one.
            </p>
            <ul className="hero-benefits">
              <li>
                <span className="check-icon"><CheckIcon /></span>
                Trusted Brand Since 1956 — Household Name Across India
              </li>
              <li>
                <span className="check-icon"><CheckIcon /></span>
                20+ Million Customers Served Every Year
              </li>
              <li>
                <span className="check-icon"><CheckIcon /></span>
                Complete Training, Marketing & Operations Support
              </li>
            </ul>
            <div className="hero-cta-row">
              <button className="btn-primary btn-primary-large" onClick={scrollToForm} id="hero-cta-btn">
                Apply for Franchise <ArrowRight />
              </button>
            </div>
            <div className="hero-stats">
              <div className="hero-stat">
                <div className="hero-stat-value">700+</div>
                <div className="hero-stat-label">Cities</div>
              </div>
              <div className="hero-stat">
                <div className="hero-stat-value">18,000+</div>
                <div className="hero-stat-label">Pin Codes</div>
              </div>
              <div className="hero-stat">
                <div className="hero-stat-value">20M+</div>
                <div className="hero-stat-label">Customers</div>
              </div>
              <div className="hero-stat">
                <div className="hero-stat-value">65+</div>
                <div className="hero-stat-label">Years Legacy</div>
              </div>
            </div>
          </div>

          <div className="hero-right" ref={heroFormRef}>
            <div className="hero-form-card" id="hero-form-card">
              <div className="form-header">
                <h3>Get Franchise Details</h3>
                <p>Fill the form and our team will reach out within 24 hours</p>
              </div>
              <InquiryForm />
            </div>
          </div>
        </div>
      </section>

      {/* ====== TRUST BAR ====== */}
      <section className="trust-bar" id="trust-bar">
        <div className="container">
          <div className="trust-bar-inner">
            <div className="trust-item">
              <div className="trust-item-icon">
                <img src="/images/icon1.png" alt="Safe & Hygienic" />
              </div>
              <div className="trust-item-text">
                Safe & Hygienic
                <span>Bakery Standards</span>
              </div>
            </div>
            <div className="trust-item">
              <div className="trust-item-icon">
                <img src="/images/icon2.png" alt="700+ Cities" />
              </div>
              <div className="trust-item-text">
                Delivery in 700+
                <span>Cities Across India</span>
              </div>
            </div>
            <div className="trust-item">
              <div className="trust-item-icon">
                <img src="/images/icon3.png" alt="Trusted by 20 Million" />
              </div>
              <div className="trust-item-text">
                Trusted by 20
                <span>Million Customers</span>
              </div>
            </div>
            <div className="trust-item">
              <div className="trust-item-icon">
                <img src="/images/icon4.png" alt="18000+ Pincodes" />
              </div>
              <div className="trust-item-text">
                Services in 18,000+
                <span>Pincodes Nationwide</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====== WHY INVEST SECTION ====== */}
      <section className="section section-alt" id="why-invest">
        <div className="container">
          <div style={{ textAlign: 'center' }}>
            <span className="section-label">Why Monginis?</span>
            <h2 className="heading-section">Why Invest in Monginis Franchise?</h2>
            <p className="section-desc" style={{ margin: '12px auto 0' }}>
              A proven business model backed by decades of trust, consistent demand, and strong operational support.
            </p>
          </div>
          <div className="why-invest-grid">
            <div className="why-invest-card" id="card-low-investment">
              <div className="why-invest-icon">
                <IndianRupeeIcon />
              </div>
              <h4>Low Investment Model</h4>
              <p>Start your bakery business with a manageable investment. Monginis offers one of the most affordable franchise models in India's food industry.</p>
              <a href="#hero-form-card" className="card-apply-link" onClick={(e) => { e.preventDefault(); scrollToForm(); }}>
                Apply Now <ArrowRight />
              </a>
            </div>
            <div className="why-invest-card" id="card-high-profit">
              <div className="why-invest-icon">
                <TrendingUpIcon />
              </div>
              <h4>High Profit Potential</h4>
              <p>Bakery products carry strong margins. Monginis' consistent demand and repeat customer base help you generate reliable revenue.</p>
              <a href="#hero-form-card" className="card-apply-link" onClick={(e) => { e.preventDefault(); scrollToForm(); }}>
                Apply Now <ArrowRight />
              </a>
            </div>
            <div className="why-invest-card" id="card-brand">
              <div className="why-invest-icon">
                <AwardIcon />
              </div>
              <h4>Strong Brand Recognition</h4>
              <p>With 65+ years of legacy and presence across 700+ cities, Monginis is a household name that customers already know and trust.</p>
              <a href="#hero-form-card" className="card-apply-link" onClick={(e) => { e.preventDefault(); scrollToForm(); }}>
                Apply Now <ArrowRight />
              </a>
            </div>
            <div className="why-invest-card" id="card-support">
              <div className="why-invest-icon">
                <UsersIcon />
              </div>
              <h4>Complete Training & Support</h4>
              <p>From site selection to staff training, marketing to daily operations — Monginis provides end-to-end support at every step.</p>
              <a href="#hero-form-card" className="card-apply-link" onClick={(e) => { e.preventDefault(); scrollToForm(); }}>
                Apply Now <ArrowRight />
              </a>
            </div>
          </div>
          <div className="section-cta-wrapper">
            <button className="btn-primary" onClick={scrollToForm} id="why-invest-cta">
              Start Your Franchise Application <ArrowRight />
            </button>
          </div>
        </div>
      </section>

      {/* ====== PRODUCT SHOWCASE ====== */}
      <section className="section" id="products">
        <div className="container">
          <div style={{ textAlign: 'center' }}>
            <span className="section-label">Our Products</span>
            <h2 className="heading-section">Products Your Customers Will Love</h2>
            <p className="section-desc" style={{ margin: '12px auto 0' }}>
              Monginis offers a wide range of freshly baked products — from celebration cakes to everyday snacks — ensuring daily footfall and repeat business.
            </p>
          </div>
          <div className="product-grid">
            <div className="product-card" id="product-cakes">
              <div className="product-card-image">
                <img src="/images/cake.webp" alt="Monginis Cakes" />
              </div>
              <div className="product-card-body">
                <h4>Cakes</h4>
                <p>Freshly baked for birthdays, weddings, and celebrations</p>
              </div>
            </div>
            <div className="product-card" id="product-snacks">
              <div className="product-card-image">
                <img src="/images/snacks.jpg" alt="Monginis Snacks" />
              </div>
              <div className="product-card-body">
                <h4>Snacks</h4>
                <p>Tasty puffs, quiches, sandwiches, and much more</p>
              </div>
            </div>
            <div className="product-card" id="product-pastries">
              <div className="product-card-image">
                <img src="/images/pastries.png" alt="Monginis Pastries" />
              </div>
              <div className="product-card-body">
                <h4>Pastries</h4>
                <p>Delicious pastries in a variety of flavors for any time</p>
              </div>
            </div>
            <div className="product-card" id="product-breads">
              <div className="product-card-image">
                <img src="/images/breads.jpg" alt="Monginis Breads & Buns" />
              </div>
              <div className="product-card-body">
                <h4>Breads & Buns</h4>
                <p>Soft and fluffy freshly baked breads, baked daily</p>
              </div>
            </div>
            <div className="product-card" id="product-chocolates">
              <div className="product-card-image">
                <img src="/images/chocolates.jpg" alt="Monginis Chocolates & Desserts" />
              </div>
              <div className="product-card-body">
                <h4>Chocolates & Desserts</h4>
                <p>Rich chocolates, brownies, mousses, and sweet treats</p>
              </div>
            </div>
            <div className="product-card" id="product-beverages">
              <div className="product-card-image">
                <img src="/images/beverages.jpg" alt="Monginis Beverages" />
              </div>
              <div className="product-card-body">
                <h4>Beverages</h4>
                <p>Refreshing coffees, shakes, and drinks to complement</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====== WHY NOW MICRO SECTION ====== */}
      <section className="why-now-section" id="why-now">
        <div className="container">
          <div className="why-now-content">
            <p>India's organized bakery market continues to grow steadily.</p>
            <p><strong>Partner with an established brand instead of starting from scratch.</strong></p>
          </div>
        </div>
      </section>

      {/* ====== INVESTMENT & RETURNS ====== */}
      <section className="section investment-section" id="investment">
        <div className="container">
          <div style={{ textAlign: 'center' }}>
            <span className="section-label" style={{ color: 'rgba(255,255,255,0.5)' }}>Investment Details</span>
            <h2 className="heading-section" style={{ color: '#fff' }}>Investment & Returns Overview</h2>
            <p className="section-desc" style={{ margin: '12px auto 0', color: 'rgba(255,255,255,0.55)' }}>
              Transparent investment structure with clear profitability expectations.
            </p>
          </div>
          <div className="investment-grid">
            <div className="investment-card" id="invest-amount">
              <div className="investment-card-icon">
                <DollarIcon />
              </div>
              <h4>Estimated Investment</h4>
              <div className="value">₹10L – ₹20L</div>
              <p>Includes setup, interiors, equipment, and initial inventory</p>
            </div>
            <div className="investment-card" id="invest-roi">
              <div className="investment-card-icon">
                <ClockIcon />
              </div>
              <h4>Expected ROI Timeline</h4>
              <div className="value">12 – 18 Months</div>
              <p>Recover your investment with consistent daily sales</p>
            </div>
            <div className="investment-card" id="invest-margin">
              <div className="investment-card-icon">
                <BarChartIcon />
              </div>
              <h4>Profit Margin Potential</h4>
              <div className="value">25% – 40%</div>
              <p>Strong margins on bakery products with repeat customers</p>
            </div>
          </div>
          <div className="urgency-wrapper">
            <div className="urgency-text">
              <AlertTriangleIcon />
              Limited Franchise Opportunities Available in Major Cities — Applications Reviewed on First-Come Basis
            </div>
          </div>
          <div className="section-cta-wrapper">
            <button className="btn-white" onClick={scrollToForm} id="investment-cta">
              Check Availability in Your City <ArrowRight />
            </button>
          </div>
        </div>
      </section>

      {/* ====== FRANCHISE SUPPORT ====== */}
      <section className="section" id="support">
        <div className="container">
          <div style={{ textAlign: 'center' }}>
            <span className="section-label">Complete Support</span>
            <h2 className="heading-section">We Support You at Every Step</h2>
            <p className="section-desc" style={{ margin: '12px auto 0' }}>
              When you partner with Monginis, you're never alone. From launch to daily operations, our team is with you.
            </p>
          </div>
          <div className="support-grid">
            <div className="support-card" id="support-site">
              <div className="support-card-icon">
                <MapPinIcon />
              </div>
              <div className="support-card-content">
                <h4>Site Selection Assistance</h4>
                <p>Our team helps you identify the ideal location based on foot traffic, demographics, and commercial viability to maximize your store's potential.</p>
              </div>
            </div>
            <div className="support-card" id="support-training">
              <div className="support-card-icon">
                <BookOpenIcon />
              </div>
              <div className="support-card-content">
                <h4>Staff Training Program</h4>
                <p>Comprehensive training for you and your team covering product handling, customer service, hygiene protocols, and store management.</p>
              </div>
            </div>
            <div className="support-card" id="support-marketing">
              <div className="support-card-icon">
                <MegaphoneIcon />
              </div>
              <div className="support-card-content">
                <h4>Marketing Support</h4>
                <p>Benefit from Monginis' national brand campaigns, local marketing materials, seasonal promotions, and digital marketing guidance.</p>
              </div>
            </div>
            <div className="support-card" id="support-supply">
              <div className="support-card-icon">
                <TruckIcon />
              </div>
              <div className="support-card-content">
                <h4>Supply Chain & Operations</h4>
                <p>Reliable supply chain with regular deliveries, quality-controlled ingredients, and operational SOPs to keep your business running smoothly.</p>
              </div>
            </div>
          </div>
          <div className="section-cta-wrapper">
            <button className="btn-primary" onClick={scrollToForm} id="support-cta">
              Apply for Franchise Now <ArrowRight />
            </button>
          </div>
        </div>
      </section>

      {/* ====== TESTIMONIALS ====== */}
      <section className="section section-alt" id="testimonials">
        <div className="container">
          <div style={{ textAlign: 'center' }}>
            <span className="section-label">Franchise Partners</span>
            <h2 className="heading-section">What Our Franchise Owners Say</h2>
            <p className="section-desc" style={{ margin: '12px auto 0' }}>
              Hear directly from franchise owners who made the decision to partner with Monginis.
            </p>
          </div>
          <div className="testimonial-grid">
            <div className="testimonial-card" id="testimonial-1">
              <div className="testimonial-rating">
                {[...Array(5)].map((_, i) => <StarIcon key={i} />)}
              </div>
              <p className="testimonial-text">
                "I opened my Monginis store 3 years ago and broke even within 14 months. The brand recognition does half the selling for you. Customers walk in because they already trust Monginis."
              </p>
              <div className="testimonial-author">
                <div className="testimonial-avatar">RK</div>
                <div className="testimonial-info">
                  <h5>Rajesh Kumar</h5>
                  <span>Franchise Owner – Pune</span>
                  <div className="testimonial-meta">
                    <span>Store Opened: 2021</span>
                    <span>Break-even: 14 Months</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="testimonial-card" id="testimonial-2">
              <div className="testimonial-rating">
                {[...Array(5)].map((_, i) => <StarIcon key={i} />)}
              </div>
              <p className="testimonial-text">
                "The training and support from Monginis made it easy to start even though I had no bakery experience. Their supply chain is reliable and the margins on products are genuinely strong."
              </p>
              <div className="testimonial-author">
                <div className="testimonial-avatar">PS</div>
                <div className="testimonial-info">
                  <h5>Priya Sharma</h5>
                  <span>Franchise Owner – Jaipur</span>
                  <div className="testimonial-meta">
                    <span>Store Opened: 2022</span>
                    <span>Break-even: 12 Months</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="testimonial-card" id="testimonial-3">
              <div className="testimonial-rating">
                {[...Array(5)].map((_, i) => <StarIcon key={i} />)}
              </div>
              <p className="testimonial-text">
                "My store sees consistent daily footfall because of Monginis' product range. People come for cakes, but they also buy breads, pastries, and snacks. It's a complete bakery business."
              </p>
              <div className="testimonial-author">
                <div className="testimonial-avatar">AV</div>
                <div className="testimonial-info">
                  <h5>Amit Verma</h5>
                  <span>Franchise Owner – Lucknow</span>
                  <div className="testimonial-meta">
                    <span>Store Opened: 2020</span>
                    <span>Break-even: 16 Months</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="section-cta-wrapper">
            <button className="btn-primary" onClick={scrollToForm} id="testimonial-cta">
              Join 700+ Franchise Partners <ArrowRight />
            </button>
          </div>
        </div>
      </section>

      {/* ====== PROCESS SECTION ====== */}
      <section className="section" id="process">
        <div className="container">
          <div style={{ textAlign: 'center' }}>
            <span className="section-label">How It Works</span>
            <h2 className="heading-section">3 Simple Steps to Launch Your Franchise</h2>
          </div>
          <div className="process-steps">
            <div className="process-step">
              <div className="process-step-number">1</div>
              <h4>Submit Your Inquiry</h4>
              <p>Fill out the franchise application form with your details and preferred city. It takes less than 2 minutes.</p>
            </div>
            <div className="process-step">
              <div className="process-step-number">2</div>
              <h4>Discussion & Evaluation</h4>
              <p>Our franchise team reviews your application, discusses investment details, and helps with location evaluation.</p>
            </div>
            <div className="process-step">
              <div className="process-step-number">3</div>
              <h4>Launch Your Store</h4>
              <p>After agreement and setup, Monginis provides complete training and helps you launch your bakery successfully.</p>
            </div>
          </div>
          <div className="section-cta-wrapper">
            <button className="btn-primary btn-primary-large" onClick={scrollToForm} id="process-cta">
              Start Step 1 — Apply Now <ArrowRight />
            </button>
          </div>
        </div>
      </section>

      {/* ====== FAQ SECTION ====== */}
      <section className="section section-alt" id="faq">
        <div className="container">
          <div style={{ textAlign: 'center' }}>
            <span className="section-label">Frequently Asked Questions</span>
            <h2 className="heading-section">Common Questions About Monginis Franchise</h2>
          </div>
          <div className="faq-list">
            <FaqItem
              question="What is the minimum investment required?"
              answer="The estimated investment for a Monginis franchise ranges from ₹10 Lakh to ₹20 Lakh, depending on the city, store size, and location. This covers setup, interiors, equipment, and initial inventory. Monginis offers one of the most accessible investment models in India's organized bakery sector."
            />
            <FaqItem
              question="How long does it take to open a franchise?"
              answer="From application approval to store launch, the typical timeline is 45 to 90 days. This includes site finalization, store setup, staff hiring, and training. Our franchise team works closely with you to ensure a smooth and timely launch."
            />
            <FaqItem
              question="Do I need prior bakery experience?"
              answer="No. Monginis provides complete training covering product handling, store operations, customer service, and hygiene standards. Many of our successful franchise owners come from non-bakery backgrounds. What matters is your commitment to running a business."
            />
            <FaqItem
              question="What support does Monginis provide?"
              answer="Monginis offers end-to-end support including site selection assistance, store design, staff training, marketing campaigns, supply chain management, and ongoing operational guidance. You are never on your own — our team is available at every stage."
            />
            <FaqItem
              question="How do I apply and what happens next?"
              answer="Fill the inquiry form on this page with your details. Our franchise team will review your application and contact you within 24 hours. After an initial discussion, we proceed with location evaluation, agreement, and store setup."
            />
          </div>
          <div className="section-cta-wrapper">
            <button className="btn-primary" onClick={scrollToForm} id="faq-cta">
              Apply for Franchise Now
            </button>
          </div>
        </div>
      </section>

      {/* ====== FINAL CTA BANNER ====== */}
      <section className="final-cta" id="final-cta">
        <div className="container">
          <div className="final-cta-content">
            <h2>Start Your Profitable Franchise Journey Today</h2>
            <p>Join India's most trusted bakery brand.</p>
            <button className="btn-primary btn-primary-large" onClick={scrollToForm} id="final-cta-btn">
              Apply for Franchise Now
            </button>
            <p className="final-cta-subtext">Limited slots available in selected cities.</p>
          </div>
        </div>
      </section>

      {/* ====== FOOTER ====== */}
      <footer className="footer" id="footer">
        <div className="container">
          <p>© 2026 Monginis Cake Shop Franchise India. All rights reserved. | <a href="https://monginisfranchises.co.in" target="_blank" rel="noopener noreferrer">monginisfranchises.co.in</a></p>
        </div>
      </footer>

      {/* ====== STICKY BOTTOM BAR ====== */}
      <div className={`sticky-bar ${showStickyBar ? 'visible' : ''}`} id="sticky-bar">
        <div className="sticky-bar-inner">
          <span className="sticky-bar-text">Ready to own a Monginis franchise?</span>
          <button className="btn-primary" onClick={scrollToForm} id="sticky-bar-btn">
            Apply for Franchise Now <ArrowRight />
          </button>
        </div>
      </div>

      {/* ====== WHATSAPP BUTTON ====== */}
      <a
        href="https://wa.me/919999999999?text=I'm%20interested%20in%20Monginis%20Franchise"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-btn"
        id="whatsapp-btn"
        aria-label="Chat on WhatsApp"
      >
        <WhatsAppIcon />
      </a>

      {/* ====== EXIT INTENT POPUP ====== */}
      <div className={`popup-overlay ${showPopup ? 'active' : ''}`} id="exit-popup" onClick={(e) => { if (e.target === e.currentTarget) setShowPopup(false); }}>
        <div className="popup-card">
          <button className="popup-close" onClick={() => setShowPopup(false)} id="popup-close-btn" aria-label="Close popup">
            <XIcon />
          </button>
          <h3>Wait! Get the Franchise Brochure Before You Leave</h3>
          <p>Enter your details and we'll send you the complete Monginis franchise information kit.</p>
          <InquiryForm variant="popup" onSuccess={() => setTimeout(() => setShowPopup(false), 3000)} />
        </div>
      </div>
    </>
  );
}

export default App;
