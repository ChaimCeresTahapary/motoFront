import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";

const API_BASE = "http://145.24.237.20:8000/motoAlbum/";

function EditComponent() {
    const navigate = useNavigate();
    const params = useParams();
    const id = params.id;

    const [formData, setFormData] = useState({
        titel: "",
        merk: "",
        rijbewijs: "",
    });

    const getMoto = async (id) => {
        try {
            const response = await fetch(`http://145.24.237.20:8000/motoAlbum/${id}`, { method: "GET", headers: { Accept: "application/json" } });
            const data = await response.json();
            setFormData({
                titel: data.titel || "",
                merk: data.merk || "",
                rijbewijs: data.rijbewijs || "",
            });
        } catch (error) {
            console.error("Fout bij het ophalen van notities:", error);
        }
    };

    useEffect(() => {
        if (id) getMoto(id);
    }, [id]);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    async function updateProduct() {
        try {
            const response = await fetch(`${API_BASE}/${id}`, {
                method: "PUT",
                headers: { Accept: "application/json", "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            const data = await response.json();
            navigate(`/motorcycles/${id}?updated=${Date.now()}`);
        } catch (error) {
            console.error("Er is een fout:", error);
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        updateProduct();
    };

    return (
        <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-8 max-w-xl mx-auto border border-gray-200 mt-10">
            <h1 className="text-3xl font-bold mb-6 text-gray-900">Product Bewerken</h1>

            <div className="mb-4">
                <label htmlFor="title" className="block font-medium text-gray-700 mb-1">Title</label>
                <input type="text" id="title" name="title" value={formData.titel} onChange={handleInputChange}
                       className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none" />
            </div>

            <div className="mb-4">
                <label htmlFor="brand" className="block font-medium text-gray-700 mb-1">Brand</label>
                <textarea id="brand" name="brand" value={formData.merk} onChange={handleInputChange}
                          className="w-full border border-gray-300 rounded-md px-3 py-2 h-28 resize-none focus:ring-2 focus:ring-blue-500 focus:outline-none" />
            </div>

            <div className="mb-6">
                <label htmlFor="license" className="block font-medium text-gray-700 mb-1">License</label>
                <input type="text" id="license" name="license" value={formData.rijbewijs} onChange={handleInputChange}
                       className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none" />
            </div>

            <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-md font-semibold hover:bg-blue-700 transition">Opslaan</button>
        </form>
    );
}

export default EditComponent;
