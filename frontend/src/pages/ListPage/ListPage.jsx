import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { landLordApi,matchingApi } from "../../axiosConfig";

const ListPage = () => {
	const [lodges, setLodges] = useState([]);
	const navigate = useNavigate()

	const getLodge = () => {
		// landLordApi
		//   .get("/lodge/list")
		//   .then((response) => setLodges(response.data))
		//   .catch((error) => console.log(error));
		matchingApi.post("/match/filter",{
			"facilitiesInput":[],
			"radiusFromMid":1000000,
			"minCostPerMonth":20,
			"maxCostPerMonth":5555
		})
		.then((res)=>{
			setLodges(res.data)
		})
		.catch((error) => console.log(error))
	  };

	useEffect(() => {
		getLodge();
	  }, []);
  return <div className="container">
	{
		lodges?.map((lodge, idx) => {
			return <section key={idx} onClick={() => navigate(`/Lodges/${lodge.lodgeId}`)} class="m-5 cursor-pointer flex flex-row overflow-hidden rounded-lg shadow transition hover:shadow-lg">
			<img
			  alt="Office"
			  src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
			  class="h-56 w-full object-cover"
			/>
	
			<div class="bg-white p-4 sm:p-6">
			  <time datetime="2022-10-10" class="block text-xs text-gray-500">
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
		})
	}
  </div>;
};

export default ListPage;
