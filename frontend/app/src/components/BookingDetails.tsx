import { getBook } from "@/lib/bookings";
import Link from "next/link";
import { BookingDetailsInterface } from "@/types/types";

const BookingDetails = async ({ id }: BookingDetailsInterface) => {
  const response = await getBook(id);
  return (
    <>
      <div className="row justify-content-center vh-100 align-items-center">
        <div className="col-md-8">
          <h3 className="text-primary">
            This Booking is with {response.doctor_name} For {response.service}{" "}
            and it ends on {response.end_time}
          </h3>
          <div className="text-center">
            <Link href="/booking" className="btn btn-primary ">
              Back
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default BookingDetails;
