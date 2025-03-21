import React from "react";
import { Tabs, Typography, Layout } from "antd";
import TaskTable from "../Components/UserTaskList";
import UserCard from "../Components/CompletedUsersList";
import "./Layout.css"; // Import styles

const { Content, Header } = Layout;
const { Title } = Typography;

const LayoutPage: React.FC = () => {
  return (
    <Layout className="layout-container">
      {/* Title Banner */}
      <Header className="title-banner">
        <Title level={2} className="title-text">
          Task Management Dashboard
        </Title>
      </Header>

      {/* Tabs Section */}
      <Content className="tabs-container">
        <Tabs defaultActiveKey="1" className="custom-tabs">
          <Tabs.TabPane tab="Users" key="1">
            <TaskTable />
          </Tabs.TabPane>
          <Tabs.TabPane tab="Completed Users" key="2">
            <UserCard />
          </Tabs.TabPane>
        </Tabs>
      </Content>
    </Layout>
  );
};

export default LayoutPage;
