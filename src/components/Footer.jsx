import React from 'react'

export const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-4">
      <div className="container mx-auto px-4">
        <p className="text-center">
          &copy; {new Date().getFullYear()} Putlocker Clone
        </p>
      </div>
    </footer>
  )
}
