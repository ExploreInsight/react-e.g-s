import React, { useEffect, useState } from "react";
import './styles.css';

function Index() {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [error, setError] = useState("");
  const [limit, setLimit] = useState(20);

  const fetchApi = async () => {
    try {
      setLoading(true);
      const response = await fetch(`https://dummyjson.com/products?limit=${limit}`);
      if (!response.ok) throw new Error("Failed to fetch products");
      const data = await response.json();
      setProducts(data.products);
    } catch (error) {
      console.error(error.message);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const loadMore = () => {
    setLimit((prevLimit) => (prevLimit + 10 <= 100 ? prevLimit + 10 : 100));
  };

  useEffect(() => {
    fetchApi();
  }, [limit]);

  if (loading) return <div className="loading">Loading Products...</div>;
  if (error) return <div className="error">Error: {error}</div>;
  if (products.length === 0) return <div className="loading">No products available.</div>;

  return (
    <div className="product-container">
   
      {products.map((product) => (
        <div className="product-item" key={product.id}>
          <img src={product.thumbnail} alt={product.title} />
          <h3>{product.title}</h3>
          <h4>Price: ${product.price}</h4>
        </div>
      ))}
      <button className="load-more" onClick={loadMore} disabled={limit >= 100}>
        {limit >= 100 ? "No More Products" : "Load More"}
      </button>
    </div>
  );
}

export default Index;
