function Projects(){

const projects=[

{
title:"Blockchain Voting System",
desc:
"Decentralized voting application built using Solidity, React, Hardhat and Ethereum."
},

{
title:"Dockerized Portfolio Website",
desc:
"React portfolio website containerized using Docker and Nginx."
},

{
title:"Amazon Deal Finder",
desc:
"Streamlit application using API integration to find product deals."
}

];


return(

<section id="projects"
className="section">


<h2>
Projects
</h2>



<div className="project-container">


{

projects.map((project)=>(


<div className="card" key={project.title}>


<h3>
{project.title}
</h3>


<p>
{project.desc}
</p>


</div>


))


}


</div>



</section>


)

}


export default Projects;