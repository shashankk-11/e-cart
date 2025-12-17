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

          <Product
            id="1"
            title="Apple iPhone 14 (128GB)"
            price={69999}
            rating={5}
            image="https://m.media-amazon.com/images/I/61cwywLZR-L._SX679_.jpg"
          />

          <Product
            id="2"
            title="Samsung Galaxy S23"
            price={74999}
            rating={4}
            image="https://m.media-amazon.com/images/I/61VfL-aiToL._SX679_.jpg"
          />

          <Product
            id="3"
            title="Sony WH-1000XM5 Headphones"
            price={29999}
            rating={5}
            image="https://m.media-amazon.com/images/I/61+btxzpfDL._SX679_.jpg"
          />

          {/* ✅ New products */}

          <Product
            id="4"
            title="Apple Watch Series 9"
            price={41999}
            rating={4}
            image="https://m.media-amazon.com/images/I/71XKAnxCsLL._SX679_.jpg"
          />

          <Product
            id="5"
            title="Dell XPS 13 Laptop"
            price={119999}
            rating={5}
            image="https://m.media-amazon.com/images/I/71an9eiBxpL._SX679_.jpg"
          />

          <Product
            id="6"
            title="Logitech MX Master 3S Mouse"
            price={9999}
            rating={4}
            image="https://m.media-amazon.com/images/I/61ni3t1ryQL._SX679_.jpg"
          />

          <Product
            id="7"
            title="Amazon Echo (5th Gen)"
            price={10499}
            rating={4}
            image="https://m.media-amazon.com/images/I/71xoR4A6q-L._SX679_.jpg"
          />

          <Product
  id="8"
  title="Apple AirPods Pro (2nd Gen)"
  price={24999}
  rating={5}
  image="https://m.media-amazon.com/images/I/61SUj2aKoEL._SX679_.jpg"
/>

<Product
  id="9"
  title="iPad 10th Generation (64GB)"
  price={44999}
  rating={4}
  image="https://m.media-amazon.com/images/I/61NGnpjoRDL._SX679_.jpg"
/>

<Product
  id="10"
  title="Canon EOS 1500D DSLR Camera"
  price={38999}
  rating={4}
  image="https://m.media-amazon.com/images/I/914hFeTU2-L._SX679_.jpg"
/>


        </div>
      </div>
    </div>
  );
}

export default Home;
