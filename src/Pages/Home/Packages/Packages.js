import React from "react";
import package1 from "../../../images/special/Thailand.jpg";
import package2 from "../../../images/special/Hawai.jpg";
import package3 from "../../../images/special/Singapore.jpg";
import Package from "../Package/Package";

const Packages = () => {
  const packages = [
    {
      id: 1,
      name: "Thailand Trip",
      price: 1290,
      img: package1,
      description:
        "With a history that spans centuries and an exotic and friendly culture, Thailand welcomes travelers with tropical beaches, chaotic cities and world-renowned culinary traditions. But with all that has to offer, you might be overwhelmed by where to head first. Thailand is home to well-connected trains and budget airlines that can take you from one point of interest to the next quickly.",
    },

    {
      id: 2,
      name: "Hawai Trip",
      price: 1150,
      img: package2,
      description:
        "Although Hawaii is best known for its natural tropical splendor, its cities lure visitors with culture, shopping, dining and luxury accommodations or offer an old-fashioned charm resonating with the diversity of Hawaii's culture. From the cosmopolitan glitter of Waikiki to the sleepy, Hawaii's cities present convenience, history and enjoyment for the visitor.",
    },

    {
      id: 3,
      name: "Singapore Trip",
      price: 990,
      img: package3,
      description:
        "Singapore has been described as a playground for the rich, and it's true that the small city-state does have a certain sheen of wealth. But Singapore offers more than just high-end shopping malls, luxury hotels, and fine dining. Along with many family-friendly attractions and lovely public spaces that make exploring this slightly futuristic city worthwhile.",
    },
  ];
  return (
    <div id="packages" className="container">
      <h2 className="text-center">Special Packages</h2>
      <div className="row ms-5">
        {packages.map((p) => (
          <Package key={p.id} p={p}></Package>
        ))}
      </div>
    </div>
  );
};

export default Packages;
