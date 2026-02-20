import { useParams, Link } from "react-router-dom";

export default function ProductDetailPage() {
  const params = useParams();

  return (
    <>
      <p>Product Detail</p>
      <p>{params.productId}</p>
      <p>
        <Link to=".." relative="path">Back</Link>
      </p>
    </>
  );
}
