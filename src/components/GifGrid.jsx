import { useFetchGifs } from "../hooks/useFetchGifs";
import PropTypes from "prop-types";
import { GifItem } from "./GifItem";

const buttonStyle = { border: "none", background: "red", color: "white", borderRadius: "6px", width: '50px', height: '50px'};

export function GifGrid({ category, onDelete }) {
  const { images, isLoading } = useFetchGifs(category);

  return (
    <>
      <h3>{category}</h3>
      <button onClick={() => onDelete(category)} style={buttonStyle}>
        X
      </button>
      {isLoading && <h2>Cargando...</h2>}
      <div className="card-grid">
        {images.map((image) => (
          <GifItem key={image.id} {...image} />
        ))}
      </div>
    </>
  );
}

GifGrid.propTypes = {
  category: PropTypes.string.isRequired,
  onDelete: PropTypes.func,
};
