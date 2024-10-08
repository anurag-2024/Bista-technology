import { Typewriter } from 'react-simple-typewriter'

export default function VisionStatementVideo() {
    return (
        <div className="relative flex justify-center items-center  w-full min-h-screen ">
            <div className="lg:mt-28 mt-20 absolute text-center z-10 lg:font-normal font-semibold lg:space-y-5 space-y-2 " >
                <div className="2xl:text-6xl md:text-3xl  text-3xl font-semibold text-white transition-colors duration-300 cursor-pointer">
                    Your Vision, Our Talent Solutions
                </div>

                <div className="text-green-600 font-semibold 2xl:text-6xl md:text-2xl text-3xl">
                    <Typewriter
                        words={["A Global Staffing Company", "Connecting Talent Worldwide", "Empowering Global Careers", "Transforming Businesses with Top Talent", "Expertise Across Industries"]}
                        loop={100}
                        cursor
                        typeSpeed={200}
                    />
                </div>
                <div className="2xl:text-2xl md:text-2xl text-lg text-gray-100 font-medium">
                    <h1>Tomorrow's Success Starts with Our Recruitment</h1>
                </div>
            </div>
            <video
                className="absolute w-full h-full object-cover contrast-75"
                poster='/homepage/vision-statement-video/poster.jpg'
                autoPlay
                muted
                loop
                width="1280"
                height="720"
            >
                <source src="/homepage/vision-statement-video/bista-video-test.webm" type="video/webm" />
            </video>

        </div >
    )
}