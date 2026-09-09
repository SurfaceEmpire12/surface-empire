document.addEventListener('DOMContentLoaded',function(){
const about=document.getElementById('about');if(!about)return;
const photo=about.querySelector('.about-photo');
if(photo){photo.innerHTML='<img src="https://raw.githubusercontent.com/SurfaceEmpire12/surface-empire/main/IMG_3785.jpeg" alt="Kaden Boles, owner of Surface Empire" style="width:100%;height:auto;display:block">';photo.style.cssText='min-height:0;display:block;background:#fff;padding:0;max-width:430px;margin:0 auto;border:1px solid var(--border);overflow:hidden';}
const copy=about.querySelector('.about-copy');
if(copy){copy.innerHTML='<div class="copy-box"><h3>About the Company</h3><p>Surface Empire was built around a simple idea: take pride in the work, pay attention to the details, and leave every customer with a finished surface they are proud to show off.</p></div><div class="copy-box"><h3>About Me</h3><p>My name is Kaden Boles, and I’m proud to call Walton, Kentucky home. I started working with concrete alongside my grandfather, where I learned early on that quality work comes down to taking your time, paying attention to the details, and doing the job right.</p><p>As I got deeper into the trade, I discovered the world of epoxy and knew I wanted to build my business around it. I pursued professional epoxy certification and began taking on projects for friends and family, building the skills and confidence to take on bigger projects.</p><p>Now I’m ready to take Surface Empire to the next level and serve homeowners throughout Northern Kentucky and the Cincinnati area. My goal is simple: deliver a finished surface I can stand behind and a customer who is genuinely happy with the result. I take pride in my work, care about the details, and want every project done right from start to finish.</p></div>';}
const facebook=document.querySelector('footer a[href="#"]');
if(facebook && facebook.textContent.trim()==='Facebook'){
facebook.href='https://www.facebook.com/profile.php?id=61593972853579';
facebook.target='_blank';
facebook.rel='noopener noreferrer';
}
});