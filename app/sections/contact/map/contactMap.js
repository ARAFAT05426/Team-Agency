"use client"
import { IoLocationOutline } from "react-icons/io5";
import ContactCards from "./cards/contactCards";
import { Fade, Zoom } from "react-awesome-reveal";

const ContactMap = () => {
  const contactinfos = [
    {
      img: "/icons/letter.png",
      title: "Mail Address",
      infos: ["Aginco@gmail.com", "+998757478492"],
    },
    {
      img: "/icons/map.png",
      title: "Office Address",
      infos: ["Aginco@gmail.com", "+998757478492"],
    },
    {
      img: "/icons/phone-call.png",
      title: "Phone Number",
      infos: ["Aginco@gmail.com", "+998757478492"],
    },
  ];

  return (
    <div className="w-full px-3 lg:px-0 lg:w-container mx-auto flex flex-col md:flex-row items-center gap-10 py-20">
      <Fade direction="up" cascade>
        <div className="flex flex-col items-center gap-5">
          {contactinfos?.map((contactinfo, i) => (
            <ContactCards key={i} contactinfo={contactinfo} />
          ))}
        </div>
      </Fade>

      <Zoom>
        <div className="group relative w-full md:w-auto overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3107.661065130912!2d90.23132324040047!3d22.139215538122674!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30aa93f929dc6249%3A0x3eeb9068722ee9b!2sAmtali%20Police%20Station%2C%20College%20Rd%2C%20Amtali!5e0!3m2!1sen!2sbd!4v1721009507311!5m2!1sen!2sbd"
            height={"475"}
            width={"1000"}
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            className="relative z-10"
            referrerPolicy="no-referrer-when-downgrade"
          />
          <div className="absolute inset-0 group-hover:inset-full flex items-center justify-center bg-secondary/50 opacity-100 transition-all duration-500 ease-in-out group-hover:opacity-0 z-10 group-hover:-z-[1]">
            <IoLocationOutline className="text-7xl text-primary animate-bounce" />
          </div>
        </div>
      </Zoom>
    </div>
  );
};

export default ContactMap;
