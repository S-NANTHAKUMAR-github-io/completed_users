import { Rate, Table, Tag } from "antd";
import { useTasks } from "../Context/TaskContent";

const UserTaskList = () => {
  const { tasks, loading } = useTasks();

  const columns = [
    {
      title: "User ID",
      dataIndex: "userId",
      key: "userId",
    },
    {
      title: "Task ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Completed",
      dataIndex: "completed",
      key: "completed",
      render: (completed: boolean) => (
        <Tag color={completed ? "green" : "red"}>
          {completed ? "Completed" : "Pending"}
        </Tag>
      ),
    },
    {
      title: "Priority",
      dataIndex: "priority",
      key: "priority",
      render: () => {
        const priorityLevels = ["Low", "Medium", "High"];
        const priority =
          priorityLevels[Math.floor(Math.random() * priorityLevels.length)];
        const color =
          priority === "High"
            ? "volcano"
            : priority === "Medium"
            ? "gold"
            : "blue";

        return <Tag color={color}>{priority}</Tag>;
      },
    },
    {
      title: "Category",
      dataIndex: "category",
      key: "category",
      render: () => {
        const categories = ["Development", "Testing", "Design", "Management"];
        return (
          <Tag color="geekblue">
            {categories[Math.floor(Math.random() * categories.length)]}
          </Tag>
        );
      },
    },
    {
      title: "Rating",
      dataIndex: "rating",
      key: "rating",
      render: () => (
        <Rate allowHalf disabled defaultValue={Math.random() * 5} />
      ),
    },
  ];

  return (
    <Table dataSource={tasks} columns={columns} loading={loading} rowKey="id" />
  );
};

export default UserTaskList;
