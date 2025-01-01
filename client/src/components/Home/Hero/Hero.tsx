import { motion } from "framer-motion";
import React from "react";
import { AuroraBackground } from "../../ui/aurora-background";


const Hero = () => {
    return (
        <AuroraBackground>
            <motion.div
                initial={{ opacity: 0.0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                    delay: 0.3,
                    duration: 0.8,
                    ease: "easeInOut",
                }}
                className="relative flex flex-col gap-4 items-center justify-center px-4"
            >
                <div className="w-full pt-[4vh] md:pt-[12vh] h-screen">

                    <div className="flex justify-center flex-col w-[90%] sm:w-[80%] h-full mx-auto">
                        <div className="items-center">
                            {/* Text */}
                            <div className="w-fit py-1.5 px-2 rounded-full shadow-lg flex items-center space-x-3 bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all duration-300">
                                <div className="px-3 py-1 md:px-5 md:py-1 rounded-full bg-gradient-to-r from-purple-600 to-purple-800 shadow-sm md:text-base sm:text-sm text-xs text-white/90 backdrop-blur-sm border border-purple-500/30">
                                    News
                                </div>
                                <p className="text-xs sm:text-sm text-gray-100">
                                    Our policies are designed to create a safe & fair environment on Invento.
                                </p>
                            </div>
                            {/* Heading */}
                            <h1
                                data-aos="fade-up"
                                className="text-2xl sm:text-4xl md:text-5xl mt-6 mb-6 font-bold md:leading-[3rem] lg:leading-[3.5rem] text-slate-100">Unleash Your Full Potential with AI-powered resume builder.</h1>
                            <p className="text-slate-300">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo, ratione reprehenderit.
                                Placeat ut non inventore unde fuga dolorem culpa ducimus.</p>

                        </div>
                    </div>

                </div>

            </motion.div>
        </AuroraBackground>
    )
}

export default Hero
