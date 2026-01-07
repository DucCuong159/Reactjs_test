import { Button, Card, Input, Layout, message, Space, Typography } from "antd";
import { useRef, useState } from "react";
import { Controller } from "react-hook-form";
import { useHistory, useLocation } from "react-router-dom";
import { z } from "zod";
import { PATHS } from "../../../constants/paths";
import { useAppDispatch } from "../../../store/hooks";
import { setAuthUser } from "../../../store/slices/authSlice";
import { supabase } from "../../../utils/supabaseClient";
import { Form, FormRef } from "../../common/Form/Form";
import "./Login.scss";

const { Title, Text } = Typography;
const { Content } = Layout;

// Constants
const LOGIN_SCHEMA = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

const UI_TEXT = {
  SIGN_UP: {
    title: "Sign Up",
    subtitle: "Sign up to access to this app",
    button: "Sign Up",
    toggle: "Already have an account? Log In",
    successMessage: "Please check your email to confirm your account!",
  },
  LOG_IN: {
    title: "Log In",
    subtitle: "Please log in to continue",
    button: "Log In",
    toggle: "Don't have an account? Sign Up",
    successMessage: "Logged in successfully!",
  },
  ERROR: "Authentication failed",
} as const;

const FORM_DEFAULTS = {
  email: "",
  password: "",
};

const INPUT_SIZE = "large";

const getErrorMessage = (error: any) => {
  if (
    error.code === "invalid_credentials" ||
    error.message === "Invalid login credentials"
  ) {
    return "Email or password is incorrect";
  }
  return error.message || UI_TEXT.ERROR;
};

type LoginFormData = z.infer<typeof LOGIN_SCHEMA>;

const Login = () => {
  const [loading, setLoading] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);
  const history = useHistory();
  const location = useLocation<{ from?: Location }>();
  const dispatch = useAppDispatch();
  const formRef = useRef<FormRef<LoginFormData>>(null);

  const currentMode = isSignUp ? UI_TEXT.SIGN_UP : UI_TEXT.LOG_IN;
  const passwordAutoComplete = isSignUp ? "new-password" : "current-password";

  const handleToggleMode = () => {
    setIsSignUp(!isSignUp);
    formRef.current?.reset();
  };

  const handleAuth = async (values: LoginFormData) => {
    setLoading(true);
    const { email, password } = values;

    try {
      if (isSignUp) {
        const { error } = await supabase.auth.signUp({ email, password });
        if (error) throw error;

        message.success(currentMode.successMessage);
        handleToggleMode();
      } else {
        const { data, error } = await supabase.auth.signInWithPassword({
          email,
          password,
        });
        if (error) throw error;

        if (data.user && data.session) {
          dispatch(setAuthUser({ user: data.user, session: data.session }));
        }

        message.success(currentMode.successMessage);

        // Redirect to return URL or home
        const from = location.state?.from?.pathname || PATHS.HOME;
        history.push(from);
      }
    } catch (error: any) {
      message.error(getErrorMessage(error));
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout className="login-layout">
      <Content className="login-content">
        <Card className="login-card" variant="borderless">
          <Space
            orientation="vertical"
            align="center"
            style={{ width: "100%" }}
          >
            <Title level={2} style={{ margin: 0 }}>
              {currentMode.title}
            </Title>
            <Text type="secondary">{currentMode.subtitle}</Text>
          </Space>

          <Form
            ref={formRef}
            schema={LOGIN_SCHEMA}
            defaultValues={FORM_DEFAULTS}
            style={{ marginTop: "2rem" }}
            onSubmit={handleAuth as any}
          >
            {({ control, handleSubmit, formState: { errors } }) => (
              <>
                <Form.Item
                  validateStatus={errors.email ? "error" : ""}
                  help={errors.email?.message as string}
                >
                  <Controller
                    name="email"
                    control={control}
                    render={({ field }) => (
                      <Input
                        {...field}
                        id="email"
                        name="email"
                        placeholder="Email"
                        size={INPUT_SIZE}
                        autoComplete="email"
                      />
                    )}
                  />
                </Form.Item>

                <Form.Item
                  validateStatus={errors.password ? "error" : ""}
                  help={errors.password?.message as string}
                >
                  <Controller
                    name="password"
                    control={control}
                    render={({ field }) => (
                      <Input.Password
                        {...field}
                        id="password"
                        name="password"
                        placeholder="Password"
                        size={INPUT_SIZE}
                        autoComplete={passwordAutoComplete}
                      />
                    )}
                  />
                </Form.Item>

                <Form.Item>
                  <Button
                    type="primary"
                    onClick={handleSubmit(handleAuth as any)}
                    block
                    size={INPUT_SIZE}
                    loading={loading}
                  >
                    {currentMode.button}
                  </Button>
                </Form.Item>
              </>
            )}
          </Form>

          <Button
            type="link"
            onClick={handleToggleMode}
            style={{ textAlign: "center", width: "100%" }}
          >
            {currentMode.toggle}
          </Button>
        </Card>
      </Content>
    </Layout>
  );
};

export default Login;
