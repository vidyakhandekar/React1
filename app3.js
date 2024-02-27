import ReactDOM from "react-dom/client";

const Title =()=>(   
     <img src="https://obs.line-scdn.net/0m0339dd5b72513e8a8d6127b836e5ecf1e128f1da5cb7" 
     alt="logo"
     className="logo-img" />
);
const Header=()=>
    (
        <div className="header">
         <Title/>
         <div className="nav-items">
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <li>Cart</li>
            </ul>
         </div>


        </div> 
    );
const Body =()=>(
 <h2>body</h2>
);
const Footer=()=>(
    <h2>Footer</h2>
)
    
   


    const App=()=>(
        <>
            <Header/>
            <Body/>
            <Footer/>
        </>
        

    )
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>);