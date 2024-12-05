export function Edit() {
    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [model, setModel] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:3001/cars/${id}`, { name, model })
            .then(() => {
                alert('Car details updated successfully!');
                setId('');
                setName('');
                setModel('');
            })
            .catch(error => console.error('Error updating car:', error));
    };

    return (
        <div>
            <h2>Edit Car Details</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="carId" className="form-label">Car ID</label>
                    <input
                        type="text"
                        className="form-control"
                        id="carId"
                        value={id}
                        onChange={(e) => setId(e.target.value)}
                        placeholder="Enter car ID"
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="carName" className="form-label">Car Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="carName"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Enter new car name"
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="carModel" className="form-label">Car Model</label>
                    <input
                        type="text"
                        className="form-control"
                        id="carModel"
                        value={model}
                        onChange={(e) => setModel(e.target.value)}
                        placeholder="Enter new car model"
                    />
                </div>
                <button type="submit" className="btn btn-warning">Update Car</button>
            </form>
        </div>
    );
}

