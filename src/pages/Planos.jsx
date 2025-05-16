import React from 'react'
import { motion } from 'framer-motion'

export default function Planos() {
  const planos = [
    {
      nome: "Plano Básico",
      preco: "R$ 99,90/mês",
      descricao: "Cobertura básica para proteção contra roubo e furto.",
      beneficios: [
        "Assistência 24h",
        "Cobertura de roubo e furto",
        "Carro reserva"
      ]
    },
    {
      nome: "Plano Intermediário",
      preco: "R$ 149,90/mês",
      descricao: "Cobertura completa com proteção contra colisões.",
      beneficios: [
        "Assistência 24h",
        "Cobertura de roubo, furto e colisão",
        "Carro reserva",
        "Proteção de vidros"
      ]
    },
    {
      nome: "Plano Premium",
      preco: "R$ 199,90/mês",
      descricao: "Cobertura total com benefícios adicionais.",
      beneficios: [
        "Assistência 24h",
        "Cobertura total (roubo, furto e colisão)",
        "Carro reserva",
        "Proteção de vidros",
        "Seguro para passageiros"
      ]
    }
  ]

  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center bg-gradient-to-r from-cyan-500 to-purple-800 px-6 py-6">
      <motion.div 
        className="justify-center"
        initial={{ opacity: 0, y: -100}}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        >
      <h1 className='text-6xl font-bold text-white text-center mb-28'>Escolha um plano de seguro</h1>

      <div className='grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl'>
        {planos.map((plano) => (
          <div key={plano.nome} className="bg-white rounded-xl shadow-lg p-6 text-center hover:scale-105 transition-transform duration-300">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">{plano.nome}</h2>
            <p className="text-cyan-600 text-xl font-semibold mb-4">{plano.preco}</p>
            <ul className='text-gray-600 mb-6 space-y-1'>
              {plano.beneficios.map((item, index) => (
                <li key={index}>• {item}</li>
              ))}
            </ul>
            <button className='bg-cyan-500 text-white px-4 py-2 rounded hover:bg-cyan-600 transition-all'>
              Escolher Plano
            </button>
          </div>

        ))}
      </div>
      </motion.div>
    </div>
  )
}