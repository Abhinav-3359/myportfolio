import '../styles/education.css'

export default function EducationCard({ image, name, startYear, endYear, score, type }) {
    return (
        <div>
    
    <img className="w-40 h-40 object-cover  image" src={image} alt={name} />

        <div>
          <h2 >{name}</h2>
  
    
          <p>{startYear} - {endYear}</p>
  

          <p >
            {type === "cgpa" ? `${score}/10` : `${score}%`}
          </p>
        </div>
      </div>



    );
  }
  