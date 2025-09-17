import ProductCard from "@/components/ProductCard";
import { products } from "@/data/product";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-blue-600 text-white p-4">
        <h1 className="text-2xl font-bold">SoftDef Store</h1>
        <nav className="space-x-6 mt-2">
          <a href="#" className="hover:underline">Home</a>
          <a href="#" className="hover:underline">Products</a>
          <a href="#" className="hover:underline">About</a>
        </nav>
      </header>

      {/* Sidebar + Content */}
      <div className="flex">
        {/* Sidebar */}
        <aside className="w-60 bg-white p-4 border-r">
          <h2 className="font-bold mb-2">Categories</h2>
          <ul className="space-y-1 mb-4">
            <li>Shoes</li>
            <li>Accessories</li>
            <li>Clothing</li>
            <li>Bags</li>
            <li>Electronics</li>
          </ul>

          <h2 className="font-bold mb-2">Colors</h2>
          <ul className="space-y-1">
            <li>Red</li>
            <li>Blue</li>
            <li>Black</li>
            <li>White</li>
          </ul>
        </aside>

        {/* Product Listing */}
        <section className="flex-1 p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold">Product Listing</h2>
            <select className="border p-1 rounded">
              <option>Popularity (High → Low)</option>
              <option>Price (Low → High)</option>
              <option>Price (High → Low)</option>
            </select>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="bg-gray-200 text-center p-4 mt-6">
        © 2025 SoftDef. All rights reserved.
      </footer>
    </main>
  );
}









