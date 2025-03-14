import Button from "./button"
// import Tg from "../../public/svg/telegram.svg"
import Tg from "../svg/telegram.svg"
import email from "../svg/email.svg"
import whatsap from "../svg/whatsap.svg"

export default function Footer() {
    return(
        <footer className="footer">
            <h3 className="mini_title">/ contacts</h3>
            <div className="footer__wrapper">
                <Button 
                    text="" 
                    type="social" 
                    icon={
                        <img src={Tg} className="social_icon" alt="telegram_icon" />
                    }
                />
                <Button 
                    text="" 
                    type="social" 
                    icon={
                        <img src={whatsap} className="social_icon" alt="whatsap_icon" />
                    }
                />
                <Button 
                    text="" 
                    type='social'
                    icon={
                        <img src={email} className="social_icon" alt="email_icon" />
                    }
                />
            </div>
            <h3 className="mini_title">/ social</h3>
            <div>
                
            </div>
        </footer>
    )
}