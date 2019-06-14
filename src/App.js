import React, { Component } from 'react';
import './App.css';



class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      // in memory database 
      carDatabase: [
        { Id: 1, Make: 'Honda', Model: 'Odyssey', Year: 2019, Price: '$20,000', imgUrl: 'https://c4d709dd302a2586107d-f8305d22c3db1fdd6f8607b49e47a10c.ssl.cf1.rackcdn.com/thumbnails/stock-images/e89942fa1ce800a0b146785cb59575e5.png' },
        { Id: 2, Make: 'Toyota', Model: 'Rav4', Year: 2019, Price: '$18,000', imgUrl: 'https://st.motortrend.com/uploads/sites/10/2018/05/2019-Toyota-RAV4-front-three-quarter-in-motion-05.jpg?interpolation=lanczos-none&fit=around|392:261' },
        { Id: 3, Make: 'Infiniti', Model: 'QX50', Year: 2019, Price: '$50,000', imgUrl: 'https://st.motortrend.com/uploads/sites/10/2018/01/2019-Infiniti-QX50-front-three-quarter-in-motion-05.jpg' },
        { Id: 4, Make: 'Toyota', Model: 'Camry', Year: 2015, Price: '$23,000', imgUrl: 'https://c4d709dd302a2586107d-f8305d22c3db1fdd6f8607b49e47a10c.ssl.cf1.rackcdn.com/thumbnails/stock-images/5760b0ebaa287e7cb696ccd78973e571.png' },
        { Id: 5, Make: 'Ford', Model: 'Focus', Year: 2011, Price: '$45,000', imgUrl: 'https://www.elderfordoftampa.com/assets/stock/colormatched_01/white/640/cc_2015frd014b_01_640/cc_2015frd014b_01_640_j7.jpg' },
        { Id: 6, Make: 'Jeep', Model: 'Compass', Year: 2016, Price: '$18,000', imgUrl: 'https://www.cstatic-images.com/car-pictures/xl/usc80jes152c021001_2.png' },
        { Id: 7, Make: 'Hyundai', Model: 'Elantra', Year: 2019, Price: '$65,000', imgUrl: 'https://s.aolcdn.com/dims-global/dims3/GLOB/legacy_thumbnail/640x400/quality/80/https://s.aolcdn.com/commerce/autodata/images/CAC90HYC021B221001.jpg' },
        { Id: 8, Make: 'Kia', Model: 'Optima', Year: 2000, Price: '$15,000', imgUrl: 'https://s.aolcdn.com/dims-global/dims3/GLOB/legacy_thumbnail/640x400/quality/80/https://s.aolcdn.com/commerce/autodata/images/USC90KIC052A021001.jpg' },
        { Id: 9, Make: 'Jaguar', Model: 'F-Pace', Year: 2007, Price: '$60,000', imgUrl: 'https://7129fab59b4945bc3ef4-f605a9163e9a27488f089802b131fd9a.ssl.cf1.rackcdn.com/SADCN2GX3KA353203/1a778d91730ba9f3d4ebdb44698fb54f.jpg' },
        { Id: 10, Make: 'Hyundai', Model: 'Tucson', Year: 2014, Price: '$26,000', imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsv6kUm2R4bNJ9vQXhNTCrfslUn31aeKtzuhchapfSK2z-u3pw' },
        { Id: 11, Make: 'Toyota', Model: 'Camry', Year: 2017, Price: '$22,000', imgUrl: 'https://c4d709dd302a2586107d-f8305d22c3db1fdd6f8607b49e47a10c.ssl.cf1.rackcdn.com/thumbnails/stock-images/5760b0ebaa287e7cb696ccd78973e571.png' },
        { Id: 12, Make: 'Toyota', Model: 'Camry', Year: 2018, Price: '$27,000', imgUrl: 'https://c4d709dd302a2586107d-f8305d22c3db1fdd6f8607b49e47a10c.ssl.cf1.rackcdn.com/thumbnails/stock-images/5760b0ebaa287e7cb696ccd78973e571.png' },
        { Id: 13, Make: 'Toyota', Model: 'Camry', Year: 2019, Price: '$21,000', imgUrl: 'https://c4d709dd302a2586107d-f8305d22c3db1fdd6f8607b49e47a10c.ssl.cf1.rackcdn.com/thumbnails/stock-images/5760b0ebaa287e7cb696ccd78973e571.png' },



      ],
      value: {
        Make: 'Please select a Make',
        Model: '',
        Year: 0

      }
    }
  }

  handleChange = (e) => {

    e.target.name === 'Make' ? this.setState({
      value: { Make: e.target.value, Model: '', Year: 0 }

    }) :
      this.setState({
        value: { ...this.state.value, [e.target.name]: e.target.value }
      })
  }





  render() {

    let searchedCar = this.state.carDatabase.filter(car => (this.state.value.Make === car.Make && this.state.value.Model === car.Model && parseInt(this.state.value.Year) === car.Year))[0];

    return (
      <>
        <div id="main-header"><h1>Welcome To My Dealership</h1></div>

        <div id="main-section">

          <p>Please select a Make, Model and Year below: </p>

          <form id="select-form" onSubmit={this.handleSubmit}>

            {/* dropdown for make of car */}

            <label>
              Choose your Make:
                  <select value={this.state.value.Make} name="Make" onChange={this.handleChange}>
                <option value="" >Choose here</option>

                {


                  [...new Set(this.state.carDatabase.map(car => {
                    return (
                      car.Make
                    )
                  }))].map((Make) => <option key={Make} value={Make}> {Make} </option>)}
              </select>
            </label>

            {/* dropdown for model of car */}

            <label>
              Choose your Model:
                  <select name="Model" value={this.state.value.Model} onChange={this.handleChange}>
                <option value="" >Choose here</option>


                {[...new Set(this.state.carDatabase.filter(car => this.state.value.Make === car.Make).map(car => {
                  return car.Model
                }))].map(Model => <option key={Model} value={Model}>{Model}</option>)}

              </select>
            </label>

            {/* dropdown for year of car */}

            <label>
              Choose your Year:
                  <select value={this.state.value.Year} name="Year" onChange={this.handleChange}>
                <option value="" >Choose here</option>

                {this.state.carDatabase.filter((car) => {
                  return this.state.value.Model === car.Model
                }).map(car => <option key={car.Id} value={car.Year}>{car.Year}</option>)}

              </select>
            </label>


            {/* <input type="submit" value="Show Price" /> */}
          </form>
        </div>

        {/* car price component */}
        <div id="show-price-card">

          <h1>{this.state.value.Year ? `your price is:  ${searchedCar ? searchedCar.Price : ''}` : ''}</h1>

          {this.state.value.Year ? searchedCar ? <img src={searchedCar.imgUrl} alt={searchedCar.Model} /> : '' : ''}


        </div>
      </>
    )
  }
}

export default App;
