import { Link } from "react-router-dom";
export default function HomePage() {
  return (
    <>
      <h1>My Home Page</h1>
      <p>
        {/* This way will lead to send request to server and reload the the entire react application*/}
        {/* Go to <a href="/products">List of products</a> */}
        Go to <Link to="/products">List of products</Link>
      </p>
    </>
  );
}
