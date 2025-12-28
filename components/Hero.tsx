import Image from "next/image";

export default function Hero() {
  return (
    <section className="h-screen flex flex-col items-center justify-center bg-[#691506] text-white">
      
      {/* Full-width logo banner */}
      <div className="w-full bg-[#691506] py-6 flex justify-center mb-6">
        <Image
          src="/images/logo4.png"
          alt="Anugrasa Logo"
          width={490}
          height={160}
          priority
        />
      </div>

      {/* Tagline */}
   <p className="text-2xl mb-8 text-center font-tagesschrift font-bold whitespace-nowrap">
  Handmade, traditional Indian snacks made with love
</p>



      {/* CTA */}
      <a
        href="#products"
        className="bg-white text-[#691506] px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition font-tagesschrift"
      >
        Browse Our Snacks
      </a>
    </section>
  );
}
