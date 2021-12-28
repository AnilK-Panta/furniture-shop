import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { ProductDetail } from "../apis/ProductDetail";
import { selectedProduct } from "../redux/action/productAction";

export default function ProductPage() {
  const { Id } = useParams();
  const product = useSelector((state) => state.product);
  const dispatch = useDispatch();
  const fetchProduct = () => {
    dispatch(selectedProduct(ProductDetail[Id]));
  };

  console.log(ProductDetail[Id]);
  console.log(Id);
  useEffect(() => {
    fetchProduct();
  }, [Id]);
  return (
    <div>
      <span>{product.name}</span>
      <h1>{product.description}</h1>
    </div>
  );
}
