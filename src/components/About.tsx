import { FunctionComponent } from "react";

interface AboutProps {

}

const About: FunctionComponent<AboutProps> = () => {
    return (<div>
        <h1>About Me</h1>
        <img src="https://scontent.ftlv5-1.fna.fbcdn.net/v/t39.30808-6/236740975_4202019583244932_6592726448946874116_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=T8b5LiUtGKEAX-_CSro&_nc_ht=scontent.ftlv5-1.fna&oh=00_AfAOwqBniFmQfs72u0vnwJ8qypyV-ABppV290Nt-L5gIsA&oe=63B8A151" alt="me" height={100} className="rounded-circle" />
        <h3 className="mt-3">Lidor malich</h3>
        <p>Software Developer <br /> lidormalich@gmail.com</p>
        <p>© Copyright 2022 Lidor malich</p>
    </div>);
}

export default About;