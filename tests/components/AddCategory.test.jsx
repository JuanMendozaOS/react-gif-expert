import { fireEvent, render, screen } from "@testing-library/react";
import { AddCategory } from "../../src/components/AddCategory";

describe("Pruebas en <AddCategory />", () => {
  test("Debe de cambiar el valor de la caja de text", () => {
    render(<AddCategory onNewCategory={() => {}} />);
    const input = screen.getByRole("textbox");
    fireEvent.input(input, { target: { value: "Saitama" } });
    expect(input.value).toBe("Saitama");
  });

  test("debe de llamar onNewCategory si el input tiene un valor", () => {
    const inputValue = "Saitama";
    const onNewCategory = jest.fn();

    render(<AddCategory onNewCategory={onNewCategory} />);
    const input = screen.getByRole("textbox");
    const form = screen.getByRole("form");

    fireEvent.input(input, { target: { value: inputValue } });

    fireEvent.submit(form);

    expect(input.value).toBe("");
    expect(onNewCategory).toHaveBeenCalledWith(inputValue.trim());
    expect(onNewCategory).toHaveBeenCalledTimes(1);
  });

  test("no debe de llamar onNewCategory si el input está vacío", () => {
    const onNewCategory = jest.fn();

    render(<AddCategory onNewCategory={onNewCategory} />);
    const form = screen.getByRole("form");

    fireEvent.submit(form);
    expect(onNewCategory).toBeCalledTimes(0);
  });
});
