import { createContext } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../config/firebase';
export const DataContext = createContext();

// eslint-disable-next-line react/prop-types
export function DataProvider({ children }) {
  const [user, loading] = useAuthState(auth);
  if (loading) return;
  return <DataContext.Provider value={user}>{children}</DataContext.Provider>;
}
