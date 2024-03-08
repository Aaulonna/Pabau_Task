import Link from "next/link";

const Home = () => {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="m-2">
        <Link href={"/booking"} className="btn btn-info">
          View bookings
        </Link>
      </div>
      <div className="m-2">
        <Link href={"/booking/create"} className="btn btn-success">
          Create new booking
        </Link>
      </div>
    </div>
  );
};

export default Home;
