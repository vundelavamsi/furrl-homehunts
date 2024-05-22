import React, { useEffect, useState, useCallback } from "react";
import "../styles/ProductList.css";
import ProductItem from "./ProductItem";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [productsLength, setProductsLength] = useState(0);

  const fetchProducts = useCallback(async () => {
    try {
      const response = await fetch(
        "https://api.furrl.in/api/v2/listing/getListingProducts",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            input: {
              page: currentPage,
              pageSize: 10,
              filters: [],
              id: "#HomeHunts",
              entity: "vibe",
            },
          }),
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      if (
        data &&
        data.data &&
        data.data.getListingProducts &&
        data.data.getListingProducts.products
      ) {
        const newProducts = data.data.getListingProducts.products;
        const uniqueProducts = newProducts.filter(
          (newProduct) =>
            !products.some((product) => product.id === newProduct.id)
        );

        setProducts((prevProducts) => [
          ...prevProducts,
          ...uniqueProducts,
        ]);
        setProductsLength(products.length)
        setHasMore(newProducts.length === 10);
        setCurrentPage((prevPage) => prevPage + 1);
      } else {
        throw new Error("Data format error");
      }
    } catch (error) {
      setError(error.message);
      console.error("Error fetching the products:", error);
    }
  }, [currentPage, products]);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  const handleScroll = useCallback(() => {
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    const scrollTop = window.scrollY;

    if (scrollTop + windowHeight >= documentHeight - 100 && hasMore) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  }, [hasMore]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <div className="grid-container">
      <div className="product-count">{productsLength} Products</div>
      {error ? (
        <div className="error">{error}</div>
      ) : (
        <div className="product-grid">
          {products.map((product, index) => (
            <ProductItem key={`${product.id}-${index}`}  product={product} />
          ))}
          {hasMore && <div className="loading">Loading...</div>}
        </div>
      )}
    </div>
  );
};

export default ProductList;
