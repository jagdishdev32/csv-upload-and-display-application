"use client";

import { useEffect, useState } from "react";

const Table = ({ rowsData = [] }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [headers, setHeaders] = useState([]);

  //   rowsData = [
  //     { name: "john", age: "21" },
  //     { name: "bob", age: "19" },
  //   ];

  useEffect(() => {
    // Creating headers list
    let headers = [];

    for (const rowData of rowsData) {
      const rowKeys = Object.keys(rowData);
      for (const key of rowKeys) {
        console.log("key: ", key);
        if (!headers?.includes(key)) headers.push(key);
      }
    }

    setHeaders(headers);
    setIsLoading(false);
  }, [rowsData]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (rowsData?.length < 1) {
    return <div>No Uploaded Data Yet</div>;
  }

  return (
    <div className="relative overflow-x-auto max-h-[70vh]">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            {headers?.map((header, index) => {
              return (
                <th key={index} scope="col" className="px-6 py-3">
                  {header}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {rowsData?.map((rowData, rowIndex) => {
            return (
              <tr
                key={rowIndex}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
              >
                {headers?.map((name, nameIndex) => {
                  return (
                    <th
                      key={`${rowIndex}-${nameIndex}`}
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      {rowData[name] || ""}
                    </th>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
