import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const forms = {
  hidden: { opacity: 0 },
  visible: {
    // y: "200px",
    opacity: 1,
    transition: { duration: 1.5 },
  },
};

const buttonVariants = {
  hover: {
    scale: 1.1,
    textShadow: "0px 0px 8px rgb(255,255,255)",
    boxShadow: "0px 0px 8px rgb(255,255,255)",
    transition: {
      duration: 0.3,
      yoyo: Infinity,
    },
  },
};
const SetForm = ({ state }) => {
  return (
    <>
      {state && (
        <motion.div variants={forms} className="sandbox__set-form">
          <motion.h3 variants={buttonVariants} whileHover="hover">
            Set Form{" "}
          </motion.h3>
          <h3>Set Form </h3>
          <h3>Set Form </h3>
          <h3>Set Form </h3>
          <h3>Set Form </h3>
        </motion.div>
      )}
    </>
  );
};

export default SetForm;
