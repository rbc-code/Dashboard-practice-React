export function Home() {
    const [cars, setCars] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3001/cars')
            .then(response => setCars(response.data))
            .catch(error => console.error('Error fetching cars:', error));
    }, []);

    return (
        <div>
            <h2>Welcome to MyCarShop Dashboard</h2>
            <p>Manage your car details efficiently.</p>
            <ul className="list-group">
                {cars.map(car => (
                    <li key={car.id} className="list-group-item">
                        {car.name} - {car.model}
                    </li>
                ))}
            </ul>
        </div>
    );
}

