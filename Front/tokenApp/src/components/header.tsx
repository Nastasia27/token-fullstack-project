
import { useEffect, useState } from 'react';
import gsap from 'gsap';
import '../styles/components/_heder.scss'
import Button from './Button';
import BurgerButton from './BurgerButton';

const NavLinks = [
    {
        title: 'Home',
        link: '/'
    },
    {
        title: 'About',
        link: '#about'
    },
    {
        title: 'Contact',
        link: '#contacts'
    },
    {
        title: 'Account',
        link: '/account'
    },
    {
        title: 'Get Token',
        link: '/get-token'
    },
]

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(prev => !prev);
    }

    useEffect(() => {
        const wrappers = document.querySelectorAll('.nav_link_wrapper');

        wrappers.forEach(wrapper => {
            const toplink = wrapper.querySelector('.nav_link_top');
            const bottomlink = wrapper.querySelector('.nav_link_bottom');
            if (!toplink || !bottomlink) return;

            const topChars = toplink.textContent?.split('') || [];
            const bottomChars = bottomlink.textContent?.split('') || [];

            toplink.innerHTML = '';
            bottomlink.innerHTML = '';

            const topSpans = topChars.map(char => {
                const span = document.createElement('span');
                span.classList.add('nav_link_char');
                span.textContent = char;
                toplink.appendChild(span);
                return span;
            });

            const bottomSpans = bottomChars.map(char => {
                const span = document.createElement('span');
                span.classList.add('nav_link_char');
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

    useEffect(() => {
        const burger = document.querySelector(".burger__nav");
        if (isOpen) {
            gsap.to(burger, {height: "calc(100vh - 9rem)", duration: 0.5})
        } else {
            gsap.to(burger, {height: 0, duration: 0.5})
        }
    }, [isOpen])
    
    return (
        <header className="">
            <div className='header'>
                <div className='header_wrapper'>
                    <div className='header__back'></div>
                    <div className='logo'>KopiToken</div>
                    <nav className='header__nav'>
                        {NavLinks.map((link, index) => (
                            <div key={index} className='nav_link_wrapper'>
                                <a href={link.link} className='nav_link_top'>
                                    {link.title}
                                </a>
                                <a href={link.link} className='nav_link_bottom'>{link.title}</a>
                            </div>
                        ))}
                    </nav>
                    <div className='button_talk'>
                        <Button text="Let's talk" type='dark'/>
                    </div>
                    <div className='button_menu'>
                        <BurgerButton toggleMenu={toggleMenu} isOpen={isOpen}/>
                    </div>
                </div>
                
                <nav className={`burger__nav ${isOpen ? 'open' : ''}`}>
                    {NavLinks.map((link, index) => (
                        <div key={index} className=''>
                            <a href={link.link} className='' onClick={toggleMenu}>
                                {link.title}
                            </a>
                        </div>
                    ))}
                </nav>
                
            </div>
        </header>
    );
}