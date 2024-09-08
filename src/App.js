import './App.css';
import Header from "./components/Header";
import MyName from "./components/MyName";
import Title from "./components/Title";
import Tech from "./components/Tech";


function App() {
    return (
        <div className="App">
            <div className="container">
                <div className="desktop-light-mode">
                    <Header/>
                    <MyName/>
                    <Title boldText="My Tech Stack" normalText="Technologies I’ve been working with recently" />
                    <Tech/>
                    <Title boldText="Projects" normalText="Things I’ve built so far" />
                </div>
            </div>
        </div>
    );
}

export default App;
