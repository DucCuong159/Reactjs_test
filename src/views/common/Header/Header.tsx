import { Button, Layout, Menu, Typography } from "antd";
import { useHistory, useLocation } from "react-router-dom";
import { LABELS, MENU_ITEMS, PATHS } from "../../../constants/paths";
import { useAppSelector } from "../../../store/hooks";
import { supabase } from "../../../utils/supabaseClient";
import "./Header.scss";

const { Header: AntHeader } = Layout;
const { Text } = Typography;

// Constants
const APP_NAME = "My App";

const Header = () => {
  const history = useHistory();
  const location = useLocation();
  const user = useAppSelector((state) => state.auth.user);

  const isLoginPage = location.pathname === PATHS.LOGIN;
  const currentPath = location.pathname || PATHS.HOME;

  const visibleMenuItems = MENU_ITEMS.filter((item) => {
    if (user) return true;
    return !item.requiresAuth;
  });

  const handleLogout = async () => {
    await supabase.auth.signOut();
    history.push(PATHS.HOME);
  };

  const handleLogin = () => {
    history.push(PATHS.LOGIN);
  };

  const handleMenuClick = ({ key }: { key: string }) => {
    history.push(key);
  };

  return (
    <AntHeader className="app-header">
      <div className="header-content">
        <div className="logo">{APP_NAME}</div>

        <Menu
          mode="horizontal"
          selectedKeys={[currentPath]}
          className="header-menu"
          items={visibleMenuItems}
          onClick={handleMenuClick}
        />

        {!isLoginPage && (
          <div className="auth-section">
            {user ? (
              <>
                <Text className="user-email">{user.email}</Text>
                <Button type="primary" onClick={handleLogout}>
                  {LABELS.LOGOUT}
                </Button>
              </>
            ) : (
              <Button type="primary" onClick={handleLogin}>
                {LABELS.LOGIN}
              </Button>
            )}
          </div>
        )}
      </div>
    </AntHeader>
  );
};

export default Header;
