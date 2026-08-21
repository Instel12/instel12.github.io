document.addEventListener("DOMContentLoaded", () => {
    const Message = document.getElementsByClassName("Message")[0];

    Message.textContent = Messages.GetMessage();

    const gradient = new GradientBackground(
        [
            "#1a0000",
            "#6e0000",
            "#1a0000"
        ],
        0.25
    );

    gradient.start();
});