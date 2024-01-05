export const errorHandler = (statusCode, messsage) => {                             {/*Manual error*/}
    const error = new Error(); 
    error.statusCode = statusCode;
    error.message = messsage;
    return error;
}