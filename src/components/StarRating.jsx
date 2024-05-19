function getStarType(position, rating) {
  if (position <= rating) {
    return "full";
  }

  if (position >= rating + 1) {
    return "empty";
  }

  const decimal = (rating - Math.floor(rating)).toFixed(1);
  if (decimal < 0.3) {
    return "empty";
  } else if (decimal < 0.8) {
    return "half";
  } else {
    return "full";
  }
}

const containerStyles = {
  display: "flex",
  columnGap: "10px",
  alignItems: "center",
};

const starContainerStyles = {
  display: "flex",
  columnGap: "3px",
  alignItems: "center",
};

export default function StarRating({ rating }) {
  return (
    <div style={containerStyles}>
      <h4>{rating.toFixed(1)}</h4>
      <div style={starContainerStyles}>
        {Array.from({ length: 5 }, (v, i) => (
          <Star key={i} type={getStarType(i + 1, rating)} />
        ))}
      </div>
    </div>
  );
}

function Star({ type = "full", size = "12px", color = "goldenrod" }) {
  const starStyles = {
    fontSize: size,
    color: color,
  };

  if (type === "full") {
    return <i className="bi bi-star-fill" style={starStyles}></i>;
  } else if (type === "half") {
    return <i className="bi bi-star-half" style={starStyles}></i>;
  } else {
    return <i className="bi bi-star" style={starStyles}></i>;
  }
}
