// ES6 Modules or TypeScript
import Swal from 'sweetalert2'


const AddCoffee = () => {
    const handelAddCoffee = event => {
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
        const newCoffee = { name, qunatity, supplier, teast, category, details, url }
        console.log(newCoffee);

        fetch('http://localhost:4000/coffee', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newCoffee)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.insertedId){
                    Swal.fire({
                        title: 'Success!',
                        text: 'Coffee added successfully',
                        icon: 'success',
                        confirmButtonText: 'Ok'
                      })
                    //   form.reset();
                  }
            })

    }
    return (
        <div className='bg-[#F4F3F0] p-24'>
            <h2 className='text-3xl font-extrabold'>Add a Coffee</h2>
            <form onSubmit={handelAddCoffee}>
                <div className='md:flex mb-6'>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Coffee Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name='name' placeholder="Coffee Name" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Available Qunatity</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name='qunatity' placeholder="Available Qunatity" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <div className='md:flex mb-6'>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Supplier</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name='supplier' placeholder="Supplier Name" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Teast</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name='teast' placeholder="Teast" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <div className='md:flex mb-6'>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Category</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name='category' placeholder="Category" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Details</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name='details' placeholder="Details" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <div className="form-control md:w-full mb-6">
                    <label className="label">
                        <span className="label-text">Photo URL</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name='url' placeholder="Photo URL" className="input input-bordered w-full" />
                    </label>
                </div>
                {/* <button className="btn btn-block">block</button> */}
                <input type='submit' value="Add Coffee" className="btn btn-block" />
            </form>

        </div>
    );
};

export default AddCoffee;