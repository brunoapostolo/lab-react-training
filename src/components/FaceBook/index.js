import profiles from "../../data/berlin.json"

function FaceBook (){
    return (
        <>
            {profiles.map((profile)=>{
                return (
                <div style={{display:"flex", flexDirection:"row", margin: "30px" ,border:"2px solid black"}}>
                    <img style={{height: "90px"}} src={profile.img}/>
                    <div>
                        <p>First name : {profile.firstName}</p>
                        <p>Last name: {profile.lastName}</p>
                        <p>Country: {profile.country}</p>
                        <p>Type: {profile.isStudent? "Student":"Teacher"}</p>
                    </div>
                </div>

                )

            })}
        </>
    )

}
export default FaceBook