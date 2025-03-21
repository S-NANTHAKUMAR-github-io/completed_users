import { Row, Col, Card } from "antd";
import { useTasks } from "../Context/TaskContent";

const CompletedUsersList = () => {
  const { users, loading } = useTasks();

  return (
    <Row gutter={[16, 16]}>
      {users.map((user) => (
        <Col
          xs={24}
          sm={12}
          md={12}
          lg={8}
          key={user.id}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Card
            bordered={false}
            className="scheduleJd"
            hoverable
            title={`User ID: ${user.id} - ${user.name || "Not Provided"}`}
            style={{
              width: 300,
              backgroundColor: "#f5f5f5",
              borderRadius: "10px",
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
              padding: "15px",
            }}
          >
            <p>
              <strong>Email:</strong> {user.email || "Not Provided"}
            </p>
            <p>
              <strong>Phone:</strong> {user.phone || "Not Provided"}
            </p>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default CompletedUsersList;
