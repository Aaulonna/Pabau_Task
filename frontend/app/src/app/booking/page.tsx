import BookingItem from "@/components/BookingItem";
import { getBookings } from "@/lib/bookings";
import { BookingDataInterface } from "@/types/types";
import Link from "next/link";

const BookingPage: React.FC = async () => {
  const bookings = await getBookings();

  return (
    <div className="row justify-content-center py-5">
      <Link href="/" className="btn btn-primary ">
        Back
      </Link>

      <div className="col-md-8 list-group">
        {bookings.length > 0 ? (
          bookings.map((booking: BookingDataInterface) => (
            <BookingItem
              key={booking.id}
              date={booking.date}
              startTime={booking.start_time}
              href={`/booking/${booking.id}`}
            />
          ))
        ) : (
          <span>There are no bookings yet!</span>
        )}
      </div>
    </div>
  );
};

export default BookingPage;
