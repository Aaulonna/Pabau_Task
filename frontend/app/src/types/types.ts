export interface BookingDataInterface {
    id: number;
    service: string;
    doctor_name: string;
    start_time: string;
    end_time: string;
    date: string;
}

export interface CreateBookingDataInterface {
  service: string;
  doctor_name: string;
  start_time: string;
  end_time: string;
  date: string;
}

export interface BookingDetailsPageInterface {
  params: { id: string };
}

export interface BookingDetailsInterface {
  id: number;
}

export interface BookingFormInterface {
  handleSubmit: (bookingData: CreateBookingDataInterface) => void;
}

export interface BookingItemInterface {
  date: string;
  startTime: string;
  href: string;
}

export interface InputInterface {
  label: string;
  name: string;
  onChange: (value: string) => void;
  type: string;
}
