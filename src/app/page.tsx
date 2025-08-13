import Navbar from "@/components/Navbar";
import CustomeText from "@/components/ui/CustomeText";
import Image from "next/image";
import { experiences, skills, portfolioData } from '../data/data';
import { GenericSlider } from "@/components/ui/GenericSlider";
import ClientOnly from "@/components/ui/ClientOnly";

export default function Home() {
  return (
    <div className="relative min-h-screen w-full bg-white py-10 flex flex-col items-center justify-start">
      <Navbar />

      {/* Hero Section */}
      <div id="home" className="group flex flex-col md:flex-row w-full min-h-[600px] sm:min-h-[700px] px-4 sm:px-6 md:px-8 gap-6 sm:gap-8 md:gap-[71px] items-center justify-center mt-6">
        <div className="hidden lg:flex flex-col w-[328px] h-[138px] items-start justify-start transition-transform duration-300 ease-in-out group-hover:-translate-y-[250px]">
          <div className="text-[#344054] text-[36px] leading-none">"</div>
          <p className="text-[#344054] text-[16px] font-medium leading-snug">
            Marketing Specialist with 3+ years of experience in SEO, SEM, paid media, and CRM automation across diverse sectors.
            <br />
            Driving measurable results through data-driven strategies.
          </p>
        </div>

        <div className="relative w-full flex flex-col items-center justify-center">
          <div className="flex w-full max-w-[952px] flex-col items-center justify-center transition-all duration-300 ease-in-out group-hover:translate-y-[280px] group-hover:opacity-0 px-4 sm:px-6">
            <ClientOnly>
              <button className="h-[45px] px-[26px] py-[13px] translate-y-0 md:translate-y-10 rounded-full border border-[#171717] flex items-center justify-center bg-white mt-10">
                Hello!
              </button>
            </ClientOnly>
            <div className="flex flex-col sm:flex-row sm:gap-2 items-center sm:items-end mb-1 mt-6 sm:mt-8">
              <CustomeText title="I'm" className="text-[#171717] font-semibold text-4xl sm:text-5xl md:text-7xl xl:text-[88px]" />
              <div className="flex items-end">
                <CustomeText title=" Akrati Malviya" className="text-[#FD853A] font-semibold text-4xl sm:text-5xl md:text-7xl xl:text-[88px]" />
                <CustomeText title="," className="text-[#171717] font-semibold text-4xl sm:text-5xl md:text-7xl xl:text-[88px]" />
              </div>
            </div>
            <CustomeText title="Digital Marketing Specialist" className="text-[#171717] font-semibold text-4xl sm:text-5xl md:text-7xl xl:text-[88px] text-center" />
          </div>

          <div className="relative w-full max-w-[952px] aspect-[3/2] flex flex-col items-center justify-center -translate-y-[10%] sm:-translate-y-[15%] md:-translate-y-[20%] mx-auto px-4">
            <div className="absolute bottom-0 z-0 w-[90%] max-w-[812px] aspect-[2/1] overflow-hidden flex items-center justify-center pointer-events-auto">
              <div className="absolute w-full h-full bg-[#FEB273] rounded-t-full" />
            </div>

            {/* Simplified hero image placeholder */}
            <div className="relative z-20 w-full h-auto bg-gradient-to-b from-[#FD853A] to-[#FEB273] rounded-full aspect-square max-w-[400px] flex items-center justify-center mt-5">
              <div className="text-white text-6xl font-bold">AM</div>
            </div>
          </div>
        </div>

        <div className="hidden lg:flex w-[169px] h-[125px] flex-col items-end justify-end gap-2 transition-transform duration-300 ease-in-out group-hover:-translate-y-[250px]">
          <h1 className="text-[32px] font-bold text-[#171717] leading-none whitespace-nowrap">
            3+ years
          </h1>
          <p className="text-sm text-[#171717]">Experience</p>
        </div>
      </div>

      {/* Work Experience */}
      <div id="resume" className="w-full min-h-[900px] flex flex-col items-center mx-auto px-4 sm:px-6 lg:px-[71px] py-16">
        <div className="w-full flex flex-col items-center mb-16">
          <CustomeText title="My" className="font-medium text-4xl sm:text-5xl lg:text-6xl text-[#344054]" />
          <CustomeText title="Work" className="font-medium text-4xl sm:text-5xl lg:text-6xl text-[#FD853A]" />
          <CustomeText title="Experience" className="font-medium text-4xl sm:text-5xl lg:text-6xl text-[#FD853A]" />
        </div>

        <div className="w-full flex flex-col lg:flex-row items-start justify-center gap-0 lg:gap-12">
          <div className="flex flex-col gap-24 w-full lg:w-1/3">
            {experiences.map((exp, idx) => (
              <div key={idx} className="flex items-center gap-4">
                <span className={`w-5 h-5 rounded-full border-4 border-dashed ${exp.dotColor} flex items-center justify-center mr-2`}>
                  <span className={`w-3 h-3 rounded-full ${exp.dotColor}`}></span>
                </span>
                <div>
                  <CustomeText title={exp.company} className="font-semibold text-[#1D2939] text-2xl lg:text-3xl" />
                  <CustomeText title={exp.duration} className="text-[#98A2B3] text-lg lg:text-xl" />
                </div>
              </div>
            ))}
          </div>

          <div className="hidden lg:flex flex-col items-center justify-center w-24">
            <div className="w-2 h-full border-l-4 border-dashed border-[#1D2939] absolute left-1/2 transform -translate-x-1/2" style={{height: `${experiences.length * 120}px`}} />
            {experiences.map((exp, idx) => (
              <div key={idx} className="relative flex items-center justify-center mb-24">
                <div className={`w-8 h-8 rounded-full border-4 border-dashed ${exp.dotColor} bg-white flex items-center justify-center z-10`}>
                  <div className={`w-5 h-5 rounded-full ${exp.dotColor}`}></div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-24 w-full lg:w-1/3">
            {experiences.map((exp, idx) => (
              <div key={idx}>
                <CustomeText title={exp.role} className="font-semibold text-[#1D2939] text-2xl lg:text-3xl" />
                {exp.desc && (
                  <CustomeText title={exp.desc} className="text-[#98A2B3] text-lg lg:text-xl mt-2" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Hire Me */}
      <div id="about" className="w-full flex flex-col lg:flex-row items-center justify-between px-6 lg:px-[71px] py-20 lg:py-[122px] bg-[#F2F4F7] rounded-[32px] lg:rounded-[50px] gap-12 lg:gap-[96px]">
        <div className="relative w-full max-w-[500px] aspect-square group mx-auto lg:mx-0">
          <div className="w-full h-full bg-gradient-to-br from-[#FD853A] to-[#FEB273] rounded-full flex items-center justify-center">
            <div className="text-white text-8xl font-bold">AM</div>
          </div>
        </div>

        <div className="w-full max-w-xl flex flex-col items-start gap-8">
          <div className="flex flex-wrap text-4xl sm:text-5xl lg:text-6xl font-semibold gap-2">
            <CustomeText title="Why" className="text-[#344054]" />
            <CustomeText title="Hire me" className="text-[#FD853A]" />
            <CustomeText title="?" className="text-[#344054]" />
          </div>

          <p className="text-[#98A2B3] text-base sm:text-lg lg:text-xl leading-relaxed max-w-md">
            I bring the rigor of a performance marketer, the curiosity of a brand builder, and the ownership
            of someone who treats every campaign like it's their own. My strength lies in data-backed strategy—
            from SEO optimization and audience segmentation to CRM automation and campaign reporting.
          </p>

          <ClientOnly>
            <button className="w-full cursor-pointer sm:w-auto px-6 py-4 rounded-[20px] border border-[#151515] text-[#151515] font-semibold text-2xl sm:text-[28px] transition-all duration-300 hover:bg-[#151515] hover:text-white">
              Hire me
            </button>
          </ClientOnly>
        </div>
      </div>

      {/* Portfolio */}
      <div id="project" className="w-full flex flex-col items-center px-4 sm:px-6 lg:px-[71px] py-12 sm:py-20 gap-10 lg:gap-12">
        <div className="w-full flex flex-col sm:flex-row justify-between items-start lg:items-center gap-6">
          <div className="flex flex-col items-start max-w-full lg:max-w-[643px]">
            <CustomeText
              title="Lets Have a look at"
              className="font-semibold text-[32px] sm:text-[48px] lg:text-[64px] text-[#344054]"
            />
            <div className="flex items-start justify-start gap-4 flex-wrap">
              <CustomeText
                title="my"
                className="font-semibold text-[32px] sm:text-[48px] lg:text-[64px] text-[#344054]"
              />
              <CustomeText
                title="Portfolio"
                className="font-semibold text-[32px] sm:text-[48px] lg:text-[64px] text-[#FD853A]"
              />
            </div>
          </div>
        </div>

        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[1290px]">
          {portfolioData.map((item, index) => (
            <div key={index} className="bg-gradient-to-br from-[#FD853A] to-[#FEB273] rounded-[20px] p-6 text-white min-h-[300px] flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                <p className="text-white/90 leading-relaxed">{item.desc}</p>
              </div>
              <div className="flex justify-end mt-4">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <span className="text-white">→</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Contact */}
      <div id="contact" className="w-full bg-white flex flex-col items-center justify-center py-16 px-4 sm:px-6 lg:px-[71px] gap-10">
        <div className="w-full max-w-4xl text-center flex flex-col items-center gap-4">
          <CustomeText
            title="Have an Awesome Project"
            className="font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-[64px] text-[#344054]"
          />
          <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-4">
            <CustomeText
              title="Idea?"
              className="font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-[64px] text-[#344054]"
            />
            <CustomeText
              title="Let's Discuss"
              className="font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-[64px] text-[#FD853A]"
            />
          </div>
        </div>

        <div className="w-full max-w-3xl flex md:flex-row items-center justify-between gap-4 px-3 py-2 md:px-6 md:py-4 rounded-full border border-[#E4E7EC] bg-white">
          <div className="w-9 h-9 md:w-[50px] md:h-[50px] flex items-center justify-center rounded-full bg-[#FFEAD5] shrink-0">
            <span className="text-[#FD853A]">✉</span>
          </div>

          <ClientOnly>
            <input
              type="text"
              placeholder="Enter Email Address"
              className="w-full md:flex-1 px-4 py-2 rounded-full text-center md:text-left text-base sm:text-lg outline-none bg-transparent text-[#1D2939] placeholder:text-[#667085]"
            />

            <button className="w-fit px-6 md:px-12 py-1 md:py-3 rounded-full bg-[#FD853A] hover:bg-[#e4752f] text-white text-lg font-semibold transition duration-300">
              Send
            </button>
          </ClientOnly>
        </div>
      </div>

      {/* Skills Slider */}
      <div className="relative w-full h-[147px] bg-[#FB6514] rounded-tl-4xl rounded-br-4xl overflow-hidden">
        <div className="absolute w-[5000px] h-[63px] bg-white -rotate-2 -mt-2 md:mt-0 md:-rotate-[1.9deg] z-10 -ml-2 flex items-center">
          <div className="marquee flex gap-8 w-max">
            {[...skills, ...skills].map((skill, index) => (
              <div
                key={index}
                className="flex items-center gap-5 text-[#000000] text-[48px] whitespace-nowrap"
              >
                <span className="w-8 h-8 bg-[#FD853A] rounded-full"></span>
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}