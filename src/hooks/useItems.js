import { useEffect, useState } from "react";

const useItems = () => {
    const [items, setItems] = useState([]);
    useEffect(() => {
        fetch('https://warehouse-server-0url.onrender.com/items')
            .then(res => res.json())
            .then(data => setItems(data))
    }, [])
    return [items, setItems]
}
export default useItems;