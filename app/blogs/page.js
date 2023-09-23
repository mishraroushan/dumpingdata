import { Blogsdata } from "@/public/Data";
import Link from "next/link";

export default function Blogs() {
  return (
    <div>
      <p className="font-serif text-black bg-orange-400 p-5 text-center text-xl sm:text2xl md:text-3xl lg:text-4xl xl:text-5xl">
        Blogs
      </p>
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 p-4 md:px-20 xl:px-40">
        {Blogsdata.map((data) => (
          <div
            className="relative p-2 bg-white border border-gray-200 rounded-lg shadow-lg mb-10"
            key={data.title}
          >
            <img className="rounded-t-lg" src={data.image} alt="" />
            <div className="p-5">
              <p className="text-black  text-sm sm:text-md md:text-lg lg:text-xl xl:text-2xl  text-center font-serif">
                {data.title}
              </p>
              <p className="text-gray-900 text-xs sm:text-sm md:text-md lg:text-lg xl:text-xl my-3 mx-2  font-normal text-center">
                {data.desc}
              </p>
              <Link
                href={`blogs/${data.id}`}
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 "
              >
                Read More
                <svg
                  className="w-3.5 h-3.5 ml-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
