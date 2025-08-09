import bg from '../Assets/QGPhone.svg';
import { useDispatch } from 'react-redux';
import { useRef } from 'react';
import { actions } from '../utils/Store';
import QuotePhone from './QuotePhone';
import QuoteCanvas from './QuoteCanvas';

const QuoteHolderPhone = () => {

    const storeDispatcher = useDispatch();
    const quoteRef = useRef(null);

    const downloadPhone = () => {




     /**   html2canvas(document.querySelector("#myQuotePhone"), {
            backgroundColor: color,
            proxy: "https://fonts.google.com",
            useCORS: true,

        }).then(canvas => {


*/

       


            //document.body.appendChild(canvas)


            let anchor = document.createElement('a');
        anchor.href = document.querySelector("#quoteCanvas").toDataURL('image/png');
            anchor.download = 'image.png';
            anchor.click();

           
       // });





  
            /*
             *
             *  
             *  let anchor = document.createElement('a');
             anchor.href = canvas.toDataURL('image/png');
             anchor.download = 'Image.png';
             anchor.click();
             */
 
 


       


    

    }







    return (<><div style={{ margin: 'auto', minWidth: '40%', minHeight: '40%', backgroundImage: `url(${bg})`, backgroundSize: 'cover' }}
        className=" w3-container w3-card-4 w3-round-xlarge">
        <br />

        <QuotePhone quoteRef={quoteRef} /> <QuoteCanvas containerRef={quoteRef} />

        <div style={{ fontFamily: 'Inder', width: '90%', margin: '0 auto' }} className="w3-bar">
            <br />
            <div onClick={() => { storeDispatcher(actions.hideQuote()); }} style={{ width: '30vw' }} className="w3-button slide-in-bck-left w3-large w3-card-4 w3-round-large w3-black">cancel</div>
            <div onClick={() => { storeDispatcher(actions.changeColorAndFont()); }} style={{ width: '30vw' }} className="w3-button w3-right w3-margin-left slide-in-bck-left w3-large w3-card-4 w3-round-large w3-black">shuffle</div>
            <br /><br />
            <div onClick={downloadPhone} style={{ width: '82vw' }} className="w3-button w3-card-4 w3-large w3-center   w3-round-large slide-in-bck-right w3-black">Download</div>


        </div>

        <br />


    </div><br /><br /><br /><br /><br /><br /><br /></>);
}


export default QuoteHolderPhone;
