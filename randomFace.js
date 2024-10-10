async function fetchRandomFace() {
    try {
        // Fetch random face data from Perchance API
        const response = await fetch('https://perchance.org/api/face');
        const data = await response.json();

        // Display fetched data in the HTML element with id 'face-result'
        const faceResultDiv = document.getElementById('face-result');
        faceResultDiv.innerText = `Face: ${data.name} \n Description: ${data.description}`;

        console.log(data); // Optionally log the data to the console for debugging
    } catch (error) {
        // Handle errors if the fetch request fails
        console.error('Error fetching random face:', error);
        document.getElementById('face-result').innerText = 'Error fetching face data';
    }
}
