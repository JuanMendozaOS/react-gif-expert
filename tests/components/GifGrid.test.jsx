import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

jest.mock("../../src/hooks/useFetchGifs");

describe("Pruebas en <GiGrid />", () => {
  const category = "Miku";

  test("Debe de mostrar el loading inicialmente", () => {
    useFetchGifs.mockReturnValue({
      images: [],
      isLoading: true,
    });

    render(<GifGrid category={category} />);
    expect(screen.getByText("Cargando...")).toBeTruthy();
    expect(screen.getByText(category)).toBeTruthy();
  });

  test("Debe de mostrar items cuando se cargan las imágenes useFetchGifs", () => {
    const gifs = [
      {
        id: "abc",
        title: "Saitama",
        url: "https://algo.com/saitama.gif",
      },
      {
        id: "zxc",
        title: "Miku",
        url: "https://algo.com/miku.gif",
      },
    ];
    useFetchGifs.mockReturnValue({
      images: gifs,
      isLoading: false,
    });

    render(<GifGrid category={category} />)
    screen.debug()
    expect(screen.getAllByRole('img').length).toBe(2)
  });
});
