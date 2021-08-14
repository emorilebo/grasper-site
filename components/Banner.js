import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";

function Banner() {
  return (
    <div className="relative">
      <div className="absolute w-full h-32 bg-gradient-to-t from-gray-100 to-transparent bottom-0 z-20" />
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={5000}
      >
        <div>
          <Image
            width={1510}
            height={835}
            objectFit="contain"
            loading="lazy"
            src="/carousel4.jpeg"
            alt=""
          />
        </div>
        <div>
          <Image
            width={1510}
            height={835}
            objectFit="contain"
            loading="lazy"
            src="/carousel22.jpeg"
            alt=""
          />
        </div>
        <div>
          <Image
            width={1510}
            height={835}
            objectFit="contain"
            loading="lazy"
            src="/carousel32.jpeg"
            alt=""
          />
        </div>
      </Carousel>
    </div>
  );
}

export default Banner;
