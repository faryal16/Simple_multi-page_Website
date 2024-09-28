"use client"
import Link from "next/link";

export default function experiences() {
  return (
    <div>
      <label className="tag"> Experiences</label>
      <div className="boxes">
        <div className="box">
          <label className="tag">Teaching</label>
          <section>
            I am a passionate and dedicated Teacher who has worked in the
            educational sector for over 10 years.I hold a Master&#39;s Degree in
            islamic Studies and is highly experienced in teaching and education.
            I am an excellent communicator, an experienced problem-solver and a
            strong leader.
            <br />I would describe myself as a positive, energetic,
            knowledgeable, and industrious teacher. I have a flexible style of
            teaching that can cater to all students and abilities. I would also
            say that I am a high-achieving teacher. For example, in my last
            role, I managed to turn around an underperforming class.
          </section>
        </div>
        
        
      </div>
      <button className="btn">
        <Link href="./">Go To Home Page</Link>
      </button>
    </div>
  );
}
