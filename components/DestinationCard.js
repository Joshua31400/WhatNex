// Destination card component to display destination details

export default function DestinationCard({ destination }) {
    return (
        <div className="destination-card">
            <div
                className="destination-image"
                style={{backgroundImage: `url(${destination.image})`}}
                role="img"
                aria-label={`Photo of ${destination.ville}`}
            ></div>

            <div className="destination-info">
                <h2>{destination.ville}, {destination.pays}</h2>
                <p>{destination.description}</p>

                <div className="price-section">
                    <h3>Price estimates:</h3>
                    <ul>
                        <li><strong>Hotel:</strong> {destination.prix.hotel}</li>
                        <li><strong>Meals:</strong> {destination.prix.repas}</li>
                        <li><strong>Transport:</strong> {destination.prix.transport}</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
