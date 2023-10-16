import { useRouter } from 'next/router';
import React from 'react';

const SingleProduct = () => {
    const router=useRouter();

    return (
        <div>
            <h1>This is Product {router.query.productId} Page </h1>
        </div>
    );
};

export default SingleProduct;