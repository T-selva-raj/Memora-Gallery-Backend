

const SendResponse = async (res,details,message,statusCode) => {
    if (res && statusCode == 200) {
        res.json({
            success: true,
            message: message,
            response: details,
            status: statusCode 
        });
    }
    else res.json({
        success: false,
        message: message,
        response: null,
        status: statusCode
    });
}

module.exports.SendResponse = SendResponse;