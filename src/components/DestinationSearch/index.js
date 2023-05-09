import {Component} from 'react'

import DestinationItem from '../DestinationItem'

import './index.css'

class DestinationSearch extends Component {
  state = {searchInput: ''}

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {destinationsList} = this.props
    const {searchInput} = this.state
    const value = searchInput.toLowerCase()
    const searchResults = destinationsList.filter(eachItem =>
      eachItem.name.toLowerCase().includes(value),
    )
    return (
      <div className="destination-search-bg-container">
        <h1 className="heading">Destination Search</h1>
        <div className="searchBox">
          <div>
            <input
              type="search"
              onChange={this.onChangeSearchInput}
              placeholder="Search"
              className="search-input"
            />
          </div>
          <div className="search-icon-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
              alt="search icon"
              className="search-icon"
            />
          </div>
        </div>
        <ul className="places-container">
          {searchResults.map(eachItem => (
            <DestinationItem placeDetails={eachItem} key={eachItem.id} />
          ))}
        </ul>
      </div>
    )
  }
}
export default DestinationSearch
