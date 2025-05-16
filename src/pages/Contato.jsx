import React from 'react';
import { motion } from 'framer-motion';

export default function Contato() {
  return(
    <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-r from-cyan-500 to-purple-800 px-6 py-6">
      <motion.div 
          className="flex-1 flex justify-center"
          initial={{ opacity: 0, y: -100}}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
      <div className="bg-white rounded-xl shadow-2xl p-10 w-full max-w-md text-center">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">
          Entre em contato conosco!
        </h2>

        <form className="space-y-4">
          <div className="text-left">
            <label className="block text-sm font-medium text-gray-700 mb-1">E-mail</label>
            <input 
              type="email" 
              placeholder='Digite seu e-mail'
              className='w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-400'
            />
          </div>
          <div className='text-left'>
            <label className="block text-sm font-medium text-gray-700 mb-1">Telefone</label>
            <input 
              type="tel" 
              placeholder='(XX) XXXXX-XXXX'
              className='w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-400'
            />
          </div>
          <button
            type='submit'
            className='w-full bg-gradient-to-r from-cyan-400 to-fuchsia-500 text-white font-semibold py-4 rounded-md hover:opacity-90 transition-all'
          >
            Enviar
          </button>
        </form>
      </div>
      </motion.div>
    </div>
  )
}