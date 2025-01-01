import { AiOutlineArrowRight } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="bg-primary text-white">
      {/* Header Section */}
      <div className="py-8">
        <div className="max-w-6xl mx-auto px-4 flex justify-between items-center">
          <h1 className="text-4xl font-bold">LatteLink</h1>
          <button className="bg-white text-primary px-6 py-3 rounded-md text-lg hover:bg-gray-200">
            Go Premium
          </button>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="flex justify-center py-8">
        <div className="w-4/5 bg-white rounded-3xl py-16 px-8 shadow-lg text-gray-800">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between gap-12">
              {/* Left Section */}
              <div className="md:w-2/5">
                <h3 className="text-2xl font-bold mb-4 text-primary">
                  Stay in the loop
                </h3>
                <p className="text-gray-600 text-lg mb-4">
                  Stay in the loop with the latest updates, exclusive events,
                  and networking tips from LatteLink. Subscribe to our
                  newsletter and never miss a chance to connect, grow, and stay
                  linked to opportunities that matter!
                </p>
                <div className="flex items-center gap-3 border border-primary p-1 rounded-xl">
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="flex-grow p-2 bg-white text-primary outline-none text-lg rounded-xl"
                  />
                  <button className="bg-gray-200 text-primary p-2 rounded-lg hover:bg-gray-300">
                    <AiOutlineArrowRight size={22} />
                  </button>
                </div>
              </div>

              {/* Right Section */}
              <div className="flex flex-col md:flex-row gap-12 md:w-1/2">
                {/* Column 1 */}
                <div>
                  <h4 className="text-xl font-bold mb-6 text-primary">
                    Company
                  </h4>
                  <ul className="space-y-4 text-gray-600 text-lg">
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Features</li>
                    <li>Resources</li>
                    <li>Careers</li>
                  </ul>
                </div>
                {/* Column 2 */}
                <div>
                  <h4 className="text-xl font-bold mb-6 text-primary">
                    Contact
                  </h4>
                  <ul className="space-y-4 text-gray-600 text-lg">
                    <li>Contact Form</li>
                    <li>FAQ</li>
                    <li>
                      <a href="/privacy-policy" className="hover:text-gray-900">
                        Privacy Policy
                      </a>
                    </li>
                    <li>Terms & Conditions</li>
                    <li>Press</li>
                  </ul>
                </div>
                {/* Column 3 */}
                <div>
                  <h4 className="text-xl font-bold mb-6 text-primary">
                    Social
                  </h4>
                  <ul className="space-y-4 text-gray-600 text-lg">
                    <li>Facebook</li>
                    <li>Instagram</li>
                    <li>Twitter</li>
                    <li>LinkedIn</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Bottom Section */}
            <div className="flex flex-col md:flex-row justify-between items-center mt-16 text-gray-500 text-lg border-t-2 border-gray-500 pt-6">
              <p>© LatteLink. All Rights Reserved 2024</p>
              <div className="flex gap-6 mt-6 md:mt-0">
                <a href="/privacy-policy" className="hover:text-primary">
                  Privacy Policy
                </a>
                <span>|</span>
                <a href="/terms-conditions" className="hover:text-primary">
                  Terms & Conditions
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
