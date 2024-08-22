import { AnimatePresence, motion } from "framer-motion";
import { BiSolidError } from "react-icons/bi";
import { FiAlertCircle } from "react-icons/fi";

const Modal404 = ({ isOpen = false, setIsOpen }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsOpen(false)}
          className="inset-0 w-full h-full bg-slate-900/50 backdrop-blur flex items-center justify-center z-50 cursor-pointer overflow-hidden"
          style={{ position: "fixed" }}
        >
          <motion.div
            initial={{ scale: 0, rotate: "12.5deg" }}
            animate={{ scale: 1, rotate: "0deg" }}
            exit={{ scale: 0, rotate: "0deg" }}
            onClick={(e) => e.stopPropagation()}
            className="bg-gradient-to-br from-primary via-orange-600 to-primary text-white p-6 rounded-lg w-full max-w-lg shadow-xl cursor-default relative overflow-hidden flex flex-col items-center"
          >
            <FiAlertCircle className="text-white/10 rotate-12 text-[250px] absolute z-0 -top-24 -left-24" />
            <h1 className="text-3xl font-teko font-semibold mb-4 text-center">
              Feature not available
            </h1>
            <p className="text-center mb-6 font-semibold">
              The feature you are trying to access is currently not available.
              We are working hard to bring it to you soon. Please check back
              later or contact support for more information.
            </p> 
            <button
              onClick={() => setIsOpen(false)}
              className="bg-white hover:bg-slate-100 px-4 py-2 text-primary font-semibold font-teko text-xl rounded text-center w-fit mx-auto cursor-pointer"
            >
              Understood!
            </button>
            <BiSolidError className="text-white/10 rotate-12 text-[250px] absolute z-0 -bottom-24 -right-24" />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal404;
