// function to create appropriate license badge.  If license is listed as "Other" or "None", a message will be displayed stating that license information is not available.
function createLicenseBadge(license) {
  if (license !== "Other") {
    return `![GitHub License](https://img.shields.io/badge/license-${license}-blue.svg)`
  }
    return 'Licensing information for this application is not available.'
  }

// function to create a section for information about licensing.  If license is listed as "Other" or "None", a message will be displayed in the section stating that license information is not available.
function createLicenseSection(license) {
  if (license !== "Other") {
    return (`## License
    
    This application is covered by the ${license} license.`)
  }
    return (`## License
    
    Licensing information for this application is not available.`)
  }

// function to generate markdown for README
function generateMarkdown(data) {
  return `<h1 align="center">${data.title}</h1>
  ${createLicenseBadge(data.license)}

## Description

${data.description}

## Table of Contents

* [Installation](#installation)

* [Usage](#usage)

* [License](#license)

* [Contributing](#contributing)

* [Testing](#testing)

* [Questions?](#questions)

## Installation

To install necessary dependencies, run the following command:

${data.installation}

## Usage

${data.usage}

${createLicenseSection(data.license)}

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
