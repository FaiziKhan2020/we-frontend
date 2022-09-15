import React from 'react';
import ThumbnailDefault from '~/components/elements/detail/thumbnail/ThumbnailDefault';
import ModuleProductDetailDescription from '~/components/elements/detail/modules/ModuleProductDetailDescription';
// import ModuleDetailShoppingActions from '~/components/elements/detail/modules/ModuleDetailShoppingActions';
// import ModuleProductDetailSpecification from '~/components/elements/detail/modules/ModuleProductDetailSpecification';
import ModuleDetailActionsMobile from '~/components/elements/detail/modules/ModuleDetailActionsMobile';
import ModuleDetailTopInformation from '~/components/elements/detail/modules/ModuleDetailTopInformation';

const ProductDetailFullwidth = ({ product }) => {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <ThumbnailDefault product={product} />
                    </div>
                    <div className="col-md-8">
                        <ModuleDetailTopInformation product={product} />
                        <ModuleProductDetailDescription product={product} />
                        <ModuleDetailActionsMobile product={product} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetailFullwidth;

// import React from 'react';
// import ThumbnailDefault from '~/components/elements/detail/thumbnail/ThumbnailDefault';
// import ModuleProductDetailDescription from '~/components/elements/detail/modules/ModuleProductDetailDescription';
// import ModuleDetailShoppingActions from '~/components/elements/detail/modules/ModuleDetailShoppingActions';
// import ModuleProductDetailSpecification from '~/components/elements/detail/modules/ModuleProductDetailSpecification';
// import ModuleDetailActionsMobile from '~/components/elements/detail/modules/ModuleDetailActionsMobile';
// import ModuleDetailTopInformation from '~/components/elements/detail/modules/ModuleDetailTopInformation';

// const ProductDetailFullwidth = ({ product }) => {
//     {
//         console.log(product.color);
//     }
//     return (
//         <div className="ps-product--detail ps-product--fullwidth">
//             <div className="ps-product__header">
//                 <div className="container">
//                     <div className="row">
//                         <div className="col-md-2">
//                             <ThumbnailDefault product={product} />
//                         </div>

//                         <div className="ps-product__info">
//                             <div className="col-md-8">
//                                 <ModuleDetailTopInformation product={product} />
//                                 <ModuleProductDetailDescription
//                                     product={product}
//                                 />
//                                 {/* <ModuleDetailShoppingActions product={product} /> */}
//                                 {/* <ModuleProductDetailSpecification /> */}
//                                 <ModuleDetailActionsMobile product={product} />
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             {/* <DefaultDescription /> */}
//         </div>
//     );
// };

// export default ProductDetailFullwidth;
