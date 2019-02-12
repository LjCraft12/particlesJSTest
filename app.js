/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */

const color = document.getElementById("dropdown").value;


particlesJS.load('particles-js', 'assets/particles.json', () => {
    particlesJS('particles-js', {
            particles: {
                number: {
                    value: 200,
                    density: {
                        enable: false,
                    }
                },
                size: {
                    value: 5
                },
                color: {
                  value: color
                },
                move: {
                    out_mode: 'bounce',
                    speed: 20
                }
            },
            interactivity: {
                events: {
                    onclick:{
                        mode: 'repulse'
                    }
                }

            }
        })
});
