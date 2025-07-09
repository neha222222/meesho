import React from "react";
import { theme } from "../theme";

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
  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  transition: "transform 0.3s ease, box-shadow 0.3s ease",
  cursor: "pointer",
};

const cardHoverStyle = {
  transform: "translateY(-4px)",
  boxShadow: "0 8px 25px rgba(0, 0, 0, 0.15)",
};

const imageStyle = {
  width: "100%",
  height: "160px",
  background: "linear-gradient(45deg, #e3f2fd, #bbdefb)",
  borderRadius: "8px",
  marginBottom: "1rem",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "3rem",
  color: theme.colors.primary,
};

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

const categoryStyle = {
  display: "inline-block",
  background: theme.colors.accent + "20",
  color: theme.colors.primary,
  padding: "0.25rem 0.75rem",
  borderRadius: "20px",
  fontSize: "0.8rem",
  fontWeight: "500",
};

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
      <div style={imageStyle}>{icon}</div>
      <div style={productTitleStyle}>{product.title}</div>
      <div style={priceStyle}>{product.price}</div>
      <div style={locationStyle}>📍 {product.location}</div>
      <div style={categoryStyle}>{product.category}</div>
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
