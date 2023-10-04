'use client'
import SearchbarTable from "@/components/SearchbarTable";
import { Benefits, CountryFlags } from "@/public/Data";
import Script from "next/script";


export default function Home() {
  const a = ">";
  const sendEmail = ()=>{
    Email.send({
      SecureToken: "5d224578-40b1-4af7-a351-a4415bced795",
                To: 'dumping.data123@gmail.com',
                From: "dumping.data123@gmail.com",
                Subject: "This is the subject",
                Body: "Name: " + document.getElementById("name").value
                    + "<br> Email: " + document.getElementById("email").value
                    + "<br> Phone no: " + document.getElementById("tel").value
                    + "<br> Data Type: " + document.getElementById("data-type").value
                    + "<br> Message: " + document.getElementById("message").value
    }).then(
      message => alert("Message Send Succesfully")
  )

  }
  return (
    <div>
      <div className=" bg-orange-400">
        <p className="font-serif text-black p-5 text-center text- sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
          One Stop Solution for All your Export Import Reports
        </p>
      </div>
      <img src="home.webp" alt=""/>
      <SearchbarTable/>
      <div className="grid xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-2 gap-2 p-5 mx-auto md:mx-40">
        <div className="block max-w-sm p-3 bg-white  m-auto ">
          <img src="h1.jpg" className="m-auto w-10 mb-2 md:w-20" />
          <p className="font-serif text-black text-center text-xs sm:text-sm md:text-md lg:text-lg xl:text-xl ">
            Enhance Your Business
          </p>
        </div>
        <div className="block max-w-sm p-3 bg-white  mx-auto">
          <img src="h2.jpg" className="m-auto w-10 mb-2 md:w-20" />
          <p className="font-serif text-gray-900 text-center text-xs sm:text-sm md:text-md lg:text-lg xl:text-xl">
            International Trade Stats
          </p>
        </div>
        <div className="block max-w-sm p-3 bg-white  mx-auto">
          <img src="h3.jpg" className="m-auto w-10 mb-2 md:w-20" />
          <p className="font-serif text-gray-900 text-center text-xs sm:text-sm md:text-md lg:text-lg xl:text-xl">
            Data Accuracy
          </p>
        </div>
        <div className="block max-w-sm p-3 bg-white  mx-auto">
          <img src="h4.jpg" className="m-auto w-10 mb-2 md:w-20" />
          <p className="font-serif text-gray-900 text-center text-xs sm:text-sm md:text-md lg:text-lg xl:text-xl">
            Data Used by Govt Agencies
          </p>
        </div>
        <div className="block max-w-sm p-3 bg-white  mx-auto">
          <img src="h5.jpg" className="m-auto w-10 mb-2 md:w-20" />
          <p className="font-serif text-gray-900 text-center text-xs sm:text-sm md:text-md lg:text-lg xl:text-xl">
            Grow Your Profits
          </p>
        </div>
        <div className="block max-w-sm p-3 bg-white  mx-auto">
          <img src="h6.jpg" className="m-auto w-10 mb-2 md:w-20" />
          <p className="font-serif text-gray-900 text-center text-xs sm:text-sm md:text-md lg:text-lg xl:text-xl">
            Shield Against Competition
          </p>
        </div>
        <div className="block max-w-sm p-3 bg-white  mx-auto">
          <img src="h7.jpg" className="m-auto w-10 mb-2 md:w-20" />
          <p className="font-serif text-gray-900 text-center text-xs sm:text-sm md:text-md lg:text-lg xl:text-xl">
            Fastest Response Time
          </p>
        </div>
      </div>
      <p className="font-serif text-black p-10 text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl bg-orange-400">
        Welcome to Dumping Data
      </p>
      <p className="text-black md:mx-60 text-xs sm:text-sm md:text-md lg:text-lg xl:text-xl my-5 mx-4 text-justify font-serif">
        In this fastest growing world, it is important to be run with the
        changes. The global export import market is worth trillions of dollars,
        and it is constantly growing. In order to succeed in this market,
        businesses need to have access to accurate and up-to-date data. In
        today &#39;s globalized economy, international trade is essential for
        businesses of all sizes. However, making informed decisions about export
        and import can be challenging, as there is a lot of data to consider.
        That &#39;s where “Dumping Data” comes in. We are a leading provider of
        export import data, offering a wide range of services to help businesses
        make the most of their international trade opportunities. We collect and
        aggregate data on export and import trends, prices, and regulations.
      </p>
      <p className="text-black md:mx-60 text-xs sm:text-sm md:text-md lg:text-lg xl:text-xl my-5 mx-4 text-justify font-serif">
        The world is becoming increasingly interconnected, which is creating new
        opportunities for businesses to export and import goods and services. We
        have a strong presence in both the domestic and international markets ,
        and we are committed to providing our customers with the best possible
        information and services. Our data is comprehensive , covering
        everything from product prices to shipping costs. We also offer a
        variety of data analysis and reporting tools, so you can easily see how
        your business is performing in the global market. Whether you &#39;re a small
        business just starting out or a large multinational corporation, Dumping
        Data can help you succeed in international trade. We are confident that
        we can provide our customers with the information and services they need
        to succeed. We invite you to contact us today to learn more about what
        we can do for you.
      </p>
      <p className="font-serif text-black p-5 text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl bg-orange-400">
        Why Use Dumping Data for Export Import?
      </p>
      <p className="text-black md:mx-60 text-xs sm:text-sm md:text-md lg:text-lg xl:text-xl my-5 mx-5 text-justify font-serif">
        There are many reasons why you might want to use dumpingdata.com for
        export import. For example, you might want to :
      </p>
      <p className="text-black md:mx-60 text-xs sm:text-sm md:text-md lg:text-lg xl:text-xl my-5 mx-5 text-justify font-serif">
        {a} Analyze the data to identify trends and patterns in the global
        markets.
      </p>
      <p className="text-black md:mx-60 text-xs sm:text-sm md:text-md lg:text-lg xl:text-xl my-5 mx-5 text-justify font-serif">
        {a} Identify new opportunities for your business: Identify new markets.
      </p>
      <p className="text-black md:mx-60 text-xs sm:text-sm md:text-md lg:text-lg xl:text-xl my-5 mx-5 text-justify font-serif">
        {a} Make better pricing decisions.
      </p>
      <p className="text-black md:mx-60 text-xs sm:text-sm md:text-md lg:text-lg xl:text-xl my-5 mx-5 text-justify font-serif">
        {a} Track inventory levels.
      </p>
      <p className="text-black md:mx-60 text-xs sm:text-sm md:text-md lg:text-lg xl:text-xl my-5 mx-5 text-justify font-serif">
        {a} Comply with regulations.
      </p>
      <p className="font-serif text-black bg-orange-400 p-5 text-center text-xl sm:text2xl md:text-3xl lg:text-4xl xl:text-5xl">
        Benefits and Advantages of Using Our Services
      </p>
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 p-4 md:mx-60 xl:p-10">
        {Benefits.map((data) => (
          <div className="relative p-2 bg-white border border-gray-200 rounded-lg shadow-lg  hover:bg-orange-300" key={data.title}>
            <p className="text-black  text-sm sm:text-md md:text-lg lg:text-xl xl:text-2xl  text-center font-serif">
              {data.title}
            </p>
            <p className="text-gray-800 text-xs sm:text-sm md:text-md lg:text-lg xl:text-xl my-3 mx-3  font-serif text-center">
              {data.description}
            </p>
          </div>
        ))}
      </div>
      <p className="text-black md:mx-60 text-xs sm:text-sm md:text-md lg:text-lg xl:text-xl my-5 mx-4 text-justify font-serif">
        In summary, using our data service can be a game-changer for your
        export-import business. With accurate, comprehensive, and timely data at
        your fingertips, you can make well-informed decisions, identify growth
        opportunities, and gain a competitive advantage in the global trade
        landscape. Let us be your trusted partner in navigating the complexities
        of international trade, and together, we &#39;ll unlock the true potential of
        your business.
      </p>
      <p className="font-serif text-black bg-orange-400 p-5 text-center text-xl sm:text2xl md:text-3xl lg:text-4xl xl:text-5xl my-5">
        Countries in Import and Export
      </p>
      <div className="grid xl:grid-cols-10 lg:grid-cols-8 md:grid-cols-6 sm:grid-cols-4 grid-cols-4 gap-2 m-5 md:mx-40 ">
        {CountryFlags.map((data) => (
          <div
            className="block  p-2 bg-orange-200 border border-gray-200 rounded-lg shadow-lg"
            key={data.countryName}
          >
            <img src={data.flag} />
            <p className=" text-xs sm:text-sm md:text-md lg:text-lg xl:text-xl  font-serif text-black text-center">
              {data.countryName}
            </p>
          </div>
        ))}
      </div>
      <p className="font-serif text-black bg-orange-400 p-5 text-center text-xl sm:text2xl md:text-3xl lg:text-4xl xl:text-5xl ">
        Share Your Requirements With Us To Serve Your Better.
      </p>
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 md:px-20 xl:px-40 py-10 gap-2 " style={{ backgroundImage: 'url("contact-bg.jpg")' }}>
        <div className="relative">
          <img src="contact.jpg" className="w-full p-5 " />
        </div>
        <div className=" relative">
          <div className="p-4 mx-auto max-w-screen-sm">
            <Script src="https://smtpjs.com/v3/smtp.js" />
            <form onSubmit={sendEmail} className="space-y-8">
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-black  text-sm sm:text-md md:text-lg lg:text-xl xl:text-2xl font-serif"
                >
                  Full Name:
                </label>
                <input
                  type="text"
                  id="name"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-xs sm:text-sm md:text-md lg:text-lg xl:text-xl rounded-full  block w-full p-2 "
                  placeholder=""
                  required="required"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-black  text-sm sm:text-md md:text-lg lg:text-xl xl:text-2xl font-serif"
                >
                  Email ID:
                </label>
                <input
                  type="email"
                  id="email"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-xs sm:text-sm md:text-md lg:text-lg xl:text-xl rounded-full block w-full p-2 "
                  placeholder=""
                  required="required"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-black  text-sm sm:text-md md:text-lg lg:text-xl xl:text-2xl font-serif"
                >
                  Mobile Number:
                </label>
                <input
                  type="tel"
                  id="tel"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-xs sm:text-sm md:text-md lg:text-lg xl:text-xl rounded-full block w-full p-2 "
                  placeholder=""
                  required="required"
                />
              </div>
              <div>
                <label
                  htmlFor="countries"
                  className="block mb-2 text-sm sm:text-md md:text-lg lg:text-xl xl:text-2xl font-serif text-gray-900 "
                >
                  Type of Data Required:
                </label>
                <select
                  id="data-type"
                  className="bg-gray-50 border border-gray-200 font-serif text-gray-900 text-xs sm:text-sm md:text-md lg:text-lg xl:text-xl rounded-full block w-full p-2"
                >
                  <option value="">Export Data</option>
                  <option value="IM">Import Data</option>
                  <option value="EI">Both</option>
                </select>
              </div>

              <div className="sm:col-span-2 rounded-full">
                <label
                  htmlFor="message"
                  className="block mb-2 text-sm sm:text-md md:text-lg lg:text-xl xl:text-2xl font-serif text-gray-900"
                >
                  Your Requirements:
                </label>
                <textarea
                  id="message"
                  rows={6}
                  className="block p-2.5 w-full text-xs sm:text-sm md:text-md lg:text-lg xl:text-xl font-serif text-gray-900 bg-gray-50 rounded-2xl shadow-sm border border-gray-300"
                  placeholder=""
                  defaultValue={""}
                />
              </div>
              <button
                type="submit"
                className="py-3 px-5   text-xs sm:text-sm md:text-md lg:text-lg xl:text-xl font-serif text-center text-white rounded-full bg-blue-700 w-full  hover:bg-blue-900 focus:ring-4 focus:outline-none focus:ring-blue-300 "
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div> 
    </div>
  );
}
