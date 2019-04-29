


export function login(username,password) {
   console.log(username , password);
   return {
       type : "LOGIN",
       payload : {
           username : username,
           password : password
       }
   }
}



