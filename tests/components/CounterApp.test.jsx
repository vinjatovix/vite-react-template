import { fireEvent, render, screen } from "@testing-library/react";
import { CounterApp } from "../../src/components/CounterApp";

describe("CounterApp", () => {
  it("should render correctly", () => {
    const title = "CounterApp";
    const defaultValue = "0";

    const { container } = render(<CounterApp />);

    expect(screen.getByRole("heading", { level: 1 }).innerHTML).toContain(
      title
    );
    expect(screen.getByRole("heading", { level: 2 }).innerHTML).toContain(
      defaultValue
    );
    expect(container).toMatchSnapshot();
  });

  it("should render the initial value of 100", () => {
    const value = 100;

    const { getByTestId } = render(<CounterApp value={value} />);

    expect(getByTestId("count-value").innerHTML).toContain(value.toString());
  });

  it("should increment the counter by 1", () => {
    const { getByTestId } = render(<CounterApp />);

    fireEvent.click(screen.getByText("+1"));

    expect(getByTestId("count-value").innerHTML).toContain("1");
  });

  it("should decrement the counter by 1", () => {
    const { getByTestId } = render(<CounterApp />);
    const subtractButton = screen.getByRole("button", { name: "subtract" });

    fireEvent.click(subtractButton);

    expect(getByTestId("count-value").innerHTML).toContain("-1");
  });

  it("should reset the counter to 0", () => {
    const { getByTestId } = render(<CounterApp />);
    const addButton = screen.getByRole("button", { name: "add" });
    const resetButton = screen.getByRole("button", { name: "reset" });
    fireEvent.click(addButton);
    fireEvent.click(addButton);

    fireEvent.click(resetButton);

    expect(getByTestId("count-value").innerHTML).toContain("0");
  });
});
