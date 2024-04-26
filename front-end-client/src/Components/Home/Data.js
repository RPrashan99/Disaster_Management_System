import Weather from "../../assets/HomePage/Services_Images/Weather.png";
import News from "../../assets/HomePage/Services_Images/News.png";
import Map from "../../assets/HomePage/Services_Images/Map.png";


import Donation from "../../assets/HomePage/Services_Images/Donation.png"
import Family from "../../assets/HomePage/Services_Images/Full_Family.png"
import Light_On from "../../assets/HomePage/Services_Images/Light_On.png"
import Volunteering from "../../assets/HomePage/Services_Images/Volunteering.png"


export const Services_map = [
    { id: 1, title: "Weather Forecast", image: Weather, link: "/Weather" },
    { id: 2, title: "News", image: News, link: "/News" },
    { id: 3, title: "Evacuation Routes", image: Map, link: "/weather" },
  ];


export const More_Services_map = [
    {
      id: 1,
      title: "Family Emergency Plans",
      description: "Tool to create plans during the Emergency.",
      image: Family,
      link: "/Donations",
    },
    {
      id: 2,
      title: "Volunteering",
      description:
        "Give your support  to the people in need during Emergencies.",
      image: Volunteering,
      link: "/Volunteering",
    },
    {
      id: 3,
      title: "Safety Tips",
      description:
        "Discover essential safety tips for any disaster. Be ready, stay vigilant. Your safety matters most.",
      image: Light_On,
      link: "/SafetyTips",
    },
    {
      id: 4,
      title: "Donation",
      description:
        "Contribute today to support disaster relief efforts, helping communities rebuild and thrive. ",
      image: Donation,
      link: "/Donations",
    },
  ];