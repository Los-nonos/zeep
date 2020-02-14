import React from 'react';
import Head from 'next/head';
import Header from '../components/Header';
//import Body from '../components/Body';
import Footer from '../components/Footer';
import { getQueryHash } from '../../helpers';
import Faq from '../sections/home/Faq';

class Home extends React.Component {
  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <>
        <Head>
            <title>Landing page - Zeep</title>
          <link rel="stylesheet" href={`../../static/build/scss/containers/home.css?query=${getQueryHash()}`} />
        </Head>
        <Header />
<<<<<<< HEAD
        <img className="background" src="/background.jpg" alt=""/>
        <div className="main main-raised custom-card-body">
=======
        <Body />
        {/* <div className="main main-raised custom-card-body">
>>>>>>> dfb25fdf06fe0c927f23159f8e1d4be24734f510
          <div className="container">
            <div className="section text-center">
              <h2 className="title">Imagenes de productos</h2>
              <section className="container-img">
                <div className="img img-one">
                  <img className="img-img" src="one.jpg" width="150px" height="150px" alt=""/>
                </div>
                <div className="img img-two">
                  <img className="img-img" src="two.jpg" width="150px" height="150px" alt=""/>
                </div>
                <div className="img img-three">
                  <img className="img-img" src="three.jpg" width="150px" height="150px" alt=""/>
                </div>
              </section>
            </div>
          </div>
<<<<<<< HEAD
          <Faq />
        </div>
=======
        </div> */}
        <Parallax />
>>>>>>> dfb25fdf06fe0c927f23159f8e1d4be24734f510
        <Footer />
      </>
    );
  }
}

export default Home;
