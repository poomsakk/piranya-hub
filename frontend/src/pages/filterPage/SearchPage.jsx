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
      <div className="container pt-10">
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <TextField
              fullWidth
              label="ค้นหาชื่อที่พัก"
              variant="outlined"
              value={textInput}
              onChange={handleTextInputChange}
            />
          </Grid>
          <Grid item xs={4}>
            <Button
              style={{
                maxWidth: "200px",
                minWidth: "200px",
              }}
              className="w-18"
              variant="contained"
              onClick={handleSearchBtn}
            >
              ค้นหา
            </Button>
          </Grid>
        </Grid>
        {isLoading ? <h1>Loading...</h1> : null}
        <div className="container my-20">
          {lodges?.map((lodge, idx) => {
            return (
              <section
                key={idx}
                onClick={() => navigate(`/Lodges/${lodge.lodgeId}`)}
                class="m-5 cursor-pointer flex flex-row overflow-hidden rounded-lg shadow transition hover:shadow-lg"
              >
                <img
                  alt="Office"
                  src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                  class="h-56 w-56 object-cover"
                />

                <div class="bg-white p-4 sm:p-6">
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
    </>
  );
}
