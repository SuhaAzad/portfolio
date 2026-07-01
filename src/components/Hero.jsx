import profile from "../assets/profile.jpg";


function Hero(){

return(

<section className="hero">


<img 
src={profile}
className="profile"
/>



<h1>
Hi, I'm Suha Azad
</h1>


<h2>
Computer Science Engineer
</h2>


<p>
 DevOps Learner
</p>


<a 
href="/resume.pdf"
download
>

<button>
Download Resume
</button>

</a>


</section>

)

}


export default Hero;