import React, { Fragment } from "react";

const DescriptionWithLink = (props) =>{
    return(
        <Fragment>
            <p>{props.text}</p>
            <a href={props.link}>{props.desclink}</a>
        </Fragment>
    )
}

export default DescriptionWithLink;