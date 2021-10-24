import Image from 'next/image'
import check from "../Images/benefits/check.png"
const Employ = () => {
    return (
        <div className = "employ">
            <div className = "employ_left">
                <div className = "spacer_employ"></div>
                <Image src = {check} width = {30} height = {25} />
                <p className = "custom_heading_employ">Introducing VitalCheck:</p>
                <h1 className = "custom_title_employ">Get your vitals checked with VitalCheck. The highest quality preventive care provided right in your office or virtually.</h1>
                <h4>Reduce sick days, increase workplace productivity, improve employee satisfaction and reduce your long term healthcare costs.</h4>
            </div>
            <div className = "employ_right"></div>
        </div>
    )
}

export default Employ;