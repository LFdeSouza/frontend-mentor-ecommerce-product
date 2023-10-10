const Navbar = () => {
  return (
    <nav className="text-grayishBlue">
      <ul className="flex gap-8  ">
        <li className="hover:highlight relative cursor-pointer hover:text-darkGrayishBlue">
          <a>Collections</a>
        </li>
        <li className="hover:highlight relative cursor-pointer hover:text-darkGrayishBlue">
          <a>Men</a>
        </li>
        <li className="hover:highlight relative cursor-pointer hover:text-darkGrayishBlue">
          <a>Women</a>
        </li>
        <li className="hover:highlight relative cursor-pointer hover:text-darkGrayishBlue">
          <a>About</a>
        </li>
        <li className="hover:highlight relative cursor-pointer hover:text-darkGrayishBlue">
          <a>Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
