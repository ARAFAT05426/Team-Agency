import "./tabButton.css"
const TabButton = ({ label, isActive, onClick, initialbg }) => {
  return (
    <div
      onClick={onClick}
      className={`font-teko text-2xl px-5 py-2 rounded-sm transition-all duration-300 h-12 ${
        isActive ? "bg-primary text-white activetab" : `${initialbg}`
      } hover:bg-primary hover:text-white w-full md:w-fit lg:min-w-40 tabbutton shadow font-medium`}
    >
      {label}
    </div>
  );
};
export default TabButton;
