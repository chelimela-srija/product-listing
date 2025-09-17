"use client";

import Image from "next/image";

interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice: number;
  discount: string;
  rating: number;
  reviews: number;
  image: string;
  tag?: string;
}

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="border rounded-xl shadow-md p-4 hover:shadow-lg transition">
      {/* Image */}
      <div className="w-full h-56 flex items-center justify-center mb-3 bg-gray-100 rounded-lg">
        <Image
          src={product.image}
          alt={product.name}
          width={180}
          height={180}
          className="object-contain"
        />
      </div>




      {/* Tag */}
      {product.tag && (
        <span className="text-xs font-semibold text-red-600">{product.tag}</span>
      )}

      {/* Name */}
      <h3 className="font-semibold">{product.name}</h3>

      {/* Price */}
      <p className="text-green-600 font-bold">
        ₹{product.price}{" "}
        <span className="text-gray-500 line-through ml-2">
          ₹{product.originalPrice}
        </span>
      </p>

      {/* Discount */}
      <p className="text-sm text-red-500">{product.discount}</p>

      {/* Rating */}
      <p className="text-sm">⭐ {product.rating} ({product.reviews})</p>
    </div>
  );
}



