import {useEffect, useState} from "react";
import Motor from "./Motor.jsx";


function App() {
    const [motos, setMotos] = useState([]);
    const getMoto = async () => {
        console.log('haal notities op');

        try {
            const response = await fetch("http://145.24.237.20:8000/motoAlbum/", {
                method: 'GET',
                headers: {

                    Accept: 'application/json'
                }
            });
            const data = await response.json();
            console.log(data); //data.items is de array met notities

            setMotos(data.items);
        } catch (error) {


            console.error('Fout bij het ophalen van notities:', error);
        }
    }

    useEffect(() => {
        getMoto();
    }, []);
    return <>
        <ul>
            {motos.map((moto) => (
                <Motor key={moto.id} moto={moto}/>
            ))}
        </ul>
    </>
}

export default App;

