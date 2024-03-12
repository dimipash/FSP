import { useEffect, useState } from "react";

function App() {
    const [data, setData] = useState([]);

    useEffect(() => {
        async function fetchData() {
            console.log(import.meta.env.VITE_API_URL);
            try {
                const response = await fetch(
                    `${import.meta.env.VITE_API_URL}posts`
                );
                if (!response.ok) {
                    throw Error("Network response was not OK");
                }
                const result = await response.json();
                console.log(result);
            } catch (error) {
                console.log("Error fetching data:", error);
            }
        }
        fetchData();
    }, []);

    return (
        <>
            <h1>Hello, World!</h1>
        </>
    );
}

export default App;
