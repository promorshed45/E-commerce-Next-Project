/* eslint-disable @next/next/no-img-element */
'use client'
import LightGallery from 'lightgallery/react';

// import styles
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';

// import plugins if you need
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';
import { ReactNode } from 'react';


const ProductImageView = ({children}:{children: ReactNode}) => {

    const onInit = () => {
        console.log('lightGallery has been initialized');
    };
    
    return (
            <LightGallery
                elementClassNames='w-48'
                onInit={onInit}
                speed={500}
                plugins={[lgThumbnail, lgZoom]}
            >
                 {children}
            </LightGallery>
    );
};

export default ProductImageView;