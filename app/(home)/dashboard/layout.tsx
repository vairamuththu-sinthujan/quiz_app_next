import React from 'react'
import {Metadata} from "next";
import {Providers} from "@/app/providers";
import {dehydrate, QueryClient} from "@tanstack/react-query";
import {getQuestions} from "@/libs/api/queryFunctions";
import { getAuthUser } from "@/libs/firebase/serverAuth";
export const metadata: Metadata = {
    title:"Quiz AI | dashboard",
    description:"dashboard"
}
const Layout =  async ({children} : {children:React.ReactNode}) => {

    const user = await getAuthUser()

    const queryClient = new QueryClient()

    if (user?.uid) {
        await queryClient.prefetchQuery(({
            queryKey:['questions'],
            queryFn: () => getQuestions(user?.uid)
        }))
    }


    const  dehydratedState = dehydrate(queryClient)

    return (
        <Providers dehydratedState={dehydratedState}>
            {children}
        </Providers>
    )
}
export default Layout
