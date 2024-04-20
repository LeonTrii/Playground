import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

//Resources for buttons
import servicepaper from "/src/files/service.pdf";

//Resources for slides
import may14 from "/src/files/13thmeeting.pdf";
import oct30 from "/src/files/kc1st.pdf";
import nov13 from "/src/files/kc2nd.pdf";
import nov27 from "/src/files/kc3rd.pdf";
import jan8 from "/src/files/kc4th.pdf";
import feb12 from "/src/files/kc5th.pdf";

const dates = ["May 14th, 2023", "June 4th, 2023", "October 30th, 2023", "November 13th, 2023", "November 27th, 2023", "December 4th, 2023 (NO SLIDES - ELECTIONS)", "January 8th, 2024", "February 12th, 2024"];
const slides = [
    may14,
    "https://www.canva.com/design/DAFk7hiDVgA/vYntPng3ipkf6AjIxbKTlw/view",
    oct30,
    nov13,
    nov27,
    "https://www.youtube.com/watch?v=P5OpsyHhzwM",
    jan8,
    feb12
];

let meetingLinks: React.ReactElement<any, string | React.JSXElementConstructor<any>> | JSX.Element[] = [];

for (let i = 0; i < slides.length; i++) {
    meetingLinks.push(<li data-aos="zoom-in-down"><a href={slides[i]} target="_blank">{dates[i]}</a></li>);
}

const Resources = () => {
    useEffect(() => {
        AOS.init();
      }, [])

    return (
        <div id='resources-page'>
            <h1 id="resources-title">Looking for something?</h1>
            <h2 className="note">Some quick things to note..</h2>
            <ul id="note-list">
                <li>Meetings held in Mr. White's 👨‍🔬 room (565) before & after-school on Mondays (see below for dates)</li>
                <li>Members are required to complete <u>13-15 hours</u> per year to stay as a member of Key Club 👀</li>
                <li>Are you a senior? Complete <u>90-100 hours</u> in your Key Club career for a Key Club Cord 🤩</li>
                <li>A meeting consists of slides with service opportunities, quick announcements, activities (in afternoon meetings), contact information, and more!</li>
            </ul>
            <div id="btn-grid">
            <a href="https://nam02.safelinks.protection.outlook.com/?url=https%3A%2F%2Fdocs.google.com%2Fforms%2Fd%2Fe%2F1FAIpQLSc9SBb7drLi8_jHGitQC3XIc-J2kecBb0uMD_AIFqSTEFLrCQ%2Fviewform%3Fusp%3Dsf_link&data=05%7C02%7CSN350851%40kent.k12.wa.us%7Cf706d653697d47e8e0e408dc6167db6f%7C773029edd6c2480ba5a2281c6d30235e%7C0%7C0%7C638492345910448750%7CUnknown%7CTWFpbGZsb3d8eyJWIjoiMC4wLjAwMDAiLCJQIjoiV2luMzIiLCJBTiI6Ik1haWwiLCJXVCI6Mn0%3D%7C0%7C%7C%7C&sdata=ItMpxIZIc9RtuiSROqs1oq4c5cJ6iyVc%2FmfDFR1w6XQ%3D&reserved=0" target="_blank"><button>Hour Submission Form</button></a>
            <a href={servicepaper} download="service.pdf" target="_blank"><button>Community Service Sheet</button></a>
            <a href="https://docs.google.com/document/d/1vTMX-Mm2PXQdTaUlNr_qqRT3gvqiZPbacU5GPgJRrbY/edit?usp=sharing" target="_blank"><button>Service Events</button></a>
            <a href="https://pnwkeyclub.org/dcon-2024/" target="_blank"><button>DCON Info</button></a>
            </div>
            <h2 id="slides" className="note">Meeting slides..</h2>
            <ul id="links">
                {meetingLinks}
            </ul>
            <h3 data-aos="zoom-in-down" id="values">~Caring–Our Way of Life</h3>
            <br />
            <br />
            <br />
            <br />
            <br />
            
        </div>
    )
}

export default Resources;