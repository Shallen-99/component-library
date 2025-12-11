import React from "react";
import type { ProductDisplayProps } from "../../types";

export const ProductDisplay: React.FC<ProductDisplayProps> = ({
  product,
  showDescription = true,
  showStockStatus = true,
  onAddToCart,
  children
}) => {
  return (
    <div
      style={{
        border: "1px solid #ddd",
        borderRadius: 8,
        padding: 16,
        maxWidth: 350
      }}
    >
      {product.imageUrl && (
        <img
          src={product.imageUrl}
          alt={product.name}
          style={{
            width: "100%",
            borderRadius: 8,
            marginBottom: 12
          }}
        />
      )}

      <h2>{product.name}</h2>
      <p><strong>${product.price.toFixed(2)}</strong></p>

      {showDescription && <p>{product.description}</p>}

      {showStockStatus && (
        <p style={{ color: product.inStock ? "green" : "red" }}>
          {product.inStock ? "In Stock" : "Out of Stock"}
        </p>
      )}

      {children && <div>{children}</div>}

      {onAddToCart && (
        <button
          disabled={!product.inStock}
          onClick={() => onAddToCart(product.id)}
        >
          Add to Cart
        </button>
      )}
    </div>
  );
};
