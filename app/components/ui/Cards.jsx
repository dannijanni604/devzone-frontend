// components/ui/Cards.jsx
import React from "react";

export const Card = ({ children, className }) => {
  return <div className={`p-6 bg-gray-800 rounded-xl shadow-lg ${className}`}>{children}</div>;
};

export const CardContent = ({ children }) => {
  return <div className="mt-4">{children}</div>;
};
