import './ProjectComponent.css'

export const ProjectComponent = (props) => {    
    return (
        <div className='main-container'>            
            <h3 className='project-name'>{props.project.name}</h3>            
            <p> <b>{props.project.compani}</b> | {props.project.duration}</p>
            <hr />
            <p className='content-description'>{props.project.description}</p>
            <div className='pill-container'>
                {props.project.technologies.map(technologie => 
                    <div className='pill' key={technologie}>{technologie}</div>
                            
                )}
            </div>
        </div>
    )
}