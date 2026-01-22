import { useNavigate, useParams } from "react-router";
import { useEffect, useState } from "react";

function Delete() {
    const params = useParams();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const deleteData = async (id) => {
            try {
                const response = await fetch(`http://145.24.237.20:8000/motoAlbum/${id}`, {
                    method: "DELETE",
                    headers: { Accept: "application/json" },
                });
                // some backends return empty body on delete; handle both
                let data = null;
                try { data = await response.json(); } catch (e) { /* ignore json parse */ }
                console.log("Delete response:", data ?? response.status);
                navigate("/motorcycles");
            } catch (err) {
                console.error("Fout bij het verwijderen:", err);
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        if (params.id) deleteData(params.id);
    }, [params.id, navigate]);

    if (loading) return <div>Deleting...</div>;
    if (error) return <div>Delete failed</div>;
    return null;
}

export default Delete;
