import { useSelector } from "react-redux";
import fonts from "../utils/fonts";


const QuotePhone = ({ quoteRef }) => {

    const color = useSelector(state => state.color);

    const quote = useSelector(state => state.quote);
    const signature = useSelector(state => state.signature);

    const fontColor = useSelector(state => state.fontColor);

    const fontStyle = useSelector(state => state.fontStyle);

    
   



   




  return (<div ref={quoteRef} id="myQuotePhone" style={{
        backgroundColor: color, color: fontColor,
        fontFamily: fontStyle, width: '90vw', minHeight: 'auto', margin: 'auto'
    }} className=" slide-in-bottom   w3-center  ">
       
        <div dangerouslySetInnerHTML={{__html: quote.replace(/\n/g, "<br>\n")}} style={{ paddingLeft: '2vw', paddingRight: '2vw', paddingTop: '10vh', fontSize: '8vw',  }} className="w3-center"></div>


        <div style={{ marginTop: '5vh', paddingBottom: '10vh', fontSize: '4vw', zIndex:1000 }} className="">- {signature}</div>




    </div>); 





}

export default QuotePhone;
