import React from 'react';
import DashboardLayout from '../components/Layouts/DashboardLayout';
import RootLayout from '@/components/Layouts/RootLayout';

const Dashboard = () => {
    return (
        <div>
            <h1>This is Dashboard Page</h1>
        </div>
    );
};

export default Dashboard;

Dashboard.getLayout = function getLayout(page) {
    return (
        <RootLayout>
            <DashboardLayout>
                {page}
            </DashboardLayout>
        </RootLayout>
    )
}