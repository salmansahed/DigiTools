import React from 'react';

const Footer = () => {
    return (
      <div className="bg-[#101727] pt-20 md:pt-24 lg:pt-30 text-white px-4">
        <div className="grid grid-cols-1 text-center md:text-left md:grid-cols-3 lg:grid-cols-5 gap-10 container mx-auto pb-16 md:pb-20 border-b border-[#e5e7eb5d]">
          <div>
            <h1 className="text-3xl font-bold">DigiTools</h1>
            <p className="text-[#aeb2b6] mt-5">
              Premium digital tools for creators, professionals, and businesses.
              Work smarter with our suite of powerful tools.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-medium">Product</h2>
            <ul className="text-[#aeb2b6] space-y-4 mt-5">
              <li>Features</li>
              <li>Pricing</li>
              <li>Templates</li>
              <li>Integrations</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-medium">Company</h2>
            <ul className="text-[#aeb2b6] space-y-4 mt-5">
              <li>About</li>
              <li>Blog</li>
              <li>Careers</li>
              <li>Press</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-medium">Resources</h2>
            <ul className="text-[#aeb2b6] space-y-4 mt-5">
              <li>Documentation</li>
              <li>Help Center</li>
              <li>Community</li>
              <li>Contact</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-medium">Social Links</h2>
            <ul className="flex gap-4 mt-5 items-center justify-center md:justify-start">
              <li className="bg-white hover:bg-blue-500 text-black hover:text-white transition-all rounded-full w-10 h-10 flex items-center justify-center">
                <a href="#">
                  <i class="fa-brands fa-instagram"></i>
                </a>
              </li>
              <li className="bg-white hover:bg-blue-500 text-black hover:text-white transition-all rounded-full w-10 h-10 flex items-center justify-center">
                <a href="#">
                  <i class="fa-brands fa-facebook"></i>
                </a>
              </li>
              <li className="bg-white hover:bg-blue-500 text-black hover:text-white transition-all rounded-full w-10 h-10 flex items-center justify-center">
                <a href="#">
                  <i class="fa-brands fa-x-twitter"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="py-5 md:py-7.5 flex flex-col text-center md:text-left md:flex-row justify-between container mx-auto">
          <p className="text-[#fafafa49] mb-4 md:mb-0">
            © 2026 Digitools. All rights reserved.
          </p>
          <ul className="text-[#fafafa49] flex gap-6 items-center justify-center md:justify-start">
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms of Service</a></li>
            <li><a href="#">Cookies</a></li>
          </ul>
        </div>
      </div>
    );
};

export default Footer;