import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';
import { auth } from '../config/firebase';
import { Link } from 'react-router-dom';

function Nav() {
  const [user, loading] = useAuthState(auth);
  if (loading) {
    return <> </>;
  }
  return (
    <section className="nav-container">
      <div className="nav">
        <ul>
          <li>
            {user && (
              <Link href="/dashboard">
                <img
                  src={user.photoURL}
                  alt="user avatar"
                  className="user-img"
                />
              </Link>
            )}
          </li>
          <div className="logoff-btn">
            <button>Logout</button>
          </div>
        </ul>
      </div>
    </section>
  );
}
export default Nav;
