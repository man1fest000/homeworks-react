

export default function RickAndMortyComponent(props) {
    let {item:{id,name,status,species,gender,image}} = props
    return(

            <div>
                <h2>{name}</h2>
                <div>{id}</div>
                <div>{status}</div>
                <div>{species}</div>
                <div>{gender}</div>
                <img src={image} alt={name}/>
            </div>

    )
}