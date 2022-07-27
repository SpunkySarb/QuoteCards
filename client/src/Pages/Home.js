import QuoteGeneratorPhone from "../Components/QuoteGeneratorPhone";
import Background from "../Particles/Background"
import colors from '../Particles/config/colors';
import amongUs from '../Particles/config/amongUs';
import useMediaQuery from "use-mediaquery";
import QuoteGeneratorPC from "../Components/QuoteGeneratorPC";
import info from '../Assets/info.svg';
import { Suspense, useEffect, useState } from "react";
import React from 'react';
import { useSelector } from 'react-redux';
import QuoteHolder from "../Components/QuoteHolder";
import QuoteHolderPhone from "../Components/QuoteHolderPhone";



const Home = () => {


    const headerStyle = { background: '#ED254E', color: 'white', fontFamily: 'Inder' }

    const isPC = useMediaQuery("(min-width: 760px)");

    const [infoVisibility, setInfoVisibility] = useState("w3-hide");

    const showQuote = useSelector(state=> state.showQuote);
    


    




    const backGround =  <Background configuration={colors} />;

    

    

    const loadingParticles = useSelector(state => state.particlesLoaded);

    useEffect(() => {

      



    },[]);










    


    if (!loadingParticles) {

        return (<div style={{ minWidth: '100vw', minHeight: '100vh' }} className="w3-display-container">
            <div style={headerStyle}

                className="w3-container w3-center  w3-xxlarge w3-card-4">
                Quote Cards
            </div>
            <div className="w3-hide">
            {backGround}</div>
            {isPC && <span className="fa fa-spinner w3-jumbo w3-spin w3-text-pink w3-display-middle"></span>}
            {!isPC && <div style={{}} className=" w3-display-middle w3-center w3-text-white">loading...</div>}

        </div>);

    }
    


    return (

        <div>
            
            <div style={headerStyle}
                className="w3-container w3-center  w3-xxlarge w3-card-4">
                Quote Cards
            </div>

           

            <br /><br /><div style={{ fontFamily: 'Inder' }} className="w3-text-white w3-large w3-center">Generate Quote Cards and<br />post on your Social Media...</div><br /><br />


            {!showQuote && ( !isPC ? <QuoteGeneratorPhone /> : <QuoteGeneratorPC/>)}


            {showQuote && (isPC ? <QuoteHolder />: <QuoteHolderPhone/>)}



            <div onClick={() => {


                setInfoVisibility("enterInfo ")

                setTimeout(() => {

                    setInfoVisibility(" exitInfo ")

                    setTimeout(() => {
                        setInfoVisibility(" w3-hide ")
                    },400);
                    
                },3000);
                

            }} style={{ position: 'fixed', background: '#ED254E', width: '80px', height: '80px', marginRight: '20px', marginBottom: '20px' }} className="w3-display-container w3-display-bottomright w3-xxxlarge w3-shadow w3-badge">
                <span className="w3-display-middle fa fa-question"></span>

                
                {isPC && <img style={{ backgroundWidth:'100vw', position: "relative", left: '-350px', bottom: '140px', width: '400px', height: 'auto' }} className={`${infoVisibility} `} src={info} />}

                {isPC && <div style={{ position: "relative", left: '-350px', bottom: '270px', width: '400px', height: 'auto' }} className={`w3-text-white ${infoVisibility} w3-large`}> Designed and Developed by<br />

                    <span className="w3-large fa fa-link"></span> <a className="w3-large" href="https://www.sarbzone.com">SarbZone.com</a>

                </div>}







                    {!isPC && <img style={{ position: "relative", left: '-245px', bottom: '110px', width: '300px', height: 'auto' }} src={info} className={`${infoVisibility} `} />}

                {!isPC && <div style={{ position: "relative", left: '-245px', bottom: '215px', width: '300px', height: 'auto' }} className={`w3-text-white ${infoVisibility}  w3-large`}>Designed and Developed by<br />

                    <span className="w3-large fa fa-link"></span> <a className="w3-large" target="_blank" href="https://www.sarbzone.com">SarbZone.com</a>

                </div>}








            </div>


            {backGround}
        </div>
        );



}


export default Home;