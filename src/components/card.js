import react from "react";
import faker from "faker";

const Card = () => {
    return (
        <div className="card col col-lg-5 col-sm-12 col-md-6 m-2 p-0">
            <img className="card-img-top" src={faker.image.transport()} alt="Card image cap" />
            <div className="card-body p-5">
                <h5 className="card-title">this is a random image section</h5>
                <p className="card-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime at, perferendis necessitatibus quis incidunt aperiam, quam velit itaque fugit porro, minus excepturi rem beatae error enim cumque. Velit, maxime nemo. This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <p className="card-text"><small classNameName="text-muted">Last updated 3 mins ago</small></p>
            </div>
        </div>
    );
}
export default Card
