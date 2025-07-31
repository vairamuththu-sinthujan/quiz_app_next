// app/question/[id]/page.tsx
import React from 'react';
import QuestionDisplay from "@/app/components/question/QuestionDisplay";
import {getAuthUser} from "@/libs/firebase/serverAuth";
import QuestionMetadata from "@/app/components/question/QuestionMetadata";
import QuestionToggle from "@/app/components/question/QuestionToggle";

interface PageProps {
    params: Promise<{ id: string }>;
}

const Page = async ({ params }: PageProps) => {
    const { id } = await params;
    const user = await getAuthUser()

    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/question/get-question/${user?.uid}/${id}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        }
    });
    const data = await res.json();

    return (
        <div className='p-4 sm:p-6'>
            <QuestionMetadata metadata={data.data?.metaDataForQuestion}/>
            <QuestionDisplay question={data.data?.questionAndAnswer.question}/>
            <QuestionToggle pythonCode={data.data?.questionAndAnswer.answer}/>
        </div>
    );
};

export default Page;
