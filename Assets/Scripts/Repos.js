document.addEventListener("DOMContentLoaded", () => {
    function AddRepo(title, author, description, stars) {
        var ReposElement = document.getElementsByClassName(author == "Instel12" ? "Repos" : "OthersRepos")[0]; // i love 1 line if statements
        const Temp = document.createElement("div");
        Temp.className = "Repo";

        Temp.innerHTML = `
            <h3>${title}</h3>
            <p>${description || "No description"}</p>
            <span>By ${author}</span>
            <span>${stars} Stars</span>
            <a href="https://github.com/${author}/${title}" target="_blank">View on GitHub</a>
        `;

        ReposElement.appendChild(Temp);
    }

    async function DoIt() {
        const res = await fetch("/Assets/Repos.json");
        const repos = await res.json();

        for (const [user, userRepos] of Object.entries(repos)) {
            for (const repo of userRepos) {
                const ghRes = await fetch(`https://api.github.com/repos/${user}/${repo}`);
                const ghJSON = await ghRes.json();

                AddRepo(ghJSON.name, user, ghJSON.description, ghJSON.stargazers_count);
            }
        }
    }

    DoIt();
});