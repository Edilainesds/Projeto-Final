const bcrypt = require("bcrypt")


exports.hasSenha = async (senha, res) => {
    try {
        const salt = await bcrypt.genSalt(10)
        const has = await bcrypt.hash(senha,salt)
        return has

    } catch (error) {
        res.status(500).json({
            message: message.error
        })

        
    }
}