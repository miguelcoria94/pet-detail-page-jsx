import React from "react";
import PetDetailList from "./PetDetailList.js";

const PetDetails = props =>
    <div>
        <PetDetailList pet={props.pet} />
    </div>
    ;

export default PetDetails