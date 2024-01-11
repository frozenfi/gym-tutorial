import { SelectedPage } from "@/shared/types"
import { HomeModernIcon, UserGroupIcon, AcademicCapIcon } from "@heroicons/react/24/solid"
import { motion } from "framer-motion";
import HText from "@/shared/HText";
import { BenefitsType } from "@/shared/types";
import BenefitCard from "@/scenes/benefits/BenefitCard";
import ActionButton from "@/shared/ActionButton";
import BenefitsPageGraphic from "@/assets/BenefitsPageGraphic.png"
const benefits: Array<BenefitsType> = [
    {
        icon:<HomeModernIcon className="h-6 w-6"/>,
        title:"State of the Art Facilities",
        description:"Gym Fusion: Sculpt Your Strength, Ignite Your Vitality. Unleash your full potential at Gym Fusion, where fitness meets innovation. ",
    },
    {
        icon:<UserGroupIcon className="h-6 w-6"/>,
        title:"100's of Diverse classes",
        description:"Gym Fusion: Sculpt Your Strength, Ignite Your Vitality. Unleash your full potential at Gym Fusion, where fitness meets innovation. ",
    },
    {
        icon:<AcademicCapIcon className="h-6 w-6"/>,
        title:"Expert and Pro Trainer",
        description:"Gym Fusion: Sculpt Your Strength, Ignite Your Vitality. Unleash your full potential at Gym Fusion, where fitness meets innovation. ",
    }
]
const container = {
    hidden:{},
    visible: {
        transition: {staggerChildren: 0.2}
    }
}

type Props = {
    setSelectedPage:(value:SelectedPage) => void
}

const Benefits = ({setSelectedPage}: Props) => {
  return (
    <section id="benefits"
    className="mx-auto min-h-full w-5/6 py-20">
    <motion.div 
    onViewportEnter={()=>setSelectedPage(SelectedPage.Benefits)}>

    {/*HEADER */}
        <motion.div 
            className="md:my-5 md:w-3/5"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{  duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}>
        <HText >MORE THAN JUST A GYM</HText>
        <p className="my-5 text-md">
        Our cutting-edge facilities and personalized training programs
         empower you to achieve your fitness goals seamlessly. 
         Join a community driven by passion and expertise, and 
         embark on a transformative fitness journey. Gym Fusion is not 
         just a gym; it's a destination for sculpting strength, enhancing 
         endurance, and embracing a healthier, more vibrant you.
        </p>
        </motion.div>
    
        {/*BENEFIT CARD */}
        <motion.div 
            className="md:flex items-center justify-between gap-8 mt-"
            initial="hidden"
            whileInView="visible"
            viewport={{once:true, amount: 0.5}}
            variants={container}
        >
            {benefits.map((benefit:BenefitsType)=>( 
                    <BenefitCard
                    key={benefit.title}
                    icon={benefit.icon}
                    title={benefit.title}
                    description={benefit.description}
                    setSelectedPage={setSelectedPage}
                    />
            ))
            }
        </motion.div>
            {/*GRAPHICS AND DESCRIPTION */}
            <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
                {/*GRAPHIC */}
                <img src={BenefitsPageGraphic} alt="benefit-page-graphic" className="mx-auto"/>
                {/*DESCRIPTION */}
                <div>
                    {/* TITLE */}
                    <div className="relative">
                        <div className="before:absolute before:-top-20 before:-left-20 before:z-[1] before:content-abstractwaves">
                            <motion.div
                              initial="hidden"
                              whileInView="visible"
                              viewport={{ once: true, amount: 0.5 }}
                              transition={{  duration: 0.5 }}
                              variants={{
                                hidden: { opacity: 0, x: 50 },
                                visible: { opacity: 1, x: 0 },
                              }}>
                                <HText>
                                    MILLIONS OF HAPPY MEMBERS GETTING { " "}
                                    <span className="text-primary-500">FIT</span>
                                </HText>
                            </motion.div>
                            <motion.div 
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.5 }}
                                transition={{  duration: 0.5 }}
                                variants={{
                                  hidden: { opacity: 0, x: -50 },
                                  visible: { opacity: 1, x: 0 },
                                }}>
                            
                                <p className="my-5">
                                    Redefining Remote Productivity and Adventure. Transform your work routine into an exploration 
                                    of diverse landscapes. Experience the perfect synergy of work and travel on our platform, 
                                    where you can choose inspiring destinations as your temporary office. Elevate your 
                                    productivity against the backdrop of captivating scenery
                                </p>

                                <p className="mb-5 ">
                                Redefining Remote Productivity and Adventure. Transform your work routine into an exploration 
                                    of diverse landscapes. Experience the perfect synergy of work and travel on our platform, 
                                    where you can choose inspiring destinations as your temporary office. Elevate your 
                                    productivity against the backdrop of captivating scenery
                                </p>
                            </motion.div>
                            <div className="relative mt-16">
                                <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles">
                                    <ActionButton
                                    setSelectedPage={setSelectedPage}
                                    >Join Now</ActionButton>

                                </div>

                            </div>



                        </div>

                    </div>
                {/* BUTTON */}
                </div>
            </div>
            
    </motion.div>
    </section>
  )
}

export default Benefits
