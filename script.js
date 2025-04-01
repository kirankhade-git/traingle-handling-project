window.addEventListener("mousemove", function(details){
 var react =this.document.querySelector("#rect");
 
 var xval=gsap.utils.mapRange(
    0,
    window.innerWidth ,
    100+ react.getBoundingClientRect().width/2,
    this.window.innerWidth -(100+ react.getBoundingClientRect().width/2),
    details.clientX
 );
 
    gsap.to("#rect",{
    left: xval,
    ease:Power3
  });
});