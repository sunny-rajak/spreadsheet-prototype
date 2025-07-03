import Toolbar from "./components/Toolbar";
import Table from "./components/Table";

function App() {
    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Spreadsheet Prototype</h1>
            <Toolbar />
            <Table />
        </div>
    );
}

export default App;
