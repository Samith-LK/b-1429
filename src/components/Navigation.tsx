import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const getLinkClassName = (path: string) => {
    return isActive(path) 
      ? "text-blue-400 font-medium" 
      : "text-gray-400 hover:text-white";
  };

  return (
    <nav className="border-b border-gray-800 px-6 py-4 bg-[#121212] relative">
      <div className="max-w-7xl mx-auto">
        {/* Mobile menu button */}
        <div className="md:hidden flex justify-end">
          <button
            onClick={toggleMenu}
            className="text-white hover:text-blue-400 focus:outline-none"
          >
            {isOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/" className={getLinkClassName("/")}>Home</Link>
          <Link to="/about" className={getLinkClassName("/about")}>About</Link>
          <Link to="/experiences" className={getLinkClassName("/experiences")}>Experiences</Link>
          <Link to="/skills" className={getLinkClassName("/skills")}>Skills</Link>
          <Link to="/academic" className={getLinkClassName("/academic")}>Academic</Link>
          <Link to="/awards" className={getLinkClassName("/awards")}>Awards</Link>
          <Link to="/sports" className={getLinkClassName("/sports")}>Sports</Link>
          <Link to="/volunteering" className={getLinkClassName("/volunteering")}>Volunteering</Link>
          <Link to="/competitions" className={getLinkClassName("/competitions")}>Competitions</Link>
          <Link to="/projects" className={getLinkClassName("/projects")}>Projects</Link>
          <Link to="/contact" className={getLinkClassName("/contact")}>Contact</Link>
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-gray-400 hover:text-white bg-transparent">
                  Resume
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="w-[200px] p-2 bg-[#1a1a1a] rounded-md">
                    <a 
                      href="/src/assets/SamithCV.pdf" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="block px-4 py-2 text-gray-400 hover:text-white hover:bg-[#242424] rounded-md"
                    >
                      Samith CV
                    </a>
                    <a 
                      href="/src/assets/SamithResume.pdf" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="block px-4 py-2 text-gray-400 hover:text-white hover:bg-[#242424] rounded-md"
                    >
                      Samith Resume
                    </a>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-[#121212] border-b border-gray-800 py-4 px-6 flex flex-col space-y-4 z-50">
            <Link to="/" className={getLinkClassName("/")} onClick={toggleMenu}>Home</Link>
            <Link to="/about" className={getLinkClassName("/about")} onClick={toggleMenu}>About</Link>
            <Link to="/experiences" className={getLinkClassName("/experiences")} onClick={toggleMenu}>Experiences</Link>
            <Link to="/skills" className={getLinkClassName("/skills")} onClick={toggleMenu}>Skills</Link>
            <Link to="/academic" className={getLinkClassName("/academic")} onClick={toggleMenu}>Academic</Link>
            <Link to="/awards" className={getLinkClassName("/awards")} onClick={toggleMenu}>Awards</Link>
            <Link to="/sports" className={getLinkClassName("/sports")} onClick={toggleMenu}>Sports</Link>
            <Link to="/volunteering" className={getLinkClassName("/volunteering")} onClick={toggleMenu}>Volunteering</Link>
            <Link to="/competitions" className={getLinkClassName("/competitions")} onClick={toggleMenu}>Competitions</Link>
            <Link to="/projects" className={getLinkClassName("/projects")} onClick={toggleMenu}>Projects</Link>
            <Link to="/contact" className={getLinkClassName("/contact")} onClick={toggleMenu}>Contact</Link>
            <div className="pt-2">
              <div className="text-gray-400 font-medium pb-2">Resume</div>
              <a 
                href="/src/assets/SamithCV.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block py-2 text-gray-400 hover:text-white"
                onClick={toggleMenu}
              >
                Samith CV
              </a>
              <a 
                href="/src/assets/SamithResume.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block py-2 text-gray-400 hover:text-white"
                onClick={toggleMenu}
              >
                Samith Resume
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;