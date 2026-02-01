import {useEffect, useState} from "react";
import Motor from "./Motor.jsx";


function App() {
    const [motos, setMotos] = useState([]);
    // Pagination state
    const [page, setPage] = useState(1);
    const [pageSize, setPageSize] = useState(6);
    // Loading state
    const [loading, setLoading] = useState(true);

    const getMoto = async () => {
        console.log('haal motor album  op');
        setLoading(true);
        try {
            const response = await fetch("http://145.24.237.20:8000/motoAlbum/", {
                method: 'GET',
                headers: {

                    Accept: 'application/json'
                }
            });
            const data = await response.json();
            console.log(data); //data.items is de array met notities

            setMotos(data.items || []);
            setPage(1); // reset naar eerste pagina bij nieuwe fetch
        } catch (error) {


            console.error('Fout bij het ophalen van motor data:', error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        getMoto();
    }, []);

    // Simple pagination calculations
    const totalItems = motos.length;
    const totalPages = Math.max(1, Math.ceil(totalItems / pageSize));
    useEffect(() => {
        // ensure current page is valid if pageSize or data changed
        setPage(prev => Math.min(Math.max(1, prev), totalPages));
    }, [totalPages]);

    const startIndex = (page - 1) * pageSize;
    const visibleMotos = motos.slice(startIndex, startIndex + pageSize);

    const goToPage = (p) => setPage(Math.min(Math.max(1, p), totalPages));
    const handlePrev = () => goToPage(page - 1);
    const handleNext = () => goToPage(page + 1);

    const handlePageSizeChange = (e) => {
        setPageSize(Number(e.target.value));
        setPage(1);
    }

    return <>
        <div className="p-4">
            <div className="flex items-center justify-between mb-4">
                <div>
                    <label className="mr-2 text-sm text-gray-700">Items per pagina:</label>
                    <select value={pageSize} onChange={handlePageSizeChange} className="border rounded px-2 py-1">
                        <option value={4}>4</option>
                        <option value={6}>6</option>
                        <option value={9}>9</option>
                        <option value={12}>12</option>
                    </select>
                </div>

                <div className="text-sm text-gray-600">
                    {totalItems === 0 ? "Geen motoren" : `Pagina ${page} van ${totalPages} — ${totalItems} items`}
                </div>
            </div>

            {loading ? (
                <div className="text-center py-12 text-gray-600">Loading...</div>
            ) : totalItems === 0 ? (
                <div className="text-center py-12 text-gray-600">Geen motoren gevonden.</div>
            ) : (
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {visibleMotos.map((moto) => (
                        <Motor key={moto.id} moto={moto}/>
                    ))}
                </ul>
            )}

            <div className="flex items-center justify-center gap-3 mt-6">
                <button
                    onClick={handlePrev}
                    disabled={page === 1}
                    className={`px-4 py-2 rounded ${page === 1 ? "bg-gray-200 text-gray-400" : "bg-blue-600 text-white hover:bg-blue-700"}`}
                >
                    Vorige
                </button>

                <div className="px-4 py-2 text-sm text-gray-700">
                    Pagina {page} van {totalPages}
                </div>

                <button
                    onClick={handleNext}
                    disabled={page === totalPages}
                    className={`px-4 py-2 rounded ${page === totalPages ? "bg-gray-200 text-gray-400" : "bg-blue-600 text-white hover:bg-blue-700"}`}
                >
                    Volgende
                </button>
            </div>
        </div>
    </>
}

export default App;

