const Shimmer = () =>{
    return (
        <div className="restaurants">
            {Array(12).fill("").map((e, index)=>(
                    <div className="shimmer-card restaurant__item">
                        <div className="restaurant__image"/>
                        <div className="restaurant__body">
                            <h2 className="restaurant__name"></h2>
                            <p></p>
                            <div className="restaurant__content">
                                <span className="restaurant__rating"></span>
                                <span></span>
                            </div>
                        </div>
                    </div>
            ))}
        </div>
    )
}

export default Shimmer;
  