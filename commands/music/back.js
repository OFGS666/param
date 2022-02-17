const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'back',
    aliases: ['geri'],
    utilisation: '{prefix}back',
    voiceChannel: true,

    async execute(client, message, args) {
        const queue = player.getQueue(message.guild.id);
        const embed = new MessageEmbed();
      
        if (!queue || !queue.playing) return message.channel.send(`${message.author}, Şu anda çalan müzik yok! ❌`);

        if (!queue.previousTracks[1]) return message.channel.send(`${message.author}, Zaten daha önce müzik çalmıyordu. ❌`);

        await queue.back();
        embed.setColor("BLACK")
        embed.setDescription(`Bir önceki müzik çalmaya başladı... ✅`);
      
      message.channel.send({ embeds: [embed] });
    },
};