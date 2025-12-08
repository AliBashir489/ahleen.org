// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    const actionBtn = document.getElementById('actionBtn');
    const messageEl = document.getElementById('message');
    
    const messages = [
        '🎉 Welcome to Ahleen.org!',
        '✨ JavaScript is working perfectly!',
        '🚀 Ready to build something amazing?',
        '💡 The possibilities are endless!',
        '🌟 Keep exploring and learning!',
        '🎯 You\'re doing great!'
    ];
    
    let clickCount = 0;
    
    // Button click handler
    actionBtn.addEventListener('click', function() {
        clickCount++;
        
        // Get a random message
        const randomIndex = Math.floor(Math.random() * messages.length);
        const message = messages[randomIndex];
        
        // Update message with click count
        messageEl.textContent = `${message} (Clicked ${clickCount} time${clickCount !== 1 ? 's' : ''})`;
        
        // Add animation effect
        messageEl.style.animation = 'none';
        setTimeout(() => {
            messageEl.style.animation = 'fadeIn 0.5s ease';
        }, 10);
        
        // Change button text after first click
        if (clickCount === 1) {
            actionBtn.textContent = 'Click Again!';
        }
    });
    
    // Add hover effect to feature cards
    const featureCards = document.querySelectorAll('.feature-card');
    featureCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.background = 'linear-gradient(135deg, #667eea15 0%, #764ba215 100%)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.background = '#f8f9fa';
        });
    });
    
    // Console welcome message
    console.log('%cWelcome to Ahleen.org! 🎉', 'color: #667eea; font-size: 20px; font-weight: bold;');
    console.log('%cWebsite loaded successfully!', 'color: #764ba2; font-size: 14px;');
});
