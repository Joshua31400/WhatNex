import { useState, useEffect } from 'react';
import Head from 'next/head';
import DestinationCard from '../components/DestinationCard';

//Home page component that displays a random travel destination
export default function Home() {
    // State to store the current destination
    const [destination, setDestination] = useState(null);

    // Fetch a random destination from the API
    const fetchDestination = async () => {
        try {
            const response = await fetch('/api/destinations');
            if (!response.ok) {
                throw new Error('Problem fetching destination data');
            }
            const data = await response.json();
            setDestination(data);
        } catch (err) {
            console.error(err);
        }
    };

    // Fetch a destination when the component mounts
    useEffect(() => {
        fetchDestination();
    }, []);

    return (
        <div className="container">
            <Head>
                <title>Where Nex</title>
            </Head>

            <main>
                <h1>Where Nex</h1>
                <p className="subtitle">Your next adventure awaits</p>

                {destination && <DestinationCard destination={destination} />}

                <button onClick={fetchDestination} className="refresh-btn">
                    New destination
                </button>
            </main>

            <footer>
                <p>© 2023 Where Nex - Developed by Joshua BUDGEN and Pedro MARTINS</p>
            </footer>
        </div>
    );
}
