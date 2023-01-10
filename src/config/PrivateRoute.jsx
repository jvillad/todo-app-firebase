import { Outlet, Navigate, useLocation } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from './firebase';

export default function PrivateRoute() {
  const location = useLocation();

  const [user, loading] = useAuthState(auth);
  if (loading) {
    return 'Please wait..';
  }

  return (
    <main>
      {user ? <Outlet /> : <Navigate to="/" state={{ from: location }} />}
    </main>
  );
}
