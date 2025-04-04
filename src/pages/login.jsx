import { useState } from "react";


function Login({loginData}){

    const [error, setError] = useState(null);

    async function handleSubmit(e){
        e.preventDefault()
        const email=e.target.email.value
        const password=e.target.password.value
        const res =await fetch('https://dummyjson.com/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              username:email,
              password: password,
            }),
          });
          const data =await res.json();
          if (res.ok){
            loginData(data.accessToken)
            sessionStorage.setItem('token',data.accessToken)
            sessionStorage.setItem('user',JSON.stringify(data))
          }
        //   .then(res => res.json())
        //   .then(user => loginData(user.accessToken))
        //   .then(console.log);
    }
    // console.log(user)
    return(
        <>
        <div className="py-5 container">
            <form onSubmit={handleSubmit}>
                <div className="row col-xl-6 mx-auto py-5">

                    <div className="col-xl-12 mt-4">
                        <input className="form-control" type="text" placeholder="email" name="email" />
                    </div>
                    <div className="col-xl-12 mt-4">
                        <input className="form-control" type="password" placeholder="password" name="password" />
                    </div>
                    <div className="col-xl-12 mt-4">
                        <input className="btn btn-success" type="submit" value='Login'  />
                    </div>
                </div>
            </form>

        </div>
        </>
    );
}


export default Login;