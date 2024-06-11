import { Route, Routes } from 'react-router-dom'
import ComponentA from './ComponentA'
import ComponentB from './ComponentB'
import Home from './Home'

const Main = () => {
    return (
        <div className="routes-container">
            <Routes>
                <Route path="/componentA" element = {<ComponentA/>}/>
                <Route path="/componentB" element = {<ComponentB/>}/>
                <Route path="/" element = {<Home/>}/>
                
            </Routes>
        </div>

    )
}

export default Main