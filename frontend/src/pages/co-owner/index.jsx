import React from "react";
import { Card, Col, Row, Statistic, Progress, Typography, Table, Tag } from "antd";
import { ThunderboltOutlined, DashboardOutlined, ToolOutlined, CarOutlined } from "@ant-design/icons";
import { Line } from "@ant-design/plots";

const { Title } = Typography;

const DashboardOwner = () => {
  const data = [
    { time: "Jan", value: 45 },
    { time: "Feb", value: 52 },
    { time: "Mar", value: 61 },
    { time: "Apr", value: 48 },
    { time: "May", value: 72 },
    { time: "Jun", value: 89 },
  ];

  const chartConfig = {
    data,
    xField: "time",
    yField: "value",
    smooth: true,
    color: "#52c41a",
  };

  const cars = [
    { key: "1", name: "VinFast VF8", status: "Active", mileage: "12,300 km", coOwners: 2 },
    { key: "2", name: "Porsche 911 Carrera", status: "In Service", mileage: "35,120 km", coOwners: 3 },
  ];

  const columns = [
    { title: "Car Name", dataIndex: "name", key: "name", render: (text) => <b>{text}</b> },
    { title: "Mileage", dataIndex: "mileage", key: "mileage" },
    { title: "Co-Owners", dataIndex: "coOwners", key: "coOwners" },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status) => <Tag color={status === "Active" ? "green" : "orange"}>{status}</Tag>,
    },
  ];

  return (
    <>
      <Title level={3}>Vehicle Overview</Title>

      <Row gutter={16}>
        <Col span={6}>
          <Card>
            <Statistic title="Energy" value={75} prefix={<ThunderboltOutlined />} suffix="%" />
            <Progress percent={75} showInfo={false} />
          </Card>
        </Col>
        <Col span={6}>
          <Card>
            <Statistic title="Range" value={210} prefix={<DashboardOutlined />} suffix="km" />
            <Progress percent={80} showInfo={false} />
          </Card>
        </Col>
        <Col span={6}>
          <Card>
            <Statistic title="Brake Fluid" value={9} suffix="%" prefix={<ToolOutlined />} />
            <Progress percent={9} showInfo={false} />
          </Card>
        </Col>
        <Col span={6}>
          <Card>
            <Statistic title="Tire Wear" value={25} suffix="%" prefix={<CarOutlined />} />
            <Progress percent={25} showInfo={false} />
          </Card>
        </Col>
      </Row>

      <Row gutter={16} style={{ marginTop: "24px" }}>
        <Col span={12}>
          <Card title="Miles Statistics">
            <Line {...chartConfig} />
          </Card>
        </Col>
        <Col span={12}>
          <Card title="Car Usage Trend">
            <Line {...chartConfig} />
          </Card>
        </Col>
      </Row>

      <Card title="My Registered Cars" style={{ marginTop: "24px" }}>
        <Table columns={columns} dataSource={cars} pagination={false} />
      </Card>
    </>
  );
};

export default DashboardOwner;
