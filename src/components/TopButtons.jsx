import React from "react";

function TopButtons({ setQuery }) {
  const cities = [
    {
      id: 1,
      title: "Dhaka",
    },
    {
      id: 2,
      title: "Islamabad",
    },
    {
      id: 3,
      title: "Lahore",
    },
    {
      id: 4,
      title: "Multan",
    },
    {
      id: 5,
      title: "Anadyr",
    },
  ];

  return (
    <div className="flex items-center justify-around my-6">
      {cities.map((city) => (
        <button
          key={city.id}
          className="text-white text-lg font-medium"
          onClick={() => setQuery({ q: city.title })}
        >
          {city.title}
        </button>
      ))}
    </div>
  );
}

export default TopButtons;