import "./Product.css";

function Product() {
  return (
    <div className="product">
      <div className="product__info">
        <p className="product__title">Title</p>
        <p className="product__price">
            <small>$</small>
            <strong>40</strong>
        </p>
        <div className="product__rating">⭐⭐⭐⭐</div>
      </div>

      <img
        src="https://img.freepik.com/free-photo/bag-hanging-from-furniture-item-indoors_23-2151073506.jpg"
        alt="product"
      />

      <button>Add to Cart</button>
    </div>
  );
}

export default Product;
