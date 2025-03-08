
import { useEffect } from 'react';
import gsap from 'gsap';
import '../styles/components/_heder.scss'

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
]

export default function Header() {

    useEffect(() => {
        const links = document.querySelectorAll('.nav_link');
        const wrappers = document.querySelectorAll('.nav_link_wrapper');
        console.log(links);
        // const chars = document.querySelectorAll('.nav_link_char');
        // console.log(chars);
        // link.addEventListener('mouseover', () => {
        //             gsap.to(chars, {
        //                 duration: 0.3,
        //                 y: -20,
        //                 stagger: 0.1,
        //             });
        //         });

        wrappers.forEach(wrapper => {
            const toplink = wrapper.querySelector('.nav_link_top');
            const bottomlink = wrapper.querySelector('.nav_link_bottom');
            if (!toplink || !bottomlink) return;

            const topChars = toplink.textContent?.split('') || [];
            const bottomChars = bottomlink.textContent?.split('') || [];
            // const linkText = link.textContent;
            // if (!linkText) return;

            toplink.innerHTML = '';
            bottomlink.innerHTML = '';

            const topSpans = topChars.map((char, index) => {
                const span = document.createElement('span');
                span.classList.add('nav_link_char');
                span.textContent = char;
                toplink.appendChild(span);
                return span;
            });

            const bottomSpans = bottomChars.map((char, index) => {
                const span = document.createElement('span');
                span.classList.add('nav_link_char');
                span.textContent = char;
                bottomlink.appendChild(span);
                return span;
            });

            // const chars = linkText.split('').map(char => {
            //     console.log(char);
            //     const span = document.createElement('span');
            //     span.classList.add('nav_link_char');
            //     span.textContent = char;
            //     console.log(span);
            //     link.appendChild(span);
            //     return span;
            // });
            
            // console.log('link',link);
            // let hoverAnimation: gsap.core.Tween | undefined;
            // let hoverAnimation = gsap.timeline({paused: true})
            //     .to(topSpans, {duration: 0.2, y: -22,stagger: 0.1,})
            //     .to(bottomSpans, {duration: 0.2, y: -22,stagger: 0.1,}, 0);
                
            wrapper.addEventListener('mouseenter', () => {
                // gsap.killTweensOf(topSpans);
                // gsap.killTweensOf(bottomSpans);
                gsap.to(topSpans, {y: -22, duration: 0.3, stagger: 0.1});
                gsap.to(bottomSpans, {y: -22, duration: 0.3, stagger: 0.1});
                // hoverAnimation?.play();
                // if (hoverAnimation) hoverAnimation.kill();
                
            });
            wrapper.addEventListener('mouseleave', () => {
                gsap.killTweensOf(topSpans);
                gsap.killTweensOf(bottomSpans);
                
                gsap.to([...topSpans, ...bottomSpans], {y: 0, duration: 0.3, stagger:0, immediateRender: false});
                // hoverAnimation?.reverse();
                // if (hoverAnimation) hoverAnimation.kill();
                // gsap.to(chars, {
                //     duration: 0.3,
                //     y: 0,
                // });
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
        </header>
    );
}