
import bg from '../Assets/QGPhone.svg';
import Quote from './Quote';
import { useDispatch } from 'react-redux';
import { actions } from '../utils/Store';
import QuoteCanvasPC from './QuoteCanvasPC';

const QuoteHolder = () => {


    const storeDispatcher = useDispatch();
     
    


    const download = () => {
        // Export the quote canvas directly to a PNG image
        const anchor = document.createElement('a');
        anchor.href = document.querySelector("#quoteCanvasPC").toDataURL('image/png');
        anchor.download = 'image.png';
        anchor.click();
    }







    return (<div style={{ margin: 'auto', maxWidth: '40%', minHeight: '40%', backgroundImage: `url(${bg})`, backgroundSize: 'cover' }}
        className=" w3-container w3-card-4 w3-round-xlarge">
        <br />

        <Quote/> <QuoteCanvasPC/>

        <div style={{ fontFamily: 'Inder', width: '90%', margin: '0 auto' }} className="w3-bar">
            <br />
            <div onClick={() => { storeDispatcher(actions.hideQuote()); } } style={{ width: '5.5vw' }} className="w3-button slide-in-bck-left w3-large w3-card-4 w3-round-large w3-black">cancel</div>
            <div onClick={() => { storeDispatcher(actions.changeColorAndFont()); } } style={{ width: '7vw' }} className="w3-button w3-right w3-margin-left slide-in-bck-left w3-large w3-card-4 w3-round-large w3-black">shuffle</div>
            <br /><br />
            <div onClick={download } style={{ width: '34.1vw' }} className="w3-button w3-card-4 w3-large w3-center   w3-round-large slide-in-bck-right w3-black">Download</div>


        </div>

        <br />


    </div>);
}


export default QuoteHolder;
