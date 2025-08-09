import { useDispatch } from "react-redux";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { actions } from '../utils/Store';


const Background = (props) => {

    const dispatchAction = useDispatch();





    const particlesInit = async (main) => {
        if (process.env.NODE_ENV !== 'production') {
            console.log(main);
        }

        // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(main);
    };

    const particlesLoaded = (container) => {
        if (process.env.NODE_ENV !== 'production') {
            console.log(container);
        }

       
            dispatchAction(actions.loaded());

      
        

    };



    return (

        <Particles id="tsparticles" init={particlesInit} loaded={particlesLoaded} options={props.configuration} />
        
        );


}

export default Background;
