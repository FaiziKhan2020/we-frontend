import React from 'react';
import Link from 'next/link';
import Slider from 'react-slick';
import { carouselSingle } from '~/utilities/carousel-helpers';

const ThumbnailDefault = ({ product, vertical = true }) => {
    console.log(product.imgurl)
    return (
        <div className=" mt-4 ps-shop-banner">
            <Slider
                // {...carouselSingle}
                className="ps-carousel inside">
                <img src={product.imgUrl} alt="" />
            </Slider>
        </div>
    );
};

export default ThumbnailDefault;

// import React, { useEffect, useRef, useState } from 'react';
// import ReactImageMagnify from 'react-image-magnify';

// const ThumbnailDefault = ({ product, vertical = true }) => {
//     const [productImages, setProductImages] = useState([]);
//     console.log(product.images);
//     useEffect(() => {
//         let images = [];
//         if (product && product.images.length > 0) {
//             product.images.map((item) => {
//                 images.push(`${item}`);
//             });
//             setProductImages(images);
//         }
//     }, [product]);

//     //Views
//     let imagesView, galleryImagesView;
//     if (productImages.length > 0) {
//         imagesView = productImages.map((item) => (
//             <div className="item" key={item}>
//                 <img src={item} alt={item} />
//             </div>
//         ));
//         galleryImagesView = productImages.map((item, index) => (
//             <div className="item" key={item}>
//                 {/* <a href="#" onClick={(e) => handleOpenLightbox(e, index)}> */}
//                 {/* <img src={item} alt={item} /> */}
//                 <ReactImageMagnify
//                     key={index}
//                     {...{
//                         smallImage: {
//                             alt: 'Wristwatch by Ted Baker London',
//                             isFluidWidth: true,
//                             src: item,
//                             // srcSet: this.srcSet,
//                             sizes: '(max-width: 480px) 100vw, (max-width: 1200px) 30vw, 360px',
//                         },
//                         largeImage: {
//                             src: item,
//                             width: 1500,
//                             height: 1800,
//                         },
//                         enlargedImageContainerDimensions: {
//                             width: '250%',
//                             height: '120%',
//                         },
//                     }}
//                 />
//                 {/* </a> */}
//             </div>
//         ));
//     }

//     return (
//         <div className="ps-product__thumbnail">
//             <figure>
//                 <div className="ps-wrapper" style={{ zIndex: '999' }}>
//                     {galleryImagesView}
//                 </div>
//             </figure>
//         </div>
//     );
// };

// export default ThumbnailDefault;
