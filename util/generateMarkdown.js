// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// used licenses from https://gist.github.com/lukas-h/2a5d00690736b4c3a7ba#bsd-3-clause-license
function renderLicenseBadge(license) {
    let badge ='';
    if (license != ''){
        badge = '[![License](https://img.shields.io/badge/License-' + license + ')](https://opensource.org/licenses/Apache-2.0)';
    }
    return badge;
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    let licenseLink;
if (license === 'Apache_2.0-blue.svg'){
    licenseLink = 'https://opensource.org/licenses/Apache-2.0';
}else if (license ==='Boost_1.0-lightblue.svg'){
    licenseLink = 'https://www.boost.org/LICENSE_1_0.txt';
}else if (license === 'BSD_3--Clause-blue.svg'){
    licenseLink = 'https://opensource.org/licenses/BSD-3-Clause';
}else if (license === 'BSD_2--Clause-orange.svg'){
    licenseLink = 'https://opensource.org/licenses/BSD-2-Clause';
}
return licenseLink;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
let licenseSection = '';
if(license != 'None'){
    licenseSection = '## License\n Refer to ' + renderLicenseLink(license) + ' for more information on this license\n'
}
return licenseSection;
};
let tableContent = ['* Description \n', ' * Installation \n', '* Usage\n ', '* Contribute \n', '* Tests \n','* License \n', '* Questions \n'];

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
    let tableArr = '';
    for (let i = 0; i < tableContent.length; i++){
        tableArr += tableContent[i];
       };
return`# ${data.title} \n
${renderLicenseBadge(data.license)}
# Table of Content: \n
${tableArr}\n
# Description \n ${data.description}\n
# Installation \n ${data.installation}\n
# Usage \n ${data.usage}\n
${renderLicenseSection(data.license)}`;

};

module.exports = generateMarkdown;
