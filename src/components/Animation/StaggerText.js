import { motion } from "framer-motion";

const variants = {
  hidden: {},
  shown: {
    transition: {
      staggerChildren: 0.5,
      ease: "easeOut",
      delay: 3,
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
    x: -50,
  },
  shown: {
    opacity: 1,
    x: 0,
    transition: { duration: 1, ease: "easeOut" },
  },
};

export const StaggerText = ({ children, as, ...rest }) => {
  const Parent = motion(as);
  return (
    <Parent initial="hidden" variants={variants} animate="shown" {...rest}>
      {children.map(
        (child, id) =>
          child && (
            <motion.div key={id} variants={item}>
              {child}
            </motion.div>
          )
      )}
    </Parent>
  );
};
