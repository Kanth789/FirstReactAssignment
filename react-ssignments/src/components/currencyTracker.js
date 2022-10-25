import {Component} from 'react'
import Loader from 'react-loader-spinner'
import { TailSpin } from 'react-loader-spinner'
import CryptocurrenciesList from './currencyList'



const apiUrl = 'https://apis.ccbp.in/crypto-currency-converter'

class CryptocurrencyTracker extends Component {
  state = {
    cryptoCurrenciesData: [],
    isLoading: true,
  }

  componentDidMount() {
    this.getCryptoCurrencies()
  }

  setCryptoCurrencies = (fetchedData, loadingStatus) => {
    this.setState({
      cryptoCurrenciesData: fetchedData.map(eachCryptoCurrency => ({
        id: eachCryptoCurrency.id,
        currencyLogoUrl: eachCryptoCurrency.currency_logo,
        currencyName: eachCryptoCurrency.currency_name,
        usdValue: eachCryptoCurrency.usd_value,
        euroValue: eachCryptoCurrency.euro_value,
      })),
      isLoading: loadingStatus,
    })
  }

  getCryptoCurrencies = async () => {
    const response = await fetch(apiUrl)
    const fetchedData = await response.json()
    this.setCryptoCurrencies(fetchedData, false)
  }

  renderCryptocurrenciesList = () => {
    const {cryptoCurrenciesData} = this.state

    return <CryptocurrenciesList cryptoCurrenciesData={cryptoCurrenciesData} />
  }

  
  render() {
    const {isLoading} = this.state

    return (
      <div className="app-container">
        {isLoading ? (<TailSpin
                        height="80"
                        width="80"
                        color="#4fa94d"
                        ariaLabel="tail-spin-loading"
                        radius="1"
                        wrapperStyle={{}}
                        wrapperClass=""
                        visible={true}
                        />)
         : this.renderCryptocurrenciesList()}
      </div>
    )
  }
}

export default CryptocurrencyTracker