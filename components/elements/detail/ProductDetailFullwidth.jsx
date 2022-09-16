import React from 'react';
import ThumbnailDefault from '~/components/elements/detail/thumbnail/ThumbnailDefault';
import ModuleProductDetailDescription from '~/components/elements/detail/modules/ModuleProductDetailDescription';
import ModuleDetailActionsMobile from '~/components/elements/detail/modules/ModuleDetailActionsMobile';
import ModuleDetailTopInformation from '~/components/elements/detail/modules/ModuleDetailTopInformation';

const ProductDetailFullwidth = ({ product }) => {
    return (
        <div>
            <div className="container my-4">
                <div className="row">
                    <div className="col-md-4">
                        <ThumbnailDefault product={product} />
                    </div>
                    <div className="col-md-6 mx-4">
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
