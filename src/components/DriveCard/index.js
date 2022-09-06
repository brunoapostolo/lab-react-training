import Rating from "../rating";

function DriverCard ( { name, rating, img, car } ) {
    return (
        <div>
            <div>
                <img style={{height:"100px"}} src={img} alt='dois'/>
            </div>
            <div>
                <h2> {name}</h2>
                <Rating rating={rating}></Rating>
                <span>
                    {car.model}- {car.licensePlate}
                </span>
            </div>
        </div>
    )

}

export default DriverCard