import ActiveLink from "./activeLink";

const Nav = () => {
  return (
    <div className="bg-white border-b border-slate-100 shadow-md shadow-gray-400/50">
      <div className="flex flex-wrap justify-between items-center ml-[10%] mr-[10%] h-[78px]">
        <div className="my:auto">
          <ActiveLink href="/">Team Logo</ActiveLink>
        </div>
        <div className="my:auto">
          <ActiveLink href="/blog">Blog</ActiveLink>
        </div>
        <div className="my:auto">
          <ActiveLink href="/contact">Contact</ActiveLink>
        </div>
      </div>
    </div>
  );
};

export default Nav;
