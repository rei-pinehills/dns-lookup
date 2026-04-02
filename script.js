function lookup() {
    const domain = document.getElementById("domain").value;
    const url = `https://dns.google/resolve?name=${domain}&type=A`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const result = document.getElementById("result");
            if (data.Answer) {
                let html = `<h3>Results for: ${domain}</h3>`;
                data.Answer.forEach(record => {
                    html += `<p>${record.name} -> ${record.data}</p>`;
                });
                result.innerHTML = html;
            }else {
                result.innerHTML = "<p>No results found.</p>";
            }

            });
        }

