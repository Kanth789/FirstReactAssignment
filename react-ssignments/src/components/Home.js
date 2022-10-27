
import Header from './Header'
import Logout from './Logout'

const Home = () => (
  <div className="home-container">
    <Header />
    <div className="home-container">
      <h1 className="home-heading">Home Route</h1>
      <Logout />
    </div>
  </div>
)

export default Home