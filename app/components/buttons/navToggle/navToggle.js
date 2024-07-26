import "./navToggle.css";

const NavToggle = ({ isOpen, onClick }) => {
  return (
    <div className="flex lg:hidden mr-5" onClick={() => onClick(!isOpen)}>
      <div className={`toggle ${isOpen ? "open" : ""}`}>
        <span className="bars bg-secondary" id="bar1"></span>
        <span className="bars bg-secondary" id="bar2"></span>
        <span className="bars bg-secondary" id="bar3"></span>
      </div>
    </div>
  );
};

export default NavToggle;
