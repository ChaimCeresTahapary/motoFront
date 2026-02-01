import { Link } from "react-router";

function Products ({ moto }) {
    return (
        <div className="bg-white shadow-md rounded-lg p-6 mb-4 border border-gray-200">
            <h1 className="text-2xl font-semibold text-gray-900">{moto.titel}</h1>
            <h2 className="text-gray-600 mt-1">Rijbewijs: {moto.rijbewijs}</h2>
            <h2 className="text-gray-500 text-sm mb-4">ID: {moto.id}</h2>

            <div className="flex gap-4 mt-4">
                <Link
                    to={`/motorcycles/${moto.id}`}
                    className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
                >
                    Motor detail
                </Link>
            </div>
        </div>
    );
}

export default Products;