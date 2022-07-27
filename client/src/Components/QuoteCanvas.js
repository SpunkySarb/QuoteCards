import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import canvasTxt from 'canvas-txt';


const QuoteCanvas = () => {

    const color = useSelector(state => state.color);
    const fontColor = useSelector(state => state.fontColor);
    const quote = useRef();
    const fontStyle = useSelector(state => state.fontStyle);
    const text = useSelector(state => state.quote);
    const signature = useSelector(state => state.signature);

    const [canvasDimentions, setDimentions] = useState({width:200, height:300});

    useEffect(() => {


        const divQuote = document.getElementById('myQuotePhone');

        setDimentions({width:divQuote.offsetWidth, height:divQuote.offsetHeight});

        console.log(divQuote.width,"  ",divQuote.height)

        const canvas = quote.current;

        const ctx = canvas.getContext("2d");

        ctx.rect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = color;
        ctx.fill();

        canvasTxt.fontSize = 32*5;
        ctx.fillStyle = fontColor;
        canvasTxt.font =  fontStyle;
        //canvasTxt.fontColor = "black";

     
        
       

        


      //  ctx.font = "100px " + fontStyle;
      //  ctx.fillStyle = fontColor;
      //  ctx.fillText("Sarb", canvas.width / 2.5, canvas.height / 2);
        canvasTxt.lineHeight = 50*5;
        canvasTxt.drawText(ctx, text , 10, 0, quote.current.width-10, quote.current.height)

        canvasTxt.fontSize = 20*5;
        canvasTxt.drawText(ctx, "-" + signature, 0,  canvasDimentions.height*2, quote.current.width, quote.current.height - 100)





    },[color, fontStyle, fontColor, canvasDimentions]);

    


    return (<canvas className="w3-hide" style={{
        width: canvasDimentions.width,
        height: canvasDimentions.height    }} width={`${canvasDimentions.width*5}`} height={`${canvasDimentions.height*5}`} id="quoteCanvas" ref={quote}>
        
        
        
        
        
        
       </canvas> );



}


export default QuoteCanvas;