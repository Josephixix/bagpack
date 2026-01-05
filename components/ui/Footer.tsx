export default function Footer() {
  return (
    <footer className="bg-[#8B5E3C] pt-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col gap-24">

        {/* Links */}
       <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-10 text-gray-900">


          <div className="flex flex-col gap-4">
            <h4 className="font-semibold text-lg">Shop</h4>
            <a href="#" className="opacity-70 hover:opacity-100 transition">All Backpacks</a>
            <a href="#" className="opacity-70 hover:opacity-100 transition">Travel Packs</a>
            <a href="#" className="opacity-70 hover:opacity-100 transition">School Packs</a>
            <a href="#" className="opacity-70 hover:opacity-100 transition">Accessories</a>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="font-semibold text-lg">Company</h4>
            <a href="#" className="opacity-70 hover:opacity-100 transition">About Backpack</a>
            <a href="#" className="opacity-70 hover:opacity-100 transition">Sustainability</a>
            <a href="#" className="opacity-70 hover:opacity-100 transition">Careers</a>
            <a href="#" className="opacity-70 hover:opacity-100 transition">Press</a>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="font-semibold text-lg">Support</h4>
            <a href="#" className="opacity-70 hover:opacity-100 transition">Help Center</a>
            <a href="#" className="opacity-70 hover:opacity-100 transition">Shipping & Returns</a>
            <a href="#" className="opacity-70 hover:opacity-100 transition">Warranty</a>
            <a href="#" className="opacity-70 hover:opacity-100 transition">Contact Us</a>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="font-semibold text-lg">Legal</h4>
            <a href="#" className="opacity-70 hover:opacity-100 transition">Privacy Policy</a>
            <a href="#" className="opacity-70 hover:opacity-100 transition">Terms of Service</a>
            <a href="#" className="opacity-70 hover:opacity-100 transition">Cookies</a>
          </div>

        </div>

        {/* Brand Text */}
        <div className="relative flex justify-center">
          <h1 className="text-[18vw] font-extrabold leading-none tracking-tight text-center text-black/10 select-none translate-y-[15%]">
            Backpack
          </h1>
        </div>

      </div>
    </footer>
  );
}
