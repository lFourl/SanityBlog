import { SanityDocument } from "next-sanity";
import Link from "next/link";

export default function Posts({ posts }: { posts: SanityDocument[] }) {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="container mx-auto p-10">
        <h1 className="text-blue-400 text-4xl font-bold">2024 Sanity Blog</h1>
        <hr className="border-t-2 border-black mt-2" />
      </header>
      <main className="flex-grow">
        <div className="container mx-auto grid grid-cols-1 divide-y divide-blue-100">
          {posts?.length > 0 ? (
            posts.map((post) => (
              <Link key={post._id} href={post.slug.current}>
                <h2 className="p-4 hover:bg-blue-50">{post.title}</h2>
              </Link>
            ))
          ) : (
            <div className="p-4 text-red-500">No posts found</div>
          )}
        </div>
      </main>
      <footer className="bg-blue-400 text-white py-6">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-between">
            <div className="w-full sm:w-1/3 text-center sm:text-left mb-4 sm:mb-0">
              <h5 className="text-lg font-bold mb-2">Company</h5>
              <ul>
                <li>
                  <a href="#" className="hover:underline">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Careers
                  </a>
                </li>
              </ul>
            </div>
            <div className="w-full sm:w-1/3 text-center sm:text-left mb-4 sm:mb-0">
              <h5 className="text-lg font-bold mb-2">Resources</h5>
              <ul>
                <li>
                  <a href="#" className="hover:underline">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
            <div className="w-full sm:w-1/3 text-center sm:text-left">
              <h5 className="text-lg font-bold mb-2">Follow Us</h5>
              <ul className="flex justify-center sm:justify-start">
                <li className="mr-4">
                  <a href="#" className="hover:underline">
                    Twitter
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-6 text-center sm:text-left">
            <p className="text-sm">
              &copy; 2024 Company Name. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
