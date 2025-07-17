import { Linkedin, Github, Mail } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="border-t py-4 md:px-4 flex flex-row justify-between items-center">
      <p className="font-semibold">Bohdan Hamela, 2025</p>

      <div className="flex flex-row gap-4 items-center">
        <Link href="https://www.linkedin.com/in/bohdan-hamela-87757a35b">
          <Linkedin />
        </Link>

        <Link href="https://github.com/thething1001">
          <Github />
        </Link>

        <Link href="mailto:bohdan.hamela@gmail.com">
          <Mail />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
