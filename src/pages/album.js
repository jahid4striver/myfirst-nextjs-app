import Image from 'next/image';
import React from 'react';
import NextImage from '../assets/images/next.jpeg'

const Album = () => {
    return (
        <div>
            <h1>This image is from img tag</h1>
            <img src="https://cdn.sanity.io/images/3do82whm/next/4b1f008289a88f4438a1c983fb32cf1a636d9d0e-1000x667.png?w=720&h=480&fit=clip&auto=format"
            width='100%' alt="" />
            <h1>This image is from Image Component</h1>
            <Image src='https://cdn.sanity.io/images/3do82whm/next/4b1f008289a88f4438a1c983fb32cf1a636d9d0e-1000x667.png?w=720&h=480&fit=clip&auto=format' alt=''
            width={500}
            height={500}
            layout='responsive'
            />
            <h1>This image is from Image Compo and Internal</h1>
            <Image src={NextImage} alt=''
            width={500}
            height={500}
            layout='responsive'
            />
        </div>
    );
};

export default Album;