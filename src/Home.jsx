import { Link } from "react-router";

function Home() {
    return (
        <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white flex flex-col items-center py-16 px-4">
            <section className="w-full max-w-5xl text-center">
                <div className="bg-white shadow-lg rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-8">
                    <div className="flex-1">
                        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">Welkom bij MotoFront</h1>
                        <p className="text-gray-600 mb-6">
                            Ontdek, bekijk en beheer jouw motoren. Bewerken en verwijderen kan vanaf de detailpagina — overzichtelijk en veilig.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-3">
                            <Link
                                to="/motorcycles"
                                className="inline-block px-5 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
                            >
                                Bekijk Motoren
                            </Link>
                            <Link
                                to="/create"
                                className="inline-block px-5 py-3 bg-green-600 text-white rounded-lg shadow hover:bg-green-700 transition"
                            >
                                Nieuwe Motor toevoegen
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    <div className="bg-white p-6 rounded-lg shadow-sm border">
                        <h3 className="font-semibold text-lg mb-2">Overzicht</h3>
                        <p className="text-sm text-gray-600">Bekijk al je motoren op één plek. Klik op een motor voor details.</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-sm border">
                        <h3 className="font-semibold text-lg mb-2">Bewerken vanaf detail</h3>
                        <p className="text-sm text-gray-600">Bewerk en update motorinformatie alleen op de detailpagina voor betere workflow.</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-sm border">
                        <h3 className="font-semibold text-lg mb-2">Veilig verwijderen</h3>
                        <p className="text-sm text-gray-600">Verwijder motoren alleen via de detailpagina om per ongeluk verwijderen te voorkomen.</p>
                    </div>
                </div>
            </section>
        </main>
    );
}
export default Home;