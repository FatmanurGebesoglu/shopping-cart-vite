import React from "react";

const ProductItem = () => {
  return <div className="border p-4 m-2 rounded-lg shadow-lg">
    <img  className="w-full h-48 object-cover rounded-t-lg" src="https://placehold.jp/150x150.png" alt="product"/>   
    <div>
        <h2>Ürün 1</h2>
        <p>100₺</p>
        <button>Sepete Ekle</button>
    </div>
  </div>;
};

export default ProductItem;
