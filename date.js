//jshint esversion:6

module.exports=getDate;

function getDate(){
const today=new Date();
const options ={
  weekday: "long",
  day:"numeric",
  month: "long"
};

return today.toLocaleDateString("en-US",options);

}
