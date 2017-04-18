// function getTempCallback(location, callback){
//   callback(undefined, 78);
//   callback('city not found');
// }
//
// getTempCallback('Philly', function(err, temp){
//   if(err){
//     console.log('error', err);
//   } else{
//     console.log('success', temp);
//   }
// });
//
// function getTempPromise(location){
//   return new Promise(function(resolve, reject){
//       resolve(79);
//       reject('City not found');
//   });
// }
// getTempPromise('Philadelphia').then(function(temp){
//   console.log('promise success', temp);
// }, function(err){
//   console.log('promise error', err);
// });

//if(typeof 7==='number')

//Challege Area
function addPromise(a, b){
  return new Promise(function(resolve, reject){
    if(typeof a==='number'&&typeof b==='number'){
      resolve(a+b);
    }
    reject('One or more of the numbers are not Numbers')
  })

}
addPromise(3,5).then(function (temp) {
  console.log('promise success', temp);
}, function(err){
  console.log('promise error', err);
});
addPromise(3,'a').then(function (temp) {
  console.log('promise success', temp);
}, function(err){
  console.log('promise error', err);
});
