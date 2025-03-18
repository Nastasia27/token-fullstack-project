import Button from "./button"
// import Tg from "../../public/svg/telegram.svg"
import Tg from "../svg/telegram.svg"
import email from "../svg/email.svg"
import whatsap from "../svg/whatsap.svg"
import { useEffect } from "react"
import gsap from "gsap"

const SocialLinks = [
    {
        title: 'Instagram',
        link: '#'
    },
    {
        title: 'Facebook',
        link: '#'
    },
]

export default function Footer() {

    useEffect(() => {
        const wrappers = document.querySelectorAll('.social_link_wrapper');

        wrappers.forEach(wrapper => {
            const toplink = wrapper.querySelector('.social_link_top');
            const bottomlink = wrapper.querySelector('.social_link_bottom');
            if (!toplink || !bottomlink) return;

            const topChars = toplink.textContent?.split('') || [];
            const bottomChars = bottomlink.textContent?.split('') || [];

            toplink.innerHTML = '';
            bottomlink.innerHTML = '';

            const topSpans = topChars.map(char => {
                const span = document.createElement('span');
                span.classList.add('social_link_char');
                span.textContent = char;
                toplink.appendChild(span);
                return span;
            });

            const bottomSpans = bottomChars.map(char => {
                const span = document.createElement('span');
                span.classList.add('social_link_char');
                span.textContent = char;
                bottomlink.appendChild(span);
                return span;
            });

            wrapper.addEventListener('mouseenter', () => {
                gsap.to(topSpans, {y: '-100%', duration: 0.3, stagger: 0.1});
                gsap.to(bottomSpans, {y: '-100%', duration: 0.3, stagger: 0.1});
            });
            wrapper.addEventListener('mouseleave', () => {
                gsap.killTweensOf(topSpans);
                gsap.killTweensOf(bottomSpans);
                
                gsap.to([...topSpans, ...bottomSpans], {y: 0, duration: 0.3, stagger:0, immediateRender: false});
            });
        })
    }, []);

    return(
        <footer className="footer" id="contacts">
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
            <div className="social_link_block">
                    {SocialLinks.map((link, index) => (
                        <div key={index} className='social_link_wrapper'>
                            <a href={link.link} className='social_link_top'>
                                {link.title}
                            </a>
                            <a href={link.link} className='social_link_bottom'>{link.title}</a>
                    </div>
                    ))}
            </div>
        </footer>
    )
}