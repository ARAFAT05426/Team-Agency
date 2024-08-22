import { AnimatePresence, motion } from "framer-motion";

const ReusableModal = ({ isOpen, setIsOpen, children, className = "" }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 w-full h-full bg-slate-900/50 backdrop-blur flex items-center justify-center z-50 cursor-pointer overflow-y-auto"
        >
          <motion.div
            initial={{ scale: 0, rotate: "10deg" }}
            animate={{ scale: 1, rotate: "0deg" }}
            exit={{ scale: 0, rotate: "5deg" }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            onClick={(e) => e.stopPropagation()}
            className={`relative bg-white p-6 rounded-lg w-full ${className ? className : "max-w-xs md:max-w-lg"} shadow-xl cursor-default overflow-y-auto md:overflow-y-visible flex flex-col`}
          >
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ReusableModal;
