tsParticles.load("tsparticles", {
  fullScreen: {
    enable: true,
    zIndex: 100
  },
  fpsLimit: 60,
  particles: {
    number: {
      value: 0
    },
    color: {
      value: "#ff0000",
      animation: {
        enable: true,
        speed: 180,
        sync: true
      }
    },
    shape: {
      type: "heart"
    },
    opacity: {
      value: 1
    },
    size: {
      value: { min: 38, max: 88 },
      animation: {
        enable: true,
        speed: 5,
        minimumValue: 17,
        sync: true,
        startValue: "min",
        count: 1
      }
    },
    move: {
      enable: true,
      speed: { min: 10, max: 20 },
      direction: "top",
      random: false,
      straight: false,
      outMode: "destroy",
      gravity: {
        enable: true
      }
    }
  },
  interactivity: {
    detectsOn: "window",
    events: {
      onclick: {
        enable: true,
        mode: "trail"
      },
      resize: true
    },
    modes: {
      trail: {
        delay: 0.1,
        quantity: 1
      }
    }
  },
  retina_detect: true
});
