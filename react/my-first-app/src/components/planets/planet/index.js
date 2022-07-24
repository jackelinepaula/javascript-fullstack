import React from "react";
import GrayImg from "../../shared/gray_img";
import DescriptionWithLink from "../../shared/descriptionwithlink/descriptionwithlink";

const Planet = (props) => {
    return (
        <div>
            <h4 class="title">{props.title}</h4>
            <div class="content">
                {/* <p class="text">{props.description}</p> */}
                <DescriptionWithLink text = {props.text} link = {props.link} desclink = {props.desclink}/>
                <GrayImg img_url = {props.img_url}/>
            </div>
        </div>
    )
}

export default Planet;