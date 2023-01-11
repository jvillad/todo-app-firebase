import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../config/firebase';
import { Link } from 'react-router-dom';

function Nav() {
  const [user, loading] = useAuthState(auth);
  if (loading) {
    return <> </>;
  }
  if (!user) {
    return <></>;
  }
  return (
    <section className="nav-container">
      <div className="nav">
        <ul>
          <li>
            <Link href="/dashboard">
              <img src={user.photoURL} alt="user avatar" className="user-img" />
            </Link>
          </li>

          <div className="logoff-btn">
            <button onClick={() => auth.signOut()}>Logout</button>
          </div>
        </ul>
      </div>
    </section>
  );
}
export default Nav;
