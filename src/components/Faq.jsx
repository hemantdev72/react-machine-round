import React, { useState } from "react";

const faqData = [
  {
    question: "What is React?",
    answer:
      "React is a JavaScript library for building user interfaces. It is maintained by Facebook and a community of individual developers and companies.",
  },
  {
    question: "How do I create a React component?",
    answer:
      "A React component can be created using either a function or a class. Functional components are the most common, especially with React Hooks for state and side effects.",
  },
  {
    question: "What are React Hooks?",
    answer:
      "Hooks are functions introduced in React 16.8 that let you use state and other React features without writing a class. Examples include useState, useEffect, and useContext.",
  },
  {
    question: "What is JSX?",
    answer:
      "JSX stands for JavaScript XML. It allows you to write HTML elements in JavaScript and place them in the DOM without using functions like createElement or appendChild.",
  },
];

const Faq = () => {
  const [open, setOpen] = useState(null);

  const handleClick = (index) => {
    if (open === index) {
      setOpen(null);
    } else {
      setOpen(index);
    }
  };

  return (
    <div className="bg-slate-300 p-4 flex flex-col gap-4 w-[80%]">
      {faqData.map((item, idx) => (
        <div
          key={idx}
          className="bg-white p-4 rounded shadow-md transition-all duration-300"
        >
          <div
            className="font-semibold cursor-pointer"
            onClick={() => handleClick(idx)}
          >
            {item.question}
          </div>
          <div
            className={`mt-2 text-sm text-gray-700 overflow-hidden transition-all duration-300 ${
              open === idx ? "max-h-screen" : "max-h-0"
            }`}
          >
            {item.answer}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Faq;
