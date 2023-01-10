import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import { FcGoogle } from 'react-icons/fc';
import { auth } from '../config/firebase';
import { useNavigate } from 'react-router-dom';

function Login() {
  const googleProvider = new GoogleAuthProvider();
  const navigate = useNavigate();
  const [user, loading] = useAuthState(auth);
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
  if (loading) return;
  if (user) navigate('/todo');
  return (
    <div className="login-container">
      <h2>Be productive today!</h2>
      <button onClick={googleLogin}>
        <FcGoogle /> Sign in with Google
      </button>
    </div>
  );
}
export default Login;
