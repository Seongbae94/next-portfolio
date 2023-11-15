"use client";
import React, { useState } from "react";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";

const EmailSection = () => {
  const [formValue, setFormValue] = useState({
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Nice to meet you!");
    setFormValue({
      email: "",
      subject: "",
      message: "",
    });
  };

  const handleFormValue = (type, value) => {
    setFormValue((prev) => ({ ...prev, [`${type}`]: value }));
  };

  return (
    <section className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4">
      <div>
        <h5 className="text-xl font-bold text-white my-2">{`Let's Connect`}</h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          {` I'm currently looking for new opportunities, my inbox is always open.
          Whether you have a question or just want to say hi, I'll try my best
          to get back to you!`}
        </p>
        <div className="socials flex flex-row gap-2">
          <Link target="_blank" href="https://github.com">
            <Image src={GithubIcon} alt="Github Icon" />
          </Link>
          <Link target="_blank" href="https://github.com">
            <Image src={LinkedinIcon} alt="Linkedin Icon" />
          </Link>
        </div>
      </div>
      <div>
        <form className="flex flex-col" onSubmit={handleSubmit}>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="text-white block mb-2 text-sm font-medium"
            >
              Your email
            </label>
            <input
              type="email"
              id="email"
              required
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gary-100 text-sm rounded-lg block w-full p-2.5 text-white"
              placeholder="test@test.com"
              onChange={(e) => handleFormValue("email", e.target.value)}
              value={formValue.email}
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="subject"
              className="text-white block mb-2 text-sm font-medium"
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              required
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gary-100 text-sm rounded-lg block w-full p-2.5 text-white"
              placeholder="just saying hi"
              onChange={(e) => handleFormValue("subject", e.target.value)}
              value={formValue.subject}
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="message"
              className="text-white block text-sm mb-2 font-medium"
            >
              Message
            </label>
            <textarea
              name="message"
              id="message"
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gary-100 text-sm rounded-lg block w-full p-2.5 text-white"
              placeholder="Let's talk about..."
              onChange={(e) => handleFormValue("message", e.target.value)}
              value={formValue.message}
            />
          </div>
          <button
            type="submit"
            className="bg-primary-500 hover:bg-primary-600 text-white font-medium py-2.5 px-5 rounded-lg w-full"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default EmailSection;
