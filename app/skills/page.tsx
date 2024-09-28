import Link from "next/link";

export default function skills() {
  return (
    <div>
        <label className="tag"> Skills</label>
      <div className="boxes">
       <div  className="box">
        <label className="tag" >Technical skills</label>
        <ul>
            <li>Typescript</li>
            <li>HTML, CSS</li>
            <li>Javascript</li>
            <li>Node.js</li>
            <li>Tailwind CSS</li>
            <li>React</li>
        </ul>
       </div>
       <div  className="box">
        <label className="tag" >Soft skills</label>
        <ul>
                    <li>Teamwork</li>
                    <li>Organization</li>
                    <li>Conflict resolution</li>
                    <li>Adaptability</li>
                    <li>Time management</li>
                    <li>Leadership</li>
        </ul>
       </div>
      </div>
      <button className="btn"><Link href="./">Go To Home Page</Link></button>
    </div>
  );
}
