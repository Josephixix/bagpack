"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const bestSellers = [
  {
    id: 1,
    name: "Traveler Backpack",
    price: "$80",
    img: "/h1.jpg",
    tag: "Best Seller",
  },
  {
    id: 2,
    name: "Urban Sling Bag",
    price: "$65",
    img: "/h2.jpg",
    tag: "Trending",
  },
  {
    id: 3,
    name: "Adventure Hiking Pack",
    price: "$120",
    img: "/h3.jpg",
    tag: "Hot",
  },
  {
    id: 4,
    name: "Minimalist Daypack",
    price: "$70",
    img: "/h4.jpg",
    tag: "Best Seller",
  },
  {
    id: 5,
    name: "Classic Laptop Backpack",
    price: "$90",
    img: "/h5.jpg",
  },
  {
    id: 6,
    name: "Eco-Friendly Tote Pack",
    price: "$55",
    img: "/h6.jpg",
  },
];

export default function BestSellers() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
      className="px-4 md:px-12 lg:px-24 py-16 bg-[#F8F4F1]"
    >
      {/* Header */}
      <div className="mb-8 text-center md:text-left">
        <h2 className="text-sm font-bold text-gray-500 mb-2 uppercase tracking-wide">
          Top Picks
        </h2>
        <h3 className="text-2xl md:text-4xl font-bold text-[#2F241E]">
          Best Sellers
        </h3>
        <p className="text-gray-600 mt-2 max-w-xl">
          Shop our most loved backpacks — durable, stylish, and ready for
          every journey.
        </p>
      </div>

      {/* Mobile Carousel */}
      <div className="md:hidden flex gap-4 overflow-x-auto pb-4 hide-scrollbar">
        {bestSellers.map((item) => (
          <motion.div
            key={item.id}
            whileHover={{ scale: 1.03 }}
            className="min-w-[70%] bg-white rounded-xl shadow-sm border p-3 shrink-0"
          >
            <div className="relative w-full h-44 rounded-lg overflow-hidden mb-3">
              <Image src={item.img} alt={item.name} fill className="object-cover" />
            </div>

            {item.tag && (
              <span className="text-xs bg-black text-white px-2 py-1 rounded-full">
                {item.tag}
              </span>
            )}

            <h4 className="font-semibold mt-2 text-[#2F241E]">{item.name}</h4>
            <p className="text-gray-600">{item.price}</p>

            <button className="mt-3 w-full bg-[#2F241E] hover:bg-[#7A6453] text-white py-2 rounded-lg text-sm transition">
              Shop Now
            </button>
          </motion.div>
        ))}
      </div>

      {/* Desktop Grid */}
      <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-8 mt-4">
        {bestSellers.map((item) => (
          <motion.div
            key={item.id}
            whileHover={{ scale: 1.02 }}
            className="bg-white rounded-xl border p-4"
          >
            <div className="relative w-full h-64 rounded-lg overflow-hidden mb-4">
              <Image src={item.img} alt={item.name} fill className="object-cover" />
            </div>

            {item.tag && (
              <span className="text-xs bg-black text-white px-2 py-1 rounded-full">
                {item.tag}
              </span>
            )}

            <h4 className="font-semibold mt-2 text-[#2F241E]">{item.name}</h4>
            <p className="text-gray-600">{item.price}</p>

            <button className="mt-3 w-full bg-[#2F241E] hover:bg-[#7A6453] text-white py-2 rounded-lg text-sm transition">
              Shop Now
            </button>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
