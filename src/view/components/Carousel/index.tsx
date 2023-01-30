import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import banner1 from '../../../assets/images/banner_1.png';
import imageBanner1 from '../../../assets/images/saint_cosmetics.png'
import banner2 from '../../../assets/images/banner_2.webp';
import imageBanner2 from '../../../assets/images/dior-rouge-lipstick.webp'
import banner3 from '../../../assets/images/banner_3.png';
import styled from 'styled-components';
import ButtonPrimary from '../Buttons/primary';
import 'bootstrap/dist/css/bootstrap.min.css';

const ContainerCarousel = styled.section`
   margin: 0 8em;
   font-family: var(--font-overpass);

.carousel-inner {
    height: 470px;
}

.imageBanner1 {
    position: absolute;
    width: 22em;
    margin-top: 6em;
    margin-left: -5em;
}

.textBanner1 {
    display:flex;
    height: 400px;
   }

.divBanner1 {
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    margin-bottom: 1em;
    margin-left: 18em;
}

.divBanner2{
    display:flex;
    align-items: center; 
}

.divBanner3 {
    display:flex;
    justify-content: right;
    margin-bottom: 2em
}

h3 {
    color: var(--bege-color);
    font-size: 34px;
    font-weight: 600;
}

p {
    font-weight: 200;
    font-size: 20px;
}

.carousel-indicators {
    margin-bottom: 4em
}

.carousel-indicators button {
    width: .8em;
    height: .8em;
    border:none;
    border-radius: 1em
}

.banner2 {
    height: 433px;
    opacity: 80%;
}

.imageBanner2{
    width: 20em;
    position: absolute;
    margin-left: 36em;
    margin-bottom: 7em;
    filter: contrast(200%); 
}

.milaniLogo {
    width: 6em;
    position: absolute
}

`

const CarouselHome = () => {
    return (
        <ContainerCarousel>
            <Carousel>
                <Carousel.Item className='containerBanner1'>
                    <img
                        className="d-block w-100"
                        src={banner1}
                        alt="First slide"
                    />
                    <Carousel.Caption className='textBanner1'>
                        <img src={imageBanner1} className='imageBanner1' />
                        <div className='divBanner1'>
                            <h3>Saint Cosmetics Bronzer</h3>
                            <p>Natural | Vegan | Gluten Free</p>
                            <ButtonPrimary text='compre agora' tipo='light' />
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="banner2 w-100"
                        src={banner2}
                        alt="Second slide"
                    />
                    <Carousel.Caption className='divBanner2'>

                        <ButtonPrimary text='compre aqui' tipo='light' />

                        <img src={imageBanner2} className='imageBanner2' />
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner3}
                        alt="Third slide"
                    />

                    <Carousel.Caption className='divBanner3'>
                        <ButtonPrimary text='Compre agora' />
                    </Carousel.Caption>

                </Carousel.Item>
            </Carousel>
        </ContainerCarousel>
    )
}

export default CarouselHome