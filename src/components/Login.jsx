import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '../config/firebase';
import { useNavigate } from 'react-router-dom';
import { useContext, useEffect } from 'react';
import { DataContext } from '../context/DataContext';

function Login() {
  const googleProvider = new GoogleAuthProvider();
  const navigate = useNavigate();
  const loggedIn = useContext(DataContext);
  const googleLogin = async () => {
    try {
      // eslint-disable-next-line no-unused-vars
      const result = await signInWithPopup(auth, googleProvider);
      navigate('/todo');
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error);
    }
  };
  useEffect(() => {
    if (loggedIn) navigate('/todo');
  }, []);

  return (
    <div className="bg-body-gradient h-screen flex justify-center items-center">
      <div className="container lg:max-w-screen-lg mx-auto  py-10">
        <div>
          <h1 className="text-pink-700 font-bold text-[60px] text-center mb-4">
            BE PRODUCTIVE
            <span className="font-bolder text-white text-[50px] block">
              using this simple todo app!
            </span>
          </h1>

          <div className="flex justify-center">
            <button
              onClick={googleLogin}
              type="button"
              className="text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-8 py-3 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 mr-2 mb-2"
            >
              <svg
                className="w-4 h-4 mr-2 -ml-1"
                aria-hidden="true"
                focusable="false"
                data-prefix="fab"
                data-icon="google"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 488 512"
              >
                <path
                  fill="currentColor"
                  d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
                ></path>
              </svg>
              Sign in with Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Login;
