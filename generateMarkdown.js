// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// used licenses from https://gist.github.com/lukas-h/2a5d00690736b4c3a7ba#bsd-3-clause-license
function renderLicenseBadge(license) {
    let badge ='';
    if (license === 'Apache 2.0 License'){
        badge = '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
    }else if(license === 'Boost Software License 1.0'){
        badge = '[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)';
    }else if (license === 'BSD 3-Clause License'){

    }else if (license === 'BSD 2-Clause License'){
        badge = '[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)';
    }
    return badge;
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    let licenseLink;
if (license === 'Apache 2.0 License'){
    licenseLink = 'https://opensource.org/license/apache-2-0/';
}else if (license ==='Boost Software License 1.0'){
    licenseLink = 'https://www.boost.org/LICENSE_1_0.txt';
}else if (license === 'BSD 3-Clause License'){
    licenseLink = 'https://opensource.org/license/bsd-3-clause/';
}else if (license === 'BSD 2-Clause License'){
    licenseLink = 'https://opensource.org/license/bsd-2-clause/';
}
return licenseLink;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
let licenseSection = '';
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
