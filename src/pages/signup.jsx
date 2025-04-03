

function SignUp(){



    function handleSubmit(e){
        e.preventDefault()
        const fname=e.target.fname.value
        const lname=e.target.lname.value
        const email=e.target.email.value
        const password=e.target.password.value

        fetch('https://dummyjson.com/users/add', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              firstName: fname,
              lastName: lname,
              email: email,
              username:email,
              password:password
              /* other user data */
            })
          })
          .then(res => res.json())
          .then(alert('User is created'));
          
    }

    return(
        <>
        <div className="py-5 container">
            <form onSubmit={handleSubmit}>
                <div className="row col-xl-6 mx-auto py-5">

                    <div className="col-xl-6">
                        <input className="form-control" type="text" placeholder="first name" name="fname" />
                    </div>
                    <div className="col-xl-6">
                        <input className="form-control" type="text" placeholder="last name" name="lname" />
                    </div>
                    <div className="col-xl-12 mt-4">
                        <input className="form-control" type="email" placeholder="email" name="email" />
                    </div>
                    <div className="col-xl-12 mt-4">
                        <input className="form-control" type="password" placeholder="password" name="password" />
                    </div>
                    <div className="col-xl-12 mt-4">
                        <input className="btn btn-success" type="submit" value='Signup'  />
                    </div>
                </div>
            </form>

        </div>
        </>
    );
}


export default SignUp;