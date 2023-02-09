import { FunctionComponent } from "react";
import './About.css'

interface AboutProps {

}

const About: FunctionComponent<AboutProps> = () => {
    return (<div className="cneterByMe">
        <h1>About Me</h1>
        <img src=" /logoNew.png" alt="me" height={100} className="rounded-circle" />
        <h3 className="mt-3">Lidor Maliach</h3>
        <p>Software Developer <br /> lidormalich@gmail.com</p>
        <p>© Copyright 2022 Lidor malich</p>
    </div>);
}

export default About;