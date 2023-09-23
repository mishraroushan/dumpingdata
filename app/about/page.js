"use client";

import { useState } from "react";

export default function About() {
  const [read, setRead] = useState(false);
  return (
    <div>
      <p className="font-serif text-black bg-orange-400 p-5 text-center text-xl sm:text2xl md:text-3xl lg:text-4xl xl:text-5xl">
        About Us
      </p>
      <div>
      <p className="text-black md:mx-60 text-xs sm:text-sm md:text-md lg:text-lg xl:text-xl my-5 mx-4 text-justify font-serif">
        Welcome to Dumping Data. We are an online data selling platform that
        connects businesses with the data they need to make better decisions. We
        offer a wide variety of data products, including customer data, market
        data, and product data. Our data is sourced from a variety of trusted
        sources, and we ensure that it is accurate and up-to-date. We believe
        that data is a valuable asset, and we want to make it easy for
        businesses to access the data they need. Our platform is easy to use,
        and we offer a variety of pricing options to fit your budget.
      </p>
      <p className="text-black md:mx-60 text-xs sm:text-sm md:text-md lg:text-lg xl:text-xl my-5 mx-4 text-justify font-serif">
        We are committed to protecting your privacy. We never share your data
        with third parties, and we only use your data for the purposes that you
        have authorized. In today&#39;s globalized economy, international trade has
        become a driving force behind economic growth and development. We plays
        a pivotal role in facilitating and optimizing these international
        transactions. As countries exchange goods and services across borders,
        the need for accurate, timely, and comprehensive data has never been
        more in crucial.
      </p>
      <p className="text-black md:mx-60 text-xs sm:text-sm md:text-md lg:text-lg xl:text-xl my-5 mx-4 text-justify font-serif">
        We collect, analyse and provide valuable insights into the movement of
        goods and services between nations. This data encompasses crucial
        information about imports and exports, such as product details,
        quantities, values, shipment routes, and the parties involved in the
        trade. As an Export-Import data business, our mission is to empower
        global traders, businesses, researchers and policymakers with the right
        information to make informed decisions. We strive to offer up-to-date
        and reliable data, allowing our clients to identify new market
        opportunities, monitor competitors, and gauge international demand for
        their products or services.
      </p>
      <p className="text-black md:mx-60 text-xs sm:text-sm md:text-md lg:text-lg xl:text-xl my-5 mx-4 text-justify font-serif">
        Our data-driven solutions go beyond mere statistics; we transform raw
        data into actionable intelligence. By leveraging cutting-edge
        technologies and analytics, we provide customized reports,
        visualizations, and trend analysis that unlock the hidden potential of
        international trade. Whether you are an aspiring entrepreneur exploring
        untapped markets, an established business seeking expansion
        opportunities, or a researcher studying global economic trends, our
        Export-Import data business is your trusted partner in navigating the
        complexities of international trade. Join us in harnessing the power of
        data to fuel your growth, make strategic decisions, and unlock the
        limitless possibilities of the global marketplace. Together, we &#39;ll
        navigate the seas of international trade, transforming challenges into
        opportunities, and propelling your success to new heights. Welcome
        aboard.
      </p>
      </div>
      {!read && (
        <div className="text-center p-5">
          <button
            type="button"
            onClick={()=>setRead(!read)}
            className="py-3 px-5   text-xs sm:text-sm md:text-md lg:text-lg xl:text-xl font-serif text-center text-white rounded-lg bg-blue-700 sm:w-fit hover:bg-blue-900 focus:ring-4 focus:outline-none focus:ring-blue-300"
          >
            Our Mission & Values
          </button>
        </div>
      )}
      {read && (
        <>
          <p className="font-serif text-black bg-orange-400 p-5 text-center text-xl sm:text2xl md:text-3xl lg:text-4xl xl:text-5xl">
            Our Mission
          </p>
          <p className="font-serif text-black  p-5 text-center text-md sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">
            Our mission is to make data more accessible and affordable for
            businesses of all sizes. We believe that data can help businesses to
            make better decisions, improve their operations, and increase their
            profits.
          </p>
          <p className="font-serif text-black bg-orange-400 p-5 text-center text-xl sm:text2xl md:text-3xl lg:text-4xl xl:text-5xl">
            Our Values
          </p>
          <p className="font-serif text-black  p-5 text-center text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">
            Accuracy
          </p>
          <p className="text-black md:mx-60 text-sm sm:text-md md:text-lg lg:text-xl xl:text-2xl my-5 mx-4  font-serif text-center">
            We ensure that our data is accurate and up-to-date.
          </p>
          <p className="font-serif text-black  p-5 text-center text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">
            Transparency
          </p>
          <p className="text-black md:mx-60 text-sm sm:text-md md:text-lg lg:text-xl xl:text-2xl my-5 mx-4  font-serif text-center">
            We are transparent about our pricing and our data collection
            practices.
          </p>
          <p className="font-serif text-black  p-5 text-center text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">
            Privacy
          </p>
          <p className="text-black md:mx-60 text-sm sm:text-md md:text-lg lg:text-xl xl:text-2xl my-5 mx-4  font-serif text-center">
            We protect your privacy by never sharing your data with third
            parties.
          </p>
          <p className="font-serif text-black  p-5 text-center text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">
            Security
          </p>
          <p className="text-black md:mx-60 text-sm sm:text-md md:text-lg lg:text-xl xl:text-2xl my-5 mx-4  font-serif text-center">
            We use the latest security measures to protect your data.
          </p>
          <p className="font-serif text-black  p-5 text-center text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">
            Customer service:
          </p>
          <p className="text-black md:mx-60 text-sm sm:text-md md:text-lg lg:text-xl xl:text-2xl my-5 mx-4  font-serif text-center">
            We offer excellent customer service to help you get the most out of
            our platform.
          </p>
        </>
      )}
    </div>
  );
}
