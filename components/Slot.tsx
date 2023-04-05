import React, { useState, useEffect } from "react";
import styles from "./slot.module.scss";

interface SlotProps {
  items: string[];
  isStarted: boolean;
  label: string;
}

const Slot: React.FC<SlotProps> = ({ items, isStarted, label }) => {
  const [selectedItem, setSelectedItem] = useState("");

  useEffect(() => {
    if (items.length > 0) {
      setSelectedItem(items[0]);
    }
  }, [items]);


  useEffect(() => {
    let intervalId: NodeJS.Timeout | undefined;
    if (isStarted) {
      intervalId = setInterval(() => {
        const randomIndex = Math.floor(Math.random() * items.length);
        setSelectedItem(items[randomIndex]);
      }, 50);
    }

    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [isStarted, items]);

  return (
    <div className={styles.slot}>
      <div className={styles.label}>{label}</div>
      <div className={styles.selectedItem}>{selectedItem}</div>
    </div>
  );
};

export default Slot;