"use client"; // Required for Next.js components if using hooks

export const Button = ({ children, className, ...props }) => {
  return (
    <button className={`px-4 py-2 rounded ${className}`} {...props}>
      {children}
    </button>
  );
};
