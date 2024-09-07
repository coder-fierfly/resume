import './App.css';
import Header from "./components/Header";
import MyName from "./components/MyName";


function App() {
    return (
        <div className="App">
            <div className="container">
                <div className="desktop-light-mode">

                    <Header/>
                    <MyName/>
                </div>
            </div>
        </div>
    );
}

export default App;
