import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { FcGoogle } from 'react-icons/fc';
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
    <div className="login-container">
      <div className="login-wrapper">
        <div className="login-intro">Be productive today! 📝</div>
        <div className="btn-wrapper">
          <button onClick={googleLogin} className="btn-login">
            <FcGoogle /> Sign in with Google
          </button>
        </div>
      </div>
    </div>
  );
}
export default Login;
