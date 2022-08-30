function Random ({min, max}){
    let aleatorio = Math.floor(Math.random()*max)+min;
    return (
        <h1>Random value between {min} and {max} => {aleatorio}</h1>
    )
}
export default Random;