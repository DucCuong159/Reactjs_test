import { fireEvent, render, screen } from "@testing-library/react";
import BoxRemark from "../components/BoxRemark/BoxRemark";
import userEvent from "@testing-library/user-event";
jest.mock("axios");

describe("<BoxRemark/>", () => {
  let props;
  let components;
  beforeEach(() => {
    props = {
      onDataChange: jest.fn(),
      onSubmitData: jest.fn(),
      maxLength: 10,
      listRemark: ["123", "456", "789"],
    };
  });

  test("matches snapshot", () => {
    const { asFragment } = render(<BoxRemark text="Hello, World!" />);
    expect(asFragment()).toMatchSnapshot();
  });

  // test("onChange Textarea", async () => {
  //   const { rerender } = render(<BoxRemark {...props} />);
  //   const textarea = screen.getByRole("textbox");
  //   await fireEvent.change(textarea, { target: { value: "new remark" } });
  //   props.remark = "new remark";
  //   rerender(<BoxRemark {...props} />);
  //   expect(textarea.textContent).toBe("new remark");
  // });

  test("onChange Textarea", () => {
    render(<BoxRemark {...props} />);
    const textarea = screen.getByRole("textbox");
    fireEvent.change(textarea, { target: { value: "new remark" } });
    expect(textarea.value).toBe("new remark");
    fireEvent.change(textarea, { target: { value: "new remark 2" } });
    expect(textarea.value).toBe("new remark 2");
  });

  test("onChange Textarea maxLength", () => {
    render(<BoxRemark {...props} />);
    const longText = "012345678901234567890123456789";
    const textarea = screen.getByRole("textbox");
    userEvent.type(textarea, longText);
    expect(textarea.value).toHaveLength(10);
    expect(textarea.value).toBe("0123456789");
  });
});
