import {CardsView} from "../CardsView/CardsView";
import {ListView} from "../ListView/ListView";
import {IconSwitch} from "../IconSwitch/IconSwitch";
import {v4 as uuidv4} from "uuid";
import {useState} from "react";
import data from "../../mockData/data.json";
import styles from "./Store.module.css";

const products = data.map((item) => {
  return {...item, id: uuidv4()};
});

export const Store = () => {
  const [view, setView] = useState("module");

  const onSwitch = () => {
    setView((prev) => (prev === "module" ? "list" : "module"));
  };

  return (
    <div className={styles.container}>
      <IconSwitch icon={view} onSwitch={onSwitch} />
      {view === "module" ? (
        <CardsView products={products} />
      ) : (
        <ListView products={products} />
      )}
    </div>
  );
};
