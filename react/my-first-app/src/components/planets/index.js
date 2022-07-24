import React, { Fragment } from "react";
import Planet from "./planet";

const Planets = () => {
    return (
        <Fragment>
            <h3>Planet List</h3>
            <hr />
            <Planet title = "Saturno"
                    text = "Saturno é o sexto planeta a partir do Sol, e o segundo maior do sistema solar. O primeiro é Júpiter. É conhecido pelo complexo sistema de anéis formados principalmente por gelo e poeira cósmica e possui 53 luas conhecidas e outras nove em pesquisa."
                    link = 'https://i.pinimg.com/564x/6e/56/65/6e56650de934f471f5d96a5f50280bb4.jpg'
                    desclink = "Saturno - Link da foto"
                    img_url = "https://i.pinimg.com/564x/6e/56/65/6e56650de934f471f5d96a5f50280bb4.jpg"/>
            <Planet title = "Netuno"
                    text = "Netuno é o oitavo planeta a partir do Sol. É um gigante gasoso, bem como Júpiter, Saturno e Urano. Foi descoberto em 1846 e recebeu o nome do deus romano do mar."
                    link = "https://www.infoescola.com/wp-content/uploads/2008/04/netuno.jpg"
                    desclink = "Netuno - Link da foto"
                    img_url = "https://www.infoescola.com/wp-content/uploads/2008/04/netuno.jpg"/>
        </Fragment>
    )
}

export default Planets;