import Link from "next/link";

const Nav = () => {
  return (
    <div className="bg-white border-b border-slate-100 shadow-md shadow-gray-400/50">
      <div className="container flex flex-wrap justify-between items-center mx-auto h-[78px]">
        <div className="my:auto">
          <Link href="/">Team Logo</Link>
        </div>
      </div>
    </div>
  );
};

export default Nav;
