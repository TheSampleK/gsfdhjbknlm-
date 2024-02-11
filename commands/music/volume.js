const maxVol = require("../../config.js").opt.maxVol;

module.exports = {
    name: 'volume',
    aliases: ['vol'],
    utilisation: `{prefix}volume [1-${maxVol}]`,
    voiceChannel: true,

    execute(client, message, args) {
        const queue = client.player.getQueue(message.guild.id);

       if (!queue || !queue.playing) return message.channel.send({ content: `${message.author}, Şu anda çalan müzik yok!. ❌` });

        const vol = parseInt(args[0]);

        if (!vol) return message.channel.send({ content: `Mevcut Ses: **${queue.volume}** 🔊\n**ile ses seviyesini değiştirmek için \`1\` to \`${maxVol}\` arasında bir sayı yazın.**` });

        if (queue.volume === vol) return message.channel.send({ content: `${message.author}, Değiştirmek istediğiniz ses düzeyi zaten mevcut ses düzeyidir ❌` });

        if (vol < 0 || vol > maxVol) return message.channel.send({ content: `${message.author}, **Şuradan bir sayı yazın: \`1\` to \`${maxVol}\` ses seviyesini değiştirmek için** ❌` });

        const success = queue.setVolume(vol);

        return message.channel.send({ content: success ? `Ses Seviyesi değişti: **%${vol}**/**${maxVol}** 🔊` : `${message.author}, Bir şeyler yanlış gitti. ❌` }) ;
    },
};
