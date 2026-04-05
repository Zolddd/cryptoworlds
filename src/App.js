import React, { useEffect, useState } from "react";
import { motion, useScroll } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";
import { SiTether } from "react-icons/si";

const plans = [
  {
    name: "Starter Pack",
    price: "USDT",
    features: [
      "BEP20 Network",
      "Inr 86 per USDT",
      "Minimum quantity 100,000 USDT",
      "Instant Transfer",
      "Lifetime Validity",
      "use for only trust wallet",
      "After payment send screenshot",
    ],
  },
  {
    name: "Pro Trader",
    price: "USDT",
    popular: true,
    features: [
      "TRC20 Network",
      "Inr 86 per USDT",
      "Minimum quantity 100,000 USDT",
      "Instant Transfer",
      "Lifetime Validity",
      "use for only trust wallet",
      "After payment send screenshot",
    ],
  },
  {
    name: "Elite Enterprise",
    price: "USDT",
    features: [
      "ERC20 Network",
      "Inr 86 per USDT",
      "Minimum quantity 100,000 USDT",
      "Instant Transfer",
      "Lifetime Validity",
      "use for only trust wallet",
      "After payment send screenshot",
    ],
  },
];

function App() {
  const whatsappLink = "https://wa.me/917619394399";
  const { scrollYProgress } = useScroll();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Cursor glow
  useEffect(() => {
    const glow = document.createElement("div");
    glow.className =
      "fixed w-40 h-40 bg-green-500/20 blur-3xl rounded-full pointer-events-none z-50";
    document.body.appendChild(glow);

    const move = (e) => {
      glow.style.left = e.clientX - 80 + "px";
      glow.style.top = e.clientY - 80 + "px";
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  const btnClass =
    "bg-green-500 px-4 sm:px-5 md:px-6 py-2 md:py-3 text-sm sm:text-base whitespace-nowrap rounded-xl font-semibold text-white transition-all duration-300 ease-out hover:scale-105 hover:bg-green-600 shadow-lg shadow-green-500/40 hover:shadow-green-500/70 text-center";

  return (
    <div className="min-h-screen bg-[#020617] text-white overflow-hidden relative">
      {/* SCROLL BAR */}
      <motion.div
        className="fixed top-0 left-0 h-[3px] bg-green-500 z-[999] origin-left"
        style={{ scaleX: scrollYProgress, width: "100%" }}
      />

      {/* BACKGROUND GLOW */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-green-500/20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-green-400/20 blur-3xl rounded-full"></div>

      {/* FLOATING COINS */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
        className="absolute left-10 top-40 text-green-400 text-5xl opacity-30"
      >
        <SiTether />
      </motion.div>

      <motion.div
        animate={{ y: [0, 25, 0] }}
        transition={{ repeat: Infinity, duration: 7, ease: "easeInOut" }}
        className="absolute right-20 top-60 text-green-500 text-4xl opacity-20"
      >
        <SiTether />
      </motion.div>

      <motion.div
        animate={{ y: [0, -30, 0] }}
        transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
        className="absolute left-1/3 bottom-20 text-green-300 text-6xl opacity-10"
      >
        <SiTether />
      </motion.div>

      {/* HEADER */}
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 
        ${
          scrolled
            ? "bg-[#020617]/80 backdrop-blur-xl shadow-lg shadow-black/40 border-b border-white/10"
            : "bg-transparent"
        } px-4 sm:px-6 md:px-12 py-4`}
      >
        <div className="flex justify-between items-center gap-3 sm:gap-4">
          <div className="flex items-center gap-2 sm:gap-3">
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
            >
              <SiTether className="text-green-400 text-2xl sm:text-3xl" />
            </motion.div>

            <h1 className="text-lg sm:text-xl md:text-2xl font-bold tracking-wide">
              Crypto World's
            </h1>
          </div>

          <motion.a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={btnClass}
          >
            💬 Contact
          </motion.a>
        </div>
      </motion.header>

      {/* HERO */}
      <section className="text-center px-4 sm:px-6 md:px-12 pt-36 pb-24 md:pt-40 md:pb-32 max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-3xl sm:text-4xl md:text-6xl font-extrabold mb-6 leading-tight bg-gradient-to-r from-green-400 via-green-300 to-green-500 text-transparent bg-clip-text"
        >
          🚀 USDT Deals
        </motion.h2>

        <p className="text-gray-400 text-sm sm:text-base md:text-lg max-w-xl mx-auto mb-8">
          Experience next-gen crypto trading with lightning-fast transactions
          and unmatched performance.
        </p>

        <motion.a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className={`${btnClass} relative z-10`}
        >
          ⚡ Get Started
        </motion.a>
      </section>

      {/* FEATURES */}
      <section className="px-4 sm:px-6 md:px-12 py-20">
        <div className="max-w-7xl mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 text-center">
          {["⚡ Fast Transfers", "🔒 Secure Network", "🌐 Global Access"].map(
            (item, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-lg"
              >
                <FaCheckCircle className="text-green-400 text-3xl mx-auto mb-4" />
                <h4 className="font-semibold text-lg">{item}</h4>
              </motion.div>
            ),
          )}
        </div>
      </section>

      {/* PLANS */}
      <section className="px-4 sm:px-6 md:px-12 py-20">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12">
            💼 Choose Your Plan
          </h3>

          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {plans.map((plan, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className={`relative rounded-2xl p-[2px] ${
                  plan.popular
                    ? "bg-gradient-to-r from-green-400 to-green-600"
                    : "bg-white/10"
                }`}
              >
                <div className="bg-[#020617] p-5 md:p-6 rounded-2xl h-full flex flex-col justify-between">
                  {plan.popular && (
                    <span className="absolute top-3 right-3 bg-green-500 px-2 py-1 text-xs rounded">
                      ⭐ Popular
                    </span>
                  )}

                  <div>
                    <h4 className="text-xl text-green-400 font-bold mb-2">
                      {plan.name}
                    </h4>
                    <p className="text-3xl font-bold mb-4">{plan.price}</p>

                    <ul className="space-y-3 mb-6">
                      {plan.features.map((f, i) => {
                        const isImportant =
                          f.toLowerCase().includes("trust wallet") ||
                          f.toLowerCase().includes("payment");

                        return (
                          <li
                            key={i}
                            className={`flex items-start gap-3 text-sm md:text-base ${
                              isImportant ? "text-yellow-300" : "text-gray-300"
                            }`}
                          >
                            <span
                              className={`mt-1 ${
                                isImportant
                                  ? "text-yellow-400"
                                  : "text-green-400"
                              }`}
                            >
                              {isImportant ? "⚠️" : "✔"}
                            </span>

                            <span className="leading-relaxed">{f}</span>
                          </li>
                        );
                      })}
                    </ul>
                  </div>

                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={btnClass}
                  >
                    💬 Buy Now
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="text-center py-20 px-4">
        <h3 className="text-2xl sm:text-3xl font-bold mb-6">
          🚀 Ready to Boost Your Trading?
        </h3>

        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className={`${btnClass} relative z-10`}
        >
          💬 Contact on WhatsApp
        </a>
      </section>

      {/* FOOTER */}
      <footer className="text-center py-6 border-t border-white/10 text-gray-400">
        © 2026 Crypto World's | All Rights Reserved
      </footer>
    </div>
  );
}

export default App;
