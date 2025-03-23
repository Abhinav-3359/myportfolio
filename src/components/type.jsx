import { Typewriter } from 'react-simple-typewriter';

import { Typewriter } from 'react-simple-typewriter';

const Type = () => {
  // Object containing text strings
  const textData = {
    text1: "Bridging the gap between imagination and reality with HTML, CSS, and JavaScript!"
  };

  return (
    <div className="flex justify-center items-center my-20 text-2xl font-semibold">
      <span>
        <Typewriter
          words={[textData.text1]}
          loop={Infinity} // Infinite loop
          cursor
          cursorStyle="|" // Cursor style
          typeSpeed={70} // Speed of typing
          deleteSpeed={50} // Speed of deleting
          delaySpeed={2500} // Delay before retyping
        />
      </span>
    </div>
  );
};

export default Type;


