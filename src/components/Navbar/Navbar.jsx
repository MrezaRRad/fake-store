import Link from "next/link";

function Navbar() {
  return (
    <div className="w-full h-20 bg-gray-200 flex flex-row items-center justify-between px-20 shadow-md sm:px-14 xl:px-20">
      <Link href="/">
        <p className="font-serif font-black text-2xl">Fake Store</p>
      </Link>
      <Link href="/">
        <p>Home</p>
      </Link>
    </div>
  );
}

export default Navbar;
