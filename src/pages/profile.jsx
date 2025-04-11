
function Profile({userData}){
    

    console.log('User Data',userData)
    if(!userData){
        return (
            <h1>User data not found</h1>
        )
    }
    return (
        <>
            <div className="container">
            <h2>User Profile</h2>

            

            <div class="d-flex align-items-start">
                <div class="nav flex-column nav-pills me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                    <button class="nav-link active" id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#v-pills-home" type="button" role="tab" aria-controls="v-pills-home" aria-selected="true">Personal Info</button>
                    <button class="nav-link" id="v-pills-profile-tab" data-bs-toggle="pill" data-bs-target="#v-pills-profile" type="button" role="tab" aria-controls="v-pills-profile" aria-selected="false">Address</button>
                    <button class="nav-link" id="v-pills-disabled-tab" data-bs-toggle="pill" data-bs-target="#v-pills-disabled" type="button" role="tab" aria-controls="v-pills-disabled" aria-selected="false">Bank details</button>
                    <button class="nav-link" id="v-pills-messages-tab" data-bs-toggle="pill" data-bs-target="#v-pills-messages" type="button" role="tab" aria-controls="v-pills-messages" aria-selected="false">Orders</button>
                </div>
                <div class="tab-content" id="v-pills-tabContent">
                    <div class="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab" tabindex="0">
                        
                        <div className="card col-xl-12 shadow-sm m-4 mx-5">
                            <div className="card-img">
                                    <img src={userData?.image} className="card-img-top" alt="" />
                            </div>
                            <div className="car-body p-4 bg-light">
                                <h2 className="card-title"> 
                                        {userData?.firstName	} {userData?.lastName}
                                </h2>
                                <div>
                                    <p className="card-text">{userData?.email}</p>
                                    <p className="card-text">{userData?.phone}</p>
                                    <p className="card-text">{userData?.gender}</p>

                                </div>

                            </div>
                        </div>
                        
                        </div>
                    <div class="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab" tabindex="0">

                        <div className="card col-xl-12 p-5 bg-light shadow">
                            
                                <div className="card-body">
                                    <h2 className="card-title fw-bold">
                                        Address
                                    </h2>
                                    <div className="card-text  fs-2">
                                    {userData?.address.address}
                                    {userData?.address.city},
                                    <br/>
                                    {userData?.address.state}
                                    ,
                                    {userData?.address.postalCode}
                                    </div>
                                </div>
                        </div>

                    </div>
                    <div class="tab-pane fade" id="v-pills-disabled" role="tabpanel" aria-labelledby="v-pills-disabled-tab" tabindex="0">

                    <div className="card col-xl-12 p-5 bg-primary text-white shadow">
                            
                            <div className="card-body">
                                <h2 className="card-title fw-bold">
                                    Card Details
                                </h2>
                                <div className="card-text  fs-2">
                                {userData?.bank.cardNumber}
                                <br/>
                                   <div className="w-100 d-flex justify-content-between">
                                   <div>
                                   {userData?.bank.cardExpire}
                                   </div>
                                            <div>
                                            {userData?.bank.cardType	}

                                            </div>
                                   </div>
                                </div>
                            </div>
                    </div>

                    </div>
                    <div class="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab" tabindex="0">...</div>
                    <div class="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab" tabindex="0">...</div>
                </div>
                </div>
            </div>
        </>
    );
}



export default Profile;