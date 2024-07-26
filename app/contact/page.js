import ContactForm from "@/app/sections/contact/contactForm/contactForm";
import ContactHeader from "@/app/sections/contact/header/contactHeader";
import ContactMap from "@/app/sections/contact/map/contactMap";

const Page = () => {
  return (
    <>
      <ContactHeader />
      <ContactMap />
      <ContactForm />
    </>
  );
};
export default Page;
