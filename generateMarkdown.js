// function to generate markdown for README
function generateMarkdown(data) {
  return `#Project Name -  ${data.title}
      

  *[Description][#description]

  ## Table of Content
   
  *[Installation][#install]
     
  *[Usage][#usage]
       
  *[Credits][#credits]
    
  *[License][#license]
     
  
    ## Description
     ${data.description}
    
  
    ## Installation
     ${data.install}
  
    ## Usage
     ${data.usage}
    
    ## Credits
     ${data.credits}
    
    ## License
     ${data.license}
      
    
    ## Questions
    * Github : [${data.github}](github.com/${data.github})
    * E-mail : Reach me at - ${data.email}`;
      

};

module.exports = generateMarkdown;
