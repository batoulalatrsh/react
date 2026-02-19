import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const DUMMY_PRODUCTS = [
  {
    id: "p1",
    price: 90,
    title: "First Book",
    descrioition: "THe first book i ever wrote",
  },
  {
    id: "p2",
    price: 50,
    title: "Second Book",
    descrioition: "The second book i ever wrote",
  },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map((prod) => (
          <ProductItem
            key={prod.id}
            id={prod.id}
            title={prod.title}
            price={prod.price}
            description={prod.descrioition}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
