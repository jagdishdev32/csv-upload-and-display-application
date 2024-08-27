"use client";

import AllTablesDataSection from "@/components/Tables/AllTablesDataSection";
import urls from "@/config/urls";
import axios from "axios";

export default function Home() {
  const submitHandler = async (event) => {
    event.preventDefault();

    let formData = new FormData();
    let imagefile = document.getElementById("file-input");
    formData.append("csv-file", imagefile.files[0]);

    const response = await axios.post(urls.backend + "/csv-upload", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    const data = response.data;

    alert("file uploaded successfully");

    window.location.reload();
  };

  return (
    <main className="container mx-auto px-4">
      <br />
      <h1 className="text-4xl ">Table Page</h1>

      <br />
      <form
        onSubmit={submitHandler}
        className="flex gap-4 flex-wrap justify-between items-center"
      >
        <input id="file-input" type="file" accept=".csv" />
        <button
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          type="submit"
        >
          Upload
        </button>
      </form>

      <br />
      <br />

      <AllTablesDataSection />
    </main>
  );
}
