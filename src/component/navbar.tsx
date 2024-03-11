import Link from "next/link";
import React from "react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Navbar() {
  const socials = [
    {
      link: "https://github.com/Thirty21",
      label: "Github",
      Icon: FaGithub, // Gunakan komponen ikon dari react-icons
    },
    {
      link: "https://www.instagram.com/ahdiikhf_/",
      label: "Linkedin",
      Icon: FaInstagram,
    },
    {
      link: "https://github.com/Thirty21",
      label: "Linkedin",
      Icon: FaLinkedin,
    },
  ];
  return (
    <>
      <nav className="sticky top-0 w-full">
        <div className="mx-8 sm:mx-20 mt-8 flex justify-between items-center">
          <h1 className="text-2xl sm:text-3xl font-semibold underline underline-offset-8 decoration-green-400 -rotate-6">
            Ahdikhf 👨🏻‍💻
          </h1>
          <div className="flex space-x-5">
            {socials.map((social, index) => {
              const Icon = social.Icon;
              return (
                <Link href={social.link} key={index} aria-label={social.label}>
                  <Icon className="w-6 h-6 underline underline-offset-4  decoration-blue-600" />
                </Link>
              );
            })}
          </div>
        </div>
      </nav>
    </>
  );
}
