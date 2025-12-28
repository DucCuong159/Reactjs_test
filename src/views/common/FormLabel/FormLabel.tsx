import "./FormLabel.scss";

interface FormLabelProps {
  children: React.ReactNode;
  required?: boolean;
}

export const FormLabel: React.FC<FormLabelProps> = ({ children, required }) => {
  return (
    <>
      {children}
      {required && <span className="required-asterisk">*</span>}
    </>
  );
};
