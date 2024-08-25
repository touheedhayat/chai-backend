const asyncHandler =  (requestHandler)  => {
    (res, req, next)=>(
        Promise.resolve(requestHandler(req, res, next) ).catch((err)=>(next(err)))
    )
           
}







// const asyncHandler = (fn) => async (res, rej, next)  => {

//     try {
//         await fn(res, req, next)
//     } catch (error) {
//         res.status(err.code ||500).json({
//             sucess: false,
//              message: error.message
//         })
        
//     }
// }

// export {asyncHandler};