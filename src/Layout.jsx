import { Link, Outlet } from "react-router";

function Layout() {
    return (
        <div className="min-h-screen bg-gray-100 flex flex-col">
            <header className="bg-gray-900 text-white shadow-md">
                <nav className="max-w-5xl mx-auto flex gap-6 px-6 py-4">
                    <Link to="/" className="hover:text-gray-300 transition">
                        Home
                    </Link>
                    <Link to="/motorcycles" className="hover:text-gray-300 transition">
                        Motorcycles
                    </Link>
                    <Link to="/motorcycles/:id" className="hover:text-gray-300 transition">
                        motorcycle detail
                    </Link>
                    <Link to="/create" className="hover:text-gray-300 transition">
                        Create
                    </Link>
                </nav>
            </header>

            <main className="flex-1 max-w-5xl mx-auto w-full px-6 py-10">
                <Outlet />
            </main>
        </div>
    );
}

export default Layout;
