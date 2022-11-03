import Header from "../Header/Header"
import Body from "../Body/Body"
import Footer from "../Footer/Footer"
const Layout = (props) =>{
    const {onToggleShowContent,onToggleShowLeftNavbar,onToggleShowRightNavbar} = props
    return(
        <>
        <Header/>
        <Body onToggleShowContent={onToggleShowContent} onToggleShowLeftNavbar={onToggleShowLeftNavbar} onToggleShowRightNavbar={onToggleShowRightNavbar}/>
        <Footer/>
        </>
    )
}

export default Layout