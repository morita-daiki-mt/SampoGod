import { useState, useEffect } from "react";
import Head from "next/head";
import { Button, Space, Layout } from "antd";
import Slot from "../components/Slot";
import { getWhereData, getWhatData } from "../utils/getData";
import styles from '../components/header.module.scss';

const Home = () => {
  const [isStarted, setIsStarted] = useState(false);
  const [whereItems, setWhereItems] = useState<string[]>([]);
  const [whatItems, setWhatItems] = useState<string[]>([]);

  const { Header, Content } = Layout;

  const handleToggle = () => {
    setIsStarted(!isStarted);
  };

  useEffect(() => {
    setWhereItems(getWhereData());
    setWhatItems(getWhatData());
  }, []);


  return (
    <div>
      <Head>
        <title>GOD SAMPO</title>
        <meta name="description" content="GOD SAMPO" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout className="layout" style={{ minHeight: '100vh', backgroundColor: '#E9EBED'}}>
      <Header className={styles.header}>
        <div className={styles.logo}>GOD SAMPO</div>
      </Header>
        <Content style={{ padding: '20px 5px' }}>
          <Slot items={whereItems} isStarted={isStarted} label="どこで" />
          <Slot items={whatItems} isStarted={isStarted} label="なにをする" />
          <br />
          <div className={styles.buttonWrapper}>
            <Button
              onClick={handleToggle}
              className="button-slot"
            >
              {isStarted ? "STOP" : "START"}
            </Button>
          </div>
        </Content>
      </Layout>
    </div>
  );
};

export default Home;