import { Typography } from "@material-tailwind/react";
import Image from "next/image";
import React from "react";


function Contact() {
  const CONTACT_DATA = [{
    para: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi modi autem perspiciatis dignissimos aliquam eum blanditiis accusamus, quisquam dolores libero debitis ipsum id sequi in quos ullam omnis repellendus similique.",
    addressOne: '5900 Balcones Dr Ste 15916 Austin, TX 78731',
    addressTwo: '1432 Sherman Street Apt Alameda, CA 94501',
    phone: '+1 (214) 927 2911',
    email: 'info@mathllcs.com'

  }]
  return (
    <div className=" min-h-screen w-full">
      <header className="grid ">
{CONTACT_DATA.map((detail)=>{
  return<>
<div className="container mx-auto grid h-full w-full">
  <h1 className="text-[#0c406e] font-bold text-4xl">Contact us</h1>
          <p>{detail.para}</p>
          <p>{detail.addressOne}</p>
        </div>
</>
})}
        
      </header>
    </div>
  );
}

export default Contact;
