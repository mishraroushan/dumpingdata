'use client'
import { Blogsdata } from "@/public/Data";
import { useRouter } from "next/navigation";

export default function Blog({ params }) {
  const router = useRouter()
  return (
    <div>
      <p className="font-serif text-black bg-orange-400 p-5 text-center text-xl sm:text2xl md:text-3xl lg:text-4xl xl:text-5xl"
        onClick={()=> router.push('/blogs')}>
        Blogs
      </p>
      {Blogsdata.filter((data) => data.id == params.id).map((i) => (
        <div key={i.title}>
          <p className="font-bold text-black p-5 text-center text-xl sm:text2xl md:text-3xl lg:text-4xl xl:text-5xl">
            {i.title}
          </p>
          <img src={i.image} alt="" className="rounded-lg mx-auto w-1/2" />
          <p className="text-black md:mx-60 text-xs sm:text-sm md:text-md lg:text-lg xl:text-xl my-5 mx-5 text-justify font-normal">
            {i.description}
          </p>
        </div>
      ))}
    </div>
  );
}
