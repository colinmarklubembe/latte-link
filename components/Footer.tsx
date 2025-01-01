const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          {/* Left Section */}
          <div className="md:w-1/2">
            <h3 className="text-lg font-bold mb-4">Stay in the loop</h3>
            <p className="text-gray-300 text-sm mb-4">
              Stay in the loop with the latest updates, exclusive events, and
              networking tips from Latte Link. Subscribe to our newsletter and
              never miss a chance to connect, grow, and stay linked to
              opportunities that matter!
            </p>
            <div className="flex items-center gap-2">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-grow p-2 rounded-md bg-white text-gray-700 outline-none"
              />
              <button className="bg-blue-700 text-white p-2 rounded-md hover:bg-blue-800">
                ➡️
              </button>
            </div>
          </div>

          {/* Right Section */}
          <div className="flex flex-col md:flex-row gap-8 w-full md:w-1/2">
            {/* Column 1 */}
            <div>
              <h4 className="text-lg font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>Home</li>
                <li>About Us</li>
                <li>Features</li>
                <li>Resources</li>
                <li>Careers</li>
              </ul>
            </div>
            {/* Column 2 */}
            <div>
              <h4 className="text-lg font-bold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>Contact Form</li>
                <li>FAQ</li>
                <li>
                  <a href="/privacy-policy" className="hover:text-white">
                    Privacy Policy
                  </a>
                </li>
                <li>Terms & Conditions</li>
                <li>Press</li>
              </ul>
            </div>
            {/* Column 3 */}
            <div>
              <h4 className="text-lg font-bold mb-4">Social</h4>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>Facebook</li>
                <li>Instagram</li>
                <li>Twitter</li>
                <li>LinkedIn</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-8 text-gray-400 text-sm">
          <p>© LatteLink. All Rights Reserved 2024</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="/privacy-policy" className="hover:text-white">
              Privacy Policy
            </a>
            <span>|</span>
            <a href="/terms-conditions" className="hover:text-white">
              Terms & Conditions
            </a>
          </div>
          <button className="bg-blue-700 text-white px-4 py-2 rounded-md hover:bg-blue-800 mt-4 md:mt-0">
            Go Premium
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
