import { useEffect, useState } from "react";
import { DNA } from "react-loader-spinner";


function Dashboard({userData}) {
    
    const [products,setProducts]=useState([])
    const [loading,setLoading]=useState(true)
    const [image, setImage] = useState(null)
    const [Previmage, PrevsetImage] = useState(null)


    useEffect(
        ()=>{
         fetch(`http://localhost:3000/api/products`)
         .then(res=>res.json())
         .then(products=>{setProducts(products)
            setLoading(false)}
        )
        },[]
       )

    function onImageChange(e){
        if (e.target.files && e.target.files[0]) {
            setImage(e.target.files[0]);
            PrevsetImage(URL.createObjectURL(e.target.files[0]))
          }
    }
    
    function handleSubmit(e){
        e.preventDefault()
        const formData = new FormData();
  formData.append('name', e.target.pname.value);
  formData.append('price', e.target.Price.value);
  formData.append('description', e.target.desc.value);
  formData.append('brand', e.target.brand.value);
  formData.append('category', e.target.category.value);
  formData.append('images', image); // this field name must match multer's .single('images')

  fetch('http://localhost:3000/api/products', {
    method: 'POST',
    body: formData, 
  })
    .then(res => res.json())
    .then(data => {
      console.log('Product uploaded:', data);
    })
    .catch(err => {
      console.error('Upload error:', err);
    });
    }

    //    products.map((p)=>{
    //        console.log(p.name)

    //    })

      if(loading) return(<>
          <DNA
        visible={true}
        height="80"
        width="80"
        ariaLabel="dna-loading"
        wrapperStyle={{}}
        wrapperClassName="dna-wrapper"
        />
          </>) 
    return <>
    
        <div className="container">
                <h2>Dashboard</h2>

                <div className="container p-5">
  <ul className="nav nav-pills mb-3 border-bottom border-2" id="pills-tab" role="tablist">
    <li className="nav-item" role="presentation">
      <button className="nav-link text-dark fw-semibold active position-relative" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">All Products</button>
    </li>
    <li className="nav-item" role="presentation">
      <button className="nav-link text-dark fw-semibold position-relative" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Add Products</button>
    </li>
    <li className="nav-item" role="presentation">
      <button className="nav-link text-dark fw-semibold position-relative" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Contact</button>
    </li>
  </ul>
  <div className="tab-content border rounded-3 border-primary p-3 text-danger" id="pills-tabContent">
    <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
      <h2>Products</h2>

        <table>
          <thead>
            <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Price</th>
            </tr>
          </thead>
          <tbody>
          {products && products?.map((p)=>{
           return <tr key={p.id}>
           <td>
               {p.id}
           </td>
           <td>
               {p.name}
           </td>
           <td>
               {p.price}
           </td>
           <td>
               <img src={`http://localhost:3000${p.images}`} className="img-fluid" alt="" />
           </td>
       </tr>
           })}
          </tbody>
        </table>



    </div>
    <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
      <h2>Add</h2>
      
      <form onSubmit={handleSubmit} encType="form-data/multipart">
                <div className="row col-xl-6 mx-auto py-5">

                    <div className="col-xl-12">
                        <input className="form-control" type="text" placeholder="Product name" name="pname" />
                    </div>
                    <div className="col-xl-12 mt-4">
                        <textarea name="desc" className="form-control" placeholder="Description"  id=""></textarea>
                    </div>
                    <div className="col-xl-6 mt-4">
                        <input className="form-control" type="text" placeholder="Brand" name="brand" />
                    </div>
                    <div className="col-xl-6 mt-4">
                        <input className="form-control" type="text" placeholder="Price" name="Price" />
                    </div>
                    <div className="col-xl-12 mt-4">
                        <input className="form-control" type="text" placeholder="category" name="category" />
                    </div>
                    <div className="col-xl-12 mt-4">
                        <input className="form-control" onChange={onImageChange} type="file" placeholder="password" name="images" />
                    </div>
                    {Previmage && (

                    <img src={Previmage} alt="" />
                    )}
                    <div className="col-xl-12 mt-4">
                        <input className="btn btn-success" type="submit" value='Add'  />
                    </div>
                </div>
            </form>
    </div>
    <div className="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">
      <h2>Contact</h2>
      <p>Please check our more design @ <a target="_blank" href="https://codepen.io/Gaurav-Rana-the-reactor">Codepen</a></p>
    </div>
  </div>
</div>
        </div>
    </>
}

export default Dashboard;