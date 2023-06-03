async function fetchData(): Promise<Country[] | undefined> {
    try {
        const response = await fetch('/data/data.json');

        return response.ok ? await response.json() : undefined;
    } catch (e) {
        alert('Error while fetching data : ');
    }
}

export default fetchData;
