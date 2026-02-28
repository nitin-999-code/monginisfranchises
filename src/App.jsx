import { useState, useEffect, useRef, useCallback } from 'react';

/* ── SVG ICONS ── */
const PhoneIcon = () => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" /></svg>);
const Tick = () => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>);
const Chev = () => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9" /></svg>);
const XIcon = () => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>);
const WA = () => (<svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>);
const MapPin = () => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" /></svg>);
const BookOpen = () => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z" /><path d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z" /></svg>);
const Megaphone = () => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 11l18-5v12L3 14v-3z" /><path d="M11.6 16.8a3 3 0 11-5.8-1.6" /></svg>);
const TruckIcon = () => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="3" width="15" height="13" /><polygon points="16 8 20 8 23 11 23 16 16 16 16 8" /><circle cx="5.5" cy="18.5" r="2.5" /><circle cx="18.5" cy="18.5" r="2.5" /></svg>);

/* ── HOOKS ── */
function useReveal(dir = 'up') {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { el.classList.add('vis'); io.unobserve(el); } },
      { threshold: 0.1 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return ref;
}

function R({ children, className = '', dir = 'up', style, tag: Tag = 'div' }) {
  const ref = useReveal(dir);
  const cls = dir === 'left' ? 'rv-left' : dir === 'right' ? 'rv-right' : 'rv';
  return <Tag ref={ref} className={`${cls} ${className}`} style={style}>{children}</Tag>;
}

function CountUp({ end, suffix = '', duration = 1600 }) {
  const [v, setV] = useState(0);
  const ref = useRef(null);
  const ran = useRef(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !ran.current) {
        ran.current = true;
        const s = performance.now();
        const tick = (now) => {
          const p = Math.min((now - s) / duration, 1);
          setV(Math.round((1 - Math.pow(1 - p, 3)) * end));
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
        io.unobserve(el);
      }
    }, { threshold: 0.3 });
    io.observe(el);
    return () => io.disconnect();
  }, [end, duration]);
  return <span ref={ref}>{v.toLocaleString()}{suffix}</span>;
}

/* ── FORM ── */
function InquiryForm({ mini = false, onDone }) {
  const [d, setD] = useState({ name: '', phone: '', city: '', budget: '' });
  const [ok, setOk] = useState(false);
  const [busy, setBusy] = useState(false);
  const up = (e) => setD({ ...d, [e.target.name]: e.target.value });
  const go = (e) => { e.preventDefault(); setBusy(true); setTimeout(() => { setBusy(false); setOk(true); if (onDone) onDone(); }, 1100); };

  if (ok) return (<div className="form-done"><Tick /><h4>Thank You</h4><p>Our franchise team will contact you within 24 hours.</p></div>);

  return (
    <form onSubmit={go}>
      <div className="fl"><input type="text" name="name" placeholder=" " value={d.name} onChange={up} required /><label>Full Name</label></div>
      <div className="fl"><input type="tel" name="phone" placeholder=" " value={d.phone} onChange={up} required pattern="[0-9]{10}" /><label>Phone Number</label></div>
      {!mini && <>
        <div className="fl"><input type="text" name="city" placeholder=" " value={d.city} onChange={up} required /><label>City</label></div>
        <div className={`fl${d.budget ? ' has-val' : ''}`}>
          <select name="budget" value={d.budget} onChange={up} required>
            <option value=""></option>
            <option value="5-10">₹5L – ₹10L</option>
            <option value="10-15">₹10L – ₹15L</option>
            <option value="15-20">₹15L – ₹20L</option>
            <option value="20+">₹20L+</option>
          </select>
          <label>Investment Budget</label>
        </div>
      </>}
      <button type="submit" className="form-go" disabled={busy}>{busy ? 'Submitting…' : mini ? 'Send Me Details' : 'Download Details'}</button>
      {!mini && <div className="form-notes">
        <span><Tick /> No bakery experience required</span>
        <span><Tick /> Response within 24 hours</span>
        <span><Tick /> 100% confidential</span>
      </div>}
      {!mini && <p className="form-bottom-note">Our team contacts shortlisted applicants within 24 hours.</p>}
    </form>
  );
}

/* ── FAQ ── */
function FaqItem({ q, a }) {
  const [o, setO] = useState(false);
  return (
    <div className={`faq-item${o ? ' open' : ''}`}>
      <button className="faq-q" onClick={() => setO(!o)}><span>{q}</span><span className="faq-chev"><Chev /></span></button>
      <div className="faq-a"><p>{a}</p></div>
    </div>
  );
}

