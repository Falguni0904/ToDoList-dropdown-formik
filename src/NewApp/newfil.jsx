import {Link,Route,Routes} from 'react-router-dom'
// import './newfil.css'

function NewApp(){
   
    return(
        <>
        <nav>
        <ul>
            <Link  to="/home"><li>Home</li></Link>
            <Link  to="/contect"><li>Contect</li></Link>
            <Link  to="/menu"><li>Menu</li></Link>
            <Link  to="/blog"><li>Blog</li></Link>
        </ul>
        </nav>
        <Routes>
             <Route path="/home" element={<h1>hello</h1>}/>
             <Route path="/contect" element={<h1>hello 1</h1>}/>
             <Route path="/menu" element={<h1>hello 2</h1>}/>
             <Route path="/blog" element={<h1>hello 3</h1>}/>
          </Routes>
          </>)
}
export default NewApp;