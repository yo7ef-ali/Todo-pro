function render() {
    let list = document.getElementById("taskList");
    list.innerHTML = "";

    let filtered = tasks.filter(t => {
        if (filter === "active") return !t.done;
        if (filter === "done") return t.done;
        return true;
    });

    filtered.forEach(task => {
        list.innerHTML += `
            <li>
                <span class="${task.done ? 'done' : ''}" onclick="toggleDone(${task.id})">
                    ${task.text}
                </span>
            </li>
        `;
    });
}