"use client";
import { FaLocationArrow } from "react-icons/fa";
import { IoPhonePortrait } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Link from "next/link";
import ContactForm from "./ContactForm";

const ContactSection = () => {
  return (
    <div id="contact">
      <div className="px-5 py-16 mx-auto max-w-6xl">
        <div className="text-center">
          <h1 className="text-2xl font-semibold sm:text-3xl font-fira">
            Let’s Work Together
          </h1>
          <p className="max-w-2xl mx-auto mt-3 text-dart03">
            I’m always open to discussing new projects, creative ideas, or
            opportunities.
          </p>
        </div>

        {/*  */}
        <div className="grid grid-cols-1 gap-8 mt-16 md:grid-cols-2">
          {/* Contact Info */}
          <div className="grid grid-cols-2">
            <div className="flex flex-col items-center justify-center px-2 py-10 md:py-0 ">
              <div className="text-light01">
                <MdEmail className="text-3xl"></MdEmail>
              </div>
              <h1 className="mt-3 mb-1 font-medium font-fira">Email</h1>
              <p className="text-xs font-fira text-dart03">
                obidyhasan@gmail.com
              </p>
            </div>
            <div className="flex flex-col items-center justify-center p-2 py-10 md:py-0 border-dart02 sm:border-l">
              <div className="text-light01">
                <IoPhonePortrait className="text-3xl"></IoPhonePortrait>
              </div>
              <h1 className="mt-3 mb-1 font-medium font-fira">Number</h1>
              <p className="text-xs font-fira text-dart03">+8801625319213</p>
            </div>
            <div className="flex flex-col items-center justify-center p-2 py-10 sm:border-t border-dart02 md:py-0 ">
              <div className="text-light01">
                <FaLinkedin className="text-3xl"></FaLinkedin>
              </div>
              <h1 className="mt-3 mb-1 font-medium font-fira">Linked In</h1>
              <Link
                href={"https://www.linkedin.com/in/obidyhasan/"}
                target="_blank"
                className="text-xs underline font-fira text-dart03"
              >
                obidyhasan
              </Link>
            </div>
            <div className="flex flex-col items-center justify-center p-2 py-10 sm:border-t border-dart02 md:py-0 sm:border-l">
              <div className="text-light01">
                <FaLocationArrow className="text-3xl"></FaLocationArrow>
              </div>
              <h1 className="mt-3 mb-1 font-medium font-fira">Address</h1>
              <p className="text-xs font-fira text-dart03">
                Khulna, Bangladesh
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
