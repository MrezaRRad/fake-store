import Link from "next/link";

function Navbar() {
  return (
    <div className="w-screen h-16 bg-gray-200 flex flex-row justify-between items-center shadow-sm">
      <Link href="/">
        <p className="font-serif font-extrabold px-5">Fake Store</p>
      </Link>
    </div>
  );
}

export default Navbar;
