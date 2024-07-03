"use client";

import { useState } from "react";
import { SanityDocument } from "next-sanity";
import Link from "next/link";
import Footer from "./Footer";

export default function Engineers({
  engineers,
}: {
  engineers: SanityDocument[];
}) {
  const [showMetrics, setShowMetrics] = useState(false);

  const toggleView = () => {
    setShowMetrics(!showMetrics);
  };

  return (
    <div className="flex flex-col bg-gray-500 min-h-screen">
      <header className="container mx-auto p-10">
        <h1 className="text-black text-4xl font-bold">Support Engineers</h1>
        <hr className="border-t-2 border-black mt-2" />
      </header>
      <main className="flex-grow">
        <div className="flex justify-center pb-4">
          <button
            onClick={toggleView}
            className="mt-4 px-4 py-2 bg-green-100 text-black rounded"
          >
            {showMetrics ? "Show List" : "Show All Metrics"}
          </button>
        </div>
        <div className="container mx-auto">
          {showMetrics ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {engineers?.length > 0 ? (
                engineers.map((engineer) => (
                  <div key={engineer._id} className="p-4">
                    <h2 className="text-2xl font-bold">{engineer.name}</h2>
                    <div className="py-4">
                      <div className="bg-black shadow-lg p-6 text-center">
                        <h3 className="text-lg font-medium text-gray-100">
                          Average Response Time
                        </h3>
                        <p
                          className={`mt-2 text-3xl font-semibold ${
                            parseFloat(engineer.response) >= 10
                              ? "text-red-500"
                              : "text-green-500"
                          }`}
                        >
                          {engineer.response}
                        </p>
                      </div>
                      <div className="bg-black shadow-lg p-6 text-center">
                        <h3 className="text-lg font-medium text-gray-100">
                          Ticket Count
                        </h3>
                        <p
                          className={`mt-2 text-3xl font-semibold ${
                            engineer.ticketCount >= 100
                              ? "text-red-500"
                              : "text-green-500"
                          }`}
                        >
                          {engineer.ticketCount}
                        </p>
                      </div>
                      <div className="bg-black shadow-lg p-6 text-center">
                        <h3 className="text-lg font-medium text-gray-100">
                          Average Age of Tickets
                        </h3>
                        <p
                          className={`mt-2 text-3xl font-semibold ${
                            parseFloat(engineer.ticketAge) >= 10
                              ? "text-red-500"
                              : "text-green-500"
                          }`}
                        >
                          {engineer.ticketAge}
                        </p>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="p-4 text-red-500">No engineers found</div>
              )}
            </div>
          ) : (
            <div className="grid grid-cols-1 divide-y divide-blue-100">
              {engineers?.length > 0 ? (
                engineers.map((engineer) => (
                  <Link key={engineer._id} href={engineer.slug.current}>
                    <h2 className="p-4 hover:bg-blue-50">{engineer.name}</h2>
                  </Link>
                ))
              ) : (
                <div className="p-4 text-red-500">No engineers found</div>
              )}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}
