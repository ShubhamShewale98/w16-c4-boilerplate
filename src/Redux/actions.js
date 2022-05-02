// use axios for api call
// import axios from "axios";
import { GET_ERROR, GET_LOADING, GET_SUCCES } from "./actionTypes";

export const getSucess = (payload) =>( {
    type: GET_SUCCES,
    payload
})
export const getError = () => ({
    type: GET_ERROR

})
export const getLoading = () => ({
    type: GET_LOADING

})



 const getProductsData = ()=>(dispatch)=>{ 
fetch(`https://movie-fake-server.herokuapp.com/products`)
.then((res)=>res.json())
.then((res)=>dispatch(getSucess(res)))
.then(()=>dispatch(getError()))
}

const sortProducts = () => { };

const filterProducts = () => { };

export { getProductsData, sortProducts, filterProducts };
