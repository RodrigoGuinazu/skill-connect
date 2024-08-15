import './navbar.css'
import { FaBars } from "react-icons/fa"
import { FaCartShopping } from "react-icons/fa6";


function Index(){

    return(
        <>
            <nav>
                <div className='nav-div-child-1'>
                    <FaBars size="2em" color='#FFF' />
                </div>
                <div className='nav-div-child-2'>
                    Skill Connect
                </div>
                <div className='nav-div-child-3'>
                    <FaCartShopping size="2em" color='#FFF'/>
                </div>
            </nav>
        </>
    )
}

export default Index