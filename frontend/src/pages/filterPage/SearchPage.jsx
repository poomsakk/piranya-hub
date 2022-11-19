import { useState } from "react";
import { TextField, Grid, Button } from "@mui/material";
import { matchingApi } from "../../axiosConfig";
import { useNavigate } from "react-router-dom";

export default function SearchPage() {
  const [lodges, setLodges] = useState([]);
  const [textInput, setTextInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  function handleTextInputChange(e) {
    setTextInput(e.target.value);
  }

  function handleSearchBtn(e) {
    setIsLoading(true);
    matchingApi
      .get("/match/findByName/" + textInput)
      .then((res) => {
        setLodges(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
        alert(err.data);
      })
      .finally(setIsLoading(false));
    //do something
  }

  return (
    <>
      <div className="bg-[#EFEFEF] h-screen">
        <div className="container py-10">
          <div className="ml-24">
            <input
              type={"text"}
              className="
                font-IBMPlexSansThai 
                bg-[#EFEFEF]
                placeholder:text-zinc-500
                text-lg
                pl-5 
                w-[631px]
                h-[40px]
                m-2
                ml-4
                mt-2
                border-2 
                border-gray-900
                focus:outline-none
                focus:border-gray-900
                rounded-xl
                "
              placeholder="ระบุชื่อที่พัก"
              variant="outlined"
              value={textInput}
              onChange={handleTextInputChange}
            />
            <button
              variant="contained"
              onClick={handleSearchBtn}
              class="rounded-full ml-5 group relative inline-block outline-none text-sm font-medium text-white focus:outline-none focus:ring"
            >
              <span class="shadow-md shadow-gray-900 rounded-full absolute outline-0 inset-0 border focus:outline-none outline-none border-gray-900 group-active:border-gray-900"></span>
              <span class="rounded-full font-IBMPlexSansThai outline-0 focus:outline-none outline-none text-base block border border-gray-900 text-white bg-gray-900 px-4 py-3 transition-transform active:border-gray-900  active:bg-gray-900 group-hover:-translate-x-1 group-hover:-translate-y-1">
                ค้นหา
              </span>
            </button>
          </div>
          {isLoading ? <h1>Loading...</h1> : null}
          <div className="container my-10">
            {lodges?.map((lodge, idx) => {
              return (
                <section
                  key={idx}
                  onClick={() => navigate(`/Lodges/${lodge.lodgeId}`)}
                  class="m-5 cursor-pointer flex flex-row overflow-hidden rounded-lg shadow transition hover:shadow-lg"
                >
                  <img
                    alt="Office"
                    src={
                      lodge.imagePath.imagePaths.length === 0
                        ? "https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                        : lodge.imagePath.imagePaths[0]
                    }
                    class="h-56 w-56 object-cover"
                  />

                  <div class="bg-white p-4 sm:p-6 w-screen">
                    <time
                      datetime="2022-10-10"
                      class="block text-xs text-gray-500"
                    >
                      10th Oct 2022
                    </time>

                    <h3 class="mt-0.5 text-lg text-gray-900">
                      {lodge.information.name}
                    </h3>

                    <p class="mt-2 text-sm leading-relaxed text-gray-500 line-clamp-3">
                      {lodge.detail.detailTHA}
                    </p>
                  </div>
                </section>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
