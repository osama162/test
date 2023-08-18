import IndExp from "./Experience/IndExp";

function  Experience (){
    return(
        <section className="resume-section" id="experience">
        <div className="resume-section-content">
          <h2 className="mb-5">Experience</h2>
          <IndExp 
                heading="Senior Web Developer" 
                subheading="Intelitec Solutions" 
                paragraph="Bring to the table win-win survival strategies to ensure
                proactive domination. At the end of the day, going forward, a
                new normal that has evolved from generation X is on the runway
                heading towards a streamlined cloud solution. User generated
                content in real-time will have multiple touchpoints for
                offshoring." 
                date="March 2013 - Present"
        />
         <IndExp 
                heading="WEB DEVELOPER" 
                subheading="Intelitec Solutions" 
                paragraph="Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line." 
                date="December 2011 - March 2013"
        />
        <IndExp 
                heading="JUNIOR WEB DESIGNER" 
                subheading="SHOUT! MEDIA PRODUCTIONS" 
                paragraph="Podcasting operational change management inside of workflows to establish a framework. Taking seamless key performance indicators offline to maximise the long tail. Keeping your eye on the ball while performing a deep dive on the start-up mentality to derive convergence on cross-platform integration." 
                date="july 2010 - December 2011"
        />
        <IndExp 
                heading="WEB DESIGN INTERN" 
                subheading="Intelitec Solutions" 
                paragraph="Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits. Dramatically visualize customer directed convergence without revolutionary ROI." 
                date="September 2008 - June 2010"
        />
       
          
        </div>
      </section>
    )
}
export default Experience;