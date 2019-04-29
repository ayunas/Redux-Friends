import axios from 'axios';



export function login(credentials) {
   console.log(credentials);
   return dispatch => {
        dispatch({type: "LOADING"});
        axios.post('http://localhost:5000/api/login', credentials)
             .then( res => {
                 console.log(res);
                 dispatch({
                    type : "LOGIN"
                })
             })
             .catch( err => {
                 console.log(err);
             })
   }
}



