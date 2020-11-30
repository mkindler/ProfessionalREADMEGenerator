// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

## Description

${data.description}

## Table of Contents

* [Installation Instructions](#installation)

* [Usage Information](#usage)

* [Contributing](#contributing)

* [Testing](#testing)

* [Questions?](#questions)

## Installation Instructions

To install necessary dependencies, run the following command:

${data.installation}

## Usage Information

${data.usage}

## Contributing

${data.contributing}

## Testing

To run tests, run the following command:

${data.testing}

## Questions?

If you have any questions about this repository, please open an issue or contact me directly at ${data.email}.

Looking for more of my work?  Please visit [${data.username}](https://github.com/${data.username}/).

`;
}

module.exports = generateMarkdown;
