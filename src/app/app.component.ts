
import { AfterContentInit, Component, Inject, OnInit } from '@angular/core';
import { inject } from '@angular/core/testing';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit,AfterContentInit {
  
  title = 'sidebar5';
  colorhover="";
  
  
  ngOnInit(): void {        
    this.cargarPreferencias();
    this.controlMenu();
  }
  
  ngAfterContentInit(): void {
    //this.controlMenu();
  }
  
  setcolor(color:string){ 
    const a=document.querySelectorAll(".item-menu .item-menu-label");
    for(let i=0;i<a.length;i++){ 
      a[i].classList.remove("HD","HG","HPI","HBL");
      switch(color){
        case "#d81b60":
          a[i].classList.add("HPI");
          this.createAndSetCoockie("colorLabel","HPI");
          break;
        case "#388e3c":
          a[i].classList.add("HG");
          this.createAndSetCoockie("colorLabel","HG");
          break;
        case "#283046":
          a[i].classList.add("HD");
          this.createAndSetCoockie("colorLabel","HD");
          break;
        case "#1e88e5":
          a[i].classList.add("HBL");
          this.createAndSetCoockie("colorLabel","HBL");
          break;
      }
    }   
  }
  cargarPreferencias(){
    let layout=this.getCoockie("darklayout");
    let mode=this.getCoockie("darkmode");
    let expanded=this.getCoockie("expanded");
    let label=this.getCoockie("colorLabel");
    const body=document.getElementsByTagName("body")[0];    
    const sideBar=document.getElementById("sidebar");
    const a=document.querySelectorAll(".item-menu .item-menu-label");
    if(layout!=""){
      body.classList.add(layout);
      sideBar?.classList.add(mode);
    }
    if(expanded!=""){
      sideBar?.classList.add(expanded);
    }
    if(label!=""){
      for(let i=0;i<a.length;i++){
        a[i].classList.remove("HD","HG","HPI","HBL");
        a[i].classList.add(label);
      }
    }

  }
  
  controlMenu(){
    const btnMenu=document.getElementById("btnMenu");
    const sideBar=document.querySelector(".sidebar");   
    const li=document.getElementsByTagName("li");
    const dianoche=document.getElementById("dianoche");
    
    // TODO: contola el despiegue del menu
    btnMenu?.addEventListener("click",()=>{
      sideBar?.classList.toggle("active");
      if(sideBar?.classList.contains("active")){
        this.createAndSetCoockie("expanded","active");        
      }else{
        this.createAndSetCoockie("expanded","");
      }
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
          li[i].children[0].children[2].classList.toggle("open");
          li[i].children[2].classList.toggle("collapse")
        }
      });
    }   
    
    // TODO: boton para cambiar aspecto claro a obscuro
      dianoche?.addEventListener("click",()=>{           
      document.getElementsByTagName("body")[0].classList.toggle("dark");
      let e=document.getElementsByTagName("body")[0];
      document.getElementById("sidebar")?.classList.toggle("dark-mode");      
      if(!e.classList.contains("dark")){
        this.createAndSetCoockie("darklayout","");
        this.createAndSetCoockie("darkmode","");
        
      }else{
        this.createAndSetCoockie("darklayout","dark");
        this.createAndSetCoockie("darkmode","dark-mode");
      }
    });    
  }
  
  setCoockie(nombre:string,valor:string){    
    let d=new Date();
    d.setTime(d.getTime()+5*24*60*60*1000);
    let caduca="expires="+d.toUTCString();
    document.cookie=nombre+"="+valor+";"+caduca+";path=/";
  }
  getCoockie(nombre:string){
    let nom=nombre+"=";
    let arrayCookie=document.cookie.split(";");
    for(let i=0;i<arrayCookie.length;i++){
      let c=arrayCookie[i];
      while(c.charAt(0)==" "){
        c=c.substring(1);        
      }
      if(c.indexOf(nombre)==0){
        return c.substring(nom.length,c.length);
      }
    }
    return "";
  }
  deleteCoockie(nombre:string){
    this.setCoockie(nombre,"");
  }
  createAndSetCoockie(nombre:string,valor:string){
    this.setCoockie(nombre,valor);
  }
  
}
