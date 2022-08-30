function Greeting ({lang,children}){
    if (lang==="en"){
        return <h1>Wellcome {children}</h1>
    }
    if(lang==="es"){
        return <h1>Bienvenido {children}</h1>
    }
    if (lang==="fr"){
        return <h1>Bonjuor {children}</h1>
    }
    if (lang==="de"){
        return <h1>Hallo {children}</h1>
    }
}
export default Greeting;