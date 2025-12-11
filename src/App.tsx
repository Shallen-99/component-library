import { AlertBox } from "./components/AlertBox/AlertBox";
import { UserProfileCard } from "./components/UserProfileCard/UserProfileCard";
import { ProductDisplay } from "./components/ProductDisplay/ProductDisplay";

export default function App() {
  return (
    <div style={{ padding: 20 }}>
      
      <AlertBox type="success" message="Operation successful!">
        <em>This is additional detail inside the alert.</em>
      </AlertBox>

      <UserProfileCard
        user={{
          id: "1",
          name: "John Doe",
          email: "john@example.com",
          role: "Developer",
        }}
        onEdit={(id) => console.log("Editing", id)}
      >
        <p>Custom child content under profile card.</p>
      </UserProfileCard>

      <ProductDisplay
        product={{
          id: "prod123",
          name: "Bluetooth Speaker",
          price: 49.99,
          description: "High-quality portable speaker.",
          inStock: true
        }}
        onAddToCart={(id) => console.log("Add to cart", id)}
      >
        <button>Extra Action</button>
      </ProductDisplay>
    </div>
  );
}
