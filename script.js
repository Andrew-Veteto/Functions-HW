var wrap = document.body.querySelector(".wrapper");
var fini = document.body.querySelector(".done");
var done = 0;
var DragonDamage = 0;

wrap.innerHTML="Dragon Damage: " + done;


function damage(damage, attack, done){
  if(attack === 1){
    damage = damage - 1;
  }
  else if(attack === 2){
    damage = damage + 1;
  }
  else if(attack === 3){
    damage = damage;
  }
  
  var DragonDamage = done + damage;
   return DragonDamage;
  
}

document.body.querySelector(".fire").addEventListener("click", function(){
  DragonDamage = damage(3,1,done);
  wrap.innerHTML="Dragon Damage: " + DragonDamage;
  done = 0;
  done = done + DragonDamage;
  if(DragonDamage >= 10){
    fini.innerHTML="You won!"
  }
  })
document.body.querySelector(".ice").addEventListener("click", function(){
  DragonDamage = damage(1,2,done);
  wrap.innerHTML="Dragon Damage: " + DragonDamage;
  done = 0;
  done = done + DragonDamage;
  if(DragonDamage >= 10){
    fini.innerHTML="You won!"
  }
})

document.body.querySelector(".poison").addEventListener("click", function(){
  DragonDamage = damage(4,3,done);
  wrap.innerHTML="Dragon Damage: " + DragonDamage;
  done = 0;
  done = done + DragonDamage;
  if(DragonDamage >= 10){
    fini.innerHTML="You won!";
  }
})