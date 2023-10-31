import { render, screen } from "@testing-library/react";
import { GifItem } from "../../src/components/GifItem";

describe("pruebas en <GifItem />", () => {
  const props = {
    title: "Mi título",
    url: "http://example.com/algo.gif",
  };

  test("Debe renderizar el título y contener url", () => {
    render(<GifItem {...props} />);
    expect(screen.getByText(props.title).innerHTML).toContain(props.title);
    expect(screen.getByRole("img").getAttribute("src")).toBe(props.url);
  });

  test("debe hacer match al snapshot", () => {
    const { container } = render(<GifItem {...props} />);
    expect(container).toMatchSnapshot();
  });

  test("debe de mostrar la imagen con el URL y el ALT indicado", () => {
    render(<GifItem {...props} />);
    screen.debug();

    const { src, alt } = screen.getByRole("img");
    expect(src).toBe(props.url);
    expect(alt).toBe(props.title);
  });
});
