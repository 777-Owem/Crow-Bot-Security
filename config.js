module.exports = {
    app: {
        px: '+',
        token: 'TOKEN DU BOT',
        owners: 'TON ID', //id buyer
        funny: 'ID DE TON BOT', //id Développeur
        color: '#ff0000', //couleur par défaut
        footer: 'ton footer de ton choix +help',
        maxVol: '25',
        everyoneMention: false,
        hostedBy: true,
        discordPlayer: {
            ytdlOptions: {
                quality: 'highestaudio',
                highWaterMark: 1 << 25
            }
        }
    }
}
