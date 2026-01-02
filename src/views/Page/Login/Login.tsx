import { Button, Card, Input, Layout, message, Space, Typography } from "antd";
import React from "react";
import { Controller } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { z } from "zod";
import { supabase } from "../../../utils/supabaseClient";
import { Form, FormRef } from "../../common/Form/Form";
import "./Login.scss";

const { Title, Text } = Typography;
const { Content } = Layout;

const loginSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

type LoginFormData = z.infer<typeof loginSchema>;

const Login = () => {
  const [loading, setLoading] = React.useState(false);
  const [isSignUp, setIsSignUp] = React.useState(false);
  const history = useHistory();
  const formRef = React.useRef<FormRef<LoginFormData>>(null);

  const handleToggleMode = () => {
    setIsSignUp(!isSignUp);
    formRef.current?.reset();
  };

  const handleAuth = async (values: LoginFormData) => {
    setLoading(true);
    const { email, password } = values;

    try {
      if (isSignUp) {
        const { error } = await supabase.auth.signUp({
          email,
          password,
        });
        if (error) throw error;
        message.success("Please check your email to confirm your account!");
        handleToggleMode();
      } else {
        const { error } = await supabase.auth.signInWithPassword({
          email,
          password,
        });
        if (error) throw error;
        message.success("Logged in successfully!");
        history.push("/");
      }
    } catch (error: any) {
      message.error(error.message || "Authentication failed");
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
              {isSignUp ? "Sign up" : "Log in"}
            </Title>
            <Text type="secondary">
              {isSignUp
                ? "Sign up to access to this app"
                : "Please log in to continue"}
            </Text>
          </Space>

          <Form
            ref={formRef}
            schema={loginSchema}
            defaultValues={{ email: "", password: "" }}
            style={{ marginTop: "2rem" }}
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
                        placeholder="Email"
                        size="large"
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
                        placeholder="Password"
                        size="large"
                        autoComplete="current-password"
                      />
                    )}
                  />
                </Form.Item>

                <Form.Item>
                  <Button
                    type="primary"
                    onClick={handleSubmit(handleAuth as any)}
                    block
                    size="large"
                    loading={loading}
                  >
                    {isSignUp ? "Sign Up" : "Log In"}
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
            {isSignUp
              ? "Already have an account? Log In"
              : "Don't have an account? Sign Up"}
          </Button>
        </Card>
      </Content>
    </Layout>
  );
};

export default Login;
