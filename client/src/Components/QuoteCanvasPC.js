import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import canvasTxt from 'canvas-txt';

const QuoteCanvasPC = () => {
    const color = useSelector(state => state.color);
    const fontColor = useSelector(state => state.fontColor);
    const quote = useRef();
    const fontStyle = useSelector(state => state.fontStyle);
    const text = useSelector(state => state.quote);
    const signature = useSelector(state => state.signature);

    const [canvasDimentions, setDimentions] = useState({ width: 200, height: 300 });

    useEffect(() => {
        const divQuote = document.getElementById('myQuote');
        if (!divQuote) return;
        const width = divQuote.offsetWidth;
        const height = divQuote.offsetHeight;
        setDimentions(prev => (prev.width !== width || prev.height !== height ? { width, height } : prev));
    }, []);

    useEffect(() => {
        const canvas = quote.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");

        ctx.rect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = color;
        ctx.fill();

        canvasTxt.fontSize = 32 * 5;
        ctx.fillStyle = fontColor;
        canvasTxt.font = fontStyle;
        canvasTxt.lineHeight = 50 * 5;
        canvasTxt.drawText(ctx, text, 0, 0, canvas.width - 20, canvas.height - 350);

        canvasTxt.fontSize = 20 * 5;
        canvasTxt.drawText(ctx, "-" + signature, 0, canvasDimentions.height * 2, canvas.width - 20, canvas.height - 100);

    }, [color, fontStyle, fontColor, text, signature, canvasDimentions]);

    return (
        <canvas
            className="w3-hide"
            style={{
                width: canvasDimentions.width,
                height: canvasDimentions.height
            }}
            width={canvasDimentions.width * 5}
            height={canvasDimentions.height * 5}
            id="quoteCanvasPC"
            ref={quote}
        ></canvas>
    );
};

export default QuoteCanvasPC;
