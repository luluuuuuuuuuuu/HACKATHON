import BannerTop from '../Components/NavBar/BannerTop'
import Navbar from '../Components/NavBar/NavBar'
import AllProducts from '../Components/Products/AllProducts'
import FooterData from '../Components/Footer/FooterData'
import Socials from '../Components/Footer/Socials'


export default function Products (){
   return (
      <div>
         <BannerTop />
         <Navbar />
         <AllProducts />
         <FooterData />
         <Socials />
      </div>
   )
}