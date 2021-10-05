import React, { Component } from 'react'
import { motion } from 'framer-motion'

class NoteIcon extends Component {
  render(): JSX.Element {
    return (
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 400 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.rect
          initial={{ opacity: 0, height: 0, width: 0 }}
          animate={{
            opacity: [null, 1],
            height: [null, 400],
            width: [null, 400]
          }}
          width="400"
          height="400"
          rx="12"
          fill="#6C63FF"
        />
        <motion.path
          initial={{ opacity: 0, pathLength: 0 }}
          animate={{
            opacity: [null, 1],
            pathLength: [null, 1],
            transition: { delay: 0.4 }
          }}
          d="M290.741 83.3333H236.556C231.111 68.2963 216.852 57.4074 200 57.4074C183.148 57.4074 168.889 68.2963 163.444 83.3333H109.259C95 83.3333 83.3333 95 83.3333 109.259V290.741C83.3333 305 95 316.667 109.259 316.667H290.741C305 316.667 316.667 305 316.667 290.741V109.259C316.667 95 305 83.3333 290.741 83.3333ZM200 83.3333C207.13 83.3333 212.963 89.1667 212.963 96.2963C212.963 103.426 207.13 109.259 200 109.259C192.87 109.259 187.037 103.426 187.037 96.2963C187.037 89.1667 192.87 83.3333 200 83.3333ZM225.926 264.815H135.185V238.889H225.926V264.815ZM264.815 212.963H135.185V187.037H264.815V212.963ZM264.815 161.111H135.185V135.185H264.815V161.111Z"
          fill="#F9F9F9"
        />
      </svg>
    )
  }
}

export { NoteIcon }
