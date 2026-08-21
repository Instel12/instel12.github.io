class GradientBackground { // ill admit it, this is made by chat gpt cause im lazy
                           // expect to see that change, this is temperary
    constructor(colors = ["#000000", "#ffffff"], speed = 1) {
        this.colors = colors;
        this.speed = speed;

        this.index = 0;
        this.progress = 0;
        this.lastTime = performance.now();

        this.running = false;
        this.animationFrame = null;
    }

    start() {
        if (this.running) return;

        this.running = true;
        this.lastTime = performance.now();

        this.update();
    }

    stop() {
        this.running = false;

        if (this.animationFrame) {
            cancelAnimationFrame(this.animationFrame);
            this.animationFrame = null;
        }
    }

    update() {
        const now = performance.now();
        const deltaTime = (now - this.lastTime) / 1000;
        this.lastTime = now;

        this.progress += deltaTime * this.speed;

        if (this.progress >= 1) {
            this.progress = 0;
            this.index++;

            if (this.index >= this.colors.length - 1) {
                this.index = 0;
            }
        }

        const color1 = this.hexToRgb(this.colors[this.index]);
        const color2 = this.hexToRgb(this.colors[this.index + 1]);

        const color = this.interpolate(color1, color2, this.progress);

        document.body.style.backgroundColor = `rgb(${color.r}, ${color.g}, ${color.b})`;

        this.animationFrame = requestAnimationFrame(() => this.update());
    }

    interpolate(a, b, t) {
        return {
            r: Math.round(a.r + (b.r - a.r) * t),
            g: Math.round(a.g + (b.g - a.g) * t),
            b: Math.round(a.b + (b.b - a.b) * t)
        };
    }

    hexToRgb(hex) {
        hex = hex.replace("#", "");

        return {
            r: parseInt(hex.substring(0, 2), 16),
            g: parseInt(hex.substring(2, 4), 16),
            b: parseInt(hex.substring(4, 6), 16)
        };
    }
}