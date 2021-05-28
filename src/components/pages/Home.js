import React, { Component } from 'react'
import { Carousel, Row } from 'react-bootstrap'
import './card-style.css'
import img1 from '../../p4.jpg'
import About from '../About'
class Home extends Component {
  render() {
    return (
      <div style={{ backgroundColor: '#eeeeee' }}>
        <Carousel fade>
          <Carousel.Item>
            <img
              className='d-block w-100'
              src='https://images.unsplash.com/photo-1561501900-3701fa6a0864?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bHV4dXJ5JTIwaG90ZWx8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80'
              alt='First slide'
              height='600px'
              width='100%'
            />
            <Carousel.Caption>
              <h2>Never Let Your Memories Be Greater Than Your Dreams.</h2>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className='d-block w-100'
              src={img1}
              alt='Second slide'
              height='600px'
              width='100%'
            />

            <Carousel.Caption>
              <h2>
                It Is Better To Travel Than To Arrive. Let's Be Adventurers.
              </h2>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className='d-block w-100'
              src='http://wallpapersflood.com/wp-content/uploads/anantara_kihavah_villas_maldives_resort_pool_ocean_sea_water_travel_booking_vacation_hotel_sky_blue_worlds_best_diving_sites_30249.jpg'
              alt='Third slide'
              height='600px'
              width='100%'
            />

            <Carousel.Caption>
              <h2>
                We Will Take You To The Top Destination In The World, Explore
                With Us!
              </h2>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        <div>
          <section>
            <div className='container my-3 py-5 text-center'>
              <div className='row mb-5'>
                <div className='col'>
                  <h1>FAMOUS PLACES</h1>
                  <p className='mt-3'>
                    Lorem ipsum dolor sit amet, conse ctetur elit. Cras lobortis
                    mollis arcu, vel vulputate justo.
                  </p>
                </div>
              </div>

              <div className='row'>
                <a
                  className='col-lg-3 col-md-6'
                  href='/booktour'
                  style={{ textDecoration: 'none', color: 'black' }}
                >
                  <div className='card'>
                    <div className='card-body'>
                      <img
                        src='https://images.pexels.com/photos/3155666/pexels-photo-3155666.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
                        alt=''
                        className='img-fluid'
                      ></img>
                      <h5 className="p-2"><i class="fa fa-map-marker"  style={{ color: '#0275d8' }} aria-hidden="true"></i> &nbsp;MUMBAI</h5>
                      <i class="fa fa-star"  style={{ color: '#0275d8' }} aria-hidden="true"></i><i class="fa fa-star"  style={{ color: '#0275d8' }} aria-hidden="true"></i><i class="fa fa-star"  style={{ color: '#0275d8' }} aria-hidden="true"></i><i class="fa fa-star" style={{ color: '#0275d8' }} aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i>
                      <p className="text-muted p-2">
                        AFFORDABLE & BEAUTIFUL PLACES <br /> BOOK NOW, VACAY
                        LATER{' '}
                      </p>
                      <i class='far fa-arrow-alt-circle-right fa-2x p-2' style={{ color: '#0275d8' }} ></i>
                    </div>
                  </div>
                </a>
                <a
                  className='col-lg-3 col-md-6'
                  href='/booktour'
                  style={{ textDecoration: 'none', color: 'black' }}
                >
                  <div className='card'>
                    <div className='card-body'>
                      <img
                        src='https://images.pexels.com/photos/398154/pexels-photo-398154.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
                        alt=''
                        className='img-fluid'
                      ></img>
                      <h5 className="p-2"><i class="fa fa-map-marker"  style={{ color: '#0275d8' }} aria-hidden="true"></i> &nbsp;HYDERABAD</h5>
                      <i class="fa fa-star"  style={{ color: '#0275d8' }} aria-hidden="true"></i><i class="fa fa-star"  style={{ color: '#0275d8' }} aria-hidden="true"></i><i class="fa fa-star"  style={{ color: '#0275d8' }} aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i>
                      <p className="text-muted p-2">
                        AFFORDABLE & BEAUTIFUL PLACES <br /> BOOK NOW, VACAY
                        LATER{' '}
                      </p>
                      <i class='far fa-arrow-alt-circle-right fa-2x p-2' style={{ color: '#0275d8' }} ></i>
                    </div>
                  </div>
                </a>
                <a
                  className='col-lg-3 col-md-6'
                  href='/booktour'
                  style={{ textDecoration: 'none', color: 'black' }}
                >
                  <div className='card'>
                    <div className='card-body'>
                      <img
                        src='https://images.pexels.com/photos/753626/pexels-photo-753626.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
                        alt=''
                        className='img-fluid'
                      ></img>
                     <h5 className="p-2"><i class="fa fa-map-marker"  style={{ color: '#0275d8' }} aria-hidden="true"></i> &nbsp;GOA</h5>
                      <i class="fa fa-star"  style={{ color: '#0275d8' }} aria-hidden="true"></i><i class="fa fa-star"  style={{ color: '#0275d8' }} aria-hidden="true"></i><i class="fa fa-star"  style={{ color: '#0275d8' }} aria-hidden="true"></i><i class="fa fa-star" style={{ color: '#0275d8' }} aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i>
                      <p className="text-muted p-2">
                        AFFORDABLE & BEAUTIFUL PLACES <br /> BOOK NOW, VACAY
                        LATER{' '}
                      </p>
                      <i class='far fa-arrow-alt-circle-right fa-2x p-2' style={{ color: '#0275d8' }} ></i>
                    </div>
                  </div>
                </a>
                <a
                  className='col-lg-3 col-md-6'
                  href='/booktour'
                  style={{ textDecoration: 'none', color: 'black' }}
                >
                  <div className='card'>
                    <div className='card-body'>
                      <img
                        src='https://images.pexels.com/photos/3601426/pexels-photo-3601426.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
                        alt=''
                        className='img-fluid'
                      ></img>
                  <h5 className="p-2"><i class="fa fa-map-marker"  style={{ color: '#0275d8' }} aria-hidden="true"></i> &nbsp;MALDIVES</h5>
                      <i class="fa fa-star"  style={{ color: '#0275d8' }} aria-hidden="true"></i><i class="fa fa-star"  style={{ color: '#0275d8' }} aria-hidden="true"></i><i class="fa fa-star"  style={{ color: '#0275d8' }} aria-hidden="true"></i><i class="fa fa-star" style={{ color: '#0275d8' }} aria-hidden="true"></i><i class="fa fa-star" style={{ color: '#0275d8' }} aria-hidden="true"></i>
                      <p className="text-muted p-2">
                        AFFORDABLE & BEAUTIFUL PLACES <br /> BOOK NOW, VACAY
                        LATER{' '}
                      </p>
                      <i class='far fa-arrow-alt-circle-right fa-2x p-2' style={{ color: '#0275d8' }} ></i>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </section>
          <Row>&nbsp;</Row>
          <Row>&nbsp;</Row>
          <About />
          <section>
            <div className='container my-3 py-5 text-center'>
              <div className='row mb-5'>
                <div className='col'>
                  <h1>Offers & Promotions</h1>
                  <p className='mt-3'>
                    Lorem ipsum dolor sit amet, conse ctetur elit. Cras lobortis
                    mollis arcu, vel vulputate justo
                  </p>
                </div>
              </div>

              <div className='row'>
                <div className='col-lg-4 col-md-6'>
                  <div className='card'>
                    <div className='card-body'>
                      <img
                        src='https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
                        alt=''
                        className='img-fluid'
                      ></img>
                      <div className='inner-sec-grid'>
                        <div>
                          {' '}
                          <i
                            className='fa fa-gift fa-3x py-3'
                            style={{ color: '#0275d8' }}
                          ></i>
                        </div>
                        <h4 className='mt-md-4 mt-2'>Accomodation</h4>
                        <p className='text-muted mt-3 px-2'>
                          Lorem ipsum dolor sit amet, conse ctetur elit. Cras
                          lobortis mollis arcu, vel vulputate justo.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='col-lg-4 col-md-6'>
                  <div className='card'>
                    <div className='card-body'>
                      <img
                        src='https://www.tajhotels.com/content/dam/luxury/hotels/taj-aravali/16x7/TAU_ExteriorA_7095.jpg/jcr:content/renditions/cq5dam.web.756.756.jpeg'
                        alt=''
                        className='img-fluid'
                      ></img>
                      <div className='inner-sec-grid'>
                        <div>
                          {' '}
                          <i
                            className='fa fa-gift fa-3x py-3'
                            style={{ color: '#0275d8' }}
                          ></i>
                        </div>
                        <h4 className='mt-md-4 mt-2'>Winter Tours</h4>
                        <p className='text-muted mt-3 px-2'>
                          Lorem ipsum dolor sit amet, conse ctetur elit. Cras
                          lobortis mollis arcu, vel vulputate justo.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='col-lg-4 col-md-6'>
                  <div className='card'>
                    <div className='card-body'>
                      <img
                        src='https://images.pexels.com/photos/1458457/pexels-photo-1458457.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
                        alt=''
                        className='img-fluid'
                      ></img>
                      <div className='inner-sec-grid'>
                        <div>
                          {' '}
                          <i
                            className='fa fa-gift fa-3x py-3'
                            style={{ color: '#0275d8' }}
                          ></i>
                        </div>
                        <h4 className='mt-md-4 mt-2'>Low Prices</h4>
                        <p className='text-muted mt-3 px-2'>
                          Lorem ipsum dolor sit amet, conse ctetur elit. Cras
                          lobortis mollis arcu, vel vulputate justo.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    )
  }
}

export default Home
