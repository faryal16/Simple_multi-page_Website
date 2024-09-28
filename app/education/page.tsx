import Link from "next/link";

export default function experiences() {
  return (
    <div>
        <label className="tag"> Education</label>
      <div className="boxes">
       <div className="box" >
        <label className="tag">Master's</label>
        <section>Dgree: <span>M.A</span></section>
        <section>Subject: <span>Islamic Studies</span></section>
        <section>Passing year: <span>2018</span></section>
       </div>
       <div className="box" >
        <label className="tag">Bachelor's</label>
        <section>Dgree: <span>B.COM</span></section>
        <section>Subject: <span>Commerce</span></section>
        <section>Passing year: <span>2016</span></section>
       </div>
       <div className="box">
        <label className="tag">Bachelor's</label>
        <section>Dgree: <span>B.A</span></section>
        <section>Subject: <span>English advance</span></section>
        <section>Passing year: <span>2014</span></section>
       </div>
       
      </div>
      <button className="btn"><Link href="./">Go To Home Page</Link></button>
    </div>
  );
}
