import { useSelector } from "react-redux";

const Quote = ({ quoteRef }) => {

    const color = useSelector(state => state.color);

    const quote = useSelector(state => state.quote);
    const signature = useSelector(state => state.signature);

    const fontColor = useSelector(state => state.fontColor);

    const fontStyle = useSelector(state => state.fontStyle);

    return (<div ref={quoteRef} id="myQuote" style={{ backgroundColor: color, color: fontColor,
        fontFamily: fontStyle, width: '20vw', minHeight: 'auto', margin: 'auto' }} className="w3-display-container slide-in-top   w3-center  ">

        <div dangerouslySetInnerHTML={{ __html: quote.replace(/\n/g, "<br>\n") }} style={{ paddingLeft: '0.5vw', paddingRight: '0.5vw', paddingTop: '10vh', fontSize: '2.2vw' }} className="w3-center"></div>


        <div style={{ marginTop: '5vh', paddingBottom: '10vh', fontSize: '1.2vw' }} className="">- {signature }</div>


    </div>);
}

export default Quote;
