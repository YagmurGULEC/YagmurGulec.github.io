
export default function Education({state})
{

  const content={
    "English":
    
    [
        {
            "school": "University of Bishop, Quebec, CA",
            "degree": "Master of Science",
            "major": "Computer Science (Data Science Focused)",
            "gpa": "GPA: 3.9/4.0",
            "date": "Jan 2022 - May 2024",
        },
        {
            "school": "Izmir Institute of Technology,Turkey",
            "degree": "Master of Science",
            "major": "Energy Engineering",
            "gpa": "GPA: 91.5/100",
            "date": "Jan 2013 - May 2016",
        },
        {
          "school": "Celal Bayar University, Turkey",
          "degree": "Bachelor of Science",
          "major": "Mechanical Engineering",
          "gpa": "GPA: 78/100",
          "date": "Sept 2007 - July 2011",
      }

    ],
    "French":[
        {
            "school": "Université de Bishop, Québec, CA",
            "degree": "Maîtrise en Science",
            "major": "L'informatique (Axé sur la science des données)",
            "gpa": "GPA: 3.9/4.0",
            "date": "Janvier 2022 - Mai 2024",
        },
        {
          "school": "Izmir Institute of Technology, Turquie",
          "degree": "Maîtrise en Science",
          "major": "L'ingénierie énergétique",
          "gpa": "GPA: 91.5/100",
          "date": "Janvier 2013 - Février 2016",
      },
      {
        "school": "Université de Celal Bayar, Turquie",
        "degree":"Baccalauréat en science", 
        "major":"Génie mécanique",
        "gpa": "GPA: 78/100",
        "date": "Septembre 2007 - Juillet 2011",
    }
    ]
  }


 return (
  <section className="resume-section" id="education">
  <div className="resume-section-content">
      <h2 className="mb-5"> {state === "English" ? "Education" : "Formation"}</h2>
      {content[state].map((education) => (
      <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
          <div className="flex-grow-1">
              <h4 className="mb-0">{education.school}</h4>
              <div className="subheading mb-3">{education.degree}</div>
              <div>{education.major}</div>
              <p>{education.gpa}</p>
          </div>
          <div className="flex-shrink-0"><span className="text-primary">{education.date}</span></div>
      </div>
      ))
    }
     </div></section>

 )
}