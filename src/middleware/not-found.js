export default (req, res, next)=>{
 res.json(404).json( {error: 'Not Found'})
};