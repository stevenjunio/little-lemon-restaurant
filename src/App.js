import './App.css';
import Header from './components/Header/Header';



function App() {
  return (
    <>
      <Header />
      <main className='main-content'>
        <section className='hero-section'><div className='hero-text'><h1 className='hero-section-title'>Little Lemon</h1><p className='hero-section-subtitle'>Chicago</p></div></section>
        <section>Specials section</section>
        <section>Testimonials Section</section>
        <section>about us section</section>

      </main>
      <footer>
        <nav id='footer' >
          <ul>
            <li><a href="/home">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/menu">Menu</a></li>
            <li><a href="/reservations">Reservations</a></li>
            <li><a href="/online-order">Online Order</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
          <ul>
            <li><a href="/address">Address</a></li>
            <li><a href="/phone">Phone</a></li>
            <li><a href="/email">Email</a></li>
          </ul>
          <ul id='social-media-links'><li>
            <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
              Facebook
            </a>
          </li>
            <li>
              <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
                Instagram
              </a>
            </li>
            <li>
              <a href="https://www.twitter.com" target="_blank" rel="noreferrer">
                X              </a>
            </li>


          </ul>
        </nav>
      </footer >
    </>
  );
}

export default App;
