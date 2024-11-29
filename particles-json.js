particlesJS("particles-js", {
  particles: {
    number: {
      value: 128, // Number of particles
      density: {
        enable: true,
        value_area: 800 // Particle density area
      }
    },
    color: {
      value: "#ffff00" // Particle color (electric blue)
    },
    shape: {
      type: "edge", // Shape of particles
    },
    opacity: {
      value: 0.4, // Transparency
    },
    size: {
      value: 2, // Particle size
    },
    line_linked: {
      enable: true, // Link particles with lines
      distance: 150,
      color: "#ffff00",
      opacity: 0.4,
      width: 1
    },
    move: {
      enable: true, // Enable movement
      speed: 3, // Particle movement speed
      direction: "none",
      out_mode: "out"
    }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: true,
        mode: "repulse" // Interaction mode on hover
      },
      onclick: {
        enable: true,
        mode: "push" // Interaction mode on click
      }
    },
    modes: {
      repulse: {
        distance: 100,
        line_linked: {
          opacity: 1
        }
      },
      push: {
        particles_nb: 5
      }
    }
  },
  retina_detect: true // Adjust for high-DPI screens
});

