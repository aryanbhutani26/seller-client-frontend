// app/feedback/page.tsx
"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Toaster, toast } from "sonner";
import UnderDevelopmentCard from "@/components/ui/under-development-card";

const FeedbackPage: React.FC = () => {
  const [feedback, setFeedback] = useState("");
  const [rating, setRating] = useState(0);
  const [isFocused, setIsFocused] = useState(false);

  const handleSubmit = () => {
    if (feedback.trim() === "" && rating === 0) {
      toast(
        <div className="flex items-center space-x-2">
          <span role="img" aria-label="warning emoji" className="text-xl">
            ⚠️
          </span>
          <p>Please submit both feedback and rating.</p>
        </div>,
        { 
          style: {
            backgroundColor: "#FEF3C7", 
            color: "#92400E", 
            border: "1px solid #F59E0B", 
          },
          duration: 2000, 
        }
      );
      return;
    }

    if (feedback.trim() === "" && rating !== 0) {
      toast(
        <div className="flex items-center space-x-2">
          <span role="img" aria-label="warning emoji" className="text-xl">
            ⚠️
          </span>
          <p>Please write some feedback.</p>
        </div>,
        { 
          style: {
            backgroundColor: "#FEF3C7", 
            color: "#92400E", 
            border: "1px solid #F59E0B", 
          },
          duration: 2000,
        }
      );
      setRating(0);
      return;
    }

    if (feedback.trim() !== "" && rating === 0) {
      toast(
        <div className="flex items-center space-x-2">
          <span role="img" aria-label="warning emoji" className="text-xl">
            ⚠️
          </span>
          <p>Please select a rating.</p>
        </div>,
        { 
          style: {
            backgroundColor: "#FEF3C7", 
            color: "#92400E", 
            border: "1px solid #F59E0B", 
          },
          duration: 2000,
        }
      );
      setFeedback("");
      return;
    }

    toast(
      <div className="flex items-center space-x-2">
        <span role="img" aria-label="thank you emoji" className="text-xl">
          🙏
        </span>
        <p>Thank you for your feedback!</p>
      </div>,
      { duration: 2000 } 
    );

    setFeedback("");
    setRating(0);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mt-20 sm:mt-12">Feedback</h1>
      <p className="mt-2 text-gray-600">Customer feedback and reviews.</p>
      <UnderDevelopmentCard />
    </div>
  );
};

export default FeedbackPage;