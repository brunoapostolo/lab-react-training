function Rating ({children}){
    let estrelas = Math.round(children)
    return (<h1 className="estrelas">{("★".repeat(estrelas)).padEnd(5,"☆")}</h1>)
}

export default Rating;