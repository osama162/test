function IndExp({date, heading, subheading, paragraph}){
  // const {date, heading, subheading, paragraph} = props;
  
    return(
        <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="flex-grow-1">
              <h3 className="mb-0">{heading}</h3>
              <div className="subheading mb-3">{subheading}</div>
              <p>
                {paragraph}
              </p>
            </div>
            <div className="flex-shrink-0">
              <span className="text-primary">{date}</span>
            </div>
          </div>
    )
}
export default IndExp