import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Calendar, Badge, DatePicker, Button, message, Card, Row, Col } from "antd";
import dayjs from "dayjs";
import isBetween from "dayjs/plugin/isBetween";
import { fetchBookings, addBooking } from "../../../features/bookingSlice";

dayjs.extend(isBetween);
const { RangePicker } = DatePicker;

const CarBookingPage = ({ currentCar = "VinFast VF8" }) => {
  const [range, setRange] = useState([]);
  const dispatch = useDispatch();
  const bookings = useSelector(state => state.bookings.list);

  useEffect(() => {
    dispatch(fetchBookings());
  }, [dispatch]);

  const getListData = (value) => {
    return bookings
      .filter(r => dayjs(value).isBetween(dayjs(r.startDate), dayjs(r.endDate), "day", "[]"))
      .map(r => ({ type: r.status || "warning", content: r.note || "Đã đặt", id: r.id }));
  };

  const dateCellRender = (value) => {
    const listData = getListData(value);
    return (
      <ul className="events">
        {listData.map((item) => (
          <li key={item.id}>
            <Badge status={item.type} text={item.content} />
          </li>
        ))}
      </ul>
    );
  };

  const cellRender = (current, info) => (info.type === "date" ? dateCellRender(current) : info.originNode);

  const handleBook = async () => {
    if (!range || range.length !== 2) {
      message.warning("Vui lòng chọn khoảng ngày hợp lệ!");
      return;
    }

    const start = range[0].startOf("day");
    const end = range[1].endOf("day");

    const booking = {
      car: currentCar,
      startDate: start.format("YYYY-MM-DD"),
      endDate: end.format("YYYY-MM-DD"),
      createdAt: new Date().toISOString(),
      status: "success",
      note: "Bạn đã đặt",
    };

    try {
      await dispatch(addBooking(booking)).unwrap();
      message.success("Đặt lịch thành công!");
    } catch (err) {
      console.error(err);
      message.error("Không thể đặt lịch!");
    }
  };

  return (
    <div style={{ padding: 24 }}>
      <Card
        variant="default" // ✅ thay cho bordered
        styles={{ body: { padding: 24, borderRadius: 16, boxShadow: "0 2px 8px rgba(0,0,0,0.1)" } }}
      >
        <Row gutter={[24, 16]} align="middle" style={{ marginBottom: 16 }}>
          
          <Col xs={24} md={8}>
            <img
              alt={currentCar}
              style={{ width: "100%", borderRadius: 12, objectFit: "cover", maxHeight: 180 }}
            />
          </Col>

          <Col xs={24} md={16}>
            <h2 style={{ margin: 0, fontWeight: 700 }}>{currentCar}</h2>
            <p style={{ color: "#555", marginTop: 4 }}>
              Chọn khoảng ngày để đặt xe. Thời gian mặc định: <b>00:00</b> → <b>23:59</b> ngày kết thúc.
            </p>
            <div style={{ marginTop: 12 }}>
              <RangePicker
                onChange={setRange}
                format="DD/MM/YYYY"
                placeholder={["Ngày bắt đầu", "Ngày kết thúc"]}
              />
              <Button type="primary" onClick={handleBook} style={{ marginLeft: 8 }}>
                Đặt lịch
              </Button>
            </div>
          </Col>

        </Row>

        <Calendar cellRender={cellRender} />
      </Card>
    </div>
  );
};

export default CarBookingPage;
