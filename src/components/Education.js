export default function Education()
{

  const educations = [
    {
      school: "University of Bishop's, Quebec, CA",
      degree: "Master of Science",
      major: "Computer Science (Data Science Focused)",
      gpa: "GPA: 3.9/4.0",
      date: "Jan 2022 - May 2024",
    },
  ];


 return (
  <section className="resume-section" id="education">
  <div className="resume-section-content">
      <h2 className="mb-5">Education</h2>
      {educations.map((education) => (
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
      

  </div>
</section>

 )
}