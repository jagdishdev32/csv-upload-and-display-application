"use client";

import urls from "@/config/urls";
import axios from "axios";
import { useEffect, useState } from "react";
import Table from "./Table";

const AllTablesDataSection = () => {
  let [rowsData, setRowsData] = useState([]);

  // Fetch Data
  useEffect(() => {
    let isFetched = false;
    const fetchData = async () => {
      if (!isFetched) {
        try {
          const response = await axios.get(urls.backend + "/table-data");
          const data = response.data?.data;

          console.log("data: ", data);

          setRowsData(data);
        } catch (error) {
          console.error("Fetch Error: ", error);
        }
      }
    };
    fetchData();

    return () => {
      isFetched = true;
    };
  }, []);

  return (
    <div>
      <Table rowsData={rowsData} />
    </div>
  );
};

export default AllTablesDataSection;
