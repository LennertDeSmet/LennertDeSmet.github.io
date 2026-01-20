function renderPublications(data, containerId) {
    const container = document.getElementById(containerId);
    if (!container || !data) return;

    data.forEach(paper => {
        const wrapper = document.createElement('div');
        wrapper.id = 'wrapper';

        // First section: Citation
        const first = document.createElement('div');
        first.id = 'first';

        let authorsHtml = paper.authors.map((author, index) => {
            let nameHtml = author.url ? `<a href="${author.url}" style="text-decoration: none">${author.name}</a>` : author.name;
            return nameHtml;
        }).join(', ');

        // Manual join doesn't handle trailing comma perfectly if we just use join, 
        // but the original code had simple commas. 
        // Let's replicate the structure: Author, A., Author, B. (Year).

        first.innerHTML = `
            <p>
                ${authorsHtml} (${paper.year}).
                <br>
                <em>${paper.title}</em>
                ${paper.venue ? `<br>${paper.venue}` : ''}
            </p>
        `;
        wrapper.appendChild(first);

        // Spacings preserved from original styling (only for conference papers)
        if (containerId === 'conference-papers') {
            const spacings = [1, 2, 3, 4, 5];
            spacings.forEach(() => wrapper.appendChild(document.createElement('br')));
        }

        // Second section: Links
        paper.links.forEach((link, index) => {
            const second = document.createElement('div');
            second.id = 'second';
            second.innerHTML = `
                <a href="${link.url}" style="text-decoration: none">
                    <p id="rcorners1" style="text-align:center;"> <b>
                        <i class="${link.icon} w3-hover-opacity"></i> ${link.name} </b> </p>
                </a>
            `;
            wrapper.appendChild(second);

            // Add spacer between buttons generally, but original had it after every button
            if (index < paper.links.length - 1) {
                const spacer = document.createElement('div');
                spacer.id = 'second';
                spacer.innerHTML = `
                    <a style="text-decoration: none">
                        <p style="text-align:center;"> <b> &nbsp &nbsp </b> </p>
                    </a>
                 `;
                wrapper.appendChild(spacer);
            }
        });

        container.appendChild(wrapper);
        container.appendChild(document.createElement('br'));
    });
}

document.addEventListener('DOMContentLoaded', () => {
    if (typeof publicationsData !== 'undefined') {
        renderPublications(publicationsData.conference_papers, 'conference-papers');
        renderPublications(publicationsData.preprints, 'preprints');
        renderPublications(publicationsData.workshop_papers, 'workshop-papers');
    }
});
