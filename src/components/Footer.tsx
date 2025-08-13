import React from "react";
import CustomeText from "./ui/CustomeText";
import Link from "next/link";
import ClientOnly from "./ui/ClientOnly";

const Footer = () => {
    const navigation = ["Home", "About", "Service", "Resume", "Project", "Contact"];
    const iconsAndUrl = [
        { name: "LinkedIn", url: "linkedin.com/in/akratimalviya" },
        { name: "Email", url: "mailto:akratimalviya1010@gmail.com" },
        { name: "Instagram", url: "instagram.com/akratimalviya" }
    ];

    const contact = [
        "+1-857-425-6090 (USA)",
        "akratimalviya1010@gmail.com",
        "Boston, MA, USA"
    ]

    return (
        <footer className="w-full min-h-[400px] lg:h-[685px] px-4 sm:px-6 lg:px-[71px] py-[30px] sm:py-[35px] lg:py-[40px] flex flex-col bg-[#272727] rounded-t-2xl sm:rounded-t-3xl text-white justify-between">

            {/* Top Section */}
            <div className="w-full flex flex-col lg:flex-row items-center justify-between gap-6">
                <h1 className="font-semibold leading-tight text-[32px] sm:text-[40px] lg:text-[48px] xl:text-[64px] text-[#FCFCFD] text-center lg:text-left">
                    Let&apos;s Connect There
                </h1>
                <ClientOnly>
                    <button className="group flex items-center justify-center gap-2 w-full sm:w-[180px] lg:w-[202px] h-[50px] sm:h-[56px] lg:h-[62px] px-4 sm:px-5 py-2 sm:py-2.5 text-white text-base sm:text-lg font-semibold rounded-full bg-[#FD853A] cursor-pointer hover:bg-[#e46e24] transition-colors">
                        Hire Me
                        <span className="text-xl">↗</span>
                    </button>
                </ClientOnly>
            </div>

            <div className="border border-[#475467] w-full mt-6 md:mt-0"></div>

            {/* Navigation Links */}
            <div className="flex flex-col lg:flex-row justify-between w-full max-w-[1298px] h-auto lg:h-[239px] gap-8 lg:gap-0 mt-8 md:mt-0">

                <div className="w-full lg:w-[635px] h-full flex flex-col items-start justify-start gap-6 lg:gap-10">
                    <div className="flex gap-3 sm:gap-4 items-center flex-shrink-0 cursor-pointer">
                        <div className="w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 bg-[#FD853A] rounded-full flex items-center justify-center mb-1">
                            <svg width="20" height="20" className="sm:w-6 sm:h-6 lg:w-6 lg:h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <text x="4" y="18" fontSize="12" className="sm:text-sm lg:text-base" fontWeight="bold" fill="white">JC</text>
                            </svg>
                        </div>
                        <span className="font-bold text-base sm:text-lg tracking-wide cursor-pointer">JCREA</span>
                    </div>
                    <p className="w-full h-auto lg:h-[61px] text-[16px] sm:text-[18px] lg:text-[20px] text-[#FCFCFD]">Digital Marketing Specialist with expertise in SEO, SEM, and CRM automation. Driving measurable results through data-driven strategies and full-funnel marketing approaches.</p>
                    <div className="flex gap-2 sm:gap-2.5">
                        {iconsAndUrl.map((item, idx) => {
                            return (
                                <Link
                                    key={idx}
                                    href={`https://${item.url}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10  rounded-full flex hover:scale-110 transition-transform bg-[#333333] hover:bg-[#444444] items-center justify-center"
                                >
                                    <span className="text-[#FD853A] text-sm">{item.name[0]}</span>
                                </Link>
                            );
                        })}
                    </div>
                </div>

                <div className="flex flex-col gap-5 lg:gap-7">
                    <CustomeText title="Navigation" className="text-[18px] sm:text-[19px] lg:text-[20px] font-semibold text-[#FD853A]" />
                    <div className="flex flex-col gap-3 lg:gap-5">
                        {navigation.map((key, idx) => (
                            <Link href={`#${key.toLowerCase()}`} key={idx} className="text-[#FCFCFD] text-[14px] sm:text-[15px] lg:text-[16px] cursor-pointer hover:text-[#FD853A] transition-colors">
                                {key}
                            </Link>
                        ))}
                    </div>
                </div>

                <div className="flex flex-col gap-5 lg:gap-7">
                    <CustomeText title="Contact" className="text-[18px] sm:text-[19px] lg:text-[20px] font-semibold text-[#FD853A]" />
                    <div className="flex flex-col gap-3 lg:gap-5">
                        {contact.map((key, idx) => (
                            <span key={idx} className="text-[#FCFCFD] text-[14px] sm:text-[15px] lg:text-[16px] cursor-pointer hover:text-[#FD853A] transition-colors">
                                {key}
                            </span>
                        ))}
                    </div>
                </div>

                <div className="flex flex-col gap-5 lg:gap-7 w-full lg:w-[304px] items-start">
                    <CustomeText
                        title="Get the latest information"
                        className="text-[18px] sm:text-[19px] lg:text-[20px] font-semibold text-[#FD853A]"
                    />
                    <div className="relative w-full h-[45px] sm:h-[48px] lg:h-[51px]">
                        <ClientOnly>
                            <input
                                type="text"
                                placeholder="Email Address"
                                className="w-full h-full bg-white text-black text-[14px] sm:text-[15px] lg:text-[16px] px-3 sm:px-4 py-2 sm:py-3 pr-12 rounded-[8px] sm:rounded-[10px] border-none outline-none"
                            />
                            <button className="absolute top-0 right-0 h-full w-[45px] sm:w-[48px] lg:w-[51px] bg-[#FD853A] rounded-r-[8px] sm:rounded-r-[10px] flex items-center justify-center cursor-pointer hover:bg-[#e46e24] transition-colors">
                                <span className="text-white text-xl">→</span>
                            </button>
                        </ClientOnly>
                    </div>
                </div>
            </div>

            <div className="border border-[#475467] w-full mt-8 lg:mt-16"></div>

            <div className="flex flex-col sm:flex-row w-full max-w-[1298px] h-auto lg:h-[26px] items-start justify-between gap-4 sm:gap-0 mt-6 md:mt-0">
                <p className="w-full sm:w-[415px] h-auto lg:h-[26px] text-[16px] sm:text-[18px] lg:text-[20px] text-white text-center sm:text-left">Copyright© 2025 . All Rights Reserved.</p>
                <Link href={"#"} className="w-full sm:w-fit h-auto lg:h-[26px] text-[16px] sm:text-[18px] lg:text-[20px] text-white text-center sm:text-right hover:text-[#FD853A] transition-colors">Privacy Policy</Link>
            </div>
        </footer>
    );
};

export default Footer;
