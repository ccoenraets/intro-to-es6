var contact = {
    firstName: "Christophe",
    lastName: "Coenraets",
    email: "ccoenraets@salesforce.com",
    twitter: "@ccoenraets"
};

var html = `
    <div>
        <h1>${contact.firstName} ${contact.lastName}</h1>
        <p>Email: ${contact.email}</p>
        <p>Twitter: ${contact.twitter}</p>
    </div>
    `;

console.log(html);