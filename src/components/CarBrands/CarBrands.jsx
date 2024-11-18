import "./CarBrands.css"
import Benz from "../../assets/Car_Brands/Benz.png"
import Bmw from "../../assets/Car_Brands/BMW.png"
import Jaguar from "../../assets/Car_Brands/Jaguar.png"
import Audi from "../../assets/Car_Brands/Audi.png"
import Tata from "../../assets/Car_Brands/Tata.png"
import Mahindra from "../../assets/Car_Brands/Mahindra.png"



export const CarBrands = () => {
  return (
    <section className="car-brands-section" id="rent">
      <div className="car-heading">
      <h4>Our Partners</h4>
      </div>
    <div className="logo-container">
      <img src={Benz} alt="Benz" />
      <img className="bmw-logo" src={Bmw} alt="BMW" />
      <img src={Jaguar} alt="Audi" />
      <img src={Tata} alt="Audi" />
      <img src={Mahindra} alt="Audi" />
      <img src={Audi} alt="Audi" />
    </div>
  </section>
  )
}
