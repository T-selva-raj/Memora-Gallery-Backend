

const SendResponse = async (res,details,statusCode) => {
    if (res && statusCode == 200) {
        res.json({
            success: true,
            response: details,
            status: statusCode 
        });
    }
    else res.json({
        success: false,
        response: null,
        status: statusCode
    });
}

module.exports.SendResponse = SendResponse;