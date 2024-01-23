

const SendResponse = async (res,details,message,statusCode) => {
    if (res && statusCode == 200) {
        res.status(200).json({
            success: true,
            message: message,
            response: details,
            status: statusCode 
        });
    }
    else res.status(statusCode).json({
        success: false,
        message: message,
        response: null,
        status: statusCode
    });
}

module.exports.SendResponse = SendResponse;