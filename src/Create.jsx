import { useState } from "react";
import { useNavigate } from "react-router";

const API_BASE = "http://145.24.237.20:8000/motoAlbum/";

function FormComponent() {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        titel: "",
        merk: "",
        rijbewijs: "",
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    async function createProduct() {
        try {
            const response = await fetch(API_BASE, {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    titel: formData.titel,
                    merk: formData.merk,
                    rijbewijs: formData.rijbewijs,
                }),
            });

            const data = await response.json();
            navigate(`/motorcycles/${data.id}`);
        } catch (error) {
            console.error("Er is een fout opgetreden:", error);
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        createProduct();
    };

    return (
        <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-8 max-w-xl mx-auto border border-gray-200">
            <h1 className="text-2xl font-bold mb-6 text-gray-900">Nieuw Product</h1>

            <div className="mb-4">
                <label htmlFor="titel" className="block font-medium text-gray-700 mb-1">Title</label>
                <input type="text" id="titel" name="titel" value={formData.titel} onChange={handleInputChange}
                       className="w-full border border-gray-300 rounded-md px-3 py-2" />
            </div>

            <div className="mb-4">
                <label htmlFor="merk" className="block font-medium text-gray-700 mb-1">Brand</label>
                <textarea id="merk" name="merk" value={formData.merk} onChange={handleInputChange}
                          className="w-full border border-gray-300 rounded-md px-3 py-2 h-28 resize-none" />
            </div>

            <div className="mb-6">
                <label htmlFor="rijbewijs" className="block font-medium text-gray-700 mb-1">License</label>
                <input type="text" id="rijbewijs" name="license" value={formData.rijbewijs} onChange={handleInputChange}
                       className="w-full border border-gray-300 rounded-md px-3 py-2" />
            </div>

            <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-md font-semibold hover:bg-blue-700 transition">
                Verzenden
            </button>
        </form>
    );
}

export default FormComponent;
