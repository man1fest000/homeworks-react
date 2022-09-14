export default function SimpsonsComponent(props) {
    const {name, pic} = props
    return (
        <div className="simpsons" >
            <h1>{name}</h1>
            <img src={pic} alt={name}/>
        </div>
    )
}