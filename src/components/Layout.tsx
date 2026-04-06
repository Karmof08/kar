import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ShoppingBag, MapPin } from "lucide-react";
import { Button } from "./ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Shop", path: "/shop" },
    { name: "Custom Orders", path: "/custom-orders" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-black/90 backdrop-blur-md py-3 shadow-lg" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-white flex items-center gap-2">
          <ShoppingBag className="text-amber-500 w-8 h-8" />
          <span className="tracking-tighter">SOLE<span className="text-amber-500">SAVVY</span></span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm font-medium transition-colors hover:text-amber-500 ${
                location.pathname === link.path ? "text-amber-500" : "text-white"
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Button className="bg-amber-500 hover:bg-amber-600 text-black font-bold rounded-full px-6">
            <Link to="/shop">Order Now</Link>
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-black border-t border-white/10 overflow-hidden"
          >
            <div className="container mx-auto px-6 py-8 flex flex-col gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-xl font-bold ${
                    location.pathname === link.path ? "text-amber-500" : "text-white"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4 flex items-center gap-2 text-white/60 text-sm">
                <MapPin size={16} />
                <span>Room 117, Main Hostel</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Footer = () => (
  <footer className="bg-black text-white py-16 border-t border-white/10">
    <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
      <div className="col-span-1 md:col-span-2">
        <Link to="/" className="text-3xl font-bold flex items-center gap-2 mb-6">
          <ShoppingBag className="text-amber-500 w-10 h-10" />
          <span className="tracking-tighter">SOLE<span className="text-amber-500">SAVVY</span></span>
        </Link>
        <p className="text-white/60 max-w-md mb-8">
          The ultimate footwear plug for students and young adults. Premium repairs, professional polishing, and the latest kicks at prices that won't break the bank.
        </p>
      </div>
      <div>
        <h4 className="text-lg font-bold mb-6">Quick Links</h4>
        <ul className="space-y-4">
          <li><Link to="/services" className="text-white/60 hover:text-amber-500 transition-colors">Services</Link></li>
          <li><Link to="/shop" className="text-white/60 hover:text-amber-500 transition-colors">Shop</Link></li>
          <li><Link to="/custom-orders" className="text-white/60 hover:text-amber-500 transition-colors">Custom Orders</Link></li>
          <li><Link to="/about" className="text-white/60 hover:text-amber-500 transition-colors">About Us</Link></li>
        </ul>
      </div>
      <div>
        <h4 className="text-lg font-bold mb-6">Contact</h4>
        <ul className="space-y-4 text-white/60">
          <li>Room 117, Main Hostel</li>
          <li>+234 800 SOLE SAVVY</li>
          <li>hello@solesavvy.com</li>
        </ul>
      </div>
    </div>
    <div className="container mx-auto px-6 mt-16 pt-8 border-t border-white/10 text-center text-white/40 text-sm">
      <p>&copy; {new Date().getFullYear()} SoleSavvy Footwear. All rights reserved.</p>
    </div>
  </footer>
);

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <Navbar />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;