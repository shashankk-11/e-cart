import './Home.css';
import Product from './Product';

function Home() {
  return (
    <div className="home">
      <div className="home__container">

        <img
          src="https://static.vecteezy.com/system/resources/thumbnails/004/299/835/small_2x/online-shopping-on-phone-buy-sell-business-digital-web-banner-application-money-advertising-payment-ecommerce-illustration-search-free-vector.jpg"
          alt="Home Banner"
          className="home__image"
        />

        <div className="home__grid">
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
        </div>

      </div>
    </div>
  );
}

export default Home;
