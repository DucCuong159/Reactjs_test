import { Flex, Space, Spin, Typography } from "antd";
import { useEffect, useState } from "react";
import { Redirect, Route, RouteProps } from "react-router-dom";
import { PATHS } from "../../constants/paths";
import { useAppSelector } from "../../store/hooks";

const { Text } = Typography;

interface ProtectedRouteProps extends RouteProps {
  component: React.ComponentType<any>;
}

const ProtectedRoute = ({
  component: Component,
  ...rest
}: ProtectedRouteProps) => {
  const user = useAppSelector((state) => state.auth.user);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Wait for auth to initialize
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Route
      exact
      {...rest}
      render={(props) => {
        if (isLoading) {
          return (
            <Flex
              justify="center"
              align="center"
              style={{ height: "calc(100vh - 64px)" }}
            >
              <Space direction="vertical" size="large" align="center">
                <Spin size="large" />
                <Text type="secondary">Checking authentication...</Text>
              </Space>
            </Flex>
          );
        }
        if (user) return <Component {...props} />;
        return (
          <Redirect
            to={{
              pathname: PATHS.LOGIN,
              state: { from: props.location },
            }}
          />
        );
      }}
    />
  );
};

export default ProtectedRoute;
