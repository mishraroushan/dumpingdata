'use client'
import Searchbar from "./Searchbar";
import Grid from "./Grid";
import Loader from "./Loader";
import { useState,useCallback,useEffect } from "react";
import axios from "axios";
import NoDataFound from "./NoDataFound";
const ImportDataHeading = [
  {
    label: "Date",
    key: "DATE",
  },
  {
    label: "Importer Name",
    key: "IMPORTER_NAME",
  },
  {
    label: "Importer City",
    key: "IMPORTER_CITY_STATE",
  },
  {
    label: "Exporter Name",
    key: "EXPORTER_NAME",
  },
  {
    label: "Country Of Origin",
    key: "COUNTRY_OF_ORIGIN",
  },
  {
    label: "HSN Code",
    key: "HSN_CODE",
  },
  {
    label: "Description",
    key: "HSN_CODE_DESCRIPTION",
  },
  {
    label: "Quantity",
    key: "QUANTITY",
  },
  {
    label: "UQC",
    key: "UQC",
  },
  {
    label: "UNT Price FC",
    key: "UNT_PRICE_FC",
  },
  {
    label: "INV Value FC",
    key: "INV_VALUE_FC",
  },
  {
    label: "Currency",
    key: "CURRENCY",
  },
  {
    label: "Port Of Discharge",
    key: "PORT_OF_DISCHARGE",
  },
];
const ExportDataHeading = [
  {
    label: "Date",
    key: "DATE",
  },
  {
    label: "Exporter Name",
    key: "EXPORTER_NAME",
  },
  {
    label: "Exporter City",
    key: "EXPORTER_CITY_STATE",
  },
  {
    label: "Importer Name",
    key: "IMPORTER_NAME",
  },
  {
    label: "Country Of Destination",
    key: "COUNTRY_OF_DESTINATION",
  },
  {
    label: "Port Of Discharge",
    key: "PORT_OF_DISCHARGE",
  },
  {
    label: "HSN Code",
    key: "HSN_CODE",
  },
  {
    label: "Description",
    key: "HSN_CODE_DESCRIPTION",
  },
  {
    label: "Quantity",
    key: "QUANTITY",
  },
  {
    label: "UQC",
    key: "UQC",
  },
  {
    label: "INV Value FC",
    key: "INV_VALUE_FC",
  },
  {
    label: "Total Value FC",
    key: "TOTAL_VALUE_FC",
  },
  {
    label: "Currency",
    key: "CURRENCY",
  },
  {
    label: "Port Of Loading",
    key: "PORT_OF_LOADING",
  },
 
  
 
];

export default function SearchbarTable() {
  const [data,setData] = useState({
    selectedTab:'?',
     dropdownValue:'?',
     searchValue:'?', 
  })
  const sendData = (data) => {
    setData(data)
  }
  const {selectedTab,dropdownValue,searchValue} = data
  const [rowsData, setRowsData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isData, setIsData] = useState(false);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(20);
  const [totalCount, setTotalCount] = useState(0);

  const formateRowsData = (data,selectedTab) => {
    const rowsArr = [];
    const grid_parameters =
      selectedTab === 'import'
        ? ImportDataHeading
        : ExportDataHeading
    data.forEach((item) => {
      const data = [];
      grid_parameters.forEach(({ key }) => {
        data.push(item[key]);
      });
      rowsArr.push(data);
    });
    setRowsData(rowsArr);
  };

  const getGridData = useCallback(() => {
    if (searchValue !== "") {
      const dropdown = dropdownValue.toUpperCase();
      setIsLoading(true);
      axios
        .get(
          `http://15.206.123.82:9001/api/${selectedTab}/filter?${dropdown}=${searchValue}&limit=${limit}&page=${page}`
        )
        .then((data) => {
          if (data.data.data.length > 0) {
            setIsData(true);
            formateRowsData(data.data.data, selectedTab);
            setTotalCount(data.data.count);
          }
        })
        .catch((err) => console.log(err))
        .finally(() => {
          setIsLoading(false);
        });
    }
  }, [dropdownValue, limit, page, searchValue, selectedTab]);

  const Search = () => {
    getGridData();
  };

  useEffect(() => {
    getGridData();
  }, [page, limit, getGridData]);

  const handlePageChange = (event, page) => {
    setPage(page);
  };
  const handleLimitChange = (event) => {
    setLimit(event.target.value);
  };
 
  return (
    <>
      <Searchbar Search={Search} sendData={sendData} />
      <div>
        {searchValue === "" || searchValue.length < 3 ? null : isLoading ? (
          <Loader />
        ) : (
          <Grid 
            rows={rowsData}
            headerData={
              selectedTab === "import" ? ImportDataHeading : ExportDataHeading
            }
            isData={isData}
            page={page}
            totalCount={totalCount}
            limit={limit}
            handlePageChange={handlePageChange}
            handleLimitChange={handleLimitChange}
          />
        )}
      </div>
    </>
  );
}
