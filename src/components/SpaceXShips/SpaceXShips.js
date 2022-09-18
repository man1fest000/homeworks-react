import { useEffect, useState } from "react";

import { getShips } from "../../services/spacexdata.api.service";
import SpaceXShip from "./SpaceXShip";

const SpaceXShips = () => {
    const [ships, setShips] = useState([]);

    useEffect(() => {
        getShips().then((ships) => setShips(ships));
    });

    return <div>{
        ships.filter((ship) => ship.launch_year !== "2020").map(ship => <SpaceXShip ship={ship} key={ship.flight_number} />)
    }</div>;
};

export default SpaceXShips;
