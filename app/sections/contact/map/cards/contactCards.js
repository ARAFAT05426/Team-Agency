import Image from "next/image";

const ContactCards = ({contactinfo}) => {
  return (
    <div className="w-full min-w-80 p-7 bg-white shadow flex gap-6 border rounded-sm">
      <Image className="h-16" src={contactinfo?.img} alt="" height={50} width={75} />
      <div className="flex flex-col gap-1">
        <h1 className="text-2xl font-teko font-semibold">
          {contactinfo.title}
        </h1>
        <div className="space-y-[2px] font-light">
          {contactinfo?.infos?.map((info, i) => (
            <p key={i} className="">
              {info}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};
export default ContactCards;
