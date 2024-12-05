export function Update() {
    const [name, setName] = useState('');
    const [model, setModel] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3001/cars', { name, model })
            .then(() => {
                alert('Car added successfully!');
                setName('');
                setModel('');
            })
            .catch(error => console.error('Error adding car:', error));
    };

    return (
        <div>
            <h2>Add New Car</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="carName" className="form-label">Car Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="carName"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Enter car name"
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
                        placeholder="Enter car model"
                    />
                </div>
                <button type="submit" className="btn btn-primary">Add Car</button>
            </form>
        </div>
    );
}

