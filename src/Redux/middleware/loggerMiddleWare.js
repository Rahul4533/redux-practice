
 const loggerMiddleWare=(store)=>{
    return function(next){
        return function(action){

            console.log("[LOG]"+action.type+" "+ new Date().toISOString());
            next(action);

            console.log(store.getState());

        }
    }
}

export default loggerMiddleWare;
