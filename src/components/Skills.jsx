function Skills(){

let skills=[
"React",
"JavaScript",
"Docker",
"Git",
"Blockchain",
"Solidity",
"Cloud",
"DevOps"
]


return(

<section id="skills"
className="section">


<h2>
Skills
</h2>


<div className="skills">


{
skills.map((skill)=>(

<span key={skill}>
{skill}
</span>

))
}


</div>


</section>


)

}


export default Skills;