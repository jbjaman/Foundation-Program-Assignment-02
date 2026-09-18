import { FaFacebook, FaGithub, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <>
      <footer className="bg-[#0B0B0F] ">
        <div className="mx-auto  flex py-3 gap-3 px-5 items-center justify-center">
          <img src="/chobikhoj.png" alt="" className="w-24 h-auto" />
          <p className="text-sm text-slate-400">© 2026 CHOBIKHOJ BD.</p>
        </div>
        <div className="border-amber-50 text-slate-50 flex items-center justify-center gap-3 pb-3 text-sm">
          <FaFacebook />
          <FaInstagram />
          <FaGithub />
          <FaXTwitter />
        </div>
      </footer>
    </>
  );
};

export default Footer;
