import React, { useState } from "react";
import { Card, Row, Col, Progress, Tag, Typography, Button } from "antd";
import { CarOutlined } from "@ant-design/icons";

const { Title, Text } = Typography;

export default function CarListPage() {
  const [currentCar, setCurrentCar] = useState("VF8");

  const cars = [
    {
      id: "VF8",
      name: "VinFast VF8",
      battery: 85,
      range: 425,
      status: "Đang hoạt động",
      color: "green",
    },
    {
      id: "VF9",
      name: "VinFast VF9",
      battery: 62,
      range: 310,
      status: "Sẵn sàng",
      color: "blue",
    },
    {
      id: "VF5",
      name: "VinFast VF5",
      battery: 47,
      range: 210,
      status: "Đang sạc",
      color: "orange",
    },
  ];

  return (
    <div style={{ padding: 24 }}>
      <Title level={3}>🚗 Xe Điện Của Tôi</Title>
      <Text type="secondary">Hiển thị xe hiện tại và danh sách xe khả dụng</Text>

      {/* Xe hiện tại */}
      <Card
        title="Xe hiện tại"
        style={{ marginTop: 20 }}
        bordered={false}
        bodyStyle={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {cars
          .filter((car) => car.id === currentCar)
          .map((car) => (
            <>
              <div key={car.id}>
                <Text strong style={{ fontSize: 16 }}>
                  {car.name}
                </Text>
                <br />
                <Text type="secondary">
                  🔋 {car.battery}% pin - {car.range}km tầm hoạt động
                </Text>
              </div>
              <div style={{ textAlign: "right" }}>
                <Progress
                  type="circle"
                  percent={car.battery}
                  width={60}
                  strokeColor={car.color}
                />
                <div style={{ marginTop: 8 }}>
                  <Tag color={car.color}>{car.status}</Tag>
                </div>
              </div>
            </>
          ))}
      </Card>

      {/* Danh sách xe khác */}
      <Title level={4} style={{ marginTop: 32 }}>
        Danh sách xe
      </Title>
      <Row gutter={[16, 16]}>
        {cars.map((car) => (
          <Col xs={24} sm={12} md={8} key={car.id}>
            <Card
              hoverable
              onClick={() => setCurrentCar(car.id)}
              style={{
                border:
                  car.id === currentCar
                    ? "2px solid #1677ff"
                    : "1px solid #f0f0f0",
              }}
            >
              <Row justify="space-between" align="middle">
                <Col>
                  <CarOutlined
                    style={{ fontSize: 28, color: car.color, marginRight: 8 }}
                  />
                </Col>
                <Col flex="auto">
                  <Text strong>{car.name}</Text>
                  <br />
                  <Text type="secondary">
                    🔋 {car.battery}% - {car.range}km
                  </Text>
                </Col>
              </Row>
              <div style={{ marginTop: 12 }}>
                <Progress
                  percent={car.battery}
                  size="small"
                  strokeColor={car.color}
                />
              </div>
              <div style={{ textAlign: "right", marginTop: 8 }}>
                <Tag color={car.color}>{car.status}</Tag>
                {car.id === currentCar && (
                  <Tag color="blue" style={{ marginLeft: 8 }}>
                    Xe hiện tại
                  </Tag>
                )}
              </div>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}
