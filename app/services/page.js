import { Service } from "@/public/Data"

export default function Services(){
    return(
       <div>
        <p className="font-serif text-black bg-orange-400 p-5 text-center text-xl sm:text2xl md:text-3xl lg:text-4xl xl:text-5xl">
          Our Services
        </p>
        <p className="font-serif text-black  p-5 text-center text-md sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">
        Dumping Data is a web-based platform that provides a wide range of services to exporters and importers in India.
        </p>
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 p-4 md:px-20 xl:px-40 bg-[url('https://static.vecteezy.com/system/resources/previews/002/788/743/original/business-team-discussing-ideas-for-startup-colleagues-sharing-thoughts-brainstorm-skill-and-teamwork-concept-illustration-flat-vector.jpg')] bg-cover">
        {Service.map((data) => (
          <div className="relative p-2 bg-white border border-gray-200 rounded-lg shadow-lg hover:bg-orange-300 " key={data.title}>
            <p className="text-black  text-xs sm:text-sm md:text-md lg:text-lg xl:text-xl  text-center font-bold font-serif">
              {data.title}
            </p>
            <p className="text-gray-900 text-xs sm:text-xs md:text-sm lg:text-md xl:text-lg my-3 mx-3  font-serif text-center">
              {data.description}
            </p>
          </div>
        ))}
      </div>
      </div>
    )
}