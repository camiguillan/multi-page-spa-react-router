import { Link } from "react-router-dom";

const PRODUCTS = [
  {id:'product-1', title:'product 1'},
  {id:'product-2', title:'product 2'},
  {id:'product-3', title:'product 3'}
]

export default function Products() {
  console.log(PRODUCTS)
  return <>
    <p> Products </p>
    <ul>
      {PRODUCTS.map((prod) => {
        <li key={prod.id}> <Link to={`/products/${prod.id}`}> {prod.title} </Link></li>
      })}
    </ul>
  
   </>;
}
