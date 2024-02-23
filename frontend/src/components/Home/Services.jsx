import React from "react";

const Services = () => {
  const blogs = [
    { id: 1, title: "Weather Forecast", image: "src/assets/News.png" },
    { id: 2, title: "News", image: "src/assets/Weather.png" },
    { id: 3, title: "Evacuation Routes", image: "src/assets/Map.png" },
  ];

  return (
    <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto my-12">
      <div className="my-20 md:w-1/2 mx-auto text-center">
        <h2 className="text-5xl text-primary font-bold mb-3">
          Our Services
        </h2>
      </div>

      <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 items-center justify-between">
        {blogs.map((blog) => (
          <div key={blog.id} className="mx-auto relative mb-12 cursor-pointer">
            <img
              src={blog.image}
              alt=""
              className="hover:scale-95 transition-all duration-300"
            />
            <div className="text-center px-4 py-6 bg-white shadow-lg rounded-md md:w-3/4 mx-auto absolute left-0 right-0  -bottom-12 ">
              <h3 className="mb-3 text-black text-lg font-semibold">
                {blog.title}
              </h3>
              <div className="flex items-center justify-center gap-8">
                <a
                  href=""
                  className="font-bold text-primary hover:text-neutral-700"
                >
                  More
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="10"
                    height="7"
                    viewBox="0 0 6 4"
                    fill="none"
                    className="inline-block ml-2"
                  >
                    <path
                      d="M4.02324 3.24222L5.12263 2.14283C5.25301 2.01245 5.25301 1.80106 5.12263 1.67068L4.02324 0.571289M5.02484 1.90676L0.350708 1.90676"
                      stroke="#4CAF4F"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
