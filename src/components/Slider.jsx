import { useEffect, useRef, useState } from "react";

const img_data = [
  {
    id: "0",
    author: "Alejandro Escamilla",
    width: 5000,
    height: 3333,
    url: "https://unsplash.com/photos/yC-Yzbqy7PY",
    download_url: "https://picsum.photos/id/0/5000/3333",
  },
  {
    id: "1",
    author: "Alejandro Escamilla",
    width: 5000,
    height: 3333,
    url: "https://unsplash.com/photos/LNRyGwIJr5c",
    download_url: "https://picsum.photos/id/1/5000/3333",
  },
  {
    id: "2",
    author: "Alejandro Escamilla",
    width: 5000,
    height: 3333,
    url: "https://unsplash.com/photos/N7XodRrbzS0",
    download_url: "https://picsum.photos/id/2/5000/3333",
  },
  {
    id: "3",
    author: "Alejandro Escamilla",
    width: 5000,
    height: 3333,
    url: "https://unsplash.com/photos/Dl6jeyfihLk",
    download_url: "https://picsum.photos/id/3/5000/3333",
  },
  {
    id: "4",
    author: "Alejandro Escamilla",
    width: 5000,
    height: 3333,
    url: "https://unsplash.com/photos/y83Je1OC6Wc",
    download_url: "https://picsum.photos/id/4/5000/3333",
  },
  {
    id: "5",
    author: "Alejandro Escamilla",
    width: 5000,
    height: 3334,
    url: "https://unsplash.com/photos/LF8gK8-HGSg",
    download_url: "https://picsum.photos/id/5/5000/3334",
  },
  {
    id: "6",
    author: "Alejandro Escamilla",
    width: 5000,
    height: 3333,
    url: "https://unsplash.com/photos/tAKXap853rY",
    download_url: "https://picsum.photos/id/6/5000/3333",
  },
];

function Slider() {
  const [step, setStepOne] = useState(0);
  const imgRef = useRef(null);
  const length = img_data.length;

  function handleRight() {
    setStepOne((prev) => (prev === length - 1 ? 0 : prev + 1));
  }

  function handleLeft() {
    setStepOne((prev) => (prev === 0 ? length - 1 : prev - 1));
  }

  useEffect(() => {
    imgRef.current = setInterval(() => {
      handleRight();
    }, 1000);

    return () => {
      clearInterval(imgRef.current);
    };
  }, []);

  const handleMouseOver = () => {
    clearInterval(imgRef.current);
  };

  const handleMouseLeave = () => {
    imgRef.current = setInterval(() => {
      handleRight();
    }, 1000);
  };

  return (
    <div className="w-[250px] h-[250px] relative">
      <div
        onClick={handleLeft}
        className="absolute top-[50%] -left-5 font-bold text-2xl"
      >
        {"<"}
      </div>
      <div
        onClick={handleRight}
        className="absolute top-[50%] -right-5 font-bold text-2xl"
      >
        {">"}
      </div>
      <img
        src={img_data[step]?.download_url}
        alt=""
        className="w-full h-full"
        onMouseOver={handleMouseOver}
        onMouseLeave={handleMouseLeave}
      />
    </div>
  );
}

export default Slider;
