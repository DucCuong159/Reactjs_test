import { SmileOutlined } from "@ant-design/icons";
import { Button, Result } from "antd";
import { useHistory } from "react-router-dom";
import "./Home.scss";

const Home = () => {
  const history = useHistory();

  return (
    <div className="home-container">
      <Result
        icon={<SmileOutlined />}
        title="Welcome to Task Management"
        subTitle="Organize your tasks efficiently with our intuitive todo list application"
        extra={
          <Button
            type="primary"
            size="large"
            onClick={() => history.push("/todo-list")}
          >
            Go to Todo List
          </Button>
        }
      />
    </div>
  );
};

export default Home;
