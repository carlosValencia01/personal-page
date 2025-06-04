import './die.css'

export const Die = (props) => {

    function handleClick(){
        props.hold(props.id);
    }

    return (
        <>
            
            <button onClick={handleClick} className={`die-item ${props.isHeld ? 'isHeld' : 'notHeld'}`} >{props.value}</button>
        </>
    )
}