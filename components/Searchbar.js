"use client";
import { useState} from "react";

export default function Searchbar(props) {
  const [user,setUser] = useState({ 
    searchValue:'',
    selectedTab:'import',
    dropdownValue:'hsn_code',
  })
  const Go = ()=>{
    props.sendData(user)
  }
    const [searchValued, setSearchValue] = useState(user.searchValue);
    const [dataOption, setDataOption] = useState(user.selectedTab);
    const [searchOption,setSearchOption] = useState(user.dropdownValue);
   
    const SearchValue = (e) => {
        setSearchValue(e.target.value);
    };

    const SelectDataOption = (e) => {
        setDataOption(e.target.value);
    };

    const SelectSearchOption = (e) => {
        setSearchOption(e.target.value);
    };


    const Search = (e) => {
        setUser({
          searchValue:searchValued,
          selectedTab:dataOption,
          dropdownValue:searchOption,
        })
        Go();
        props.Search();
    }
        
  return (
    <div className=" bg-orange-400">
      <p className="font-serif text-black p-2 text-center text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">
        Search Export and Import Data of India
      </p>
        <div className="p-5">
          <div className=" rounded-md shadow-sm text-center p-2">
            <select
              className="bg-gray-50  font-serif text-black text-xs sm:text-sm md:text-md lg:text-lg xl:text-xl rounded-lg p-2 "
              value={dataOption}
              onChange={SelectDataOption}
            >
              <option value="import">Import</option>
              <option value="export">Export</option>
            </select>
          </div>
          <div className=" rounded-md shadow-sm text-center p-2">
            <select
              className="bg-gray-50  font-serif text-black text-xs sm:text-sm md:text-md lg:text-lg xl:text-xl rounded-lg p-2  "
              value={searchOption}
              onChange={SelectSearchOption}
            >
              <option value="hsn_code">HSN Code</option>
              <option value="hsn_code_description">HSN Code Description</option>
              <option value="company_name">Company Name</option>
            </select>
          </div>
          <div className="flex text-center rounded-lg p-2 justify-center">
            <input
              type={searchOption == "hsn_code" ? "number" : "text"}
              className="p-2 w-1/2 rounded-l-lg"
              placeholder={`Enter ${searchOption.toUpperCase().replace(/_/g,' ')}`}
              value={searchValued}
              onChange={SearchValue}
            />
            <button
              type="button"
              onClick={Search}
              className="p-3 text-sm font-medium h-full text-white bg-blue-700 rounded-r-lg  hover:bg-blue-800 "
            >
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </button>
          </div>
        </div>
    </div>
  );
}
