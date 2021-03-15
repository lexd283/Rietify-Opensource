        const math = require('mathjs');
        const Discord = require('discord.js')

module.exports.run = async (client, message, args) => {
        if(!args[0]) return message.channel.send('Please provide a question');

        let resp;

        try {
            resp = math.evaluate(args.join(" "))
        } catch (e) {
            return message.channel.send('Please provide a **valid** question')
        }

        const embed = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('Calculator')
        .addField('Question', `\`\`\`css\n${args.join(' ')}\`\`\``)
        .addField('Answer', `\`\`\`css\n${resp}\`\`\``)

        message.reply(embed);

}
module.exports.help ={
    name: "calculate",
    aliases: []   
}