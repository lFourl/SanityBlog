// ./components/Post.tsx

import { SanityDocument } from "next-sanity";
import Footer from "./Footer";

export default function Engineer({ engineer }: { engineer: SanityDocument }) {
  const { name, response, ticketCount, ticketAge, goals } = engineer;

  return (
    <div className="flex flex-col bg-gray-500 min-h-screen">
      <main className="flex-grow p-4">
        {name ? <h1 className="text-5xl font-bold">{name}</h1> : null}
        <div className="py-4">
          <div className="bg-black shadow-lg rounded-lg p-6 text-center">
            <h3 className="text-lg font-medium text-gray-100">
              Average Response Time
            </h3>
            <p
              className={`mt-2 text-3xl font-semibold ${
                parseFloat(response) >= 10 ? "text-red-500" : "text-green-500"
              }`}
            >
              {response}
            </p>
          </div>
          <div className="bg-black my-10 shadow-lg rounded-lg p-6 text-center">
            <h3 className="text-lg font-medium text-gray-100">Ticket Count</h3>
            <p
              className={`mt-2 text-3xl font-semibold ${
                ticketCount >= 100 ? "text-red-500" : "text-green-500"
              }`}
            >
              {ticketCount}
            </p>
          </div>
          <div className="bg-black shadow-lg rounded-lg p-6 text-center">
            <h3 className="text-lg font-medium text-gray-100">
              Average Age of Tickets
            </h3>
            <p
              className={`mt-2 text-3xl font-semibold ${
                parseFloat(ticketAge) >= 10 ? "text-red-500" : "text-green-500"
              }`}
            >
              {ticketAge}
            </p>
          </div>
          <div className="bg-black mt-10 shadow-lg rounded-lg p-6 text-center">
            <h3 className="text-lg font-medium text-gray-100">Goals</h3>
            <p className="mt-2 text-white font-semibold">
              {goals?.length > 0 ? `- ${goals}` : "No goals yet"}
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
