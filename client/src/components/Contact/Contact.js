import style from './Contact.module.css'


const Contact = () => {
    return (
        <div className={style.divContact}>
            <p>Contact Us Page</p>
            <ul>
                <li>Email:</li>
                <li>Phone Number:</li>
                <li>Address:</li>
            </ul>
        </div>
    );
}

export default Contact;