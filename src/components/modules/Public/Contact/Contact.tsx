"use client";
import { FaLocationArrow } from "react-icons/fa";
import { IoPhonePortrait } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Textarea } from "@/components/ui/textarea";
// import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
// import {
//   showErrorMessage,
//   showSuccessMessage,
// } from "../../utility/ShowToastMessage";

const ContactSection = () => {
  //   const form = useRef();
  const [btnIsLoading, setBtnIsLoading] = useState(false);

  //   const sendEmail = (e) => {
  //     e.preventDefault();
  //     setBtnIsLoading(true);

  //     emailjs
  //       .sendForm(
  //         `${import.meta.env.VITE_YOUR_SERVICE_ID}`,
  //         `${import.meta.env.VITE_YOUR_TEMPLATE_ID}`,
  //         form.current,
  //         {
  //           publicKey: `${import.meta.env.VITE_YOUR_PUBLIC_KEY}`,
  //         }
  //       )
  //       .then(
  //         () => {
  //           showSuccessMessage("Email send Successfully");
  //           form.current.reset();
  //           setBtnIsLoading(false);
  //         },
  //         (error) => {
  //           showErrorMessage("Something went wrong!");
  //           console.log("FAILED...", error.text);
  //           setBtnIsLoading(false);
  //         }
  //       );
  //   };

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
          <div>
            <div className="w-full">
              {/* <form ref={form} onSubmit={sendEmail} className="font-fira"> */}
              <form>
                <div className="form-control">
                  <label className="">
                    <span className="label-text text-light01 ">Name</span>
                  </label>
                  <Input
                    type="text"
                    name="from_name"
                    placeholder="name"
                    className="mt-2 mb-3 bg-transparent border Input border-dart02 focus:border-green01"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="">
                    <span className="label-text text-light01 ">Email</span>
                  </label>
                  <Input
                    type="email"
                    name="from_email"
                    placeholder="email"
                    className="mt-2 mb-3 bg-transparent border Input border-dart02 focus:border-green01"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="">
                    <span className="label-text text-light01 ">Message</span>
                  </label>
                  <Textarea
                    required
                    name="message"
                    className="mt-2 mb-3 bg-transparent border textarea border-dart02 focus:border-green01 min-h-28"
                    placeholder="message"
                  ></Textarea>
                </div>
                <div className="mt-6 form-control">
                  {btnIsLoading ? (
                    <Button disabled className="btn disabled:bg-dart03">
                      <span className="loading loading-spinner loading-md"></span>{" "}
                      Sending...
                    </Button>
                  ) : (
                    <Button>Send Email</Button>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
