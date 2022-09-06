import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
    iconSize: [25, 40]
});

L.Marker.prototype.options.icon = DefaultIcon;

const Contact = () => {

    const [letterClass] = useState('text-animate')


    const refForm = useRef()

    const sendEmail = (e) => {
        e.preventDefault()

        emailjs.sendForm(
            'service_m9juybc',
            'template_2a0hlzd',
            refForm.current,
            '7F_SCdRCBG2x0RWSI'
        ).then(
            () => {
                alert('Message send successfully!')
                window.location.reload(false)
            },
            () => {
                alert('Message failed to send, please try again.')
            }
        )
    }


    return (
        <>

            <div className='container contact-page'>
                <div className="text-zone">
                    <h1>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
                            idx={15} />
                    </h1>
                    <p>
                        I am currently looking for employment in the tech industry -
                        I am especially interested in fields regarding development.
                        If you have any requests or questions, please contact me here.
                    </p>
                    <div className="contact-form">
                        <form ref={refForm} onSubmit={sendEmail}>
                            <ul>
                                <li className="half">
                                    <input type="text" name="name" placeholder="Name" required />
                                </li>
                                <li className="half">
                                    <input type="text" name="email" placeholder="Email" required />
                                </li>
                                <li>
                                    <input type="text" name="subject" placeholder="Subject" required />
                                </li>
                                <li>
                                    <textarea name="message" placeholder="Message" required />
                                </li>
                                <li>
                                    <input type="submit" className="flat-button" value="SEND" />
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>
                <div className='info-map'>
                    Jacob Berendsohn,
                    <br />
                    New York / Connecticut
                    <br />
                    <span>berendsohnjacob@gmail.com</span>
                </div>
                <div className='map-wrap'>
                    <MapContainer center={[41.5745448803117, -73.41080100193686]} zoom={10}>
                        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                        <Marker position={[41.5745448803117, -73.41080100193686]}>
                            <Popup> My Area </Popup>
                        </Marker>
                    </MapContainer>
                </div>

            </div>

            <Loader type="ball-zig-zag" />
        </>
    )
}

export default Contact;