export default function Footer() {
  return (
    <footer className="bg-gray-400 text-black py-6">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap justify-between">
          <div className="w-full sm:w-1/3 text-center sm:text-left mb-4 sm:mb-0">
            <h5 className="text-lg font-bold mb-2">Company</h5>
            <ul>
              <li>
                <a href="#" className="hover:underline">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Careers
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full sm:w-1/3 text-center sm:text-left mb-4 sm:mb-0">
            <h5 className="text-lg font-bold mb-2">Resources</h5>
            <ul>
              <li>
                <a href="#" className="hover:underline">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-6 text-center sm:text-left">
          <p className="text-sm">
            &copy; 2024 Company Name. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
