"use client";
import { useState } from "react";
import { AiOutlineEdit, AiOutlineMail, AiOutlineUser } from "react-icons/ai";
import CustomDropdown from "@/app/components/form/customDropdown/customDropdown";
import PrimaryButton from "@/app/components/buttons/primaryButton/primaryButton";
import TypeText from "@/app/components/form/typeText/typeText";
import TypeDate from "@/app/components/form/typeDate/typeDate";
import { HiOutlineArrowRight } from "react-icons/hi2";
import axiosCommon from "@/lib/axios/axiosCommon";
import { toast } from "sonner";

const BookForm = () => {
  const [isFocused, setIsFocused] = useState(false);
  const [selectedService, setSelectedService] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);

  const handleBooking = async (e) => {
    e.preventDefault();
    const project = {
      client: e.target.name.value,
      email: e.target.email.value,
      category: selectedService,
      deadline: selectedDate,
      description: e.target.message.value,
    };

    try {
      await axiosCommon.post("/projects/api", project);
      setSelectedDate(null);
      setSelectedService(null);
      e.target.reset();
      toast.success("Booking successful! Kindly wait for a response.");
    } catch (error) {
      toast.error("Booking failed. Please try again.");
      console.error("Error booking service:", error);
    }
  };

  return (
    <form onSubmit={handleBooking} className="py-5 grid grid-cols-1 lg:grid-cols-2 gap-7 w-full lg:w-1/2">
      <TypeText
        placeholder="Enter your name"
        name="name"
        icon={AiOutlineUser}
        isRequired
      />
      <TypeText
        placeholder="Enter your email"
        name="email"
        icon={AiOutlineMail}
        isRequired
      />
      <CustomDropdown
        options={["Web Development", "SEO", "Digital Marketing"]}
        selected={selectedService}
        onSelect={setSelectedService}
        placeholder="Select a service"
      />
      <TypeDate setSelectedDate={setSelectedDate} />
      <div className="w-full lg:col-span-2">
        <div
          className={`w-full border py-3 px-5 flex items-start ${
            isFocused ? "border-primary" : "border-gray-300"
          } transition-all duration-300 rounded-sm`}
        >
          <textarea
            className=" outline-none placeholder-secondary/95 w-full"
            placeholder="Enter your special instruction  |  N/A *"
            rows={5}
            required
            name="message"
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
          />
          <AiOutlineEdit
            className={`h-6 transition-all duration-300 ${
              isFocused && "text-primary"
            } text-black`}
          />
        </div>
      </div>
      <PrimaryButton
        text="Order Now"
        className="bg-secondary before:bg-primary hover:text-white rounded mt-7 lg:mt-0"
      >
        <HiOutlineArrowRight className="mb-1" />
      </PrimaryButton>
    </form>
  );
};

export default BookForm;
