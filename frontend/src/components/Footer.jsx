import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import { SiCodechef, SiLeetcode, SiGeeksforgeeks } from "react-icons/si";
import { FaLinkedinIn, FaYoutube, FaGithub, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="z-30 items-center gap-2 px-4 py-2 border-t bg-slate-100 sm:flex border-slate-200 sm:bg-white dark:bg-zinc-950 dark:border-zinc-800">
      <h1 className="flex items-center justify-center gap-2 pb-2 truncate">
        <span>Made by</span>
        <span className="text-xl font-medium tracking-tight truncate transition-colors dark:text-zinc-50">
          @AmanGupta
        </span>
      </h1>
      <div className="flex items-center justify-center gap-2 sm:ml-auto ">
        <Link to="https://www.linkedin.com/in/aman-gupta15/" target="_blank">
          <Button variant="outline" size="icon">
            <FaLinkedinIn className="w-6 h-6" />
            <span className="sr-only">Linkedin</span>
          </Button>
        </Link>
        <Link to="https://github.com/ygaman15" target="_blank">
          <Button variant="outline" size="icon">
            <FaGithub className="w-6 h-6" />
            <span className="sr-only">Github</span>
          </Button>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
