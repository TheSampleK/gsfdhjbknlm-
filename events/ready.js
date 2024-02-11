module.exports = async (client) => {
    console.log(`${client.user.username} Giriş Yaptı`);

    client.user.setActivity(client.config.playing);
};