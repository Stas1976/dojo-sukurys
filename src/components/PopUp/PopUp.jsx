import React from "react";
import { AnimatePresence, motion } from "framer-motion";

const modal = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { type: "tween" },
  },
};

const PopUp = ({ children, popUp, setPopUp }) => {
  return (
    <AnimatePresence>
      {popUp && (
        <motion.div
          className="myModal"
          variants={modal}
          initial="hidden"
          animate="visible"
          exit="hidden"
          onClick={() => setPopUp(false)}
        >
          <h3>{children}</h3>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PopUp;
