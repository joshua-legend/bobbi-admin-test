import type { NextPage } from 'next'
import HomeIndex from "../common/components/Index/HomeIndex";
import {useRouter} from "next/router";


const Home: NextPage = () => {

    return (
        <>
            <HomeIndex />
        </>

    );
};

export default Home;