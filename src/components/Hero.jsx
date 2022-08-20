import { useRef } from "react"
import { GiBrain } from "react-icons/gi"

const Hero = () => {
    const box = useRef(null);

    setInterval(setBorderRadius, 300);

    function setBorderRadius() {
        if (box && box.current) {
            box.current.style.setProperty('--br-blobby', generateBorderRadiusValue());
            box.current.style.setProperty('--br-blobby-after', generateBorderRadiusValue());
            box.current.style.setProperty('--br-blobby-before', generateBorderRadiusValue());
        }
    }

    function generateBorderRadiusValue() {
        return `${getRandomValue()}% ${getRandomValue()}% ${getRandomValue()}% ${getRandomValue()}% / ${getRandomValue()}% ${getRandomValue()}% ${getRandomValue()}%`;
    }

    function getRandomValue() {
        return Math.floor(Math.random() * 50) + 50;
    }

    return (
        <div className="hero-container">
            <div className="text-heading">
                <div className="power">
                    <p className="bada">Power</p>
                    <p className="chhota">/ pau • uh /</p>
                </div>
                <div className="power-content">
                    <p>It's only your mental resistance to the situation - your impatience and eagerness to reach your destination - which makes it unpleasant.</p>
                </div>
                <h1>Just Let Go</h1>
                <h1>You Matter</h1>
            </div>
            <div className="graphic-heading">
                <p className="inspiration-1">You <strong>don't</strong> have to <strong>struggle</strong> in silence!</p>
                <a className="learnmore">Learn More</a>
                <img src="/graphic.png" />
                <GiBrain className="brainless" size={80} color="#6C63FF" />
                <div className="brain-icon" ref={box}></div>
                <p className="inspiration-2">There's <strong>hope</strong> when your <strong>brain</strong> tells you there isn't</p>
            </div>
        </div>
    )
}

export default Hero