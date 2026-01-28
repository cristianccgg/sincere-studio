import React, { useState } from "react";
import Button from "../common/Button";
import { Send } from "lucide-react";

const Contacts = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    countryCode: "USA",
    phone: "",
    wantTo: "redesign",
    investment: "300-600",
    timeframe: "asap",
    projectDetails: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="mt-[60px] mb-[60px] py-[24px] px-[20px] md:mt-[140px] md:mb-[140px] md:py-[40px] md:px-[60px] bg-white rounded-[20px] shadow-lg shadow-[#00000059]/70 max-w-[997px] mx-4 md:mx-auto">
      {/* Header */}
      <div className="flex flex-col gap-[10px] mb-[40px] md:mb-[70px]">
        <h2 className="text-[24px] md:text-[32px] font-semibold text-[#262424]">
          Tell Us about Yourself
        </h2>
        <p className="text-[16px] md:text-[24px] font-medium text-[#262424]">
          It takes just 3 minutes to answer these 5 quick questions—helping us
          understand your needs better.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-[40px] md:gap-[70px]">
        {/* First Name & Last Name */}
        <div className="flex flex-col md:flex-row gap-[24px] md:gap-[61px]">
          <div className="flex flex-col gap-[16px] md:gap-[24px] flex-1 md:max-w-[320px]">
            <label className="text-[20px] md:text-[32px] font-semibold text-[#262424]">
              First Name <span className="text-[#262424]">*</span>
            </label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="Frank"
              className="bg-[#ECEEF0] rounded-[10px] h-[47px] py-[16px] px-[20px] text-[16px] md:text-[24px] placeholder:text-[#262424] outline-none"
              required
            />
          </div>
          <div className="flex flex-col gap-[16px] md:gap-[24px] flex-1 md:max-w-[320px]">
            <label className="text-[20px] md:text-[32px] font-semibold text-[#262424]">
              Last Name <span className="text-[#262424]">*</span>
            </label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Johnson"
              className="bg-[#ECEEF0] h-[47px] rounded-[10px] py-[16px] px-[20px] text-[16px] md:text-[24px] placeholder:text-[#262424] outline-none"
              required
            />
          </div>
        </div>

        {/* Email */}
        <div className="flex flex-col gap-[16px] md:gap-[24px]">
          <label className="text-[20px] md:text-[32px] font-semibold text-[#262424]">
            E-mail <span className="text-[#262424]">*</span>
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="example@email.com"
            className="bg-[#ECEEF0] h-[47px] rounded-[10px] py-[16px] px-[20px] text-[16px] md:text-[24px] placeholder:text-[#262424] outline-none w-full"
            required
          />
        </div>

        {/* Phone Number */}
        <div className="flex flex-col gap-[16px] md:gap-[24px]">
          <label className="text-[20px] md:text-[32px] font-semibold text-[#262424]">
            Phone number <span className="text-[#262424]">*</span>
          </label>
          <div className="flex flex-col md:flex-row gap-[12px] md:gap-[20px] md:items-center">
            <select
              name="countryCode"
              value={formData.countryCode}
              onChange={handleChange}
              className="bg-[#ECEEF0] h-[50px] w-full md:w-[208px] rounded-[10px] py-[16px] px-[20px] text-[16px] md:text-[24px] text-[#262424] outline-none"
            >
              <option value="USA">USA</option>
              <option value="UK">UK</option>
              <option value="CA">CA</option>
              <option value="MX">MX</option>
            </select>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+ 1"
              className="bg-[#ECEEF0] h-[42px] w-full md:w-[240px] rounded-[10px] py-[16px] px-[20px] text-[16px] md:text-[24px] placeholder:text-[#262424] outline-none"
              required
            />
          </div>
        </div>

        {/* I want to */}
        <div className="flex flex-col gap-[16px] md:gap-[24px]">
          <label className="text-[20px] md:text-[32px] font-semibold text-[#262424]">
            I want to <span className="text-[#262424]">*</span>
          </label>
          <div className="flex flex-col gap-[12px] md:gap-[16px]">
            <label className="flex items-center gap-[12px] cursor-pointer">
              <input
                type="radio"
                name="wantTo"
                value="redesign"
                checked={formData.wantTo === "redesign"}
                onChange={handleChange}
                className="w-[20px] h-[20px] md:w-[24px] md:h-[24px] accent-[#8A38F5] border-[1px]"
              />
              <span className="text-[16px] md:text-[24px] font-normal text-[#262424]">
                ReDesign my Website/App
              </span>
            </label>
            <label className="flex items-center gap-[12px] cursor-pointer">
              <input
                type="radio"
                name="wantTo"
                value="upgrade"
                checked={formData.wantTo === "upgrade"}
                onChange={handleChange}
                className="w-[20px] h-[20px] md:w-[24px] md:h-[24px] accent-[#8A38F5] border-[1px]"
              />
              <span className="text-[16px] md:text-[24px] font-normal text-[#262424]">
                Upgrade my UX to meet modern expectations
              </span>
            </label>
            <label className="flex items-center gap-[12px] cursor-pointer">
              <input
                type="radio"
                name="wantTo"
                value="improve"
                checked={formData.wantTo === "improve"}
                onChange={handleChange}
                className="w-[20px] h-[20px] md:w-[24px] md:h-[24px] accent-[#8A38F5] border-[1px]"
              />
              <span className="text-[16px] md:text-[24px] font-normal text-[#262424]">
                Improve strategy to increase sales
              </span>
            </label>
          </div>
        </div>

        {/* I'm ready to invest */}
        <div className="flex flex-col gap-[16px] md:gap-[24px]">
          <label className="text-[20px] md:text-[32px] font-semibold text-[#262424]">
            I'm ready to invest <span className="text-[#262424]">*</span>
          </label>
          <div className="flex flex-col gap-[12px] md:gap-[16px]">
            <label className="flex items-center gap-[12px] cursor-pointer">
              <input
                type="radio"
                name="investment"
                value="300-600"
                checked={formData.investment === "300-600"}
                onChange={handleChange}
                className="w-[20px] h-[20px] md:w-[24px] md:h-[24px] accent-[#8A38F5] border-[1px]"
              />
              <span className="text-[16px] md:text-[24px] font-normal text-[#262424]">
                $300 - $600
              </span>
            </label>
            <label className="flex items-center gap-[12px] cursor-pointer">
              <input
                type="radio"
                name="investment"
                value="600-1200"
                checked={formData.investment === "600-1200"}
                onChange={handleChange}
                className="w-[20px] h-[20px] md:w-[24px] md:h-[24px] accent-[#8A38F5] border-[1px]"
              />
              <span className="text-[16px] md:text-[24px] font-normal text-[#262424]">
                $600 - $1 200
              </span>
            </label>
            <label className="flex items-center gap-[12px] cursor-pointer">
              <input
                type="radio"
                name="investment"
                value="1200-1800"
                checked={formData.investment === "1200-1800"}
                onChange={handleChange}
                className="w-[20px] h-[20px] md:w-[24px] md:h-[24px] accent-[#8A38F5] border-[1px]"
              />
              <span className="text-[16px] md:text-[24px] font-normal text-[#262424]">
                $1 200 - $1 800
              </span>
            </label>
            <label className="flex items-center gap-[12px] cursor-pointer">
              <input
                type="radio"
                name="investment"
                value="1800-2400"
                checked={formData.investment === "1800-2400"}
                onChange={handleChange}
                className="w-[20px] h-[20px] md:w-[24px] md:h-[24px] accent-[#8A38F5] border-[1px]"
              />
              <span className="text-[16px] md:text-[24px] font-normal text-[#262424]">
                $1 800 - $2 400
              </span>
            </label>
          </div>
        </div>

        {/* Timeframe */}
        <div className="flex flex-col gap-[16px] md:gap-[24px]">
          <label className="text-[20px] md:text-[32px] font-semibold text-[#262424]">
            What is your preferred timeframe for working on the project?{" "}
            <span className="text-[#262424]">*</span>
          </label>
          <div className="flex flex-col gap-[12px] md:gap-[16px]">
            <label className="flex items-center gap-[12px] cursor-pointer">
              <input
                type="radio"
                name="timeframe"
                value="asap"
                checked={formData.timeframe === "asap"}
                onChange={handleChange}
                className="w-[20px] h-[20px] md:w-[24px] md:h-[24px] accent-[#8A38F5] border-[1px]"
              />
              <span className="text-[16px] md:text-[24px] font-normal text-[#262424]">
                As soon as possible
              </span>
            </label>
            <label className="flex items-center gap-[12px] cursor-pointer">
              <input
                type="radio"
                name="timeframe"
                value="1-3months"
                checked={formData.timeframe === "1-3months"}
                onChange={handleChange}
                className="w-[20px] h-[20px] md:w-[24px] md:h-[24px] accent-[#8A38F5] border-[1px]"
              />
              <span className="text-[16px] md:text-[24px] font-normal text-[#262424]">
                1-3 months
              </span>
            </label>
            <label className="flex items-center gap-[12px] cursor-pointer">
              <input
                type="radio"
                name="timeframe"
                value="3-6months"
                checked={formData.timeframe === "3-6months"}
                onChange={handleChange}
                className="w-[20px] h-[20px] md:w-[24px] md:h-[24px] accent-[#8A38F5] border-[1px]"
              />
              <span className="text-[16px] md:text-[24px] font-normal text-[#262424]">
                3-6 months
              </span>
            </label>
            <label className="flex items-center gap-[12px] cursor-pointer">
              <input
                type="radio"
                name="timeframe"
                value="ongoing"
                checked={formData.timeframe === "ongoing"}
                onChange={handleChange}
                className="w-[20px] h-[20px] md:w-[24px] md:h-[24px] accent-[#8A38F5] border-[1px]"
              />
              <span className="text-[16px] md:text-[24px] font-normal text-[#262424]">
                Ongoing (subscription-based)
              </span>
            </label>
          </div>
        </div>

        {/* Tell us more */}
        <div className="flex flex-col gap-[16px] md:gap-[24px]">
          <label className="text-[20px] md:text-[32px] font-semibold text-[#262424]">
            Tell us more about your project?{" "}
            <span className="text-[#262424]">*</span>
          </label>
          <textarea
            name="projectDetails"
            value={formData.projectDetails}
            onChange={handleChange}
            className="bg-[#ECEEF0] rounded-[10px] py-[16px] px-[20px] text-[16px] md:text-[24px] placeholder:text-[#262424] outline-none w-full min-h-[120px] md:min-h-[150px] resize-none"
            required
          />
        </div>

        {/* Submit Button */}
        <div className="flex justify-center self-center items-center gap-2.5 py-3 md:py-4 px-[24px] md:px-[32px] rounded-full w-fit bg-[#E85102]">
          <button className="text-[24px] md:text-[32px] text-white font-semibold">
            Submit
          </button>
          <img
            src="public/images/contacts/send-icon.png"
            alt="send-icon"
            className="w-[22px] h-[22px] md:w-[28px] md:h-[28px]"
          />
        </div>
      </form>
    </div>
  );
};

export default Contacts;
