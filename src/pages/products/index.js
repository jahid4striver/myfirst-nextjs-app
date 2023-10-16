import { Button } from 'antd/es/radio';
import Link from 'next/link';
import React from 'react';

const ProductHomePage = () => {
    return (
        <div>
            <h1>This is Product Home Page</h1>
            <Button type='secondary'><Link href='/'>Home</Link></Button>
        </div>
    );
};

export default ProductHomePage;

