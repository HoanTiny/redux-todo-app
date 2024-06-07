import { Col, Row, Input, Button, Select, Tag, Space } from "antd";
import Todo from "../Todo";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../../redux/actions";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import { todoListSelector } from "../../redux/selector";
export default function TodoList() {
  const [todo, setTodo] = useState("");
  const [priority, setPriority] = useState("Medium");
  const dispatch = useDispatch();

  const todoList = useSelector(todoListSelector);
  console.log(`todoList`, todoList);

  const handleAddTodo = () => {
    dispatch(
      addTodo({
        id: uuidv4(),
        name: todo,
        priority: priority,
        completed: false,
      })
    );
    setPriority("Medium");
    setTodo("");
  };

  const handleOnChange = (e) => {
    setTodo(e.target.value);
  };

  const handlePriorityChange = (value) => {
    setPriority(value);
  };

  return (
    <Row style={{ height: "calc(100% - 40px)" }}>
      <Col span={24} style={{ height: "calc(100% - 40px)", overflowY: "auto" }}>
        {todoList.map((todo) => (
          <Todo key={todo.id} name={todo.name} prioriry={todo.priority} />
        ))}
      </Col>
      <Col span={24}>
        <Space.Compact style={{ display: "flex" }}>
          <Input value={todo} onChange={handleOnChange} />
          <Select
            defaultValue={priority}
            value={priority}
            onChange={handlePriorityChange}
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
          <Button type="primary" onClick={handleAddTodo}>
            Add
          </Button>
        </Space.Compact>
      </Col>
    </Row>
  );
}
