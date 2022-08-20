import { useState } from "react"
import Header from "./Header"
import Column from "./Column"

const About = () => {
    return (
        <>
            <Header />
            <div className="space-between">
                <div className="columns">
                    <Column />
                    <Column />
                    <Column />
                    <Column />
                </div>
            </div>
        </>
    )
}

export default About