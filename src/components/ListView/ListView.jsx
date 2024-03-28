import {ShopItem} from "../ShopItem/ShopItem";
import styles from "./ListView.module.css";

export const ListView = ({products}) => {
  return (
    <div className={styles.wrapper}>
      {products.map((product) => (
        <ShopItem {...product} key={product.id} />
      ))}
    </div>
  );
};
