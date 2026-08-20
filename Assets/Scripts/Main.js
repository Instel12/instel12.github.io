document.addEventListener("DOMContentLoaded", () => {
    const Message = document.getElementsByClassName("Message")[0];

    Message.textContent = Messages.GetMessage();
});