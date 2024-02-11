module.exports = {
    name: 'stop',
    aliases: ['st'],
    utilisation: '{prefix}stop',
    voiceChannel: true,

    execute(client, message) {
        const queue = client.player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send({ content: `${message.author}, Şu anda çalan müzik yok!.❌` });

        queue.destroy();

        message.channel.send({ content: `Bu sunucuda çalan müzik kapatıldı, bir dahaki sefere görüşürüz ✅` });
    },
};
