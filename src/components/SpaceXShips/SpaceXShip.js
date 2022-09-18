import React from "react";

const SpaceXShip = ({ship}) => {
    return <div className={'Ship'}>
        <h2>{ship.mission_name}</h2>
        <div>Launch Year: {ship.launch_year}</div>
        <img src={ship.links.mission_patch_small} alt={ship.mission_name}/>
    </div>;
};

export default SpaceXShip;
