import FooterElement from "./FooterElement";
import { submenuData } from "../navigation-bar/config/nav_bar.config";
import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer className="space-y-8">

            <div className=" lg:p-0 pl-5 lg:flex gap justify-evenly mt-10">
                <div className="space-y-3">
                    <div className="space-y-5">
                        <Link to="/"><img src="/logo.png" width="224" height="56" alt="bista technologies logo" /></Link>
                        <h1 className=" text-lg text-orange-500 font-semibold">Headquaters</h1>
                    </div>

                    <div className="text-gray-600 font-bold">
                        <h1>PO Box 20018</h1>
                        <h1>Dubai, UAE</h1>
                    </div>
                    <div className="text-sm text-gray-600 space-y-3">
                        {["info@bistatechnologies.com", "support@bistatechnologies.com", "hr@bistatechnologies.com", "operations@bistatechnologies.com"
                        ].map((email, index) => {
                            return (
                                <h1 key={index} className="hover:text-sky-700 cursor-pointer">{email}</h1>
                            )
                        })}
                    </div>
                </div>
                {submenuData.slice(1, 5).map((item, index) => {
                    return (
                        <FooterElement key={index} label={item.label} submenu={item.submenu} />
                    )
                })}
            </div>
            <hr></hr>
            <div className=" text-sm text-gray-700 flex flex-col-reverse justify-between items-center py-5">
                <h1 className="lg:text-md text-sm text-nowrap "> ©2024 Bista Technologies Inc. All Right Reserved.</h1>
                <div className="flex gap-2">
                    <a href="https://www.linkedin.com/company/bistatechnologies/about/" target="_blank" aria-label="Visit Bista Technologies on LinkedIn" >
                        <svg xmlns="http://www.w3.org/2000/svg" height="26" width="20" viewBox="0 0 448 512"><path d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z" /></svg>
                    </a>
                    <a href="https://www.instagram.com/official_bistatechnologiesinc/" target="_blank" aria-label="Visit Bista Technologies on Instgram">
                        <svg xmlns="http://www.w3.org/2000/svg" height="26" width="20" viewBox="0 0 448 512"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" /></svg>
                    </a>
                </div>
            </div>
        </footer>
    );
}

