import styled from "styled-components";
import { motion } from "framer-motion";

const Anime = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  ${(...props) => props}
`;
const Variants = {
  hidden: {
    x: "100vw",
    opacity: 0,
  },
  visible: {
    x: "0",
    opacity: 1,
    transition: { duration: 0.3 },
  },
  exit: {
    x: "100vw",
    opacity: 0,
    transition: { duration: 0.5, ease: "linear" },
  },
};
const Variants2 = {
  hidden: {
    scaleY: 0,
  },
  visible: {
    scaleY: 1,
    transition: { duration: 0.3 },
  },
  exit: {
    scaleY: 0,
    transition: { duration: 0.3, ease: "linear" },
  },
};
const Container = (props) => {
  return (
    <Anime
      {...props}
      variants={Variants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      {props.children}
    </Anime>
  );
};
export default Container;

export const Animation = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 10;
  ${(...props) => props}
`;

export const Text = styled.p`
  margin: 20px 0 20px 50px;
  font-size: 0.7rem;
  font-weight: 700;
  line-height: 1.5;
  color: black;
  margin: ${(props) => props.margin};
`;
export const Txt = styled.p((props) => ({
  margin: "20px 0 20px 50px",
  fontSize: "0.7rem",
  fontWeight: "700",
  lineHeight: "1.5",
  color: "var(--accent-clr)",
  ...props,
}));
