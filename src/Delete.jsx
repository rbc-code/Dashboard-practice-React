export function Delete() {
    const [id, setId] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.delete(`http://localhost:3001/cars/${id}`)
            .then(() => {
                alert('Car deleted successfully!');
                setId('');
            })
            .catch(error => console.error('Error deleting car:', error));
    };

    return (
        <div>
            <h2>Delete Car</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="carId" className="form-label">Car ID</label>
                    <input
                        type="text"
                        className="form-control"
                        id="carId"
                        value={id}
                        onChange={(e) => setId(e.target.value)}
                        placeholder="Enter car ID to delete"
                    />
                </div>
                <button type="submit" className="btn btn-danger">Delete Car</button>
            </form>
        </div>
    );
}
