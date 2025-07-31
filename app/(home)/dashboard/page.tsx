import React from 'react';
import DashboardHeader from "@/app/components/homeComponent/DashboardHeader";
import DashboardStats from "@/app/components/homeComponent/DashboardStats";
import QuestionGrid from "@/app/components/homeComponent/QuestionGrid";

const CodingDashboard =  async () => {
    return (
        <div className="min-h-screen ">
            {/* Header */}
            <div className="px-6 py-8 lg:px-12">
                <DashboardHeader
                />
                {/* Questions Grid */}
                <QuestionGrid/>
            </div>
        </div>
    );
};

export default CodingDashboard;