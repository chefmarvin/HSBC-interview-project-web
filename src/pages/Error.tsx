import React from 'react';
import { useParams } from 'react-router-dom';

interface ErrorPageProps {
  errorMessage?: string;
}

const ErrorPage: React.FC<ErrorPageProps> = ({ errorMessage }) => {
  const { errorCode } = useParams<{ errorCode: string }>();

  return (
    <div>
      <h1>Error {errorCode}</h1>
      <p>{errorMessage || 'Something went wrong...'}</p>
    </div>
  );
};

export default ErrorPage;