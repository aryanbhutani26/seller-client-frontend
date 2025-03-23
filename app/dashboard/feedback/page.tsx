'use client';

<<<<<<< HEAD
import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
=======
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Toaster, toast } from "sonner";
>>>>>>> 126ff4d4b3c0d68fc3f7b84f5409131e43bef55b

// ----------------------------- STOCK CARD COMPONENT ----------------------------- //

const StockCard = ({
  percentage,
  stocksRemaining,
}: {
  percentage: number;
  stocksRemaining: number;
}) => {
  const isPositive = percentage >= 0;

  return (
<<<<<<< HEAD
    <div className="flex flex-col items-center justify-center space-y-1 w-[180px] p-4 rounded-lg shadow-sm bg-white">
    {/* Top Row: Icon + Percentage */}
    <div className="flex items-center space-x-2">
      {/* Icon */}
      <svg
  className="w-5 h-5 text-white"
  fill="currentColor"
  stroke="black"        // black border
  strokeWidth="1.5"     // border thickness
  viewBox="0 0 24 24"
>
  <g>
    {/* Bars */}
    <rect x="1" y="10" width="4" height="10" />
    <rect x="8" y="6" width="4" height="14" />
    <rect x="15" y="4" width="4" height="16" />
    
    {/* Underline */}
    <rect x="0" y="24" width="19" height="2.5" />
    {/* Explanation:
        x="0" - starts at left edge
        y="20" - vertically positioned under the bars
        width="22" - stretch under all three bars (adjust as needed)
        height="1.5" - thickness of underline (adjust as needed)
    */}
  </g>
</svg>


        {/* Percentage */}
        <span
          className={`text-[14px] font-normal ${
            isPositive ? 'text-green-600' : 'text-red-600'
          }`}
        >
          {percentage}%
        </span>
      </div>

      {/* Bottom Text */}
      <p className="text-[9px] text-gray-800">
        {stocksRemaining} Stocks Remaining
      </p>
=======
    <div className="max-w-2xl mx-auto p-6">
      <div className="relative mb-8">
        <button className="flex items-center justify-between w-64 px-4 py-2 border rounded-xl shadow-sm bg-white">
          <span>Options</span>
          <span>▼</span>
        </button>
      </div>

      <div className="bg-white p-8 rounded-md shadow-sm border">
        <h2 className="text-4xl font-normal mb-6">Feedback</h2>

        <div className="mb-6 relative">
          <label className="absolute -top-3 left-4 px-1 bg-white text-lg font-medium z-10">
            Write Feedback
          </label>
          <textarea
            className={`w-full p-4 pt-6 rounded h-36 transition-colors duration-200 ${
              isFocused
                ? "border-2 border-black text-black"
                : "border border-[#a0a9be] text-[#A0A9BE]"
            }`}
            placeholder="Write..."
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
          />
        </div>

        {/* Rating Section */}
        <div className="mb-8">
          <div className="flex items-center mb-3">
            <span className="mr-6 text-lg">Give Rating:</span>
            <div className="flex">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  onClick={() => setRating(star)}
                  className="mx-2"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill={rating >= star ? "gold" : "none"}
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <Button
            className="hover:cursor-pointer px-8 py-2 text-base"
            onClick={handleSubmit}
          >
            Done
          </Button>
        </div>
      </div>

      <Toaster position="top-right" />
>>>>>>> 126ff4d4b3c0d68fc3f7b84f5409131e43bef55b
    </div>
  );
};

// ----------------------------- FEEDBACK FORM COMPONENT ----------------------------- //

