import React, { useState, useEffect } from "react";

interface SlotProps {
  items: string[];
  isStarted: boolean;
}

const Slot: React.FC<SlotProps> = ({ items, isStarted }) => {
  const [selectedItem, setSelectedItem] = useState("");

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

  return <div>{selectedItem}</div>;
};

export default Slot;