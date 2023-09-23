'use client'
import Script from "next/script";
export default function Contact() {
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
      <p className="font-serif text-black bg-orange-400 p-5 text-center text-xl sm:text2xl md:text-3xl lg:text-4xl xl:text-5xl ">
        Contact Us
      </p>
      <div className="bg-white">
        <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
        <Script src='https://smtpjs.com/v3/smtp.js'/>
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
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-xs sm:text-sm md:text-md lg:text-lg xl:text-xl rounded-lg  block w-full p-2 "
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
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-xs sm:text-sm md:text-md lg:text-lg xl:text-xl rounded-lg block w-full p-2 "
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
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-xs sm:text-sm md:text-md lg:text-lg xl:text-xl rounded-lg block w-full p-2 "
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
                className="bg-gray-50 border border-gray-300 font-serif text-gray-900 text-xs sm:text-sm md:text-md lg:text-lg xl:text-xl rounded-lg block w-full p-2"
              >
                <option value="">Export Data</option>
                <option value="IM">Import Data</option>
                <option value="EI">Both</option>
              </select>
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="block mb-2 text-sm sm:text-md md:text-lg lg:text-xl xl:text-2xl font-serif text-gray-900"
              >
                Your Requirements:
              </label>
              <textarea
                id="message"
                rows={6}
                className="block p-2.5 w-full text-xs sm:text-sm md:text-md lg:text-lg xl:text-xl font-serif text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300"
                placeholder=""
                defaultValue={""}
              />
            </div>
            <button
              type="submit"
              className="py-3 px-5   text-xs sm:text-sm md:text-md lg:text-lg xl:text-xl font-serif text-center text-white rounded-lg bg-blue-700 sm:w-fit hover:bg-blue-900 focus:ring-4 focus:outline-none focus:ring-blue-300 "
            >
              Send
            </button>
          </form>
        </div>
      </div>
      <p className="text-black  text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl  font-serif text-center bg-orange-500 p-5">Location</p>
      <div className="relative w-full h-96" >
        <iframe
          className="absolute top-0  w-full h-full"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7547.505143795806!2d72.82518445000001!3d18.942343!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7d1de283029ed%3A0x5da3ab75b442c9b!2sMarine%20Lines%2C%20Mumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1694449042149!5m2!1sen!2sin"
          style={{ border: 0 }}
          tabIndex={0}
        />
      </div>
    </div>
  );
}
