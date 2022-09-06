function Rating ({rating,children}){
    if(children!==null){
        rating = children
    }
    let estrelas = Math.round(rating)
    return (<h1 className="estrelas">{("★".repeat(estrelas)).padEnd(5,"☆")}</h1>)
}

export default Rating;