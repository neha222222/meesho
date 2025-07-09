import React from "react";
import { theme } from "../theme";

// Add CSS animation for gradient background
const gradientAnimation = `
  @keyframes gradientShift {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }
`;

// Inject the CSS animation into the document
if (typeof document !== "undefined") {
  const style = document.createElement("style");
  style.textContent = gradientAnimation;
  if (!document.head.querySelector("style[data-gradient-animation]")) {
    style.setAttribute("data-gradient-animation", "true");
    document.head.appendChild(style);
  }
}

const featuredProducts = [
  {
    id: 1,
    title: "Handwoven Cotton Saree",
    price: "₹899",
    location: "Banaras, UP",
    category: "Traditional Wear",
  },
  {
    id: 2,
    title: "Bamboo Handicrafts",
    price: "₹299",
    location: "Assam",
    category: "Home Decor",
  },
  {
    id: 3,
    title: "Kashmiri Pashmina Shawl",
    price: "₹1,599",
    location: "Kashmir",
    category: "Winter Wear",
  },
  {
    id: 4,
    title: "Tribal Silver Jewelry",
    price: "₹549",
    location: "Rajasthan",
    category: "Jewelry",
  },
  {
    id: 5,
    title: "Handmade Pottery Set",
    price: "₹399",
    location: "Gujarat",
    category: "Home & Kitchen",
  },
  {
    id: 6,
    title: "Organic Spice Mix",
    price: "₹199",
    location: "Kerala",
    category: "Food & Spices",
  },
];

const sectionStyle = {
  padding: "3rem 2rem",
  background:
    "linear-gradient(135deg, #ff6b6b 0%, #ffd93d 25%, #6bcf7f 50%, #4dabf7 75%, #9775fa 100%)",
  backgroundSize: "400% 400%",
  animation: "gradientShift 8s ease infinite",
};

const containerStyle = {
  maxWidth: "1200px",
  margin: "0 auto",
};

const titleStyle = {
  textAlign: "center",
  fontSize: "2.5rem",
  fontWeight: "bold",
  color: theme.colors.primary,
  marginBottom: "0.5rem",
};

const subtitleStyle = {
  textAlign: "center",
  fontSize: "1.1rem",
  color: "#666",
  marginBottom: "3rem",
};

const gridStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
  gap: "1.5rem",
};

const cardStyle = {
  background: "#fff",
  borderRadius: "12px",
  padding: "1.5rem",
  boxShadow: "0 8px 25px rgba(116, 185, 255, 0.3)",
  border: "2px solid transparent",
  backgroundClip: "padding-box",
  transition: "transform 0.3s ease, box-shadow 0.3s ease",
  cursor: "pointer",
};

const cardHoverStyle = {
  transform: "translateY(-8px)",
  boxShadow:
    "0 15px 35px rgba(116, 185, 255, 0.4), 0 5px 15px rgba(255, 107, 107, 0.2)",
};

const getImageStyle = (productId) => ({
  width: "100%",
  height: "160px",
  background:
    [
      "linear-gradient(45deg, #ff9a9e, #fecfef)",
      "linear-gradient(45deg, #a8edea, #fed6e3)",
      "linear-gradient(45deg, #ffecd2, #fcb69f)",
      "linear-gradient(45deg, #c3cfe2, #c3cfe2)",
      "linear-gradient(45deg, #667eea, #764ba2)",
      "linear-gradient(45deg, #f093fb, #f5576c)",
    ][productId - 1] || "linear-gradient(45deg, #e3f2fd, #bbdefb)",
  borderRadius: "8px",
  marginBottom: "1rem",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "3rem",
  color: "#fff",
  textShadow: "0 2px 4px rgba(0,0,0,0.3)",
});

const productTitleStyle = {
  fontSize: "1.2rem",
  fontWeight: "600",
  color: theme.colors.primary,
  marginBottom: "0.5rem",
};

const priceStyle = {
  fontSize: "1.4rem",
  fontWeight: "bold",
  color: theme.colors.accent,
  marginBottom: "0.5rem",
};

const locationStyle = {
  fontSize: "0.9rem",
  color: "#666",
  marginBottom: "0.5rem",
};

const getCategoryStyle = (productId) => ({
  display: "inline-block",
  background:
    [
      "linear-gradient(45deg, #ff6b6b, #ff8e53)",
      "linear-gradient(45deg, #4ecdc4, #44a08d)",
      "linear-gradient(45deg, #ffeaa7, #fab1a0)",
      "linear-gradient(45deg, #a29bfe, #6c5ce7)",
      "linear-gradient(45deg, #fd79a8, #e84393)",
      "linear-gradient(45deg, #00b894, #00cec9)",
    ][productId - 1] || "linear-gradient(45deg, #74b9ff, #0984e3)",
  color: "#fff",
  padding: "0.25rem 0.75rem",
  borderRadius: "20px",
  fontSize: "0.8rem",
  fontWeight: "600",
  textShadow: "0 1px 2px rgba(0,0,0,0.2)",
  boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
});

function ProductCard({ product }) {
  const [isHovered, setIsHovered] = React.useState(false);

  const icons = ["🛍️", "🎨", "👗", "💍", "🏺", "🌶️"];
  const icon = icons[product.id - 1] || "🛍️";

  return (
    <div
      style={{
        ...cardStyle,
        ...(isHovered ? cardHoverStyle : {}),
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div style={getImageStyle(product.id)}>{icon}</div>
      <div style={productTitleStyle}>{product.title}</div>
      <div style={priceStyle}>{product.price}</div>
      <div style={locationStyle}>📍 {product.location}</div>
      <div style={getCategoryStyle(product.id)}>{product.category}</div>
    </div>
  );
}

function FeaturedProducts() {
  return (
    <section style={sectionStyle}>
      <div style={containerStyle}>
        <h2 style={titleStyle}>Featured Products from Bharat</h2>
        <p style={subtitleStyle}>
          Discover authentic products from local artisans and small businesses
          across India
        </p>
        <div style={gridStyle}>
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturedProducts;
