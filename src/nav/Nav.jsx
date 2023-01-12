import { useContext } from 'react';
import { auth } from '../config/firebase';
import { Link } from 'react-router-dom';
import { DataContext } from '../context/DataContext';

function Nav() {
  const loggedIn = useContext(DataContext);

  if (!loggedIn) {
    return <></>;
  }

  return (
    <section className="nav-container">
      <div className="nav">
        <ul>
          <li>
            <Link href="/dashboard">
              <img
                src={loggedIn.photoURL}
                alt="user avatar"
                className="user-img"
              />
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
