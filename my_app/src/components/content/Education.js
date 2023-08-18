import IndEdu from "./Education/IndEdu";

function Education (){
    return(
        <section className="resume-section" id="education">
        <div className="resume-section-content">
          <h2 className="mb-5">Education</h2>
            <IndEdu 
            heading="University of Colorado Boulder" 
            subheading="Bachelor of Science" 
            department="Computer Science - Web Development Track" 
            gpa="GPA: 3.23" 
            date="August 2006 - May 2010"
            />
          <IndEdu 
            heading="JAMES BUCHANAN HIGH SCHOOL" 
            subheading="TECHNOLOGY MAGNET PROGRAM" 
            department="Computer Science - Web Development Track" 
            gpa="GPA: 3.56"
            date="August 2006 - May 2010"    
            />
        </div>
      </section>
    )
}

export default Education;