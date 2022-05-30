
import { AfterContentInit, Component, Inject, OnInit } from '@angular/core';
import { inject } from '@angular/core/testing';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit,AfterContentInit {
  
  title = 'sidebar5';
  
  
  ngOnInit(): void {
    this.controlMenu();
  }
  ngAfterContentInit(): void {
    //this.controlMenu();
  }
  
  controlMenu(){
    const btnMenu=document.getElementById("btnMenu");
    const sideBar=document.querySelector(".sidebar");   
    const li=document.getElementsByTagName("li");
    const dianoche=document.getElementById("dianoche");
    // TODO: contola el despiegue del menu
    btnMenu?.addEventListener("click",()=>{
      sideBar?.classList.toggle("active");
    });
   
   // TODO:  recoremos los li verificando si tiene submenu cuenta con uno lo despliga si no agraga la clase activa
    
    for(let i=0;i<li.length;i++){
      li[i].childNodes[0].addEventListener("click",()=>{        
        if(!li[i].classList.contains("container-submenu")){              
          for(let j=0;j<li.length;j++){
            li[j].children[0].classList.remove("active");
          }
          li[i].children[0].classList.add("active");
        }else{
          for(let j=0;j<li.length;j++){
            li[j].children[0].classList.remove("active");
          }
          li[i].children[2].classList.toggle("collapse")
        }
      });
    }   
    
    // TODO: boton para cambiar aspecto claro a obscuro
    dianoche?.addEventListener("click",()=>{
      document.getElementsByTagName("body")[0].classList.toggle("dark");
      document.getElementById("sidebar")?.classList.toggle("dark-mode");
      
      
    });
    
    
  }
  
  
  
}
