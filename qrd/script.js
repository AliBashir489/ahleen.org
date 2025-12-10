// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    
    // ========================================
    // Add to Calendar Functionality
    // ========================================
    const addToCalendarBtn = document.getElementById('addToCalendar');
    if (addToCalendarBtn) {
        addToCalendarBtn.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Event details
            const eventTitle = 'Quran Revision Day';
            const eventDescription = 'A complete day dedicated to revising the Quran in the company of scholars and fellow memorizers. Join us for this blessed opportunity to strengthen your connection with the Book of Allah.';
            const eventLocation = 'Jammat ul Muttaqeen, 1010 SW 196th Ave, Pembroke Pines, FL 33029';
            const startDate = '20250123T193000'; // January 23, 2025, 7:30 PM
            const endDate = '20250124T203000'; // January 24, 2025, 8:30 PM
            
            // Create .ics file content
            const icsContent = [
                'BEGIN:VCALENDAR',
                'VERSION:2.0',
                'PRODID:-//Ahleen.org//Quran Revision Day//EN',
                'BEGIN:VEVENT',
                'UID:' + new Date().getTime() + '@ahleen.org',
                'DTSTAMP:' + new Date().toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z',
                'DTSTART:' + startDate,
                'DTEND:' + endDate,
                'SUMMARY:' + eventTitle,
                'DESCRIPTION:' + eventDescription.replace(/\n/g, '\\n'),
                'LOCATION:' + eventLocation,
                'STATUS:CONFIRMED',
                'BEGIN:VALARM',
                'TRIGGER:-P1D',
                'ACTION:DISPLAY',
                'DESCRIPTION:Reminder: ' + eventTitle + ' tomorrow',
                'END:VALARM',
                'END:VEVENT',
                'END:VCALENDAR'
            ].join('\r\n');
            
            // Create blob and download
            const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
            const link = document.createElement('a');
            link.href = window.URL.createObjectURL(blob);
            link.download = 'quran-revision-day.ics';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        });
    }
    
    // ========================================
    // Smooth Scroll for Anchor Links
    // ========================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href === '#') return; // Skip if it's just "#"
            
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // ========================================
    // FAQ Accordion Functionality
    // ========================================
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', () => {
            const isActive = item.classList.contains('active');
            
            // Close all FAQ items
            faqItems.forEach(faq => {
                faq.classList.remove('active');
            });
            
            // Open clicked item if it wasn't active
            if (!isActive) {
                item.classList.add('active');
            }
        });
    });

    // ========================================
    // Scroll Animation Observer
    // ========================================
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // Observe all elements with slide-up animations
    document.querySelectorAll('.slide-up, .slide-up-delay, .slide-up-delay-2').forEach(el => {
        observer.observe(el);
    });

    // ========================================
    // Tier Card Hover Effects
    // ========================================
    const tierCards = document.querySelectorAll('.tier-card');
    
    tierCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // ========================================
    // Benefit Cards Animation on Hover
    // ========================================
    const benefitCards = document.querySelectorAll('.benefit-card');
    
    benefitCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            const icon = this.querySelector('.benefit-icon');
            icon.style.transform = 'scale(1.2) rotate(5deg)';
            icon.style.transition = 'transform 0.3s ease';
        });
        
        card.addEventListener('mouseleave', function() {
            const icon = this.querySelector('.benefit-icon');
            icon.style.transform = 'scale(1) rotate(0deg)';
        });
    });

    // ========================================
    // Hadith Box Animation
    // ========================================
    const hadithBoxes = document.querySelectorAll('.hadith-box');
    
    const hadithObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'slideUp 0.8s ease forwards';
            }
        });
    }, { threshold: 0.2 });

    hadithBoxes.forEach(box => {
        hadithObserver.observe(box);
    });

    // ========================================
    // Timeline Item Reveal Animation
    // ========================================
    const timelineItems = document.querySelectorAll('.timeline-item');
    
    const timelineObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateX(0)';
                }, index * 100);
            }
        });
    }, { threshold: 0.3 });

    timelineItems.forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'translateX(-20px)';
        item.style.transition = 'all 0.5s ease';
        timelineObserver.observe(item);
    });

    // ========================================
    // CTA Button Click Animation
    // ========================================
    const ctaButtons = document.querySelectorAll('.cta-button');
    
    ctaButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            // Create ripple effect
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.classList.add('ripple');
            
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });

    // Add ripple CSS dynamically
    const style = document.createElement('style');
    style.textContent = `
        .cta-button {
            position: relative;
            overflow: hidden;
        }
        .ripple {
            position: absolute;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.5);
            transform: scale(0);
            animation: rippleEffect 0.6s ease-out;
            pointer-events: none;
        }
        @keyframes rippleEffect {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);

    // ========================================
    // Parallax Effect for Hero Section
    // ========================================
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const hero = document.querySelector('.hero-content');
        
        if (hero) {
            hero.style.transform = `translateY(${scrolled * 0.5}px)`;
            hero.style.opacity = 1 - (scrolled / 500);
        }
    });

    // ========================================
    // Countdown Timer (Optional)
    // ========================================
    function updateCountdown() {
        const eventDate = new Date('2025-01-23T19:30:00').getTime();
        const now = new Date().getTime();
        const distance = eventDate - now;

        if (distance > 0) {
            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            // You can add a countdown element to the HTML and update it here
            // Example: document.getElementById('countdown').innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
        }
    }

    // Update countdown every second
    setInterval(updateCountdown, 1000);
    updateCountdown();

    // ========================================
    // Scroll to Top Button (if needed)
    // ========================================
    const scrollProgress = () => {
        const scrollTop = window.pageYOffset;
        const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;
        
        // You can use this to show a progress bar or scroll indicator
        // Example: document.getElementById('scroll-progress').style.width = scrollPercent + '%';
    };

    window.addEventListener('scroll', scrollProgress);

    // ========================================
    // Loading Animation Complete
    // ========================================
    window.addEventListener('load', () => {
        document.body.classList.add('loaded');
        console.log('🕌 Quran Revision Day website loaded successfully');
        console.log('📖 May Allah accept this effort and grant barakah to all participants');
    });

    // ========================================
    // Prevent Default on Register Links (until form is added)
    // ========================================
    const registerLinks = document.querySelectorAll('a[href="#"]');
    registerLinks.forEach(link => {
        if (link.textContent.includes('Register')) {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                alert('Registration will open soon, In Sha Allah. Please check back later or contact the organizers for more information.');
            });
        }
    });

    // ========================================
    // Add hover effect to section titles
    // ========================================
    const sectionTitles = document.querySelectorAll('.section-title');
    
    sectionTitles.forEach(title => {
        title.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
            this.style.transition = 'transform 0.3s ease';
        });
        
        title.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });

    // ========================================
    // Console Art
    // ========================================
    console.log('%c                                                                    ', 'font-size: 1px;');
    console.log('%c🕌 Quran Revision Day 2025', 'color: #1a5f3f; font-size: 24px; font-weight: bold;');
    console.log('%c📅 January 23-24, 2025', 'color: #d4af37; font-size: 16px;');
    console.log('%c📍 Jammat ul Muttaqeen, Pembroke Pines, FL', 'color: #666; font-size: 14px;');
    console.log('%c                                                                    ', 'font-size: 1px;');
    console.log('%cبِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ', 'color: #1a5f3f; font-size: 18px; font-family: Amiri, serif;');
    console.log('%c                                                                    ', 'font-size: 1px;');
    console.log('%cMay Allah accept this effort and benefit all participants. Ameen.', 'color: #0d3b26; font-size: 12px; font-style: italic;');
});
