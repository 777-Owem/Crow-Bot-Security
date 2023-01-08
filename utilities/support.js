const { MessageEmbed } = require('discord.js');
const config = require("../config")
const db = require('quick.db')
const cl = new db.table("Color")

module.exports = {
    name: 'support',
    usage: 'support',
    description: `Support commande.`,
    async execute(client, message, args) {

        let color = db.fetch(`color_${message.guild.id}`)
        if (color == null) color = config.app.color
        
        const embed = new MessageEmbed()
        .setColor(color)
        .setDescription('Pour rejoindre notre support [cliquez ici](https://discord.gg/QngxjdgDhb) \n**Dévelopeur :** <@517314324209991698>')
        .setFooter({text :`⚫𝓡𝓛𝓣🔴𝓟𝓻𝓸𝓽𝓮𝓬𝓽`})

        message.reply({content: 'Je vous ai envoyé mon serveur support par message privé'})
        message.react('✔️')
        message.member.send({ embeds: [embed] });
    }
}