
import { useEffect } from 'react';
import gsap from 'gsap';
import '../styles/components/_heder.scss'
import Button from './button';

const NavLinks = [
    {
        title: 'Home',
        link: '#'
    },
    {
        title: 'About',
        link: '#'
    },
    {
        title: 'Contact',
        link: '#'
    },
    {
        title: 'Account',
        link: '#'
    },
]

export default function Header() {

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
    
    return (
        <header className="header">
            <div className='header__back'></div>
            <h1>KopiToken</h1>
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
            <div>
                <Button text="Let's talk" type='dark'/>
            </div>
        </header>
    );
}