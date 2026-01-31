import { Moon, Sun } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

const Navbar = () => {
  const { dark, setDark } = useTheme();

  return (
    <nav className="navbar">
      <h2>PasteApp</h2>

      <button className="icon-btn" onClick={() => setDark(!dark)}>
        {dark ? <Sun /> : <Moon />}
      </button>
    </nav>
  );
};

export default Navbar;
