import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { keyframes, styled } from "styled-components";

const ImgStyle = styled.img`
    width: 100%;
    height: 500px;
`;

const Slide = () => {
    return (
        <Carousel>
            <div>
                <ImgStyle src="img/panda.jpg" />
                <p className="legend">Legend 1</p>
            </div>
            <div>
                <ImgStyle src="img/panda.jpg" />
                <p className="legend">Legend 2</p>
            </div>
            <div>
                <ImgStyle src="img/panda.jpg" />
                <p className="legend">Legend 3</p>
            </div>
        </Carousel>
    );
}
 
export default Slide;