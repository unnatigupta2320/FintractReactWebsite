import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import React from "react";
import b2b3 from '../resources/b2b3.jpg';
import home from '../resources/home.jpg';
import '../styling/CarouselImage.css';
import Box from '@material-ui/core/Box';

export default function ImageCarousel() {
    return (
        <Carousel
            showIndicators={true}
            infiniteLoop={true}
            useKeyboardArrows={true}
            autoPlay={true}
            swipeable={true}
            emulateTouch={true}
            showThumbs={false}
        >
            <div class="image">
                <img src={b2b3} alt="bankImage" />
                <div class="contentOnImage" >
                    <h2>
                        <Box component="span">
                            <span>FINTRACT GLOBAL
                            </span>
                        </Box>
                    </h2>
                    <br />
                </div>
            </div>
            <div class="image">
                <div class="">
                    <img src={home} alt="HungryKids" />
                    <div class="contentOnImage">
                        <h2>
                            <Box component="span">
                                <span>
                                    INSPIRE INNOVATION
                                </span>
                            </Box>
                        </h2>
                        <br />
                    </div>
                </div>
            </div>
        </Carousel>

    );
}