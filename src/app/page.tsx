// components

// sections
import Hero from "./hero";
import VideoIntro from "./video-intro";
import Feature from "./feature";
import MobileConvenience from "./mobile-convenience";
import Testimonials from "./testimonials";
import Faqs from "./faqs";
import ClientClouser from "@/components/clientClouser";
import FooterTwo from "@/components/footerTwo";

export default function Campaign() {
  return (
    <>
      <div className="view ">
        <Hero className={"block"} imgAnimation={"imgAnimation"}/>
        {/* <VideoIntro /> */}
        <Feature className={"block"}/>
        <MobileConvenience />
        <Testimonials />
        <ClientClouser />
        <Faqs />
      </div>
    </>
  );
}
