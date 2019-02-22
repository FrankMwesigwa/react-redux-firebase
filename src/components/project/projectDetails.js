import React from 'react'

const projectDetails = (props) => {
    console.log(props)
    const id = props.match.params.id
  return (
    <div className="container section project-details">
        <div className="card z-depth-0">
            <div className="card-container">
                <span className="card-title">Project Title - {id} </span>
                <p>Posted by Frank Mwesigwa</p>
                <p className="grey-text">21 January 2019, 6pm</p>
            </div>
            <div className="card-action grey lighten-4 grey-text">
                <div>Posted by Frank Mwesigwa</div>
                <div>21 January 2019, 6pm</div>
            </div>
        </div>
    </div>
  )
}

export default projectDetails
