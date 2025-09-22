import { assets } from "@/assets/assets";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-[#FDF8F8] py-10">
      <div className="w-10/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-sm text-gray-800 max-w-7xl">
        {/* Links */}
        <div>
          <h3 className="font-medium text-xl mb-2">Links</h3>
          <ul className="space-y-2">
            <li>Company</li>
            <li>Products</li>
            <li>Projects</li>
          </ul>
        </div>

        {/* Training */}
        <div>
          <h3 className="font-medium text-xl mb-3">Training</h3>
          <ul className="space-y-2">
            <li>Flutter</li>
            <li>MERN Stack</li>
            <li>Laravel</li>
          </ul>
        </div>

        {/* Address and Social */}
        <div>
          <h3 className="font-medium text-xl mb-3">Our Address</h3>
          <p>
            D/36, Block-E Lalmatia, Dhaka
            <br />
            1207, Bangladesh
          </p>
          <div className="flex space-x-3 mt-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={assets.facebook}
                alt="Facebook"
                className="w-10 h-10"
              />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={assets.linkedin}
                alt="LinkedIn"
                className="w-10 h-10"
              />
            </a>
          </div>
        </div>

        {/* Subscribe */}
        <div>
          <h3 className="font-medium text-xl mb-3">Get In Touch</h3>
          <input
            type="email"
            placeholder="Enter your Email"
            className="w-full p-2 border border-gray-300 rounded mb-3 focus:outline-none"
          />
          <button className="w-full bg-[#FA7470] text-white py-2 rounded hover:bg-[#ff4d4d] transition">
            Subscribe
          </button>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center text-gray-500 mt-10">
        © 2023 All Rights Reserved Design by{" "}
        <span className="text-[#FA7470] hover:text-red-500 font-semibold cursor-pointer">
          DeshIT-BD
        </span>
      </div>
    </footer>
  );
};

export default Footer;
