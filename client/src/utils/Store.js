import { createSlice, configureStore } from '@reduxjs/toolkit';
import fonts from './fonts';


const randomRBG = () => {

    return Math.floor(Math.random() * 256);
}




const randomColor = () => {

    let r = randomRBG();
    let g = randomRBG();
    let b = randomRBG();

    let luma = 0.2126 * r + 0.7152 * g + 0.0722 * b;

    if (luma < 80) {
        return { color: "rgba(" + r + "," + g + "," + b + ",1)", fontColor: "white", fontStyle:fonts[Math.floor(Math.random() * fonts.length)]}
    } else {


        return { color: "rgba(" + r + "," + g + "," + b + ",1)", fontColor: "black", fontStyle: fonts[Math.floor(Math.random() * fonts.length)] }
    }


}





const dataSlice = createSlice({
    name:'dataSlice',
    initialState: {
        particlesLoaded: false,
        color: "pink",
        fontColor: "black",
        fontStyle:"Inder",
        quote: "",
        signature: "",
        showQuote:false
    },
    reducers: {

        loaded(state) {

            state.particlesLoaded = true;
        },

        changeColorAndFont(state) {
            
            console.log("sarb");

            let data = randomColor();

            state.color = data.color;
            state.fontColor = data.fontColor;
            state.fontStyle = data.fontStyle;
        },
        setQuoteAndSign(state, action) {

            state.quote = action.payload.quote;
            state.signature = action.payload.signature;
        },
        showQuote(state) {

            state.showQuote = true;

        },
        hideQuote(state) {
            state.showQuote = false;
        }



    }



});


const actions = dataSlice.actions;

export { actions };  

const store = configureStore({
    reducer: dataSlice.reducer
});

export default store;