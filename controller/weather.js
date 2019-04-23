
module.exports = (app) => {

   const city = city-name;
   
// input validation
app.use('/search-location', (req,res,next)=>{
   let city = req.body('city-name');
     if(!city){
       return res.json({
         message: 'Fill can not be  empty'
       }).status(401);
     }else{
       if (city === search){
         return next();
       }else{
         return res.json({
           message: 'You entered a bad city name'
         }).status(401);
       }
     }
 
 })

   app.get('/search-current-weather', (req, res) => {
      const BaseUrl = `https://api.apixu.com/v1/current.json?`;
      const KEY = 'c329a797ba824791997141049192204';
      const city = 'city-name'

      const URL = `https://api.apixu.com/v1/current.json?key=${KEY}&q=${city}`
      
      fetch(URL)
      .then(res => res.json())
      .then(data => {
         res.send({ data });
      })
      .catch(err => {
         res.redirect('/error');
      });
   })
}
