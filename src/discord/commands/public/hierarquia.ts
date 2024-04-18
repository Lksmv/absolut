import { Command } from "#base";
import { ApplicationCommandOptionType, ApplicationCommandType, Role, channelMention, userMention } from "discord.js";

new Command({
    name: "hierarquia",
    description: "seta o cargo e muda a mensagem de hierarquia do discord",
    dmPermission: false,
    type: ApplicationCommandType.ChatInput,
    options: [
        {
            name: "adicionar",
            description: "adiciona um membro da hierarquia",
            type: ApplicationCommandOptionType.Subcommand,
            options: [
                {
                    name: "membro",
                    description: "membro",
                    type: ApplicationCommandOptionType.User,
                    required: true
                },
                {
                    name: "cargo",
                    description: "cargo",
                    type: ApplicationCommandOptionType.Role,
                    required: true
                }
            ]
        },
        {
            name: "remover",
            description: "remove um membro da hierarquia",
            type: ApplicationCommandOptionType.Subcommand,
            options: [
                {
                    name: "membro",
                    description: "membro",
                    type: ApplicationCommandOptionType.User,
                    required: true
                },
                {
                    name: "cargo",
                    description: "cargo",
                    type: ApplicationCommandOptionType.Role,
                    required: true
                }
            ]
        },
        {
            name: "atualizar",
            description: "atualiza a hierarquia",
            type: ApplicationCommandOptionType.Subcommand
        }


    ],
    async run(interaction) {
        const { options, member } = interaction;


        if (!member.roles.cache.has("1172367738111524875")
            && !member.roles.cache.has("1184558530833948742")
            && !member.roles.cache.has("1218079742809473024")
            && !member.roles.cache.has("1184782171823685652")
            && !member.roles.cache.has("1184782171823685652")
            && !member.roles.cache.has("1193039869782544384")
            && !member.roles.cache.has("1210232519912587316")) {
            interaction.reply({ ephemeral, content: "Você não tem permissão para utilizar isso!" })
        } else if (interaction.channel?.id != "1216586254276366356") {
            interaction.reply({ ephemeral, content: "Comandos relacionados a hierarquia, devem ser usados no canal:" + channelMention("1216586254276366356") })
        } else {
            switch (options.getSubcommand()) {
                case "adicionar": {
                    const membroId = options.getUser("membro", true);
                    const cargo = options.getRole("cargo", true) as Role;
                    const membro = interaction.guild.members.fetch(membroId);
                    membro.then((m) => {
                        m.roles.add(cargo);
                    })
                    break;
                }
                case "remover": {
                    const membroId = options.getUser("membro", true);
                    const cargo = options.getRole("cargo", true) as Role;
                    const membro = interaction.guild.members.fetch(membroId);
                    membro.then((m) => {
                        if (m.roles.cache.has(cargo.id)) {
                            m.roles.remove(cargo);
                        }
                    })
                    break;
                }
                default: {

                }
            }

            setTimeout(() => {
                let lider = "";
                interaction.guild.roles.fetch("1172367738111524875").then(role => {
                    role?.members?.forEach(membro => lider += userMention(membro.id) + "\n")
                }).then(() => {
                    interaction.channel?.messages.fetch("1219510803720441916").then((message) => {
                        message.edit({
                            content: "# LÍDER \n" + lider + " \n ",
                            files: [
                                "https://i.ibb.co/rFT16fr/standard-16.gif"
                            ]
                        });
                    })
                })
                let sub = "";
                interaction.guild.roles.fetch("1184782171823685652").then(role => {
                    role?.members?.forEach(membro => sub += userMention(membro.id) + "\n")
                }).then(() => {
                    interaction.channel?.messages.fetch("1219510805201027162").then((message) => {
                        message.edit({
                            content: "# SUB LIDER \n" + sub + " \n ",
                            files: [
                                "https://i.ibb.co/vPdX5yV/standard-17.gif"
                            ]
                        });
                    })
                })

                let gg = "";
                interaction.guild.roles.fetch("1184782774574526464").then(role => {
                    role?.members?.forEach(membro => gg += userMention(membro.id) + "\n")
                }).then(() => {
                    interaction.channel?.messages.fetch("1219510805738033162").then((message) => {
                        message.edit({
                            content: "# GERENTE GERAL \n" + gg + " \n ",
                            files: [
                                "https://i.ibb.co/ZNm4m2s/standard-18.gif"
                            ]
                        });
                    })
                })

                let ga = "";
                interaction.guild.roles.fetch("1184784842014076928").then(role => {
                    role?.members?.forEach(membro => ga += userMention(membro.id) + "\n")
                }).then(() => {
                    interaction.channel?.messages.fetch("1219510806488813648").then((message) => {
                        message.edit({
                            content: "# GERENTE DE AÇÃO \n" + ga + " \n ",
                            files: [
                                "https://i.ibb.co/kxcdVcx/standard-19.gif"
                            ]
                        });
                    })
                })

                let gr = "";
                interaction.guild.roles.fetch("1184783094251798588").then(role => {
                    role?.members?.forEach(membro => gr += userMention(membro.id) + "\n")
                }).then(() => {
                    interaction.channel?.messages.fetch("1219510807499374602").then((message) => {
                        message.edit({
                            content: "# GERENTE DE RECRUTAMENTO \n" + gr + " \n ",
                            files: [
                                "https://i.ibb.co/MBLzgcs/standard-20.gif"
                            ]
                        });
                    })
                })

                let gc = "";
                interaction.guild.roles.fetch("1184784243101012048").then(role => {
                    role?.members?.forEach(membro => gc += userMention(membro.id) + "\n")
                }).then(() => {
                    interaction.channel?.messages.fetch("1219510826491318413").then((message) => {
                        message.edit({
                            content: "# GERENTE COMERCIAL \n" + gc + " \n ",
                            files: ["https://i.ibb.co/2Z86HxQ/standard-21.gif"
                            ]
                        });
                    })
                })

                let go = "";
                interaction.guild.roles.fetch("1222192338487742476").then(role => {
                    role?.members?.forEach(membro => go += userMention(membro.id) + "\n")
                }).then(() => {
                    interaction.channel?.messages.fetch("1222558775735615620").then((message) => {
                        message.edit({
                            content: "# GERENTE DE ORDEM \n" + go + " \n ",
                            files: ["https://i.ibb.co/DM1YSns/standard.gif"
                            ]
                        });
                    })
                })




                interaction.reply({ ephemeral, content: "Hierarquia Atualizada." })

            }, 2000)

        }
    }
});
