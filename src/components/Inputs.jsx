import React, { useState } from "react";
import { UilSearch, UilLocationPoint } from "@iconscout/react-unicons";
import { toast } from "react-toastify";

function Inputs({ setQuery, units, setUnits }) {
  const [city, setCity] = useState("");

  const handleUnitsChange = (e) => {
    const selectedUnit = e.currentTarget.name;
    if (units !== selectedUnit) setUnits(selectedUnit);
  };

  const handleSearchClick = () => {

    if (city == "") toast.info('Enter the city name');
    if (city !== "") setQuery({ q: city });
  };

  // const suggestCity = (e) => {
  //   const input = e.currentTarget.value;
  //   if (input.length > 2) { // check if input length is more than 2 characters
  //     fetch(`https://wft-geo-db.p.rapidapi.com/v1/geo/cities?namePrefix=${input}&limit=10&offset=0&sort=name`, {
  //       "method": "GET",
  //       "headers": {
  //         "X-RapidAPI-Key": "7c4552b2fbmsh627ed3fe9dd8149p197b4fjsn1078cbfa2b30",
	// 	"X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com"
  //       }
  //     })
  //     .then(response => response.json())
  //     .then(data => {
  //       var cities = data.data.map(city => city.city);
  //       console.log(cities); // display the list of city names in the console
  //       // implement code to display the list of city names in the UI
  //     })
  //     .catch(error => console.log(error));
  //   }
  // }
  
  

  const handleLocationClick = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        let lat = position.coords.latitude;
        let lon = position.coords.longitude;

        setQuery({
          lat,
          lon,
        });
      });
    }
  };

  return (
    <div className="flex flex-row justify-center my-6">
      <div className="flex flex-row w-3/4 items-center justify-center space-x-4">
        <input
          value={city}
          onChange={(e) => setCity(e.currentTarget.value)}
          //onKeyUp={(e) => suggestCity(e)}
          //list="city-list" 
          type="text"
          placeholder="Search for city...."
          className="text-xl rounded font-light p-2 w-full shadow-xl focus:outline-none capitalize placeholder:lowercase"
        />
        {/* <datalist id="city-list">
        {cities.map((city) => (
          <option key={city} value={city} />
        ))}
      </datalist> */}
        <UilSearch
          size={25}
          className="text-white cursor-pointer transition ease-out hover:scale-125"
          onClick={handleSearchClick}
        />
        <UilLocationPoint
          size={25}
          className="text-white cursor-pointer transition ease-out hover:scale-125"
          onClick={handleLocationClick}
        />
      </div>

      <div className="flex flex-row w-1/4 items-center justify-center">
        <button
          name="metric"
          className="text-xl text-white font-light transition ease-out hover:scale-125"
          onClick={handleUnitsChange}
        >
          °C
        </button>
        <p className="text-xl text-white mx-1">|</p>
        <button
          name="imperial"
          className="text-xl text-white font-light transition ease-out hover:scale-125"
          onClick={handleUnitsChange}
        >
          °F
        </button>
      </div>
    </div>
  );
}

export default Inputs;