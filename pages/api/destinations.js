import fs from 'fs';
import path from 'path';

// API handler to fetch a random destination from the JSON data file
export default function handler(req, res) {
    try {
        const dataFilePath = path.join(process.cwd(), 'data', 'destinations.json');

        const fileContents = fs.readFileSync(dataFilePath, 'utf8');

        const destinations = JSON.parse(fileContents);

        if (!destinations || destinations.length === 0) {
            return res.status(404).json({ error: 'No destinations found' });
        }

        const randomIndex = Math.floor(Math.random() * destinations.length);
        const destination = destinations[randomIndex];

        res.status(200).json(destination);
    } catch (error) {
        console.error('Error retrieving destination data:', error);
        res.status(500).json({ error: 'Unable to fetch destination' });
    }
}
