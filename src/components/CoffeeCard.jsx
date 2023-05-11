import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const CoffeeCard = ({ coffee, coffees, setCoffee }) => {
    const { _id, name, qunatity, supplier, teast, category, details, url } = coffee;

    const handelDelete = _id => {
        console.log(_id);

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {

                // console.log("Confrom");
                fetch(`http://localhost:4000/coffee/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your Coffee has been deleted.',
                                'success'
                            )
                            const remaining = coffees.filter( cof => cof._id !== _id);
                            setCoffee(remaining);
                        }
                    })
            }
        })
    }

    return (
        <div className="card card-side bg-base-100 shadow-xl">
            <figure><img src={url} alt="Movie" /></figure>
            <div className="flex justify-between w-full pr-8">
                <div>
                    <h2 className="card-title">{name}</h2>
                    <p>{supplier}</p>
                    <p>{category}</p>
                    <p>{qunatity}</p>
                </div>
                <div className="card-actions justify-end">
                    <div className="btn-group btn-group-vertical space-y-3">
                        <button className="btn">View</button>
                        {/* <button className="btn">Edit</button> */}
                        <Link to={`updateCoffee/${_id}`}>
                            <button className="btn">Edit</button>
                        </Link>
                        <button onClick={() => handelDelete(_id)} className="btn">Delete</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoffeeCard;