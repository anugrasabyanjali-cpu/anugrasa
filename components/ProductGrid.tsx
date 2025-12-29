const products = [
  {
    name: "Namakpara",
    description: "Crisp, light, and perfect for everyday munching.",
    price: "₹600 / 1kg",
  },
  {
    name: "Mathari",
    description: "Traditional taste with a homemade touch.",
    price: "₹400 / 1kg",
  },
  {
    name: "Peri Peri Kaju Para",
    description: "A spicy, modern twist for snack lovers.",
    price: "₹825 / 1kg",
  },
  {
    name: "Lahsuni Samosa",
    description: "Bursting with garlic flavour.",
    price: "₹800 / 1kg",
  },
  {
    name: "Chatpati Kachodi",
    description: "Delicious and chatpati.",
    price: "₹600 / 1kg",
  },
  {
    name: "Dates & Dry Fruit Laddoo",
    description: "No sugar added, full of natural sweetness.",
    price: "₹1200 / 1kg",
  },
  {
    name: "Gond Ladoo",
    description:
      "A traditional Indian energy bite combining crunchy nuts and jaggery.",
    price: "₹1200 / 1kg",
  },
];

export default function ProductGrid() {
  return (
    <section
      id="products"
      className="bg-slate-50 px-6 py-16 font-tagesschrift"
    >
      <h2 className="text-3xl font-semibold text-center text-[#691506]">
        Our Snacks
      </h2>

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-[1400px] mx-auto place-items-center">
        {products.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-sm border p-4 flex flex-col items-center w-[300px]"
          >
            <img
              src={`/images/${item.name}.jpeg`}
              alt={item.name}
              className="mb-3 rounded-xl object-cover w-full h-[200px]"
            />

            <h3 className="text-lg font-semibold text-[#691506] text-center">
              {item.name}
            </h3>

            <p className="text-slate-600 mt-1 text-center text-sm">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
