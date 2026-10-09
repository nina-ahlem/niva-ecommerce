import React from "react";
import Title from "../components/Title";
import assets from "../assets/assets";

const contactDetails = [
  {
    label: "Phone",
    value: "+213 ..........",
    href: "tel:+213XXXXXXXXX", // replace with your real number, no spaces
    icon: "M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z",
  },
  {
    label: "Email",
    value: "email@niva.com",
    href: "mailto:email@niva.com",
    icon: "M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75",
  },
];

const Contact = () => {
  return (
    <div>
    
      
      <div className="my-10 mb-28 flex flex-col md:flex-row items-center gap-10 md:gap-16 rounded-3xl  px-6 sm:px-12 py-5 sm:py-3">
        <img
          src={assets.contact_img}
          alt="Contact Niva"
          className="w-full md:max-w-[450px] rounded-2xl "
        />

        <div className="flex flex-col justify-center gap-5 md:w-2/4 text-sm text-gray-500 leading-relaxed">
          <p className="text-xs sm:text-sm font-medium tracking-[0.25em] text-fuchsia-600">
            CONTACT US
          </p>
          <h2 className="prata-regular text-2xl sm:text-3xl text-[#414141]">
            We'd love to hear from you
          </h2>
          <div className="w-12 h-[2px] bg-fuchsia-500"></div>

          <p>
            Questions about an order, a size or an exchange? Our team is always
            ready to help.
          </p>

          {contactDetails.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="group flex items-center gap-4 bg-white/80 border border-fuchsia-100 rounded-2xl p-5
                         transition-all duration-300 hover:-translate-y-1 "
            >
              <span
                className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-fuchsia-50 text-fuchsia-600
                           transition-colors duration-300 group-hover:bg-fuchsia-600 group-hover:text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d={item.icon} />
                </svg>
              </span>
              <div>
                <p className="text-xs tracking-widest text-gray-400">
                  {item.label.toUpperCase()}
                </p>
                <p className="font-semibold text-[#414141]">{item.value}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contact;