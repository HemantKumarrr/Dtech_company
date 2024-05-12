
const Footer = () => {
  return (
    <footer className="bg-black px-20 text-white py-6">
      <div className="mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <div className="flex items-center gap-2">
            <img className="w-8" src="./images/DTechLogo.png" alt="" />
            <h2 className="text-xl font-semibold">DTech Engineering</h2>
            </div>
            <p className="mt-2 text-sm">All Types of Precision Machine Components & Job Work etc.</p>
          </div>
          <ul className="flex space-x-4">
            <li><a href="#" className="hover:text-blue-500 transition duration-300">Home</a></li>
            <li><a href="#" className="hover:text-blue-500 transition duration-300">About</a></li>
            <li><a href="#" className="hover:text-blue-500 transition duration-300">Services</a></li>
            <li><a href="#" className="hover:text-blue-500 transition duration-300">Contact</a></li>
          </ul>
        </div>
        <div className="mt-4 text-sm text-center md:text-left">
          &copy; {new Date().getFullYear()} DTech Engineering. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
