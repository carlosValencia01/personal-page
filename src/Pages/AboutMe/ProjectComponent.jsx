import './ProjectComponent.css'

export const ProjectComponent = (props) => {    
    return (
        <div className='main-container'>            
            <h3>{props.project.name}</h3>
            <p>{props.project.duration}</p>
            <p>{props.project.compani}</p>
            <p className='content-description'>{props.project.description}</p>
            <div className='pill-container'>
                {props.project.technologies.map(technologie => 
                    <div className='pill' key={technologie}>{technologie}</div>
                            
                )}
            </div>
        </div>
    )
}