import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { toast } from 'react-toastify';

const AuthModal = ({ onClose, setUser }) => {
  const auth = getAuth();
  const provider = new GoogleAuthProvider();

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        setUser(user);
        toast.success(`Welcome, ${user.displayName || user.email}!`);
        onClose();
      })
      .catch((error) => {
        console.error("Error during Google sign-in", error);
        toast.error("Failed to sign in with Google. Please try again.");
      });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg p-8 max-w-md w-full relative">
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
          onClick={onClose}
        >
          &times;
        </button>
        <h2 className="text-2xl mb-4">Create an Account</h2>
        <button
          onClick={handleGoogleSignIn}
          className="w-full p-2 bg-blue-500 text-white rounded"
        >
          Sign in with Google
        </button>
      </div>
    </div>
  );
};

export default AuthModal;
