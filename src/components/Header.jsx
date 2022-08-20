import { Link } from "react-router-dom"

const Header = () => {
    return (
        <header className="navbar">
            <div className='logo'>
                <img src="https://attachments.office.net/owa/antariksha.verma%40pathways.in/service.svc/s/GetAttachmentThumbnail?id=AQMkADA2OTczOTgyLWUyNDEtNDgxOS04MjYzLTE4MTI5YmZlNmNhNgBGAAADEJrPi2xko024G%2FManJBpjwcALSkDtFXBiEO7d%2BZJVN%2FjpQAAAgEMAAAALSkDtFXBiEO7d%2BZJVN%2FjpQAFeIHRhAAAAAESABAATpODHUJAZkyw%2F6xoGC%2Fk%2Bg%3D%3D&thumbnailType=2&token=eyJhbGciOiJSUzI1NiIsImtpZCI6IkQ4OThGN0RDMjk2ODQ1MDk1RUUwREZGQ0MzODBBOTM5NjUwNDNFNjQiLCJ0eXAiOiJKV1QiLCJ4NXQiOiIySmozM0Nsb1JRbGU0Tl84dzRDcE9XVUVQbVEifQ.eyJvcmlnaW4iOiJodHRwczovL291dGxvb2sub2ZmaWNlLmNvbSIsInVjIjoiMDE0NDM3NzJhN2VlNDI5OWI0YjYzNWU3ZjNjMWJhMmMiLCJzaWduaW5fc3RhdGUiOiJbXCJrbXNpXCJdIiwidmVyIjoiRXhjaGFuZ2UuQ2FsbGJhY2suVjEiLCJhcHBjdHhzZW5kZXIiOiJPd2FEb3dubG9hZEA3MmNiNjlkZi1lMDhiLTRiZjUtOTkyYi00MThmMWRhMzFlODYiLCJpc3NyaW5nIjoiV1ciLCJhcHBjdHgiOiJ7XCJtc2V4Y2hwcm90XCI6XCJvd2FcIixcInB1aWRcIjpcIjExNTM5NzcwMjU0ODY1NTQ4MzVcIixcInNjb3BlXCI6XCJPd2FEb3dubG9hZFwiLFwib2lkXCI6XCI3OGJkZjNmOS1kM2E2LTRkOWItYmI1Zi00YzA2NDIyMTBjZTFcIixcInByaW1hcnlzaWRcIjpcIlMtMS01LTIxLTk2NDU5MjQxOS0zMjQyNDI3ODIzLTU5OTAzMDkzNC04NzI5NTA1XCJ9IiwibmJmIjoxNjYwOTc2MTM2LCJleHAiOjE2NjA5NzY3MzYsImlzcyI6IjAwMDAwMDAyLTAwMDAtMGZmMS1jZTAwLTAwMDAwMDAwMDAwMEA3MmNiNjlkZi1lMDhiLTRiZjUtOTkyYi00MThmMWRhMzFlODYiLCJhdWQiOiIwMDAwMDAwMi0wMDAwLTBmZjEtY2UwMC0wMDAwMDAwMDAwMDAvYXR0YWNobWVudHMub2ZmaWNlLm5ldEA3MmNiNjlkZi1lMDhiLTRiZjUtOTkyYi00MThmMWRhMzFlODYiLCJoYXBwIjoib3dhIn0.VdzYtB0mpxdfcYh9Hp8-5DTVWqXM6SLUULdmHm0I2yY0kztqUgeskFbx-iB1Mqd53JZddBWiHBM8IVevHWqmcVPWypZvhjVl37IS_R8hENGOxr7LAI_DxJfBCMX0UoFwxEHlnvcxLr4xqG2WZEmI0EVXSkGeSNCY92oRooGwYtTiMeVuMqG4jcO8eIyJd7he-1seq9-cJfCRb5gSVhY9beiku7EHByjpNafpiXQCYYaEOPfcYbqa79zVBiRTxKzRdUvOHkd7OLSMTtVJ98g1AfHA2UqwJ2BKtrAGfAmriexO-00kJv9ZQ8AjWgHMRvkbBc1w_CyhVn-HzV7iCLeL8g&X-OWA-CANARY=9MQMIr-hPkuwJxmmVYgf5pCAUmhzgtoYSt8n87wthPlgpm-dzOVqO6jk6wceILnC5er_ch_UJEc.&owa=outlook.office.com&scriptVer=20220729002.18&animation=true" />
            </div>
            <div className='right'>
                <ul>
                    <li>
                        <Link to="/about">About Us</Link>
                    </li>
                    <li>
                        <Link to="/chat">Chat with Us</Link>
                    </li>
                    <li>
                        <Link to="/chat">Talk to Us</Link>
                    </li>
                </ul>
            </div>
        </header>
    )
}

export default Header