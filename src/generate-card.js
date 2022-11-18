// takes in obj and generates card html section then returns it
const getTitleSpec = title => {
    switch (title) {
        case 'Intern':
            return 'School';
        case 'Engineer':
            return 'GitHub'
        case 'Manager':
            return 'Office number'
    }
}

const getTitleData = (title, arg) => {
    let data = Object.values(arg)[0];

    if (title == 'Engineer') {
        data = `<a href="https://github.com/${data}" class="card-link">${data}</a>`
    }

    return data;
}

const generateCard = data => {
    const title = data.constructor.name;
    const { name, id, email, ...arg } = data
    const titleSpec = getTitleSpec(data.constructor.name);
    const titleData = getTitleData(title, arg)

    return `
            <article class="card shadow" style="width: 20rem;">
                <div class="card-body">
                    <section class="card-header">
                        <h2 class="card-title">${name}</h2>
                        <h3 class="card-subtitle mb-2 text-muted">${title}</h3>
                    </section>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">ID: ${id}</li>
                        <li class="list-group-item">
                            Email: <a href="mailto:${email}" class="card-link">${email}</a>
                        </li>
                        <li class="list-group-item">${titleSpec}: ${titleData}</li>
                    </ul>
                </div>
            </article>
`
}

module.exports = generateCard;