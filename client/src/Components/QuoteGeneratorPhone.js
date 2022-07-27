import { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import bg from '../Assets/QGPhone.svg';
import { actions } from '../utils/Store';
const QuoteGeneratorPhone = () => {

    const quote = useRef();
    const sign = useRef();
 

    const myQuote = useSelector(state => state.quote);
    const signature = useSelector(state => state.signature);


    const quoteAndSignDispatcher = useDispatch();
    const displayQuoteDispatcher = useDispatch();

    









    return (<div style={{ margin:'auto', minWidth: '96%', minHeight: '40%', backgroundImage: `url(${bg})`, backgroundSize: 'cover' }}
        className=" w3-container w3-card-4 w3-round-xlarge">
        <br/>
        <textarea  defaultValue={myQuote} ref={quote} spellCheck="false" placeholder="'Your Sayings'" style={{ boxShadow:'inset 4px 4px 4px rgba(0, 0, 0, 0.25)', fontFamily:'Inder', width:'90%',height:'140px', padding:'55px 0', margin:'0 auto'}} type='text' className="   w3-input w3-text-black slide-in-left w3-round-xlarge w3-large w3-margin-top w3-margin-bottom w3-center" />
        <br />
        <input defaultValue={signature} ref={sign} spellCheck="false" placeholder="- Your Signature.." style={{ boxShadow: 'inset 4px 4px 4px rgba(0, 0, 0, 0.25)', fontFamily: 'Inder', width: '90%', margin: '0 auto' }} type='text' className="w3-input w3-text-black w3-large slide-in-right  w3-round-large w3-margin-bottom w3-center" />
        
        <div style={{ fontFamily: 'Inder', width: '90%', margin: '0 auto' }} className="w3-bar">

            <div onClick={() => { quote.current.value = ""; sign.current.value = ""; }} className="w3-button w3-large slide-in-bck-left w3-card-4 w3-round-large w3-black">clear</div>

            <div onClick={


                () => {

                    quoteAndSignDispatcher(actions.setQuoteAndSign({
                        quote: quote.current.value,
                        signature: sign.current.value
                    }));
                   
                    displayQuoteDispatcher(actions.showQuote());
                }



            } style={{ width: '50vw' }} className="w3-button w3-card-4 w3-large w3-right  slide-in-bck-right w3-round-large w3-black">Generate</div>


        </div>

        <br/>
        

    </div>);
}


export default QuoteGeneratorPhone;