"use client"

import Image from "next/image";
import Link from "next/link";
import dp from "./images/dp.png";

export default function Home() {
  return (
    <div>
    <div className="contanier">
      <div className="info">
        <label className="tag" > PERSONAL INFORMATION</label>
        <section>Name: <span>Faryal Junaid</span></section>
        <section>Email:<span> bintefarzana1992@gmail.com</span> </section>
        <section>Contact: <span>0300-1234567</span></section>
        <section>LinkedIn: <Link href="https://www.linkedin.com/in/faryal-junaid-06780b2b4/"><span>faryal-junaid</span></Link></section>
        <section>github: <Link href="https://github.com/faryal16"><span>faryal16</span></Link></section>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>

        <Image src= {dp}  width={200} height={200}  alt="my Profile Picture" />
        
    </div>
    </div>
    
<div className="links">
<ul>
    <Link href="./skills"><li>Skills</li></Link>
    <Link href="./education"><li>Education</li></Link>
    <Link href="./experience"><li>Experience</li></Link>
    </ul>
</div>
</div>
  );
}
