
const Footer = () => {
  return (
    <footer 
    // className='card-container'
    // className="bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200"
    >
      <div className="max-w-5xl mx-auto px-4 py-10 flex flex-col md:flex-row justify-between gap-6">
        {/* Logo and Description */}
        <div className="space-y-2">
          <h2 className="text-2xl font-bold text-green-600">BD Food Storage</h2>
          <p className="text-sm max-w-xs">
            In Bangladesh’s warm and humid climate, proper food storage is essential to prevent spoilage and ensure food safety. Always store perishable items in a refrigerator, keep dry goods in airtight containers, and monitor expiry dates regularly.
          </p>
        </div>

        {/* Links */}
        <div className="flex flex-col sm:flex-row gap-6">
          <div>
            <h3 className="font-semibold mb-2">Quick Links</h3>
            <ul className="space-y-1 text-sm">
              <li><a href="#" className="hover:text-green-600 transition">Home</a></li>
              <li><a href="#" className="hover:text-green-600 transition">Groups</a></li>
              <li><a href="#" className="hover:text-green-600 transition">Create Group</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Resources</h3>
            <ul className="space-y-1 text-sm">
              <li><a href="#" className="hover:text-green-600 transition">FAQ</a></li>
              <li><a href="#" className="hover:text-green-600 transition">Support</a></li>
              <li><a href="#" className="hover:text-green-600 transition">Terms</a></li>
            </ul>
          </div>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-semibold mb-2">Contact Us</h3>
          <p className="text-sm">hello@bd-food-storage.com</p>
          <p className="text-sm">+123 456 7890</p>
        </div>
      </div>

      <div className="border-t border-gray-300 dark:border-gray-700 text-center py-4 text-sm">
        © {new Date().getFullYear()} bd-food-storage. All rights reserved.
      </div>
    </footer>

  );
};

export default Footer;