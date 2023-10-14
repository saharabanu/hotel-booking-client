"use client";
import UiHeader from "../../component/ui/UiHeader";
import UiFooter from "../../component/ui/UiFooter";
import { Layout } from "antd";
import Home from "../../component/ui/Home";

const { Content } = Layout;

const HomePage = () => {
  return (
    <Layout className="layout">
      <Content>
        <Home />
      </Content>
    </Layout>
  );
};

export default HomePage;
