/* eslint-disable react/prop-types */
import {useEffect, useRef, useState} from "react";

const Otp = ({length = 4, onOtpSubmit = () => {}}) => {
  const [otp, setOtp] = useState(new Array(length).fill(""));
  const inputRefs = useRef([]);

  useEffect(() => {
    if (inputRefs.current[0]) {
      inputRefs.current[0].focus();
    }
  }, []);

  
  function handleKeyDown(index, e) {
    if (e.key === "Backspace") {
      const newOtp = [...otp];
  
      // Clear the current input
      newOtp[index] = "";
  
      // If the current input is empty, move to the previous input
      if (!otp[index] && index > 0) {
        inputRefs.current[index - 1].focus();
      }
  
      // Update state
      setOtp(newOtp);
    }
  }
  

  function handleChange(index,e){
    const value=e.target.value;

    if(isNaN(value)){
        return;
    }

    const newOtp = [...otp];
    // allow only one input
    newOtp[index] = value.substring(value.length - 1);
    setOtp(newOtp);

    if(index < otp.length-1) inputRefs.current[index+1].focus()


  }


  return (
    <div className="flex gap-2">
      {otp.map((value, index) => {
        return (
          <input
            key={index}
            type="text"
            ref={(input) => (inputRefs.current[index] = input)}
            value={value}
            onChange={(e) => handleChange(index, e)}
            onClick={() => handleClick(index)}
            onKeyDown={(e) => handleKeyDown(index, e)}
            className="otpInput w-[50px] h-[50px] border border-black text-center text-[1.2em]"
          />
        );
      })}
    </div>
  );
};

export default Otp;