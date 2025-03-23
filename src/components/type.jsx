import Typical from "react-typical";

const Type = () => {
  // Object containing text strings
  const textData = {
    text1: "Bridging the gap between imagination and reality with HTML, CSS, and JavaScript!"
  };

  return (
    <div className="flex justify-center items-center my-20   text-2xl font-semibold">
      <Typical
        steps={[textData.text1, 2500,"", 1000]} // Typing speed
        loop={Infinity} // Infinite loop
        wrapper="span"
      />
    </div>
  );
};

export default Type;
