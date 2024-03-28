import styles from "./ShopItem.module.css";

export const ShopItem = ({img, name, color, price}) => {
  return (
    <div className={styles.item}>
      <img className={styles.img} src={img} alt={name} />
      <h1 className={styles.title}>{name}</h1>
      <p className={styles.color}>{color} </p>
      <p className={styles.price}>{`$${price}`}</p>
      <button className={styles.btn}>add to cart</button>
    </div>
  );
};
