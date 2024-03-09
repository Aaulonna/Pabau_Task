// BookingList.tsx
import React from "react";
import BookingItem from "@/components/BookingItem";
import { BookingDataInterface } from "@/types/types";
import Link from "next/link";
import { getBookings } from "@/lib/bookings";

// interface BookingListProps {
//   bookings: BookingDataInterface[];
// }

const BookingList: React.FC = async () => {
  const bookings = await getBookings();

  return (
    <div className="row justify-content-center py-5">
      <div className="col-md-8">
        {/* <div className="row">
          <div className="col-md-6">
            <Link href="/" className="btn btn-primary">
              Back
            </Link>
          </div>
        </div> */}
        <div className="row mt-3">
          <div className="col-md-12 list-group">
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
      </div>
    </div>
  );
};

export default BookingList;
