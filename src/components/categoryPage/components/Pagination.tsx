import React from 'react'
import { motion } from 'framer-motion'

// Assuming containerVariants and buttonVariants are imported from shared utilities
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

const buttonVariants = {
  hover: { scale: 1.1, backgroundColor: '#e5e7eb' },
  tap: { scale: 0.95 },
}

const Pagination = ({ currentPage, totalPages, onPrevPage, onNextPage, onPageClick }) => (
  <motion.div
    className="flex items-center justify-center space-x-2 mt-8"
    variants={containerVariants}
  >
    <motion.button
      className={`w-6 h-6 bg-gray-200 rounded flex items-center justify-center ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
      onClick={onPrevPage}
      disabled={currentPage === 1}
      variants={buttonVariants}
      whileHover="hover"
      whileTap="tap"
    >
      <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
      </svg>
    </motion.button>
    <motion.button
      className={`w-6 h-6 ${currentPage === 1 ? 'bg-black text-white' : 'bg-gray-200 text-gray-600'} rounded flex items-center justify-center`}
      onClick={() => onPageClick(1)}
      variants={buttonVariants}
      whileHover="hover"
      whileTap="tap"
    >
      1
    </motion.button>
    {totalPages > 1 && (
      <motion.button
        className={`w-6 h-6 ${currentPage === 2 ? 'bg-black text-white' : 'bg-gray-200 text-gray-600'} rounded flex items-center justify-center`}
        onClick={() => onPageClick(2)}
        variants={buttonVariants}
        whileHover="hover"
        whileTap="tap"
      >
        2
      </motion.button>
    )}
    <motion.button
      className={`w-6 h-6 bg-gray-200 rounded flex items-center justify-center ${currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : ''}`}
      onClick={onNextPage}
      disabled={currentPage === totalPages}
      variants={buttonVariants}
      whileHover="hover"
      whileTap="tap"
    >
      <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
      </svg>
    </motion.button>
  </motion.div>
)

export default Pagination