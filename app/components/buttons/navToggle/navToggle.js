import "./navToggle.css";

const NavToggle = ({ isOpen, onClick }) => {
  return (
    <div className="flex lg:hidden mr-5">
      <input
        type="checkbox"
        id="checkbox"
        checked={isOpen}
        onChange={onClick}
        style={{ display: "none" }}
      />
      <label htmlFor="checkbox" className="toggle">
        <div className="bars bg-secondary" id="bar1"></div>
        <div className="bars bg-secondary" id="bar2"></div>
        <div className="bars bg-secondary" id="bar3"></div>
      </label>
    </div>
  );
};

export default NavToggle;