/* ── TYPEWRITER ── */
function Typewriter({ text, speed = 55, delay = 500 }) {
  const [shown, setShown] = useState('');
  const [started, setStarted] = useState(false);

  const [done, setDone] = useState(false);

  useEffect(() => {
    setShown('');
    setStarted(false);
    setDone(false);
    const delayTimer = setTimeout(() => setStarted(true), delay);
    return () => clearTimeout(delayTimer);
  }, [text, delay]);

  useEffect(() => {
    if (!started) return;
    if (shown.length >= text.length) {
      setDone(true);
      return;
    }
    const t = setTimeout(() => setShown(text.slice(0, shown.length + 1)), speed);
    return () => clearTimeout(t);
  }, [shown, started, text, speed]);

  return <span className={`typewriter${done ? ' done' : ''}`}>{shown}</span>;
}

/* ── HERO SLIDES ── */
const SLIDES = ['/images/storefront2.jpg', '/images/storefront.jpg'];

/* =====================================
   APP
   ===================================== */
export default function App() {
  const [slide, setSlide] = useState(0);
  const [sticky, setSticky] = useState(false);
  const [popup, setPopup] = useState(false);
  const [popDone, setPopDone] = useState(false);
  const formRef = useRef(null);

  const goForm = useCallback(() => {
    formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }, []);

  // Auto slider — 6 second interval
  const [progressKey, setProgressKey] = useState(0);
  useEffect(() => {
    const t = setInterval(() => {
      setSlide((s) => (s + 1) % SLIDES.length);
      setProgressKey((k) => k + 1);
    }, 6000);
    return () => clearInterval(t);
  }, []);

  const manualSlide = (i) => {
    setSlide(i);
    setProgressKey((k) => k + 1);
  };

  // Scroll indicator visibility
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => {
      setSticky(window.scrollY > 700);
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  // Exit intent
  useEffect(() => {
    const fn = (e) => { if (e.clientY <= 0 && !popDone) { setPopup(true); setPopDone(true); } };
    document.addEventListener('mouseleave', fn);
    return () => document.removeEventListener('mouseleave', fn);
  }, [popDone]);

  return (
    <>
      {/* HEADER */}
      <header className="header">
        <div className="header-in">
          <a href="#" className="header-logo"><img src="/images/logo.png" alt="Monginis" /></a>
          <a href="tel:+919999999999" className="header-phone"><PhoneIcon /><span>Call Now</span></a>
        </div>
      </header>

      {/* HERO SLIDER */}
      <section className="hero" id="hero">
        <div className="hero-slides">
          {SLIDES.map((src, i) => (
            <div className={`hero-slide${i === slide ? ' active' : ''}`} key={i}>
              <img src={src} alt={`Monginis ${i + 1}`} />
            </div>
          ))}
        </div>
        <div className="hero-overlay" />

        {/* SLIDE 1 TEXT — Business / Authority */}
        <div className={`slide slide-1${slide === 0 ? ' active' : ''}`}>
          <p className="slide-1-tag s1-anim-1">Franchise Opportunity</p>
          <h1 className="slide-1-heading s1-anim-2">Own a <span className="underline-word">Monginis</span> Franchise</h1>
          <p className="slide-1-heading-alt s1-anim-3">In Your City</p>
          <p className="slide-1-sub s1-anim-4">65+ Years Legacy Brand With Proven Profit Model</p>
          <div className="hero-btn-row s1-anim-5">
            <button className="btn btn-pink btn-lg" onClick={goForm}>Apply for Franchise</button>
          </div>
        </div>

        {/* SLIDE 2 TEXT — Emotional / Brand */}
        <div className={`slide slide-2${slide === 1 ? ' active' : ''}`}>
          <p className="slide-2-script-tag s2-anim-1">A Legacy of Sweet Moments</p>
          <div className="slide-2-heading-block s2-anim-2">
            <h2 className="slide-2-heading">
              From Birthdays To Everyday Treats,<br />
              We Bring You
            </h2>
            <div className="slide-2-type-wrap">
              {slide === 1 && <Typewriter text="Freshly Baked Delights" speed={55} delay={800} />}
            </div>
            <p className="slide-2-sub">Join India's trusted bakery network serving millions every year.</p>
          </div>
          <div className="hero-btn-row s2-anim-3">
            <button className="btn btn-pink btn-lg" onClick={goForm}>Explore Franchise Opportunity</button>
          </div>
        </div>

        {/* NAV: Dots + Progress */}
        <div className="hero-nav">
          <div className="hero-dots">
            {SLIDES.map((_, i) => (
              <button key={i} className={`hero-dot${i === slide ? ' active' : ''}`} onClick={() => manualSlide(i)} aria-label={`Slide ${i + 1}`} />
            ))}
          </div>
          <div className="hero-progress">
            <div className="hero-progress-bar" key={progressKey} />
          </div>
        </div>

        {/* SCROLL INDICATOR */}
        <div className={`scroll-hint${scrolled ? ' hidden' : ''}`}>
          <span>Scroll</span>
          <div className="scroll-arrow">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9" /></svg>
          </div>
        </div>
      </section>

      {/* FLOATING FORM */}
      <div className="form-float" ref={formRef} id="franchise-form">
        <div className="form-card">
          <h3>Get Franchise Brochure</h3>
          <p className="form-sub">Fill this form to receive complete details</p>
          <InquiryForm />
        </div>
      </div>

      {/* SVG DIVIDER */}
      <div className="svg-divider">
        <svg viewBox="0 0 1440 48" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 48h1440V16C1200 40 960 0 720 16S240 48 0 16v32z" fill="#fff" />
        </svg>
      </div>

      {/* METRICS */}
      <section className="metrics">
        <div className="container">
          <div className="metrics-row stag">
            <R className="metric"><p className="metric-num"><CountUp end={700} suffix="+" /></p><p className="metric-label">Cities</p></R>
            <R className="metric"><p className="metric-num"><CountUp end={20} suffix="M+" /></p><p className="metric-label">Customers</p></R>
            <R className="metric"><p className="metric-num"><CountUp end={18000} suffix="+" /></p><p className="metric-label">Pin Codes</p></R>
            <R className="metric"><p className="metric-num"><CountUp end={65} suffix="+" /></p><p className="metric-label">Years Legacy</p></R>
          </div>
        </div>
      </section>

      {/* WHY INVEST — ALTERNATING */}
      <section className="sec sec-alt" id="why-invest">
        <div className="container">
          <R style={{ textAlign: 'center', marginBottom: 56 }}>
            <span className="sec-tag">Why Monginis</span>
            <h2 className="sec-title">Why This Is a Smart Franchise Investment</h2>
          </R>

          <div className="why-block">
            <R dir="left" className="why-text">
              <h3>Low Investment, High Demand</h3>
              <p>One of India's most accessible franchise models in the organized food sector. Bakery products are consumed daily — cakes, breads, snacks — ensuring consistent customer footfall and repeat revenue from day one.</p>
              <a href="#franchise-form" className="why-link" onClick={(e) => { e.preventDefault(); goForm(); }}>Learn More →</a>
            </R>
            <R dir="right" className="why-img">
              <img src="/images/storefront.jpg" alt="Monginis Store" />
            </R>
          </div>

          <div className="why-block reverse">
            <R dir="right" className="why-text">
              <h3>65+ Years of Brand Recognition</h3>
              <p>Monginis is a household name across 700+ cities. You don't need to build brand awareness — customers already know and trust the name. This built-in recognition translates directly to sales.</p>
              <a href="#franchise-form" className="why-link" onClick={(e) => { e.preventDefault(); goForm(); }}>Learn More →</a>
            </R>
            <R dir="left" className="why-img">
              <img src="/images/storefront2.jpg" alt="Monginis Products" />
            </R>
          </div>

          <div className="why-block">
            <R dir="left" className="why-text">
              <h3>Complete Operational Support</h3>
              <p>From site selection to staff training, from marketing materials to supply chain management — Monginis provides structured, end-to-end support so you can focus on growing your business.</p>
              <a href="#franchise-form" className="why-link" onClick={(e) => { e.preventDefault(); goForm(); }}>Apply Now →</a>
            </R>
            <R dir="right" className="why-img">
              <img src="/images/pastries.png" alt="Monginis Pastries" />
            </R>
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="sec" id="products">
        <div className="container">
          <R style={{ textAlign: 'center' }}>
            <span className="sec-tag">Product Range</span>
            <h2 className="sec-title">Products Your Customers Will Love</h2>
          </R>
          <div className="prod-grid stag">
            {[
              { img: '/images/cake.webp', n: 'Cakes' },
              { img: '/images/snacks.jpg', n: 'Snacks' },
              { img: '/images/pastries.png', n: 'Pastries' },
              { img: '/images/breads.jpg', n: 'Breads & Buns' },
              { img: '/images/chocolates.jpg', n: 'Chocolates' },
              { img: '/images/beverages.jpg', n: 'Beverages' },
            ].map((p, i) => (
              <R className="prod-item" key={i}>
                <img src={p.img} alt={p.n} />
                <div className="prod-over"><span>{p.n}</span></div>
              </R>
            ))}
          </div>
        </div>
      </section>

      {/* INVESTMENT — DARK */}
      <section className="sec invest-sec" id="investment">
        <div className="container">
          <R style={{ textAlign: 'center' }}>
            <span className="sec-tag" style={{ color: 'rgba(255,255,255,0.4)' }}>Investment Overview</span>
            <h2 className="sec-title" style={{ color: '#fff' }}>Clear Numbers, Confident Decision</h2>
          </R>
          <R>
            <div className="invest-row">
              <div className="invest-card">
                <p className="invest-lbl">Estimated Investment</p>
                <p className="invest-val"><CountUp end={10} suffix="L" /> – <CountUp end={20} suffix="L" /></p>
                <p className="invest-sub">Setup, interiors, equipment & inventory</p>
              </div>
              <div className="invest-card">
                <p className="invest-lbl">Expected ROI</p>
                <p className="invest-val"><CountUp end={12} /> – <CountUp end={18} /> Mo</p>
                <p className="invest-sub">Recover investment with daily sales</p>
              </div>
              <div className="invest-card">
                <p className="invest-lbl">Profit Margins</p>
                <p className="invest-val"><CountUp end={25} /> – <CountUp end={40} />%</p>
                <p className="invest-sub">Strong margins on bakery products</p>
              </div>
            </div>
            <p className="invest-note">Limited franchise slots available in selected cities.</p>
          </R>
          <div className="sec-cta" style={{ textAlign: 'center' }}>
            <button className="btn btn-pink" onClick={goForm}>Check Availability in Your City</button>
          </div>
        </div>
      </section>

      {/* SUPPORT */}
      <section className="sec sec-alt" id="support">
        <div className="container">
          <R>
            <div className="support-grid">
              <div className="support-left">
                <span className="sec-tag">Franchise Support</span>
                <h2 className="sec-title">We Support You at Every Step</h2>
                <p className="sec-desc">Partnering with Monginis means structured, reliable operational support from finding the right location to running daily business.</p>
                <div className="sec-cta"><button className="btn btn-pink" onClick={goForm}>Apply for Franchise</button></div>
              </div>
              <div className="sup-list">
                <div className="sup-row"><div className="sup-ico"><MapPin /></div><div><h4>Site Selection</h4><p>We help identify locations with the right foot traffic and commercial potential.</p></div></div>
                <div className="sup-row"><div className="sup-ico"><BookOpen /></div><div><h4>Staff Training</h4><p>Comprehensive training covering product handling, hygiene, and store management.</p></div></div>
                <div className="sup-row"><div className="sup-ico"><Megaphone /></div><div><h4>Marketing Support</h4><p>National campaigns, local materials, seasonal promotions, and digital guidance.</p></div></div>
                <div className="sup-row"><div className="sup-ico"><TruckIcon /></div><div><h4>Supply Chain</h4><p>Reliable deliveries, quality-controlled ingredients, and operational SOPs.</p></div></div>
              </div>
            </div>
          </R>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="sec" id="testimonials">
        <div className="container">
          <R style={{ textAlign: 'center' }}>
            <span className="sec-tag">Franchise Partners</span>
            <h2 className="sec-title">What Our Franchise Owners Say</h2>
          </R>
          <div className="test-grid stag">
            <R className="test-item">
              <blockquote>"I broke even within 14 months. The brand recognition does half the selling — customers walk in because they already trust the name."</blockquote>
              <h5>Rajesh Kumar</h5><p className="t-city">Franchise Owner – Pune</p>
              <div className="test-meta"><span>Opened: 2021</span><span>Break-even: 14 Mo</span></div>
            </R>
            <R className="test-item">
              <blockquote>"Starting with zero bakery experience, Monginis made it straightforward. The training was thorough and the supply chain is reliable."</blockquote>
              <h5>Priya Sharma</h5><p className="t-city">Franchise Owner – Jaipur</p>
              <div className="test-meta"><span>Opened: 2022</span><span>Break-even: 12 Mo</span></div>
            </R>
            <R className="test-item">
              <blockquote>"Consistent daily footfall is the real advantage. People come for cakes but buy breads, pastries, and snacks too."</blockquote>
              <h5>Amit Verma</h5><p className="t-city">Franchise Owner – Lucknow</p>
              <div className="test-meta"><span>Opened: 2020</span><span>Break-even: 16 Mo</span></div>
            </R>
          </div>
          <div className="sec-cta" style={{ textAlign: 'center' }}><button className="btn btn-pink" onClick={goForm}>Apply for Franchise</button></div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="sec sec-alt" id="process">
        <div className="container">
          <R style={{ textAlign: 'center' }}>
            <span className="sec-tag">How It Works</span>
            <h2 className="sec-title">3 Steps to Launch Your Franchise</h2>
          </R>
          <div className="proc-row">
            <div className="proc-step"><div className="proc-num">1</div><h4>Submit Inquiry</h4><p>Fill the form with your details. Takes under 2 minutes.</p></div>
            <div className="proc-step"><div className="proc-num">2</div><h4>Evaluation & Discussion</h4><p>We review your application and evaluate the location.</p></div>
            <div className="proc-step"><div className="proc-num">3</div><h4>Launch Store</h4><p>Complete training and launch your bakery successfully.</p></div>
          </div>
          <div className="sec-cta" style={{ textAlign: 'center' }}><button className="btn btn-pink" onClick={goForm}>Start Your Application</button></div>
        </div>
      </section>

      {/* FAQ */}
      <section className="sec" id="faq">
        <div className="container">
          <R style={{ textAlign: 'center' }}>
            <span className="sec-tag">FAQ</span>
            <h2 className="sec-title">Common Questions</h2>
          </R>
          <div className="faq-wrap">
            <FaqItem q="What is the minimum investment required?" a="₹10 Lakh to ₹20 Lakh depending on city, store size, and location. Covers setup, interiors, equipment, and initial inventory." />
            <FaqItem q="How long does it take to open a franchise?" a="45 to 90 days from approval to launch, including site finalization, store setup, hiring, and training." />
            <FaqItem q="Do I need prior bakery experience?" a="No. Monginis provides complete training covering product handling, operations, customer service, and hygiene standards." />
            <FaqItem q="What support does Monginis provide?" a="End-to-end support: site selection, store design, staff training, marketing, supply chain, and ongoing operational guidance." />
            <FaqItem q="How do I apply?" a="Fill the inquiry form on this page. Our team reviews and contacts you within 24 hours to discuss next steps." />
          </div>
          <div className="sec-cta" style={{ textAlign: 'center' }}><button className="btn btn-pink" onClick={goForm}>Apply for Franchise</button></div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="final-cta">
        <div className="container">
          <R className="final-cta-in">
            <h2>Start Your Monginis Franchise Journey Today</h2>
            <p>Join India's most trusted bakery brand.</p>
            <button className="btn btn-white-inv btn-lg btn-pulse" onClick={goForm}>Apply for Franchise Now</button>
            <p className="sm-note">Limited opportunities available.</p>
          </R>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div>
              <div className="footer-logo"><img src="/images/logo.png" alt="Monginis" /></div>
              <p className="footer-tag">India's most loved bakery brand since 1956. A legacy of quality, celebration, and trust.</p>
            </div>
            <div className="footer-col">
              <h4>Franchise Inquiry</h4>
              <a href="tel:+919999999999">+91 99999 99999</a>
              <a href="mailto:franchise@monginis.net">franchise@monginis.net</a>
            </div>
            <div className="footer-col">
              <h4>Corporate Office</h4>
              <p>1601, 16th Floor, Marathon Icon,<br />Off Ganpatrao Kadam Marg,<br />Lower Parel, Mumbai,<br />Maharashtra 400013</p>
            </div>
          </div>
          <div className="footer-bottom">© 2026 Monginis Cake Shop Franchise India. All rights reserved.</div>
        </div>
      </footer>

      {/* STICKY BAR */}
      <div className={`sticky-bar${sticky ? ' show' : ''}`}>
        <div className="sticky-in">
          <span className="sticky-label">Ready to own a Monginis franchise?</span>
          <button className="btn btn-pink" onClick={goForm}>Apply Now</button>
        </div>
      </div>

      {/* WHATSAPP */}
      <a href="https://wa.me/919999999999?text=I'm%20interested%20in%20Monginis%20Franchise" target="_blank" rel="noopener noreferrer" className="wa-btn" aria-label="WhatsApp"><WA /></a>

      {/* EXIT POPUP */}
      <div className={`pop-bg${popup ? ' on' : ''}`} onClick={(e) => { if (e.target === e.currentTarget) setPopup(false); }}>
        <div className="pop-card">
          <button className="pop-x" onClick={() => setPopup(false)}><XIcon /></button>
          <h3>Get the Franchise Brochure</h3>
          <p>Enter your details for the complete information kit.</p>
          <InquiryForm mini onDone={() => setTimeout(() => setPopup(false), 2500)} />
        </div>
      </div>
    </>
  );
}
