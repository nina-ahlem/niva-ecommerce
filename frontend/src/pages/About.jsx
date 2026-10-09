import React from "react";
import Title from "../components/Title";
import assets from "../assets/assets";

const About = () => {
  const reasons = [
  {
    title: "Quality you can feel",
    text: "We pay attention to materials and finishing, so every item is made to last.",
    icon: "M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z",
  },
  {
    title: "Style without effort",
    text: "Versatile pieces that work together and fit naturally into your wardrobe.",
    icon: "M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456z",
  },
  {
    title: "Service that cares",
    text: "Easy exchanges, simple returns and a support team that is always ready to help.",
    icon: "M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z",
  },
];
  return (
    <div>
    

      <div className="my-10 flex flex-col md:flex-row items-center gap-10 md:gap-16 rounded-3xl bg-gradient-to-br  px-6 sm:px-12 py-10 sm:py-2">
        <img
          src={assets.about_img}
          alt="Niva fashion store"
          className="w-full md:max-w-[450px] rounded-2xl "
        />

        <div className="flex flex-col justify-center gap-5 md:w-2/4 text-sm text-gray-500 leading-relaxed">
          <p className="text-xs sm:text-sm font-medium tracking-[0.25em] text-fuchsia-600">
            OUR STORY
          </p>
          <h2 className="prata-regular text-2xl sm:text-3xl text-[#414141]">
            Where style meets simplicity
          </h2>
          <div className="w-12 h-[2px] bg-fuchsia-500"></div>

          <p>
            At Niva, we believe fashion should feel effortless. What began as a
            simple idea, to offer timeless pieces that fit real life, has grown
            into a store built around quality, comfort and confidence.
          </p>
          <p>
            Every piece in our collection is chosen with care. We look for soft
            fabrics, clean cuts and details that last, so you can wear what you
            love today and still love it next season. We design and select
            clothing that is easy to mix, easy to wear and made to be lived in.
          </p>

          <div className="bg-white/80 border border-fuchsia-100 rounded-2xl p-6">
            <h3 className="font-semibold text-[#414141]">Our Mission</h3>
            <p className="mt-2">
              To make great style accessible to everyone, with honest prices,
              reliable service and a shopping experience that feels as good as
              the clothes themselves.
            </p>
          </div>
        </div>
      </div>
      

<section className="mb-20 rounded-3xl bg-gradient-to-br  px-6 sm:px-12 py-12 sm:py-16">
  {/* Heading */}
  <div className="text-center mb-10 sm:mb-14">
    <p className="text-xs sm:text-sm font-medium tracking-[0.25em] text-fuchsia-600">
      WHY CHOOSE NIVA
    </p>
    <h2 className="prata-regular text-2xl sm:text-3xl text-[#414141] mt-3">
      Made for the way you live
    </h2>
    <div className="w-12 h-[2px] bg-fuchsia-500 mx-auto mt-4"></div>
  </div>

  {/* Cards */}
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
    {reasons.map((item) => (
      <div
        key={item.title}
        className="group bg-white/80 backdrop-blur border border-fuchsia-100 rounded-2xl p-8 text-center
                   transition-all duration-300 hover:-translate-y-1.5 "
      >
        <div
          className="w-16 h-16 mx-auto mb-5 flex items-center justify-center rounded-full
                     bg-fuchsia-50 text-fuchsia-600 transition-colors duration-300
                     group-hover:bg-fuchsia-600 group-hover:text-white"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-7 h-7"
          >
            <path d={item.icon} />
          </svg>
        </div>

        <h3 className="font-semibold text-base text-[#414141]">{item.title}</h3>
        <p className="mt-2 text-sm text-gray-500 leading-relaxed">{item.text}</p>
      </div>
    ))}
  </div>
</section>

    </div>
  );
};

export default About;
