import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'sidebar5';
  ngOnInit(): void {
    this.controlMenu();
  }
  
  controlMenu(){
    const btnMenu=document.getElementById("btnMenu");
    const sideBar=document.querySelector(".sidebar");
   
    const li=document.getElementsByTagName("li");
    btnMenu?.addEventListener("click",()=>{
      sideBar?.classList.toggle("active");
    });
   
    
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
    
    
  }
  
  
  
}