const FeedbackForm = () => {
  const [feedback, setFeedback] = useState('');
  const [rating, setRating] = useState(0);
  const form = useRef<HTMLFormElement>(null);

  const handleRating = (rate: number) => {
    setRating(rate);
    toast.success(`You rated ${rate} star${rate > 1 ? 's' : ''}!`, {
      position: 'top-center',
      autoClose: 1500,
    });
  };

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const serviceID = 'service_uyybce6';
    const templateID = 'template_umc3vou';
    const publicKey = 'X7NUSPqkuR-DQ4sRv';

    if (!form.current) {
      console.error('Form reference is not set.');
      return;
    }

    try {
      const result = await emailjs.sendForm(
        serviceID,
        templateID,
        form.current,
        publicKey
      );
      console.log('EmailJS Response:', result);

      toast.success('Feedback submitted successfully!', {
        position: 'top-center',
        autoClose: 2000,
      });

      setFeedback('');
      setRating(0);
      form.current.reset();
    } catch (error: any) {
      console.error('EmailJS Error:', error);
      toast.error('An error occurred. Please try again.', {
        position: 'top-center',
        autoClose: 2000,
      });
    }
  };

  return (
    <div className="flex flex-col items-center p-4 bg-white rounded-lg w-full max-w-md">
      <ToastContainer />

      <div className="w-full justify-start mt-4 p-4">
        <select
          name="category"
          className="px-4 py-2 border border-gray-300 rounded-full bg-white w-full"
          required
        >
          <option value="">Select Category</option>
          <option value="Shirt related">Shirt related</option>
          <option value="Pant related">Pant related</option>
          <option value="Hoodies related">Hoodies related</option>
        </select>
      </div>

      <form
        ref={form}
        onSubmit={sendEmail}
        className="bg-white p-6 rounded-lg shadow-md w-full"
      >
        <h2 className="text-lg font-semibold mb-6">Feedback</h2>

        <div className="mb-4 relative">
          <label className="absolute -top-3 left-4 bg-white px-2 text-sm text-gray-600">
            Write Feedback
          </label>
          <textarea
            name="feedback"
            className="w-full p-4 border border-gray-300 rounded focus:outline-none"
            rows={4}
            placeholder="Write your feedback here..."
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Give Rating:</label>
          <div className="flex">
            {[1, 2, 3, 4, 5].map((star) => (
              <svg
                key={star}
                onClick={() => handleRating(star)}
                xmlns="http://www.w3.org/2000/svg"
                fill={rating >= star ? '#fbbf24' : 'none'}
                viewBox="0 0 24 24"
                stroke="currentColor"
                className={`p-1 h-6 w-6 cursor-pointer transition-transform transform hover:scale-110 ${
                  rating >= star ? 'text-yellow-400' : 'text-gray-400'
                }`}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l2.044 6.29a1 1 0 00.95.69h6.631c.969 0 1.371 1.24.588 1.81l-5.37 3.89a1 1 0 00-.364 1.118l2.045 6.29c.3.921-.755 1.688-1.538 1.118l-5.37-3.89a1 1 0 00-1.175 0l-5.37 3.89c-.783.57-1.838-.197-1.538-1.118l2.045-6.29a1 1 0 00-.364-1.118l-5.37-3.89c-.783-.57-.38-1.81.588-1.81h6.631a1 1 0 00.95-.69l2.044-6.29z"
                />
              </svg>
            ))}
          </div>
        </div>

        <input type="hidden" name="rating" value={rating} />

        <button
          type="submit"
          className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800 w-full"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

// ----------------------------- MAIN PAGE COMPONENT ----------------------------- //
const DashboardPage = () => {
  return (
    <div className="min-h-screen bg-white p-6 flex justify-center">
      {/* Wrapper for Feedback and Stock Cards */}
      <div className="flex flex-row gap-10 w-full max-w-7xl bg-white rounded-lg shadow-md p-8">
        {/* LEFT SIDE - FEEDBACK FORM */}
        <div className="flex-1 flex flex-col justify-start">
          <FeedbackForm />
        </div>

        {/* RIGHT SIDE - STOCK CARDS */}
        <div className="flex flex-col gap-6 justify-start items-end h-full overflow-y-auto pr-4 mt-12">
          <StockCard percentage={12.5} stocksRemaining={135} />
          <StockCard percentage={-5.8} stocksRemaining={135} />
          <StockCard percentage={0.5} stocksRemaining={135} />
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
