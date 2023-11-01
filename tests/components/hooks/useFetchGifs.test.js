import { renderHook, waitFor } from "@testing-library/react"
import { useFetchGifs } from "../../../src/hooks/useFetchGifs"

describe('Pruebas en el hook useFetchGifs', () => {
  const category = 'Miku';

  test('debe de regresar el estado inicial', () => {
    const { result } = renderHook(() => useFetchGifs(category))
    const { images, isLoading } = result.current;
    expect(images.length).toBe(0)
    expect(isLoading).toBeTruthy();

  })

  test('debe de retornar un arreglo de imágenes y isLoading en false', async () => {
    const { result } = renderHook(() => useFetchGifs(category))

    await waitFor(() =>
      expect(result.current.images.length).toBeGreaterThan(0),
      { timeout: 3000 }
    )

    const { images, isLoading } = result.current;

    expect(images.length).toBeGreaterThan(0)
    expect(isLoading).toBeFalsy();

  })
})