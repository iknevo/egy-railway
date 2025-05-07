import { Link, useParams } from "react-router";

export default function BookingPage() {
  const { trainId } = useParams();
  console.log(trainId);
  return (
    <div className="container mx-auto p-4">
      <h1 className="mb-8 text-2xl font-bold">Complete Your Booking</h1>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <div className="mb-6 rounded-lg bg-white p-6 shadow-md">
            <h2 className="mb-8 text-xl font-semibold">Passenger Details</h2>
            <form className="space-y-4">
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="mt-1 block w-full rounded-md border border-gray-100 px-3 py-2 shadow-xs focus:border-cyan-500 focus:ring-cyan-500 focus:outline-none"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="mt-1 block w-full rounded-md border border-gray-100 px-3 py-2 shadow-xs focus:border-cyan-500 focus:ring-cyan-500 focus:outline-none"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  className="mt-1 block w-full rounded-md border border-gray-100 px-3 py-2 shadow-xs focus:border-cyan-500 focus:ring-cyan-500 focus:outline-none"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Phone
                </label>
                <input
                  type="tel"
                  className="mt-1 block w-full rounded-md border border-gray-100 px-3 py-2 shadow-xs focus:border-cyan-500 focus:ring-cyan-500 focus:outline-none"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  National ID
                </label>
                <input
                  type="text"
                  className="mt-1 block w-full rounded-md border border-gray-100 px-3 py-2 shadow-xs focus:border-cyan-500 focus:ring-cyan-500 focus:outline-none"
                  required
                />
              </div>
            </form>
          </div>

          <div className="rounded-lg bg-white p-6 shadow-md">
            <h2 className="mb-4 text-xl font-semibold">Payment Information</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Card Number
                </label>
                <input
                  type="text"
                  className="mt-1 block w-full rounded-md border border-gray-100 px-3 py-2 shadow-xs focus:border-cyan-500 focus:ring-cyan-500 focus:outline-none"
                  placeholder="XXXX XXXX XXXX XXXX"
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Expiry Date
                  </label>
                  <input
                    type="text"
                    className="mt-1 block w-full rounded-md border border-gray-100 px-3 py-2 shadow-xs focus:border-cyan-500 focus:ring-cyan-500 focus:outline-none"
                    placeholder="MM/YY"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    CVV
                  </label>
                  <input
                    type="text"
                    className="mt-1 block w-full rounded-md border border-gray-100 px-3 py-2 shadow-xs focus:border-cyan-500 focus:ring-cyan-500 focus:outline-none"
                    placeholder="123"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Cardholder Name
                </label>
                <input
                  type="text"
                  className="mt-1 block w-full rounded-md border border-gray-100 px-3 py-2 shadow-xs focus:border-cyan-500 focus:ring-cyan-500 focus:outline-none"
                  required
                />
              </div>
            </form>
          </div>
        </div>

        <div className="lg:col-span-1">
          <div className="sticky top-20 rounded-lg bg-white p-6 shadow-md">
            <h2 className="mb-4 text-xl font-semibold">Booking Summary</h2>

            <div className="mb-4 border-b pb-4">
              <p className="font-bold">Express 123</p>
              <p className="text-sm text-gray-600">Cairo → Alexandria</p>
              <p className="text-sm text-gray-600">Wed, 26 Jan 2023</p>
              <p className="text-sm text-gray-600">09:00 - 11:30 (2h 30m)</p>
              <p className="mt-2 text-sm font-medium">Seat A1 (First Class)</p>
            </div>

            <div className="mb-4 space-y-2 border-b pb-4">
              <div className="flex justify-between">
                <span>Ticket Price</span>
                <span>$45.00</span>
              </div>
              <div className="flex justify-between">
                <span>Booking Fee</span>
                <span>$2.50</span>
              </div>
              <div className="flex justify-between">
                <span>Taxes</span>
                <span>$3.75</span>
              </div>
            </div>

            <div className="flex justify-between text-lg font-bold">
              <span>Total</span>
              <span>$51.25</span>
            </div>

            <Link
              to="/booking/confirmation"
              className="mt-6 block w-full rounded-md bg-cyan-600 px-4 py-2 text-center text-white hover:bg-cyan-700 focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:outline-none"
            >
              Complete Booking
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
