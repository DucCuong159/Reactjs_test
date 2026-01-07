import { SmileOutlined, StarOutlined } from "@ant-design/icons";
import { Button, Result, Space } from "antd";
import { useHistory } from "react-router-dom";
import { PATHS } from "../../../constants/paths";
import { useAppSelector } from "../../../store/hooks";

// Constants
const HOME_CONTENT = {
  title: "Welcome to My App",
  subtitle: "Learn interesting front-end features on your own.",
  buttons: {
    todo: "Go to Todo List",
    tarot: "Tarot AR",
  },
} as const;

const Home = () => {
  const history = useHistory();
  const user = useAppSelector((state) => state.auth.user);

  const navigateTo = (path: string, requiresAuth: boolean = false) => {
    if (requiresAuth && !user) {
      history.push(PATHS.LOGIN, { from: { pathname: PATHS.HOME } });
      return;
    }
    history.push(path);
  };

  return (
    <Result
      icon={<SmileOutlined />}
      title={HOME_CONTENT.title}
      subTitle={HOME_CONTENT.subtitle}
      extra={
        <Space size="middle">
          <Button
            type="primary"
            size="large"
            onClick={() => navigateTo(PATHS.TODO, true)}
          >
            {HOME_CONTENT.buttons.todo}
          </Button>
          <Button
            size="large"
            icon={<StarOutlined />}
            onClick={() => navigateTo(PATHS.TAROT, true)}
          >
            {HOME_CONTENT.buttons.tarot}
          </Button>
        </Space>
      }
    />
  );
};

export default Home;
