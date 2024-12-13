import { useState, useEffect } from 'react'
import React from 'react'
import emailjs from 'emailjs-com'

const ContactForm = ({ onClose }: { onClose: () => void }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    number: '',
    description: '',
  })
  const [showThankYou, setShowThankYou] = useState(false)

  useEffect(() => {
    // Prevent background scrolling
    document.body.style.overflow = 'hidden'
    return () => {
      // Re-enable background scrolling when the modal is closed
      document.body.style.overflow = 'auto'
    }
  }, [])

  const handleClickOutside = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    console.log('Sending payload:', formData) // Log the payload for debugging

    emailjs
      .send(
        'service_4ai9ttd',
        'template_cz7t5p8',
        formData,
        '3xQyLJlxQJGBZlNqL'
      )
      .then(
        (result) => {
          setShowThankYou(true)
          setTimeout(() => {
            setShowThankYou(false)
            onClose()
          }, 3000) // Close the modal after 3 seconds
        },
        (error) => {
          console.log(error.text)
        }
      )

    // Send auto-reply email
    emailjs
      .send(
        'service_4ai9ttd',
        'template_8gfby83',
        formData,
        '3xQyLJlxQJGBZlNqL'
      )
      .then(
        (result) => {
          console.log('Auto-reply sent')
        },
        (error) => {
          console.log(error.text)
        }
      )
  }

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
      onClick={handleClickOutside}
    >
      <div className="border-white bg-white rounded-xl p-8 w-full max-w-lg">
        {showThankYou ? (
          <div className="text-center">
            <h2 className="text-2xl text-black font-semibold">
              Thank you for connecting!
            </h2>
            <p className="text-xl text-black ">
              We will get back to you shortly.
            </p>
          </div>
        ) : (
          <>
            <h2 className="text-2xl font-semibold">Get in Touch</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4 flex space-x-4">
                <div className="w-1/2">
                  <label className="block text-gray-700">Full Name</label>
                  <input
                    type="text"
                    name="fullName"
                    className="w-full border text-black border-gray-300 rounded px-3 py-2 mt-1"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="w-1/2">
                  <label className="block text-gray-700">Number</label>
                  <input
                    type="tel"
                    name="number"
                    className="w-full border text-black border-gray-300 rounded px-3 py-2 mt-1"
                    value={formData.number}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Email</label>
                <input
                  type="email"
                  name="email"
                  className="w-full border text-black border-gray-300 rounded px-3 py-2 mt-1"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Description</label>
                <textarea
                  name="description"
                  className="w-full border text-black border-gray-300 rounded px-3 py-2 mt-1"
                  rows={4}
                  value={formData.description}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <div className="flex justify-center space-x-4">
                <button
                  type="button"
                  className="bg-gray-500 text-white px-6 py-2 rounded"
                  onClick={onClose}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-6 py-2 rounded"
                >
                  Submit
                </button>
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  )
}

export default ContactForm
