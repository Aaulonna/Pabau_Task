import React from "react";
import Link from "next/link";
import "bootstrap/dist/css/bootstrap.min.css";

const NotFoundPage: React.FC = () => {
  return (
    <div className="row justify-content-center">
      <div className="col-md-6 text-center">
        <h1 className="mt-5">404 - Page Not Found</h1>
        <p className="lead">The page you are looking for does not exist.</p>
        <Link href="/">Go back to home</Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
