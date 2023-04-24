import { useContext } from 'react';
import { auth } from '../config/firebase';
import { Link } from 'react-router-dom';
import { DataContext } from '../context/DataContext';

function Nav() {
  const loggedIn = useContext(DataContext);

  console.log(loggedIn);
  if (!loggedIn) {
    return <></>;
  }

  return (
    <section className="bg-gray-900 mb-4 text-white">
      <ul className="p-2 flex justify-evenly items-center">
        <p>
          👋🏼 Hello
          <span className="text-pink-700"> {loggedIn.displayName}</span>
        </p>

        <li>
          <Link href="/dashboard">
            <img
              src={loggedIn.photoURL}
              alt="user avatar"
              className="user-img"
            />
          </Link>
        </li>
        <div className="">
          <button
            onClick={() => auth.signOut()}
            type="button"
            className="inline-block rounded border-2 border-primary-100 px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-primary-700 transition duration-150 ease-in-out hover:border-primary-accent-100 hover:bg-neutral-500 hover:bg-opacity-10 focus:border-primary-accent-100 focus:outline-none focus:ring-0 active:border-primary-accent-200 dark:text-primary-100 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
          >
            Logout
          </button>
        </div>
      </ul>
    </section>
  );
}
export default Nav;
