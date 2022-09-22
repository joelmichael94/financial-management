import { useAuth0 } from "@auth0/auth0-react";
import { LoginButton } from "../Auth0";
import bannerTop from "../../public/bannerTop.png";
import bannerMid from "../../public/bannerMid.jpg";

const { isLoading, error } = useAuth0;

export const BannerTop = () => {
    return (
        <>
            <div className="flex justify-evenly items-center px-48 py-44">
                <div className="flex flex-col justify-center items-start w-2/5 text-left">
                    <div>
                        <h1 className="text-5xl text-blue-300 font-bold">
                            Lorem ipsum dolor
                        </h1>
                        <p className="py-12">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco . . .
                        </p>
                    </div>
                    <div>
                        {error && <p>Authentication Error</p>}
                        {!error && isLoading && (
                            <h1>RELAX . . THE PAGE IS LOADING</h1>
                        )}
                        {!error && !isLoading && <LoginButton />}
                    </div>
                </div>
                <img src={bannerTop} alt="bannerTop" className="w-2/5" />
            </div>
        </>
    );
};

export const BannerMid = () => {
    return (
        <div className="bg-neutral flex flex-col justify-center items-center py-24">
            <div>
                <h1 className="text-5xl text-blue-300 font-bold">
                    Lorem ipsum dolor
                </h1>
            </div>
            <div className="flex items-center justify-evenly px-48 pt-10">
                <img
                    src={bannerMid}
                    alt="bannerMid"
                    className="w-2/5 rounded-3xl"
                />
                <div className="flex flex-col items-end justify-center w-2/5">
                    <ul>
                        <li className="pb-4">
                            <h1 className="font-bold text-lg">Lorem ipsum</h1>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua.
                            </p>
                        </li>
                        <li className="pb-4">
                            <h1 className="font-bold text-lg">Lorem ipsum</h1>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua.
                            </p>
                        </li>
                        <li className="pb-4">
                            <h1 className="font-bold text-lg">Lorem ipsum</h1>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua.
                            </p>
                        </li>
                        <li className="pb-4">
                            <h1 className="font-bold text-lg">Lorem ipsum</h1>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua.
                            </p>
                        </li>
                    </ul>

                    <div>
                        {error && <p>Authentication Error</p>}
                        {!error && isLoading && (
                            <h1>RELAX . . THE PAGE IS LOADING</h1>
                        )}
                        {!error && !isLoading && (
                            <div>
                                <LoginButton />
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export const BannerBottom = () => {
    return (
        <>
            <div className="flex flex-col justify-center items-center py-10">
                <h1 className="text-5xl text-blue-300 font-bold">
                    Lorem ipsum dolor
                </h1>
                {/*Map the Reviews Array and display 3 cards with random reviews*/}
                <div className="card card-side bg-base-100 shadow-xl">
                    <figure>
                        <img
                            src="https://placeimg.com/200/280/arch"
                            alt="UserImage"
                        />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">Review title</h2>
                        <p>
                            Review (Lorem ipsum dolor sit amet, consectetur
                            adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua.)
                        </p>
                        <div className="card-actions justify-end">
                            <small>User Name</small>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
