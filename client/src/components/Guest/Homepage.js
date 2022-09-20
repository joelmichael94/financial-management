import { BannerTop, BannerMid, BannerBottom } from "../Guest";

const Homepage = () => {
    return (
        <>
            <div>
                <h1>This is the Homepage(Guest Route)</h1>
                <BannerTop />
                <BannerMid />
                <BannerBottom />
            </div>
        </>
    );
};

export default Homepage;
