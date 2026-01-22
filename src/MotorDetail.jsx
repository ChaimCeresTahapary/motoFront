import { Link, useParams } from "react-router";
import { useEffect, useState } from "react";



function ProductDetail() {
    const params = useParams();
    const id = params.id;
    const [motos, setMotos] = useState(null);


        const getMoto = async (id) => {
            try {
                const response = await fetch(`http://145.24.237.20:8000/motoAlbum/${id}`, { method: "GET", headers: { Accept: "application/json" } });
                const data = await response.json();
                setMotos(data);
            } catch (error) {
                console.error("Fout bij het ophalen van notities:", error);
            }
        };

        useEffect(() => {

        getMoto(params.id);
    }, [params.id]);

    return (
        <div className="bg-white shadow-md rounded-lg p-8 border border-gray-200 max-w-3xl mx-auto mt-10">
            <h1 className="text-3xl font-bold text-gray-900 mb-6">Product Detail – {id}</h1>

            <h2 className="text-2xl font-semibold text-gray-800 mb-2">{motos?.titel ?? "Nog geen titel"}</h2>

            <p className="text-gray-600 mb-4">Brand: {motos?.merk ?? "Nog geen brand"}</p>

            <p className="text-gray-700 leading-relaxed whitespace-pre-line">License: {motos?.rijbewijs ?? "Nog geen license"}</p>

            <Link to={`/edit/${id}`} className="hover:text-gray-300 transition">Bewerk dit product</Link>
        </div>
    );
}

export default ProductDetail;
