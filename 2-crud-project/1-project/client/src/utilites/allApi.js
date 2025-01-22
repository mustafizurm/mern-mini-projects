export const getAllProducts = async () => {
    return fetch(`http://localhost:5000/api/v1/products`);
  };