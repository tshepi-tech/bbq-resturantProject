//NPM packages
import { useState } from "react";
import { useParams } from "react-router-dom";

//Project files
import { createDocument } from "../../scripts/firestore";
import InputFieldProduct from "../componentsAdmin/InputFieldProduct";
import { useRestaurant } from "../../state/RestaurantContext";

export default function AdminProducts() {
  const { categoryId, subId, productId } = useParams();

  const [products, setProducts] = useState([]);
  const {
    category,
    title,
    details,
    description,
    ingredients,
    price,
    imageURL,
    imageAlt,
    heroURL,
    heroAlt,
  } = useRestaurant();

  async function onCreate(event) {
    event.preventDefault();
    const newProduct = {
      category: category,
      title: title,
      details: details,
      description: description,
      ingredients: ingredients,
      price: price,
      imageURL: imageURL,
      imageAlt: imageAlt,
      heroURL: heroURL,
      heroAlt: heroAlt,
    };
    const documentId = await createDocument(
      `Restaurant/Menu/Content/${newProduct.category}/Content`,
      newProduct
    );
    newProduct.id = documentId;
    setProducts([...products, newProduct]);
    alert("product added");
  }

  return (
    <div>
      <h1>Products</h1>
      <InputFieldProduct onCreate={onCreate}>Add</InputFieldProduct>
    </div>
  );
}
