// Configurazione di Tailwind
tailwind.config = {
  theme: {
    extend: {
      colors: {
        primary: "#0ea5e9",
        secondary: "#6366f1",
        dark: "#0f172a",
        light: "#f8fafc",
      },
      fontFamily: {
        mono: ["Courier Prime", "Anonymous Pro", "Ubuntu Mono", "Courier New", "Monaco", "Consolas", "monospace"],
        sans: ["Inter", "system-ui", "sans-serif"],
        code: ["Courier Prime", "Anonymous Pro", "Ubuntu Mono", "Courier New", "Monaco", "monospace"],
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {},
    },
  },
};

// GSAP Animations
function initGSAPAnimations() {
  // Timeline principale
  const tl = gsap.timeline();
  
  // Animazione background gradient
  gsap.to('.bg-animated', {
    backgroundPosition: '100% 50%',
    duration: 15,
    ease: 'none',
    repeat: -1,
    yoyo: true
  });
  
  // Animazione terminal flicker per elementi con terminal-glow
  gsap.to('.terminal-glow', {
    opacity: 0.98,
    duration: 2,
    ease: 'power2.inOut',
    repeat: -1,
    yoyo: true
  });
  
  // Animazione cursor blinking
   gsap.to('.typing-cursor::after', {
     opacity: 0,
     duration: 1.1,
     ease: 'steps(1)',
     repeat: -1,
     yoyo: true
   });
   
   // Animazione status indicator (pulse)
   gsap.to('.status-indicator', {
     scale: 1.2,
     opacity: 0.7,
     duration: 2,
     ease: 'power2.inOut',
     repeat: -1,
     yoyo: true
   });
  
  // Animazione typing per code-line
  gsap.fromTo('.code-line', 
    { width: '0%' },
    { 
      width: '100%',
      duration: 3,
      ease: 'steps(30)',
      delay: 0.5
    }
  );
  
  // Animazione float per le icone
  gsap.to('.animate-float', {
    y: -12,
    duration: 6,
    ease: 'power2.inOut',
    repeat: -1,
    yoyo: true,
    stagger: {
      each: 0.5,
      from: 'start'
    }
  });
  
  // Animazione gradient-x per il testo "Coming Soon"
  gsap.to('.animate-gradient-x', {
    backgroundPosition: '100% 50%',
    duration: 4,
    ease: 'none',
    repeat: -1,
    yoyo: true
  });
  
  // Nuove animazioni infinite
  
  // Animazione di rotazione infinita per elementi decorativi
   gsap.to('.rotate-element', {
     rotation: 360,
     duration: 20,
     ease: 'none',
     repeat: -1,
     transformOrigin: 'center center'
   });
   
   // Animazione di pulsazione per elementi interattivi
   gsap.to('.pulse-element', {
     scale: 1.05,
     duration: 3,
     ease: 'power2.inOut',
     repeat: -1,
     yoyo: true
   });
  
  // Animazione di movimento ondulatorio
  gsap.to('.wave-element', {
    x: 20,
    y: 10,
    duration: 4,
    ease: 'sine.inOut',
    repeat: -1,
    yoyo: true,
    stagger: {
      each: 0.3,
      from: 'random'
    }
  });
  
  // Animazione di scintillio per testi speciali
   gsap.to('.sparkle-text', {
     textShadow: '0 0 15px currentColor, 0 0 25px currentColor',
     duration: 2,
     ease: 'power2.inOut',
     repeat: -1,
     yoyo: true
   });
   
   // Animazione di respirazione per il container principale
   gsap.to('.breathe-container', {
     scale: 1.01,
     duration: 8,
     ease: 'power1.inOut',
     repeat: -1,
     yoyo: true
   });
  
  // Animazione di particelle fluttuanti
  gsap.to('.floating-particle', {
    y: -30,
    x: 15,
    rotation: 180,
    duration: 8,
    ease: 'sine.inOut',
    repeat: -1,
    yoyo: true,
    stagger: {
      each: 1,
      from: 'random'
    }
  });
  
  // Typing effect function
   function typeWriter(element, text, speed = 50, delay = 0) {
     setTimeout(() => {
       let i = 0;
       element.innerHTML = '';
       
       function type() {
         if (i < text.length) {
           element.innerHTML += text.charAt(i);
           i++;
           setTimeout(type, speed);
         }
         // Cursor removed - animation completes cleanly
       }
       type();
     }, delay);
   }

  // Initialize typing animations
  const developerText = `const developer = {
  name: "Antonio Fuscaldo",
  role: "Front-end Developer"
};`;

  const copyrightText = `function copyright() {
  return "©2025 Antonio Fuscaldo | All rights reserved.";
}`;

  const developerElement = document.getElementById('developer-code');
  const copyrightElement = document.getElementById('copyright-code');

  if (developerElement && copyrightElement) {
    typeWriter(developerElement, developerText, 50, 500);
    typeWriter(copyrightElement, copyrightText, 50, 2000);
  }
  
  // Animazione progress bar
  const progressBar = document.getElementById('progress-bar');
  const progressText = document.getElementById('progress-text');
  const progressContainer = document.querySelector('[role="progressbar"]');
  
  if (progressBar && progressText) {
    // Anima la larghezza della barra
    gsap.to(progressBar, {
      width: '80%',
      duration: 3,
      ease: 'power2.out',
      delay: 1
    });
    
    // Anima il testo del progresso
    gsap.to({ progress: 0 }, {
      progress: 80,
      duration: 3,
      ease: 'power2.out',
      delay: 1,
      onUpdate: function() {
        const currentProgress = Math.round(this.targets()[0].progress);
        progressText.textContent = currentProgress + '%';
        if (progressContainer) {
          progressContainer.setAttribute('aria-valuenow', currentProgress.toString());
        }
      }
    });
  }
  
  // Imposta lo stato iniziale delle icone
   gsap.set('.icon', { opacity: 0, scale: 0.5 });
   
   // Animazioni di entrata per gli elementi principali
    tl.from('main', {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: 'power2.out'
    })
    .to('.icon', {
      opacity: 1,
      scale: 1,
      duration: 0.8,
      ease: 'back.out(1.7)',
      stagger: 0.1
    }, '-=0.5')
   .from('.status-indicator', {
     opacity: 0,
     scale: 0,
     duration: 0.6,
     ease: 'back.out(1.7)'
   }, '-=0.8');
}

// Inizializza le animazioni GSAP quando il DOM è pronto
document.addEventListener('DOMContentLoaded', initGSAPAnimations);

// Gestisce la visibilità della pagina
document.addEventListener('visibilitychange', function() {
  if (!document.hidden) {
    // Riavvia le animazioni se necessario
    gsap.globalTimeline.play();
  }
});