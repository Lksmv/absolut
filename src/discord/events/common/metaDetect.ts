import { Event } from "#base";
import { userMention } from "discord.js";


new Event({
    name: "meta detect",
    event: "messageCreate",
    async run(message) {

        const palavras = [
            "polícia",
            "meus itens",
            "meu farme",
            "me ajuda",
            "socorro",
            " qrr",
            " apoio",
            " pupu",
            " invasão",
            "meu loote",
            " morri",
            "me pega",
            "me finaliza",
            "policia",
            "looteia",
            "loteia",
            "minhas coisas",
            "gay ",
            "viado ",
            "puta",
            "negão",
            "jumenta",
            "baitola",
            "menininha",
            "preto",
            "corno",
            "merda",
            "lixo",
            "fdp",
            "merdinha",
            "trouxa",
            "animal",
            "burro",
            "cuzao",
            "inutil",
            "trouxa",
            "troxa",
            "cuzão",
            "se mata",
            "minhas parada",
            "minha paradas",
            "minhas paradas",
            " chupar",
            " rola",
            " anal",
            " podre",
            " verme",
            " cotoco",
            " puto",
            " foda-se",
            " cata meus",
            "eu to morto",
            "arrombado",
            "porcaria",
            "buceta",
            "pinto",
            " pau ",
            "seu merda",
            " pica",
            " fuder",
            "da minhas coisas",
            "me roubaram",
            "invadindo",
            "invadiram",
            "mata eles",
            "eles estão no",
            "roubado",
            "roubaram",
            "fudeo",
            "viadinho",
            "ladrão",
            "safado",
            "safada",
            "rapariga",
            "seu pai",
            "sua mãe",
            "cadela",
            "cachorra",
            "qualira",
            "pegaram meus bagulho",
            "pegaram meu bagulho",
            "pegaram meu"
        ]

        if (message.author.id == "938059316173369385") {
            return;
        }

        if (message.channel.id != "1216585720433737779") {
            return;
        }

        palavras.forEach((palavra: string) => {
            if (message.content.includes(palavra)) {
                message.delete();
                message.channel.send(`🚫 Ops ${userMention(message.author.id)}, percebi que você acabou de tentar cometer uma infração GRAVE, solicito que não o faça mais, caso contrário, estará sendo punido conforme a gravidade. 🚫`)
                return;
            }
        })

    },
});