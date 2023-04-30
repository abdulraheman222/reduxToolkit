import React, { useRef, useState } from "react";

const Progresbar = () => {
  const [data, setData] = useState(0);
  const windowWidth = useRef(window.innerWidth);

  console.log("width: ", windowWidth.current);
  const time = setTimeout(() => {
    setData((data) => {
      return data < windowWidth.current && setData(data + 100);
    });
    if (data === windowWidth.current) {
      return clearInterval(data === windowWidth.current);
    }
  }, 1000);
  console.log("data===", data === windowWidth.current);

  return (
    <div>
      <p>hello world{data}</p>
      <div
        style={{ backgroundColor: "red", height: "10px", width: `${data}px` }}
      ></div>
    </div>
  );
};

export default Progresbar;
