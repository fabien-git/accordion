import { useState, useEffect, useRef } from "react";
import "./style.css";

export default function LoadMore({ url }) {
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);
  const [disableButton, setdisableButton] = useState(false);
  let flag = false;

  async function fetchProducts() {
    try {
      setLoading(true);
      const response = await fetch(
        `https://dummyjson.com/products?limit=20&skip=${count === 0 ? 0 : count * 20}`
      );
      const result = await response.json();

      if (result && result.products && result.products.length) {
        setProducts((prevData) => [...prevData, ...result.products]);
        //setProducts(result.products);
        console.log(result);
        setLoading(false);
      }
    } catch (error) {
      setErrorMsg(error.message);
      setLoading(false);
    }
  }

  function handleClick() {
    setCount(count + 1);
  }

  useEffect(() => {
    if (flag === false) {
      fetchProducts();
    }
    return () => (flag = true);
  }, [count]);

  useEffect(() => {
    if (products && products.length >= 100) setdisableButton(true);
  });

  if (loading) {
    return <div>Products loading..please wait</div>;
  }

  if (errorMsg) {
    return <div>An error occured.. {errorMsg}</div>;
  }

  return (
    <div className="container">
      {products && products.length > 0 ? (
        products.map((productItem, index) => (
          <div key={index} className="item">
            {productItem.title} <br />
            {productItem.id}
            <br />
            {index}
          </div>
        ))
      ) : (
        <div>no products...</div>
      )}
      <button disabled={disableButton} onClick={handleClick}>
        Load more
      </button>
      {disableButton ? <div>plus de 100 produits</div> : null}
    </div>
  );
}
