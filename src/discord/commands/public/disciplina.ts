import { Command } from "#base";
import { ApplicationCommandOptionType, ApplicationCommandType, userMention } from "discord.js";

new Command({
    name: "disciplina",
    description: "comando relacionado aos membros com adv da facção",
    dmPermission: false,
    type: ApplicationCommandType.ChatInput,
    options: [
        {
            name: "atualizar",
            description: "atualiza o canal disciplina",
            type: ApplicationCommandOptionType.Subcommand
        }


    ],
    async run(interaction) {
        const { member } = interaction;


        if (!member.roles.cache.has("1172367738111524875")
            && !member.roles.cache.has("1184558530833948742")
            && !member.roles.cache.has("1218079742809473024")
            && !member.roles.cache.has("1184782171823685652")
            && !member.roles.cache.has("1202914059390025769")
            && !member.roles.cache.has("1172367738111524875")
            && !member.roles.cache.has("1222192338487742476")
            && !member.roles.cache.has("1193039869782544384")
            && !member.roles.cache.has("1210232519912587316")) {
            interaction.reply({ ephemeral, content: "Você não tem permissão para utilizar isso!" })
            return;
        }

        setTimeout(() => {
            let verbal = "";
            interaction.guild.roles.fetch("1184792304725278750").then(role => {
                role?.members?.forEach(membro => verbal += userMention(membro.id) + "\n")
            }).then(() => {
                interaction.channel?.messages.fetch("1222561285187829831").then((message) => {
                    message.edit({
                        content: "# ADVERTÊNCIA VERBAL \n" + verbal + " \n ",
                        files: [
                            "https://media.discordapp.net/attachments/1204462845211709481/1222373190794219560/standard_1.gif?ex=6615fabf&is=660385bf&hm=c6a75957fd41fbef44344c00ecccde50ca4ec94cd637c027ac40173e0421cdae&="
                        ]
                    });
                })
            })
            let sub = "";
            interaction.guild.roles.fetch("1184792738600861756").then(role => {
                role?.members?.forEach(membro => sub += userMention(membro.id) + "\n")
            }).then(() => {
                interaction.channel?.messages.fetch("1222561304838017277").then((message) => {
                    message.edit({
                        content: "# ADVERTÊNCIA 1 \n" + sub + " \n ",
                        files: [
                            "https://media.discordapp.net/attachments/1204462845211709481/1222373191482343534/standard_2.gif?ex=6615fabf&is=660385bf&hm=9ae914424a193aca2fc31c316bd63ebc5a7ca6ae764d200e435b47ffea95b914&="
                        ]
                    });
                })
            })

            let gg = "";
            interaction.guild.roles.fetch("1184792897913102366").then(role => {
                role?.members?.forEach(membro => gg += userMention(membro.id) + "\n")
            }).then(() => {
                interaction.channel?.messages.fetch("1222561313843318874").then((message) => {
                    message.edit({
                        content: "# ADVERTÊNCIA 2 \n" + gg + " \n ",
                        files: [
                            "https://media.discordapp.net/attachments/1204462845211709481/1222373192635650109/standard_3.gif?ex=6615fabf&is=660385bf&hm=4cf2cf9822c4b1570fb35f8a000a42367758577f1e9e27029dbecb74b0909795&="
                        ]
                    });
                })
            })


            interaction.reply({ ephemeral, content: "Disciplina Atualizada." })

        }, 2000)

    }
});
