import '@/styles/globals.css';
import { useState } from 'react';
import { Layout, } from 'antd';
import { ConfigProvider, Menu, Switch, theme } from "antd";
import Link from "next/link";
const { Header, Footer, Content } = Layout;

const { defaultAlgorithm, darkAlgorithm } = theme;

export default function App({ Component, pageProps }) {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const handleClick = () => {
    setIsDarkMode((previousValue) => !previousValue);
  };
  return (
    <ConfigProvider theme={{
      algorithm: isDarkMode ? darkAlgorithm : defaultAlgorithm,
    }}>
      <Layout style={{ minHeight: '100vh', maxWidth: 1200, margin: "0 auto" }}>
        <Header style={{ display: 'flex', alignItems: 'center' }}>
          <h1 style={{ color: "#fff", marginRight: '10px' }}>Pokeapp</h1>
          <Menu
            theme="dark"
            mode="horizontal"
            style={{ flex: "auto" }}
            items={[
              {
                label: <Link href="/">home</Link>,
                key: 'home',
              },
              {
                label: <Link href="/about">about</Link>,
                key: 'about',
              },
              {
                label: <Link href="/privacy">privacy</Link>,
                key: 'privacy',
              }
            ]}
          />
        </Header>
        <Content style={{ padding: '0 50px', marginTop: '20px' }}>
          <div style={{ padding: 24, minHeight: '100vh' }}>
            <Component {...pageProps} />
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Dark Mode <Switch checked={isDarkMode} onChange={handleClick} /></Footer>
      </Layout>
    </ConfigProvider>)
}