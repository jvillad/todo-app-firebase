import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div>
      Page not found. <Link to="/">Go to home</Link>
    </div>
  );
}
