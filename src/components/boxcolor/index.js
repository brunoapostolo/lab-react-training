function BoxColor ({r,g,b}){
    return (
    <div  style={{backgroundColor:`rgb(${r},${g},${b})`}} className="colorido" > rgb({r},{g},{b}) </div>
    )
}
export default BoxColor;