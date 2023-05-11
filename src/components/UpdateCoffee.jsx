import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const UpdateCoffee = () => {
    const coffee = useLoaderData();
    const { _id, name, qunatity, supplier, teast, category, details, url } = coffee;

    const handelUpdateCoffee = event => {
        event.preventDefault();

        const frm = event.target;

        const name = frm.name.value;
        const qunatity = frm.qunatity.value;
        const supplier = frm.supplier.value;
        const teast = frm.teast.value;
        const category = frm.category.value;
        const details = frm.details.value;
        const url = frm.url.value;

        // console.log(name, qunatity, supplier, teast, category, details, url);
        const updatedCoffee = { name, qunatity, supplier, teast, category, details, url }
        console.log(updatedCoffee);

        fetch(`http://localhost:4000/coffee/${_id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(updatedCoffee)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.modifiedCount > 0){
                    Swal.fire({
                        title: 'Success!',
                        text: 'Coffee updated successfully',
                        icon: 'success',
                        confirmButtonText: 'Ok'
                      })
                  }
            })

    }

    return (
        <div className='bg-[#F4F3F0] p-24'>
        <h2 className='text-3xl font-extrabold'>Update Coffee: {name}</h2>
        <form onSubmit={handelUpdateCoffee}>
            <div className='md:flex mb-6'>
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text">Coffee Name</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name='name' defaultValue={name} className="input input-bordered w-full" />
                    </label>
                </div>
                <div className="form-control md:w-1/2 ml-4">
                    <label className="label">
                        <span className="label-text">Available Qunatity</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name='qunatity' defaultValue={qunatity} className="input input-bordered w-full" />
                    </label>
                </div>
            </div>
            <div className='md:flex mb-6'>
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text">Supplier</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name='supplier' defaultValue={supplier} className="input input-bordered w-full" />
                    </label>
                </div>
                <div className="form-control md:w-1/2 ml-4">
                    <label className="label">
                        <span className="label-text">Teast</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name='teast' defaultValue={teast} className="input input-bordered w-full" />
                    </label>
                </div>
            </div>
            <div className='md:flex mb-6'>
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text">Category</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name='category' defaultValue={category} className="input input-bordered w-full" />
                    </label>
                </div>
                <div className="form-control md:w-1/2 ml-4">
                    <label className="label">
                        <span className="label-text">Details</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name='details'defaultValue={details} className="input input-bordered w-full" />
                    </label>
                </div>
            </div>
            <div className="form-control md:w-full mb-6">
                <label className="label">
                    <span className="label-text">Photo URL</span>
                </label>
                <label className="input-group">
                    <input type="text" name='url' defaultValue={url} className="input input-bordered w-full" />
                </label>
            </div>
            {/* <button className="btn btn-block">block</button> */}
            <input type='submit' value="Update Coffee" className="btn btn-block" />
        </form>

    </div>
    );
};

export default UpdateCoffee;