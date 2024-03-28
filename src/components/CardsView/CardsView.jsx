import ShopCard from "../ShopCard/ShopCard";
import styles from "./CardsView.module.css";

export const CardsView = ({products}) => {
  return (
    <div className={styles.wrapper}>
      {products.map((product) => (
        <ShopCard product={product} key={product.id} />
      ))}
    </div>
  );
};
