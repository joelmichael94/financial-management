import React from "react";
import { Footer } from "react-daisyui";

const Foot = () => {
    return (
        <>
            <Footer className="flex justify-start py-16 bg-neutral text-neutral-content rounded-2xl border-y border-sky-700">
                <div className="px-10 ml-16">
                    <Footer.Title>Services</Footer.Title>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </div>
                <div className="px-10">
                    <Footer.Title>Company</Footer.Title>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </div>
                <div className="px-10">
                    <Footer.Title>Legal</Footer.Title>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </div>
            </Footer>
            <footer className="flex justify-center items-center bg-neutral border-y border-sky-700 py-5 rounded-2xl">
                <small>For educational purposes only</small>
            </footer>
        </>
    );
};

export default Foot;
