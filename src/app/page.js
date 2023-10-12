'use client'
import UiHeader from '@/component/ui/UiHeader';
import { Breadcrumb, Layout, Menu, theme } from 'antd';

const { Header, Content, Footer } = Layout;

const HomePage = () => {
  // const {
  //   token: { colorBgContainer },
  // } = theme.useToken();

  return (
    <Layout className="layout">
      <Header style={{backgroundColor:"green"}}>
       <UiHeader/>
        
      </Header>
      <Content style={{ padding: '0 50px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <div className="site-layout-content" >
          Content
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Ant Design ©2023 Created by Ant UED</Footer>
    </Layout>
  );
};

export default HomePage;