import { Link, useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  function handleClick() {
    navigate('/products')
  }

  return (
    <div>
      Home Page
      <p>
        <Link to="/products">Go to products </Link>
      </p>
      <p onClick={handleClick} >
        Go To products 
      </p>
    </div>
  );
}
