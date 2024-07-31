import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import logo from "../assets/logo.png";
import { navItems } from "../constants";
import { signOut, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { toast } from "react-toastify";


const Navbar = ({ user, setUser, toggleAuthModal }) => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  const handleLogoClick = () => {
    window.location.reload(); // This will reload the page
  };

  const handleScroll = () => {
    setScrolled(window.scrollY > 50); // Adjust this value as needed
  };

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        setUser(null);
        toast.success("Logged out successfully!");
      })
      .catch((error) => {
        console.error("Sign out error", error);
        toast.error("Failed to log out. Please try again.");
      });
  };

  const handleGoogleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        setUser(user);
        toast.success(`Welcome, ${user.displayName || user.email}!`);
      })
      .catch((error) => {
        console.error("Google sign-in error", error);
        toast.error("Failed to sign in with Google. Please try again.");
      });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Call handleScroll initially to set the correct state
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 backdrop-blur-lg border-b border-neutral-700/80 ${
        scrolled ? 'py-7' : 'py-3' // Increase vertical padding on scroll
      }`}
    >
      <div className="container px-4 mx-auto relative lg:text-sm">
        <div className="flex justify-between items-center">
          <a
            href="#"
            onClick={handleLogoClick}
            className="flex items-center flex-shrink-0 hover:scale-110 transition-transform duration-300"
          >
            <img className="h-10 w-10 mr-2" src={logo} alt="Logo" />
            <span className="text-xl tracking-tight text-white">VirtualR</span>
          </a>
          <ul className="hidden lg:flex ml-14 space-x-12">
            {navItems.map((item, index) => (
              <li
                key={index}
                className="relative transition-transform duration-300 hover:bg-gradient-to-r hover:from-orange-500 hover:to-orange-700 hover:text-orange-200 hover:scale-110 rounded-md px-4 py-2"
              >
                <a href={item.href} className="absolute inset-0 flex items-center justify-center">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="hidden lg:flex justify-center space-x-12 items-center">
            {user ? (
              <div className="flex items-center space-x-4">
                <img
                  src={user.photoURL || "https://via.placeholder.com/40"}
                  alt="Profile"
                  className="rounded-full w-10 h-10"
                  onClick={handleLogout}
                  title="Click to logout"
                />
                <span className="text-white">{user.displayName || user.email}</span>
              </div>
            ) : (
              <a
                href="#"
                onClick={handleGoogleSignIn}
                className="bg-gradient-to-r from-orange-400 to-orange-800 transition-transform duration-300 hover:scale-110 hover:text-orange-200 py-2 px-3 rounded-md"
              >
                Create an account
              </a>
            )}
          </div>
          <div className="lg:hidden md:flex flex-col justify-end">
            <button onClick={toggleNavbar}>
              {mobileDrawerOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        {mobileDrawerOpen && (
          <div className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden">
            <ul>
              {navItems.map((item, index) => (
                <li
                  key={index}
                  className="py-4 transition-transform duration-200 hover:text-orange-500 hover:scale-105"
                >
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
            <div className="flex space-x-6">
              <a
                href="#"
                onClick={handleGoogleSignIn}
                className="py-2 px-3 rounded-md bg-gradient-to-r from-orange-500 to-orange-800"
              >
                Create an account
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
