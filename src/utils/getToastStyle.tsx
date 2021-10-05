import React from 'react'
import { ToastOptions } from 'react-toastify'
import { AiFillCheckCircle } from 'react-icons/ai'
import { BiCommentError } from 'react-icons/bi'
interface getToastProps {
  style: 'success' | 'error'
}

const defaultToastProps: ToastOptions = {
  position: 'top-right',
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: 'dark'
}

const getToastStyle = ({ style }: getToastProps) => {
  const toastStyles = {
    success(): ToastOptions {
      return {
        style: {
          backgroundColor: '#10B981',
          color: 'white',
          fontWeight: 'bolder',
          boxShadow:
            '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)'
        },
        progressStyle: {
          backgroundColor: '#047857'
        },
        icon: <AiFillCheckCircle size={32} />
      }
    },
    error(): ToastOptions {
      return {
        style: {
          backgroundColor: '#EF4444',
          color: 'white',
          fontWeight: 'bolder',
          boxShadow:
            '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)'
        },
        progressStyle: {
          backgroundColor: '#F87171'
        },
        icon: (
          <span className="rounded-full mr-2 bg-red-600">
            <BiCommentError size={24} />
          </span>
        )
      }
    }
  }

  return { ...defaultToastProps, ...toastStyles[style]() }
}

export { getToastStyle }
