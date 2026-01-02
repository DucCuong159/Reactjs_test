import { zodResolver } from "@hookform/resolvers/zod";
import { Form as AntdForm } from "antd";
import { forwardRef, ReactNode, useImperativeHandle } from "react";
import { FieldValues, useForm, UseFormReturn } from "react-hook-form";
import { ZodType } from "zod";
import "./Form.scss";

interface FormProps<T extends FieldValues> {
  schema: ZodType<T, any, any>;
  defaultValues?: Partial<T>;
  children: (methods: UseFormReturn<T>) => ReactNode;
  style?: React.CSSProperties;
}

/**
 * Generic Form component sử dụng React Hook Form + Zod validation
 *
 * @template T - Type của form data (must extend FieldValues)
 * @param schema - Zod validation schema
 * @param defaultValues - Initial form values
 * @param children - Render function nhận form methods
 */
export interface FormRef<T extends FieldValues> {
  submit: (onSubmit: (data: T) => Promise<void>) => void;
  reset: () => void;
}

const FormComponent = forwardRef(function Form<T extends FieldValues>(
  {
    schema,
    defaultValues,
    children,
    id,
    style,
  }: FormProps<T> & { id?: string },
  ref: React.Ref<FormRef<T>>
) {
  const methods = useForm<T>({
    resolver: zodResolver(schema as any),
    defaultValues: defaultValues as any,
  });

  useImperativeHandle(ref, () => ({
    submit: (onSubmit) => {
      methods.handleSubmit(onSubmit)();
    },
    reset: () => {
      methods.reset();
    },
  }));

  return (
    <AntdForm id={id} layout="vertical" requiredMark={true} style={style}>
      {children(methods as unknown as UseFormReturn<T>)}
    </AntdForm>
  );
});

// 🎓 COMPOUND PATTERN: Attach AntdForm.Item as Form.Item
export const Form = Object.assign(FormComponent, {
  Item: AntdForm.Item,
});
