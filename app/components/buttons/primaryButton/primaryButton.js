import "./primaryButton.css";
const PrimaryButton = ({ text, href, className = "", children, size }) => {
  return (
    <button
      className={`primarybutton ${className || "rounded-md"} ${
        size || "text-lg lg:text-2xl"
      } font-semibold font-teko uppercase px-3 lg:px-5 py-1 hover:text-primary`}
      href={href}
    >
      {text}
      {children}
    </button>
  );
};
export default PrimaryButton;
