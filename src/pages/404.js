import { useRouter } from 'next/router';
import React from 'react';

const NotFound = () => {
    const router= useRouter();

    setTimeout(()=>{
        router.push('/');
    },5000)

    return (
        <div>
            <img src="https://static-00.iconduck.com/assets.00/9-404-error-illustration-2048x908-vp03fkyu.png" width="100%" alt="" />
        </div>
    );
};

export default NotFound;