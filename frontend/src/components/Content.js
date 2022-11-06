import { useState, useEffect } from 'react'
import "./Content.css"
import { landLordApi } from '../axiosConfig'
import Page404 from './Page404'

function Content() {
    const [lodges, setLodges] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    const getLodge = () => {
        setIsLoading(true)
        return landLordApi.get("/lodge/list")
            .then((response) => setLodges(response.data))
            .catch(error => console.log(error))
            .finally(() => setIsLoading(false));
    }

    useEffect(() => {
        getLodge()
    }, [])

    if (isLoading) return <p>Loading data...</p>


    return (<>
        <div className="container">
            {lodges.map((lodge) => {
                return <section className="content-con" key={lodge.lodgeId}>
                    <div className="content-l">
                        <img src="https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="img" />
                    </div>
                    <div className="content-r">
                        <h2>Name : {lodge.information.name}</h2>
                        <p>
                            information : {lodge.detail.detailENG}
                        </p>
                    </div>
                </section>
            })}
            {lodges.length === 0 ? <Page404></Page404> : null}
        </div>
    </>)
}

export default Content

/* lodges data example =>
[
    {
        "lodgeId": "636626fa53df5779b6cb73e8",
        "information": {
            "name": "piranya",
            "nameEng": "piranyaHubENG",
            "houseNumber": "222",
            "street": "Lagrabanga",
            "soi": "1",
            "subArea": "mairoow",
            "area": "LadGrabang",
            "city": "KrungLnw",
            "postalCode": "200000"
        },
        "facility": {
            "facilities": [
                "lamp"
            ]
        },
        "roomType": {
            "typeName": "First Class",
            "size": 20.4,
            "pricePerMonth": 5000.0,
            "pricePerDay": 0.0
        },
        "cost": {
            "waterPerUnit": 18.0,
            "electricPerUnit": 8.0,
            "commonFee": 0.0,
            "insurance": 0.0
        },
        "detail": {
            "detailTHA": "thaaaaaa",
            "detailENG": "Engegeege"
        },
        "imagePath": {
            "imagePaths": [
                "img1",
                "img2"
            ]
        },
        "promotion": {
            "promotion": "No promotion"
        },
        "contact": {
            "name": "Tee Hid",
            "phoneNumber": "0824242222",
            "email": "pppppp@pppp.com",
            "lineId": "wwwwwww"
        }
    },
    {
        "lodgeId": "6366270353df5779b6cb73e9",
        "information": {
            "name": "piranya2",
            "nameEng": "piranyaHubENG",
            "houseNumber": "222",
            "street": "Lagrabanga",
            "soi": "1",
            "subArea": "mairoow",
            "area": "LadGrabang",
            "city": "KrungLnw",
            "postalCode": "200000"
        },
        "facility": {
            "facilities": [
                "lamp"
            ]
        },
        "roomType": {
            "typeName": "First Class",
            "size": 20.4,
            "pricePerMonth": 5000.0,
            "pricePerDay": 0.0
        },
        "cost": {
            "waterPerUnit": 18.0,
            "electricPerUnit": 8.0,
            "commonFee": 0.0,
            "insurance": 0.0
        },
        "detail": {
            "detailTHA": "thaaaaaa",
            "detailENG": "Engegeege"
        },
        "imagePath": {
            "imagePaths": [
                "img1",
                "img2"
            ]
        },
        "promotion": {
            "promotion": "No promotion"
        },
        "contact": {
            "name": "Tee Hid",
            "phoneNumber": "0824242222",
            "email": "pppppp@pppp.com",
            "lineId": "wwwwwww"
        }
    }
]
*/