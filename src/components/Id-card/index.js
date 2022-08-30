function RenderIdCard({user}){
    return (
        <div className="photo-text">
            <img src={user.picture}/>
            <div>
                <div><b>Firs name: </b>{user.firstName}</div>
                <div><b>Last name: </b>{user.lastName}</div>
                <div><b>Gender: </b>{user.gender}</div>
                <div><b>Height: </b>{(user.height)/100} m</div>
                <div><b>Birth: </b>{user.birth}</div>
            </div>

        </div>
    )
}
export default RenderIdCard;