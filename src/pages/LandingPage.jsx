import React from "react";
import capa from "../assets/capa.png";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-r from-cyan-500 to-purple-800 px-6 py-6">
    <div className="w-full grid md:grid-cols-3 gap-10 items-center text-white">
      <div className="flex justify-center col-span-2">
        <motion.div 
          className="flex-1 flex justify-center"
          initial={{ opacity: 0, x: -50}}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <img src={capa} alt="Uma imagem" className="max-w-[60vw] max-h-[80vh] drop-shadow-2xl" />

        </motion.div>
      </div>

      <div>
        <motion.div 
          className="flex-1 text-white"
          initial={{ opacity: 0, x: 50}}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
        <h2 className="text-5xl font-bold mb-4 leading-snug">
          Proteja <span className="text-white">Seu Carro</span><br /> com o seguro ideal
        </h2>
        <p className="mb-6 text-2xl text-cyan-100">
          rápido, fácil e sem surpresas!
        </p>
        <div class="grid grid-cols-2 place-content-between gap-6">
        <Link
           to="/contato"
           className="inline-block max-w-screen bg-cyan-400 hover:bg-cyan-500 text-white font-bold py-3 px-6 rounded-full transition-all duration-300"
        >
          Fale conosco
        </Link>
        <Link
           to="/planos"
           className="inline-block max-w-screen bg-cyan-400 hover:bg-cyan-500 text-white font-bold py-3 px-6 rounded-full transition-all duration-300"
        >
          Planos
        </Link>
        </div>
        </motion.div>
      </div>
    </div>
  </div>
  );
}