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
  <section class="resume-section" id="education">
  <div class="resume-section-content">
      <h2 class="mb-5">Education</h2>
      {educations.map((education) => (
      <div class="d-flex flex-column flex-md-row justify-content-between mb-5">
          <div class="flex-grow-1">
              <h4 class="mb-0">{education.school}</h4>
              <div class="subheading mb-3">{education.degree}</div>
              <div>{education.major}</div>
              <p>{education.gpa}</p>
          </div>
          <div class="flex-shrink-0"><span class="text-primary">{education.date}</span></div>
      </div>
      ))
    }
      

  </div>
</section>

 )
}