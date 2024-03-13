import { useEffect, useState } from "react";

function App() {
    const [products, setProducts] = useState([]);
    // const [refresh, setRefresh] = useState(false);

    const endpoint = `${import.meta.env.VITE_API_URL}products/`;

    const fetchData = async () => {
        console.log("fetching...");

        const response = await fetch(endpoint);
        console.log(response);
        const data = await response.json();
        setProducts(data);
        console.log(data);
        return data;
    };

    const postData = async () => {
        const name = "test z";
        const description = "test z description";
        const body = { name, description };

        const response = await fetch(endpoint, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(body),
        });
        const data = await response.json();
        console.log(data);
        return data;
    };

    const handleSendData = async () => {
        const newData = await postData();
        if (newData) {
            setProducts((prevState) => [...prevState, newData]);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <>
            <ul>
                {products.map((product) => (
                    <li key={product.id}>{product.name}</li>
                ))}
            </ul>

            <button onClick={handleSendData}>Create Data</button>
        </>
    );
}

export default App;
