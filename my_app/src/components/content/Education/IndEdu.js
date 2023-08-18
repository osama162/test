function IndEdu (props){
    return(
        <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
        <div className="flex-grow-1">
          <h3 className="mb-0">{props.heading}</h3>
          <div className="subheading mb-3">{props.subheading}</div>
          <div>{props.department}</div>
          <p>{props.gpa}</p>
        </div>
        <div className="flex-shrink-0">
          <span className="text-primary">{props.date}</span>
        </div>
      </div>
    )
}

export default IndEdu