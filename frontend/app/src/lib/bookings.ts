import { CreateBookingDataInterface } from "@/types/types"

export async function getBookings() {
  const res = await fetch('http://host.docker.internal:5000/api/bookings', { cache: 'no-store', mode: 'no-cors' })
 
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
 
  return res.json()
}


export async function getBook(id: number) {
  const res = await fetch(`http://host.docker.internal:5000/api/bookings/${id}`, { cache: 'no-store', mode: 'no-cors' })
 
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
 
  return res.json()
}

export async function createBooking(bookingData: CreateBookingDataInterface) {
  try {
    const res = await fetch(`http://localhost:5000/api/bookings`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(bookingData)
    });

    if (!res.ok) {
      throw new Error('Failed to create booking');
    }

  } catch (error) {
    console.error('Error creating booking:', error);
    throw new Error('Internal Server Error');
  }
}