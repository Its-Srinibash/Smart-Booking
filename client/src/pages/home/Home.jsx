import Navbar from "../../components/navbar/Navbar"
import Header from "../../components/header/Header"
import "./home.css"
import Featured from "../../components/featured/Featured"
import PropertyList from "../../components/propertyList/PropertyList"
import FeaturedProperties from "../../components/featuredProperties/FeaturedProperties"
import MailList from "../../components/mailList/MailList"
import Footer from "../../components/footer/Footer"
import { useEffect, useRef } from "react"
import { useContext } from "react"
import { AuthContext } from "../../context/AuthContext"

const Home =()=>{
    const logoutTimerIdRef = useRef(null);
    const{dispatch}=useContext(AuthContext)

    return(
        <div>
            
            <Navbar/>
           <div className="shre">
            
            
            <Header/>
            </div> 
            
            <div className="homeContainer">
                <Featured/>
                <h1 className="homeTitle">Property Type</h1>
                <PropertyList/>

                <h1 className="homeTitle">Best Deals</h1>
                <FeaturedProperties/>
                <MailList/>
                
                <Footer/>
                
               
               
            </div>
        </div>
    )
}

export default Home