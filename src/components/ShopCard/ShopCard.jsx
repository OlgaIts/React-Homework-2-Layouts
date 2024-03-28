import styles from "./ShopCard.module.css";

export const ShopCard = ({product}) => {
  const {img, name, color, price} = product;

  return (
    <div className={styles.item}>
      <h1 className={styles.title}>{name}</h1>
      <p className={styles.color}>{color}</p>
      <img className={styles.img} src={img} alt={name} />
      <div className={styles.wrapper}>
        <p className={styles.price}>{`$${price}`}</p>
        <button className={styles.btn}>add to cart</button>
      </div>
    </div>
  );
};
