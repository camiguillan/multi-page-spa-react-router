import { Link } from "react-router-dom";

export default function Home() {
  function handleClick() {}
  return (
    <div>
      Home Page
      <p>
        <Link to="/products">Go to products </Link>
      </p>
    </div>
  );
}
