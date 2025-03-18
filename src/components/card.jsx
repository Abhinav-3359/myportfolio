import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export default function Card({ image, title, description, github, website }) {
  return (
    <div className="w-80 min-h-[420px] rounded-2xl overflow-hidden shadow-lg bg-white transform transition duration-300 hover:scale-105 hover:shadow-xl flex flex-col">
     
      <img className="w-full h-48 object-cover" src={image} alt={title} />
      
    
      <div className="p-4 flex flex-col flex-grow">
        <h2 className="text-xl font-semibold">{title}</h2>

       
        <p className="text-gray-600 flex-grow max-h-24 max-w-[700px] overflow-y-auto overflow-x-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200 p-1">
          {description || "No description available."}
        </p>

        {(github || website) && (
          <div className="mt-auto flex justify-between items-center border-t pt-3">
            {github && (
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-700 hover:text-black transition"
              >
                <FaGithub size={20} /> GitHub
              </a>
            )}
            {website && (
              <a
                href={website}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition"
              >
                <FaExternalLinkAlt size={18} /> Live Demo
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
