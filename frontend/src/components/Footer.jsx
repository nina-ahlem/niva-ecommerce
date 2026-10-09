import React from "react";
import { Link } from "react-router-dom";
import assets from "../assets/assets.js";

const companyLinks = [
  { label: "Home", to: "/" },
  { label: "About us", to: "/about" },
  { label: "Delivery", to: "/delivery" },
  { label: "Privacy policy", to: "/privacy" },
];

const Footer = () => {
  return (
    <footer className="mt-32 mb-6 rounded-3xl px-0 sm:px-0 pt-12 pb-6">
      <div className="grid grid-cols-1 sm:grid-cols-[2fr_1fr_1fr] gap-10 sm:gap-14 text-sm">
        {/* Brand */}
        <div>
          <img src={assets.logo3} alt="Niva logo" className="mb-5 w-28" />
          <p className="max-w-sm text-gray-500 leading-relaxed">
            Where style meets simplicity. Carefully chosen, high-quality pieces
            designed to be comfortable, versatile and made to last.
          </p>
        </div>

        {/* Company */}
        <div>
          <p className="mb-5 text-sm font-semibold tracking-[0.2em] text-fuchsia-600">
            COMPANY
          </p>
          <ul className="flex flex-col gap-3 text-gray-600">
            {companyLinks.map((item) => (
              <li key={item.label}>
                <Link
                  to={item.to}
                  className="inline-block transition duration-300 hover:translate-x-1 hover:text-fuchsia-600"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <p className="mb-5 text-sm font-semibold tracking-[0.2em] text-fuchsia-600">
            GET IN TOUCH
          </p>
          <ul className="flex flex-col gap-3 text-gray-600">
            <li className="flex items-center gap-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-fuchsia-100 text-fuchsia-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4"
                >
                  <path d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
              </span>
              +213 ..........
            </li>
            <li className="flex items-center gap-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-fuchsia-100 text-fuchsia-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4"
                >
                  <path d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
              </span>
              email@niva.com
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-10 border-t border-fuchsia-100 pt-5 text-center text-xs text-gray-500">
        © 2026 Niva. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;