import { Col, Row, Input, Typography, Radio, Select, Tag } from "antd";
import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  setPrioriryChange,
  setStatusChange,
  setfiltersChange,
} from "../../redux/actions";

const { Search } = Input;

export default function Filters() {
  const [fillters, setFilters] = useState("");
  const [filtersStatus, setFilterStatus] = useState("All");
  const [filtersPrioriry, setFiltersPrioriry] = useState([]);
  const distpatch = useDispatch();

  const handleOnChange = (event) => {
    setFilters(event.target.value);
    distpatch(setfiltersChange(event.target.value));
  };

  const handleStatusChange = (e) => {
    setFilterStatus(e.target.value);
    distpatch(setStatusChange(e.target.value));
  };

  const handlePrioriryChange = (value) => {
    setFiltersPrioriry(value);

    distpatch(setPrioriryChange(value));
  };

  return (
    <Row justify="center">
      <Col span={24}>
        <Typography.Paragraph
          style={{ fontWeight: "bold", marginBottom: 3, marginTop: 10 }}
        >
          Tìm kiếm
        </Typography.Paragraph>
        <Search
          placeholder="input search text"
          value={fillters}
          onChange={handleOnChange}
        />
      </Col>
      <Col sm={24}>
        <Typography.Paragraph
          style={{ fontWeight: "bold", marginBottom: 3, marginTop: 10 }}
        >
          Lọc theo trạng thái
        </Typography.Paragraph>
        <Radio.Group value={filtersStatus} onChange={handleStatusChange}>
          <Radio value="All">All</Radio>
          <Radio value="Completed">Completed</Radio>
          <Radio value="Todo">To do</Radio>
        </Radio.Group>
      </Col>
      <Col sm={24}>
        <Typography.Paragraph
          style={{ fontWeight: "bold", marginBottom: 3, marginTop: 10 }}
        >
          Lọc By độ ưu tiên
        </Typography.Paragraph>
        <Select
          mode="multiple"
          allowClear
          placeholder="Please select"
          style={{ width: "100%" }}
          value={[...filtersPrioriry]}
          onChange={handlePrioriryChange}
        >
          <Select.Option value="High" label="High">
            <Tag color="red">High</Tag>
          </Select.Option>
          <Select.Option value="Medium" label="Medium">
            <Tag color="blue">Medium</Tag>
          </Select.Option>
          <Select.Option value="Low" label="Low">
            <Tag color="gray">Low</Tag>
          </Select.Option>
        </Select>
      </Col>
    </Row>
  );
}
