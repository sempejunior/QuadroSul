const nodemailer = require('nodemailer');
const crypto = require('crypto');
const algorithm = 'aes-256-cbc';
const key = 'quadrosul';


function decrypt(data) {
    var decipher = crypto.createDecipher(algorithm, key);
    var decrypted = decipher.update(data, 'hex', 'utf-8');
    decrypted += decipher.final('utf-8');
    return decrypted;
}

module.exports = {

    async sendMail(request, response) {
        var { user, authorization } = request.headers;

        var $user = decrypt(user);
        var $authorization = decrypt(authorization);

        console.log("Usuario decriptado 2: " + $user);
        console.log("Senha decriptado 2: " + $authorization);

        const { from, subject, message } = request.body;

        var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: $user,
                pass: $authorization
            }
        });


        var mailOptions = {
            from: from,
            to: "quadrosul@terra.com.br",
            subject: subject,
            text: message
        };

        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log(error);
            } else {
                console.log('Email enviado: ' + info.response);
            }
        });

        return response.json({ "Sucesso": "Email enviado com sucesso" });


    }
}