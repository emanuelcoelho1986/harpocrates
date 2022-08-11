import React from 'react';
import { Link } from 'react-router-dom';
import AvailableRoutesEnum from '../routes/AvailableRoutes.enum';

export default function NotFound() {
  return (
    <>
      <h1>Page Not Found</h1>
      <Link to={AvailableRoutesEnum.HOME}>Go Back to Home</Link>
    </>
  );
}
