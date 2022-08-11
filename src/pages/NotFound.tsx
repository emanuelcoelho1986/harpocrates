import { Link } from 'react-router-dom';
import { AvailableRoutes } from '../routes/AvailableRoutes';

export default function NotFound() {
  return (
    <>
      <h1>Page Not Found</h1>
      <Link to={AvailableRoutes.HOME}>Go Back to Home</Link>
    </>
  );
}
