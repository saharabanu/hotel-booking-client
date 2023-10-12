'use client'
import UiHeader from '../component/ui/UiHeader'
import UiFooter from '../component/ui/UiFooter'
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import Home from '../component/ui/Home';

const { Header, Content, Footer } = Layout;

const HomePage = () => {
  // const {
  //   token: { colorBgContainer },
  // } = theme.useToken();

  return (
    <Layout className="layout">
       <UiHeader/>
      <Content >
      <Home/>
        
      </Content>
     <UiFooter/>
    </Layout>
  );
};

export default HomePage;