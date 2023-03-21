import { useState, useEffect } from "react";
import Head from "next/head";
import { Button, Space } from "antd";
import Slot from "../components/Slot";
import { getWhereData, getWhatData } from "../utils/getData";

const items = ["item1", "item2", "item3", "item4", "item5"];

const Home = () => {
  const [isStarted, setIsStarted] = useState(false);
  const [whereItems, setWhereItems] = useState<string[]>([]);
  const [whatItems, setWhatItems] = useState<string[]>([]);

  const handleStart = () => {
    setIsStarted(true);
  };

  const handleStop = () => {
    setIsStarted(false);
  };

  useEffect(() => {
    setWhereItems(getWhereData());
    setWhatItems(getWhatData());
  }, []);


  return (
    <div>
      <Head>
        <title>さんぽ神</title>
        <meta name="description" content="さんぽ神アプリ" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>さんぽ神</h1>
        <Space>
          <Slot items={whereItems} isStarted={isStarted} />
          <Slot items={whatItems} isStarted={isStarted} />
        </Space>
        <br />
        <Button type="primary" onClick={handleStart} disabled={isStarted}>
          スロットを回す
        </Button>
        <Button onClick={handleStop} disabled={!isStarted}>
          スロットを止める
        </Button>
      </main>
    </div>
  );
};

export default Home;