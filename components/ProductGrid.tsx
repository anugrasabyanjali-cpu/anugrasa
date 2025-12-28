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
  const firstRow = products.slice(0, 4);
  const secondRow = products.slice(4);

  const cardWidth = "300px";
  const cardHeight = "200px";

  return (
    <section
      id="products"
      className="bg-slate-50 px-6 py-16 font-tagesschrift"
    >
      <h2 className="text-3xl font-semibold text-center text-[#691506]">
        Our Snacks
      </h2>

      {/* First row */}
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-[2000px] mx-auto justify-center">
        {firstRow.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-sm border p-4 flex flex-col items-center"
            style={{ width: cardWidth }}
          >
            <img
              src={`/images/${item.name}.jpeg`}
              alt={item.name}
              style={{ width: cardWidth, height: cardHeight }}
              className="mb-3 rounded-xl object-cover"
            />

            <h3 className="text-lg font-semibold text-[#691506] text-center">
              {item.name}
            </h3>

            <p className="text-slate-600 mt-1 flex-grow text-center text-sm">
              {item.description}
            </p>
          </div>
        ))}
      </div>

      {/* Second row */}
      <div className="mt-8 flex justify-center gap-6 flex-wrap">
        {secondRow.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-sm border p-4 flex flex-col items-center"
            style={{ width: cardWidth }}
          >
            <img
              src={`/images/${item.name}.jpeg`}
              alt={item.name}
              style={{ width: cardWidth, height: cardHeight }}
              className="mb-3 rounded-xl object-cover"
            />

            <h3 className="text-lg font-semibold text-[#691506] text-center">
              {item.name}
            </h3>

            <p className="text-slate-600 mt-1 flex-grow text-center text-sm">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
