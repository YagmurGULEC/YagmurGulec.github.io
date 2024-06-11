function getElement(selection) {
  const element = document.querySelector(selection);
  if (element) {
    return element;
  }
  else {
    return null;
  }
}


async function fetchdata(url) {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

class Blog{
  static section=getElement('.blogs');
  static blogTitle=getElement('.blog-title');
  static blogContent=getElement('.blog-content');
  constructor(title,description,content){
    this.title=title;
    this.description=description;
    this.content=content;
  }
  createArticle(){
    
    let article=document.createElement('div');
    article.className="mb-4"
    this.link=document.createElement('a');
    this.link.className="link-dark";
    this.link.href="./blog-post.html";
    this.link.innerHTML=`<h3>${this.title}</h3>`;
    article.appendChild(this.link);
    if (Blog.section)
      Blog.section.prepend(article) ;
    
  }
}

class Image {
  static section=getElement('.photos');
  static modal=getElement('.modal-content');
  constructor(url,id) {
      this.url = url;
      this.id=id;
      
  }
 
  createDiv(title,description){
    let div=document.createElement('div');
    div.className="col-lg-4 mb-5";
    let img=document.createElement('img');
    img.className="img";
    img.src=this.url;
    img.setAttribute('alt',description);
    img.setAttribute('title',title);
    img.setAttribute('data-bs-toggle',"modal");
    img.setAttribute('data-bs-target',"#exampleModal");
    div.appendChild(img);
    if (Image.section)
      Image.section.appendChild(div);
    this.img=img;
  }
  openModal(){
        this.img.addEventListener('click',(e)=>{
          
            Image.modal.querySelector('img').src=this.url;
            Image.modal.querySelector('.modal-title').textContent=this.img.title;
            Image.modal.querySelector('.model-description').textContent=this.img.alt;
         
        
  })
  }
}

class Movies{
  static section=getElement('.movies');
  static movieTitle=getElement('.movie-title');
  static movieDescription=getElement('.movie-description');
  static moviePhoto=getElement('.movie-photo');
  static movieContent=getElement('.movie-content'); 
  constructor(title,description,link){
    this.title=title;
    this.description=description;
    this.link=link;
  }
  createMovie(){

    let div=document.createElement('div');
    div.className="col-lg-4 mb-5";
    let img=document.createElement('img');
    img.className="card-img-top";
    img.src=this.link;
    let subdiv=document.createElement('div');
    subdiv.className="card h-100 shadow border-0";
    let subsubdiv=document.createElement('div');
    subsubdiv.className="card-body p-4";
    let click=document.createElement('a');
    let p=document.createElement('p');
    p.className="card-text mb-0 movie-description";
    p.textContent=this.description;
    click.className="text-decoration-none link-dark stretched-link";
    click.innerHTML=`<div class="h5 card-title mb-3 movie-title">${this.title}</div>`;
    click.href="./blog-movie.html";
    subsubdiv.appendChild(click);
    subsubdiv.appendChild(p);
    subdiv.appendChild(img);
    subdiv.appendChild(subsubdiv);
    div.appendChild(subdiv);
    this.link=click;
    
    if (Movies.section)
      Movies.section.appendChild(div);
  }

}

const selectedLanguage = "English"  

fetchdata('./cv.json').then(data => 

      data.photos.forEach((element,index) => {
      let img=new Image(element.url,index);
      img.createDiv(element[selectedLanguage].title,element[selectedLanguage].description);
      img.openModal();
    })
  );

fetchdata('./cv.json').then(data =>
  data.blogs.forEach((element,index)=>{
    let blog=new Blog(element[selectedLanguage].title,element[selectedLanguage].description,element[selectedLanguage].content);
    blog.createArticle();
    blog.link.onclick=()=>{
      localStorage.setItem('blog',JSON.stringify(element));
    }
  })
);

fetchdata('./cv.json').then(data => 
  data.movies.forEach((element,index)=>{
    let movie=new Movies(element.title,element.description,element.photo);
    movie.createMovie();
    movie.link.onclick=()=>{
      localStorage.setItem('movie',JSON.stringify(element));
    }
  })
);


window.addEventListener('DOMContentLoaded', event => {
  window.onload=()=>{
    if (Blog.blogTitle)
      Blog.blogTitle.textContent=JSON.parse(localStorage.getItem('blog'))[selectedLanguage].title;
    if (Blog.blogContent)
      JSON.parse(localStorage.getItem('blog'))[selectedLanguage].content.forEach(element => {
        let p=document.createElement('p');
        p.className="fs-5 mb-4";
        p.textContent=element;
        Blog.blogContent.appendChild(p);
      });
    if (Movies.movieTitle)
      Movies.movieTitle.textContent=JSON.parse(localStorage.getItem('movie')).title;
    if (Movies.moviePhoto)
      Movies.moviePhoto.src=JSON.parse(localStorage.getItem('movie')).photo;
    if (Movies.movieContent)
      JSON.parse(localStorage.getItem('movie'))[selectedLanguage].content.forEach(element => {
        let p=document.createElement('p');
        p.className="fs-5 mb-4";
        p.textContent=element;
        Movies.movieContent.appendChild(p);
      });
  }
  
});
