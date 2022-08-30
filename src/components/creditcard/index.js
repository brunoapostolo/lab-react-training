function CreditCard ({type,number, expirationMonth, expirationYear, bank, owner,bgColor,color}){
    return (
        <div style={{backgroundColor:`${bgColor}`}, {color:`${color}`}} className="credit-card">
            <h2>{type}</h2>
            <p>.... .... .... {number.slice(12,16)}</p>
            <div>
                <p>Expires {expirationMonth}/ {expirationYear.slice(2,4)} {bank}</p>
                <p>{owner}</p>
            </div>
        </div>
    )
}
export default CreditCard;