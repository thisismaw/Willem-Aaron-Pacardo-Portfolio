import { motion } from "framer-motion";

export default function Hero() {
  return (
    <motion.section
      className="hero"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      style={{ padding: "4rem 2rem", textAlign: "center" }}
    >
      <h1 style={{ fontSize: "3rem", margin: 0 }}>Hi, I'm Willem</h1>
      <p style={{ fontSize: "1.2rem", color: "#555" }}>
        Web Developer • Creator • Dreamer
      </p>
    </motion.section>
  );
}
