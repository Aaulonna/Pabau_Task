import { getBook } from "@/lib/bookings";
import Link from "next/link";
import { BookingDetailsInterface } from "@/types/types";

const BookingDetails = async ({ id }: BookingDetailsInterface) => {
  const response = await getBook(id);
  return (
    <>
      <div className="row justify-content-center align-items-center vh-100">
        <div className="col-md-8">
          <div className="row justify-content-center">
            <div className="col-md-12">
              <h3>
                This Booking is with {response.doctor_name} For{" "}
                {response.service} and it ends on {response.end_time}
              </h3>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-md-6 text-center">
              <Link href="/booking" className="btn btn-primary px-4">
                Back
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BookingDetails;
