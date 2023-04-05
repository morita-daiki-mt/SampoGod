import { useState, useEffect } from "react";
import Head from "next/head";
import { Button, Space, Layout } from "antd";
import Slot from "../components/Slot";
import { getWhereData, getWhatData } from "../utils/getData";

const Home = () => {
  const [isStarted, setIsStarted] = useState(false);
  const [whereItems, setWhereItems] = useState<string[]>([]);
  const [whatItems, setWhatItems] = useState<string[]>([]);

  const { Header, Content } = Layout;

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

      <Layout className="layout">
        <Header className="header">
          <div className="logo">さんぽ神</div>
        </Header>
        <Content>
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
        </Content>
      </Layout>

      {/* <style jsx>{`
        .logo {
          color: #fff;
          font-size: 24px;
          font-weight: bold;
          text-align: center;
        }
        .header {
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: #1890ff;
        }
        `}</style> */}
    </div>
  );
};

export default Home;