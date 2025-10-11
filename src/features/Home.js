import { useState } from "react";
import data from "../app/data";
import Product from './Product';
import AddForm from './Product/AddForm';
import axios from "axios";

let currentProductId = 9;

function Home() {
    const [products, setProducts] = useState([]);

    function addProduct(product) {
        const newProduct = { id: ++currentProductId, ...product };
        setProducts([...products, newProduct]);
    }

    async function getProducts() {
  const products = await axios.get(
    'https://68e9f943f1eeb3f856e59534.mockapi.io/data'
  );
  setProducts(products.data);
}

getProducts();

    return (
        <>
            <h1>New Products</h1>
            {
                products.length > 0 ? (
                    <ul className="Home__products">
                        {products.map((product) => (
                            <Product key={product.id} item={product} />
                        ))}
                    </ul>
                ) : (
                    <div>Loading products....</div>
                )
            }
            <AddForm addProduct={addProduct} />
        </>
    );
}

export default Home;
