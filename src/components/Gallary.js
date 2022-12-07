import React from 'react';
import { Gallery } from "react-grid-gallery";

const Gallary = () => {
    const images = [
        {
            src: "https://static.wixstatic.com/media/5e5a34_0ad2e6057730454a9b0f9542a3e43c3c~mv2.jpg/v1/fill/w_640,h_628,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/5e5a34_0ad2e6057730454a9b0f9542a3e43c3c~mv2.jpg",
        },
        {
            src: "https://cdn.searchenginejournal.com/wp-content/uploads/2020/01/which-web-design-platform-is-right-for-you-5e4d59fb941b9.png",
            width: 320,
            height: 212,
            alt: "Boats (Jeshu John - designerspics.com)",
        },

        {
            src: "https://www.lgcmedia.co.uk/wp-content/uploads/2022/03/Scottish-Online-Lessons-website-design-by-LGC-Media-768x459.jpg",
            width: 320,
            height: 212,
        },
        {
            src: "https://cdn.dribbble.com/users/1518948/screenshots/9798343/media/e602990a0a411c00c17c41d1195182e6.jpg?compress=1&resize=400x300",
            width: 320,
            height: 212,
        },
        {
            src: "https://www.webdesignerdepot.com/cdn-origin/uploads/2013/06/ModusVersus_cover2.jpg",
            width: 320,
            height: 212,
        },
        {
            src: "https://studio1design.com/wp-content/uploads/2021/02/STUDIO1DESIGN-websites-design-mobile.jpg",
            width: 320,
            height: 212,
        },
        {
            src: "https://i.pinimg.com/236x/53/64/bb/5364bb35652dec6e2bdf20aa78aabcf6.jpg",
            width: 320,
            height: 212,
        },
        {
            src: "https://i.pinimg.com/736x/38/fc/d8/38fcd8722f438cfeb890e821dd4f93e0.jpg",
            width: 320,
            height: 212,
        },
        {
            src: "https://assets.materialup.com/uploads/0c3d98f6-b69f-4bc0-9052-239fd918a8ae/preview.jpg",
            width: 320,
            height: 212,
        },
    ];
    return (
        <div className=''>
            <Gallery images={images} />

        </div>
    );
};

export default Gallary;