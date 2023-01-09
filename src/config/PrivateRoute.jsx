import { Outlet, Navigate } from 'react-router-dom';
import { auth } from './firebase';

export default function PrivateRoute() {
  const user = auth.currentUser;
  return <main>{user ? <Outlet /> : <Navigate to="/" />};</main>;
}
