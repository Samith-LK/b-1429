import { Link } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const Navigation = () => {
  return (
    <nav className="border-b border-gray-800 px-6 py-4 sticky top-0 z-50 bg-[#121212]">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        <div className="flex items-center space-x-8">
          <Link to="/" className="text-white hover:text-blue-400">Home</Link>
          <Link to="/about" className="text-gray-400 hover:text-white">About</Link>
          <Link to="/experiences" className="text-gray-400 hover:text-white">Experiences</Link>
          <Link to="/skills" className="text-gray-400 hover:text-white">Skills</Link>
          <Link to="/academic" className="text-gray-400 hover:text-white">Academic</Link>
          <Link to="/awards" className="text-gray-400 hover:text-white">Awards</Link>
          <Link to="/sports" className="text-gray-400 hover:text-white">Sports</Link>
          <Link to="/volunteering" className="text-gray-400 hover:text-white">Volunteering</Link>
          <Link to="/competitions" className="text-gray-400 hover:text-white">Competitions</Link>
          <Link to="/contact" className="text-gray-400 hover:text-white">Contact</Link>
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
      </div>
    </nav>
  );
};

export default Navigation;