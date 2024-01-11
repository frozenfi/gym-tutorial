import Logo from "@/assets/Logo.png"
type Props = {}

const Footer = (props: Props) => {
  return (
    <footer className="bg-primary-300 py-16">

    
    <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
            <img src={Logo} alt="logo" />
            <p className="my-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Sed ut orci a leo hendrerit sodales nec non elit. Phasellus 
                sit amet libero ac elit elementum consectetur. Fusce in
            </p>

            <p>© Evogym. All right Reserved</p>
        
        </div>

        <div className="mt-16 basis-1/2 md:mt-0">
            <h4 className="font-bold">Links</h4>
            <p className="my-5">Lorem ipsum dolor</p>
            <p className="my-5">Lorem ipsum dolor</p>
            <p>Lorem ipsum dolor</p>
            
        </div>

        <div className="mt-16 basis-1/2 md:mt-0">
        <h4 className="font-bold">Contact Us</h4>
            <p className="my-5">Normandy Road</p>
            <p className="my-5">Uusimaa, 900</p>
            <p>+123-44112233</p>
           

        </div>

    </div>
    </footer>
  )
}

export default Footer