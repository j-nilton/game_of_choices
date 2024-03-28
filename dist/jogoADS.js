"use strict";
let nickjogo = 'Dragon Egg';
let nomeguerreiro = null;
let qporcoes = 4;
let controlarAcesso = 1;
let continuar;
let escolherTurno;
// Chamando a função DragonEgg - função principal
DragonEgg();
/** ...
 * A função nomeGuerreiro obriga o jogador a digitar uma informação. Qualquer valor é aceito.
 * Sem retorno
 */
function nomeGuerreiro() {
    while (!nomeguerreiro) {
        nomeguerreiro = prompt('Para iniciar o game, digite seu nome e clique em OK.');
        if (!nomeguerreiro) {
            alert('Por favor, digite um nome para continuar o jogo.');
        }
    }
}
/** ...
 * A função introdução como o nome já diz é responsável por introduzir o jogador no mundo do game.
 * Sem retorno
 */
function introducao() {
    alert('Seja Bem-Vindo ao Game ' + nickjogo + ', ' + nomeguerreiro + '!' + '\nVocê está diante de um desafio, será se você é capaz? \nClique em OK ou aperte ENTER para continuar.');
    alert('É época de chocamento de dragões! Existe uma caverna não muito longe daqui com 3 ovos no ninho. \nSeu objetivo será capturar um dos ovos, mas detalhe, o dragão-fêmea proteje o ninho quase o dia todo. \nAssim, você terá três horários específicos (manhã, tarde ou noite) para tentar o feito!');
    alert('Dicas: \nDependendo do horário ao longo do dia... \n01 - O dragão sai da caverna para se alimentar, mas volta rápido.\n02 - Os pássaros fazem muito barulho, o dragão não ouve bem os que adentram a caverna.\n03 - O dragão dorme, mas tem uma audição aguçada.');
    alert('OBS.: Existe somente um horário ideal para conseguir a captura do ovo, então preste atenção nas dicas, ' + nomeguerreiro + '!');
    alert('Mais uma informação importante:\nVocê possui 3 porções de retorno. A quantidade pode variar (para mais ou para menos), dependendo de suas escolhas durante a jogatina.');
    alert('Mas o que é porção de retorno?');
    alert('As porções de retorno são como pequenas doses de viagem no tempo que o jogador pode usar. Quando você se encontra em uma situação desafiadora ou comete um erro, pode consumir uma dessas porções para voltar atrás e corrigir sua ação. É como se você pudesse reescrever um momento do passado e tomar uma decisão diferente. Use-as com sabedoria, pois elas são valiosas e limitadas! 🕰⏳');
    alert('Pronto para a aventura? \nClique em OK para fazer uma tentativa.');
}
/** ...
 * A função perguntaEObriga obriga o jogador a digitar apenas uma das opçoẽs disponíveis.
 * Retorna string: resposta
 */
function perguntaEObriga(pergunta, r1, r2, r3) {
    var _a, _b;
    let resposta = String((_a = prompt(pergunta)) === null || _a === void 0 ? void 0 : _a.trim().toLowerCase());
    while (resposta != r1 && resposta != r2 && resposta != r3) {
        alert('Resposta Inválida');
        resposta = String((_b = prompt(pergunta)) === null || _b === void 0 ? void 0 : _b.trim().toLowerCase());
    }
    return resposta;
}
/** ...
 * A função ajudarLobo é responsável por apresentar uma situação para o jogador e
 * dependendo de sua resposta(SIM) o usuário ganhará uma recompensa. Também obriga a digitar uma das opções.
 * Retorna number tentativa.
 */
function ajudarLobo() {
    var _a;
    while (1) {
        let ajudarCachorro = String((_a = prompt('Durante o percurso até a caverna, ouviu-se um gemido baixo e sofrido que ecoou entre as árvores. Ao se aproximar você encontra uma criatura: um lobo preso em uma armadilha. Seu pelo cinza estava manchado de sangue e seus olhos amarelos estavam cheios de dor. Ajudar o lobo? \n- Sim \n- Não')) === null || _a === void 0 ? void 0 : _a.trim().toLowerCase());
        if (ajudarCachorro == "sim") {
            alert('Você ganhou uma recompensa! Porção de retorno adicionada ao inventário.');
            qporcoes += 1;
            alert('Agora, você posssui ' + (qporcoes - 1) + ' porções de retorno, use com sabedoria.');
            return qporcoes;
        }
        else if (ajudarCachorro == "não") {
            alert('Sua falta de compaixão com o pobre lobo fez você perder a chance de ganhar uma porção de retorno. \nRepense sua atitudes, ' + nomeguerreiro + '!' + '\nQuantidade de porções >>> ' + (qporcoes - 1));
            return qporcoes;
        }
        else {
            alert('VALOR INVÁLIDO!');
            continue;
        }
    }
}
/** ...
 * A função escolherLocalDeRetorno é responsável por colocar o jogador, após a sua morte, no local de desejo dele, desde que o mesmo
 * ainda possua alguma porção de retorno disponível. Obs: Ele precisa ter passado por esses locais antes. Apenas os locais já visitados
 * estarão disponíveis para retorno.
 */
function escolherLocalDeRetorno() {
    while (1) {
        escolherTurno = perguntaEObriga('A sua morte acabou ativando a porção de retorno! Escolha um ponto de retorno: \n- Manhã \n- Tarde \n- Noite', 'manhã', 'tarde', 'noite');
        if (escolherTurno == 'manhã') {
            controlarAcesso = 0;
            manha();
            return;
        }
        else if (escolherTurno == 'tarde') {
            tarde();
            return;
        }
        else if (escolherTurno == 'noite') {
            noite();
            return;
        }
        else {
            alert('RESPOSTA INVÁLIDA');
            continue;
        }
    }
}
/** ...
 * A função tentarNovamente é responsável por perguntar ao jogador, após perder todas
 * as suas chances, se ele deseja jogar novamente.
 */
function tentarNovamente() {
    var _a;
    continuar = String((_a = prompt('Tentar novamente? \n- Sim \n- Não')) === null || _a === void 0 ? void 0 : _a.trim().toLowerCase());
    if (continuar == 'sim') {
        controlarAcesso = 1;
        qporcoes = 4;
        DragonEgg();
        return;
    }
    else if (continuar == 'não') {
        alert('Você desistiu!');
    }
    else {
        alert('VALOR INVÁLIDO!');
    }
}
/** ...
 * A função verficarPorcoes é responsável por fazer a contagem das porções disponíveis e informar a quantidade.
 */
function verificarPorcoes() {
    if ((qporcoes - 1) == 0) {
        alert('Suas porções de retorno acabaram!');
        alert('GAME OVER!!! \nVocê não tem mais porções de retorno para continuar.');
        tentarNovamente();
        return;
    }
    else if ((qporcoes - 1) >= 1) {
        alert('Você ativou a porção de retorno.');
        alert('Você possui ' + (qporcoes - 1) + ' porção(ões) de retorno!');
        escolherLocalDeRetorno();
        return;
    }
}
/** ...
 * A função escolherOvo é responsável por ajudar o jogador a escolher um ovo e aprensentar os possíveis resultados.
 * Existe apenas uma opção certa(direita), porém essa opção continua certa apenas no turno da tarde. Durante a noite todos são
 * considerados errado. No turno da manhã existe esta opção.
 */
function escolherOvo() {
    alert('Você chegou no ninho e está diante de três ovos. \nDois deles estão prestes a chocar e você não vai querer um bebê-dragão chamando a mãe dele, não é? \nEscolha o ovo que não vai chocar por agora e fuja o mais rápido possível!');
    let ovoEscolher = perguntaEObriga('Escolha um ovo: \n- Esquerda \n- Meio \n- Direita', 'esquerda', 'meio', 'direita');
    if (ovoEscolher == 'esquerda') {
        alert('O ovo chocou assim que você encostou nele! \nGAME OVER!!!');
        qporcoes -= 1;
        verificarPorcoes();
        return;
    }
    else if (ovoEscolher == 'meio') {
        alert('O ovo estava prestes a chocar e você acelerou o processo! \nGAME OVER!!!');
        qporcoes -= 1;
        verificarPorcoes();
        return;
    }
    else if (ovoEscolher == 'direita') {
        if (escolherTurno == 'tarde') {
            alert('Você escolheu o ovo certo, a casca parece bem firme ainda, mas não por muito tempo, corra!');
            //Finalizar jogo
            alert('PARABÉNS!!! \nVocê conseguiu sair da caverna a tempo, agora é esperar o ovo chocar e ter assim a oportunidade de treinar o seu próprio dragão! \nEssa aventura acaba por aqui, mas a jornada continua, nos vemos em uma próxima, ' + nomeguerreiro + '!');
            return;
        }
        else if (escolherTurno == 'noite') {
            alert('O ovo estava prestes a chocar e você acelerou o processo! \nGAME OVER!!!');
            qporcoes -= 1;
            verificarPorcoes();
            return;
        }
    }
}
function manha() {
    var _a;
    alert('Você escolheu manhã!');
    if (controlarAcesso == 1) {
        qporcoes = Number(ajudarLobo());
        controlarAcesso = 0;
    }
    let observar = 1;
    let desbloquear = 1;
    let esperar = 'sim';
    while (1) {
        let manhaEscolha1 = perguntaEObriga('Depois de um tempo caminhando, você chegou à caverna. Escolha umas das opções para avançar: \n- Esperar \n- Entrar \n- Desistir', 'esperar', 'entrar', 'desistir');
        if (manhaEscolha1 == 'esperar') {
            alert('Esperando...');
            while (observar) {
                esperar = (_a = String(prompt('Continuar a esperar? \n- Sim \n- Não'))) === null || _a === void 0 ? void 0 : _a.trim().toLowerCase();
                if (esperar == 'sim') {
                    desbloquear += 1;
                    alert('Esperando...');
                    if (desbloquear == 3) {
                        alert('Será se vai acontecer algo? \nDe qualquer forma, vovó já dizia... \n"Quem espera sempre alcança!"');
                        continue;
                    }
                    if (desbloquear == 5) {
                        alert('GAME OVER!!! Uma cobra venenosa aproximou-se sem você perceber e acabou mordendo a sua perna.');
                        alert('Dica importante! \nNão adianta usar a porção de retorno e tentar novamente por este caminho. Vocẽ não será capaz de mudar este futuro.');
                        qporcoes -= 1;
                        verificarPorcoes();
                        return;
                    }
                }
                else if (esperar == 'não') {
                    break;
                }
                else {
                    alert('Resposta inválida. Tente novamente!');
                    continue;
                }
            }
            if (esperar == 'não') {
                continue;
            }
        }
        else if (manhaEscolha1 == 'entrar') {
            alert('Você entrou na caverna e avistou o dragão, fique atento as próximas ações!');
            let escolhaNinho = perguntaEObriga('Escolha uma das opções: \n- Caminhar \n- Correr \n- Voltar', 'caminhar', 'correr', 'voltar');
            if (escolhaNinho == 'correr' || escolhaNinho == 'caminhar') {
                alert('Parabéns!!! Você conseguiu chegar até o ninho. Mas deu de cara com o dragão. \nGAME OVER!!!');
                qporcoes -= 1;
                verificarPorcoes();
                return;
            }
            else if (escolhaNinho == 'voltar') {
                qporcoes -= 1;
                verificarPorcoes();
                return;
            }
        }
        else if (manhaEscolha1 == 'desistir') {
            return alert('Você desistiu!');
        }
        else {
            alert('Comando inválido');
            continue;
        }
    }
}
function tarde() {
    var _a, _b;
    alert("Você escolheu tarde! Let's go!!!");
    let observar = 1;
    let desbloquear = 0;
    let esperar = 'sim';
    let repetidoText = 1;
    while (1) {
        if (repetidoText == 1) {
            alert('Depois de um tempo caminhando, você chegou à caverna.');
            repetidoText = 0;
        }
        let tardeEscolha1 = (_a = perguntaEObriga('Escolha umas das opções para avançar: \n- Esperar \n- Entrar \n- Desistir', 'esperar', 'entrar', 'desistir')) === null || _a === void 0 ? void 0 : _a.toLowerCase();
        if (tardeEscolha1 == 'esperar') {
            while (observar) {
                esperar = (_b = String(prompt('Continuar a esperar? \n- Sim \n- Não'))) === null || _b === void 0 ? void 0 : _b.trim().toLowerCase();
                if (esperar == 'sim') {
                    desbloquear += 1;
                    alert('Esperando...');
                    if (desbloquear == 3) {
                        alert('Será se vai acontecer algo? \nDe qualquer forma, vovó já dizia... \n"Quem espera sempre alcança!"');
                        continue;
                    }
                    if (desbloquear == 5) {
                        alert('O dragão saiu, aproveite o momento, vá até o ninho!');
                        let tardeEscolha2 = perguntaEObriga('Escolha uma das opções antes que o dragão volte! \n- Correr \n- Caminhar \n- Agachar', 'correr', 'caminhar', 'agachar');
                        if (tardeEscolha2 == 'correr') {
                            alert('UFA! Você conseguiu chegar até o ninho! Clique em OK para continuar.');
                            escolherOvo();
                            return;
                        }
                        else if (tardeEscolha2 == 'caminhar') {
                            alert('GAME OVER!!! Lento demais!');
                            qporcoes -= 1;
                            verificarPorcoes();
                            return;
                        }
                        else if (tardeEscolha2 == 'agachar') {
                            alert('GAME OVER!!! Lento demais! O dragão voltou para o ninho.');
                            qporcoes -= 1;
                            verificarPorcoes();
                            return;
                        }
                    }
                }
                else if ((esperar === null || esperar === void 0 ? void 0 : esperar.toLowerCase()) == 'não') {
                    break;
                }
                else {
                    alert('Resposta inválida. Tente novamente!');
                }
            }
        }
        else if (tardeEscolha1 == 'entrar') {
            alert('Você entrou na caverna e avistou o dragão.');
            let escolhaNinho = perguntaEObriga('Escolha uma das opções:\n- Caminhar \n- Correr \n- Voltar', 'caminhar', 'correr', 'voltar');
            if (escolhaNinho == 'correr' || escolhaNinho == 'caminhar') {
                alert('Parabéns!!! Você conseguiu chegar até o ninho, mas o dragão percebeu a sua presença! \nGAME OVER!!!');
                qporcoes -= 1;
                verificarPorcoes();
                return;
            }
            else if (escolhaNinho == 'voltar') {
                qporcoes -= 1;
                verificarPorcoes();
                return;
            }
        }
        else if (tardeEscolha1 == 'desistir') {
            return (alert('GAME OVER!!!'));
        }
        else {
            alert('Comando inválido');
        }
    }
}
function noite() {
    var _a, _b;
    alert("Você escolheu noite! Let's go!!!");
    while (1) {
        let acenderTocha = String((_a = prompt('Hoje, a lua não apareceu no céu... \nA escuridão reina nessa floresta mágica, então fique alerta! \nAcender uma tocha? \n- Sim \n- Não')) === null || _a === void 0 ? void 0 : _a.trim().toLowerCase());
        if (acenderTocha == 'não') {
            alert('GAME OVER!!! Durante a noite, os monstros saem de seus escoderijos para se alimentar. Você precisa de algo para afugentá-los.');
            qporcoes -= 1;
            verificarPorcoes();
            return;
        }
        else if (acenderTocha == 'sim') {
            let noiteEscolha1;
            alert('Boa escolha! O fogo de sua tocha foi o suficiente para afugentar os monstros. \nContinue o seu objetivo, vá até a caverna.');
            let escolhaCaminhar = (_b = String(prompt('Ao chegar na caverna, você encontrou o ninho e o dragão. Você quer esperar? \n- Sim \n- Não'))) === null || _b === void 0 ? void 0 : _b.trim().toLowerCase();
            if (escolhaCaminhar == 'sim') {
                alert('O dragão escutou um estranho barulho no lado sul da caverna e foi averiguar o que era.');
                noiteEscolha1 = perguntaEObriga('Escolha uma das opções antes que o dragão volte: \n- Caminhar \n- Correr \n- Agachar', 'caminhar', 'correr', 'agachar');
                if (noiteEscolha1 == 'correr') {
                    alert('Você conseguiu chegar até o ninho, escolha um ovo, rápido!');
                    escolherOvo();
                    return;
                }
                else if (noiteEscolha1 == 'caminhar') {
                    alert('Muito lento! O dragão voltou e você morreu! \nGAME OVER!!!');
                    qporcoes -= 1;
                    verificarPorcoes();
                    return;
                }
                else if (noiteEscolha1 == 'agachar') {
                    alert('Muito lento! O dragão voltou e você morreu! \nGAME OVER!!!');
                    qporcoes -= 1;
                    verificarPorcoes();
                    return;
                }
            }
            else if (escolhaCaminhar == 'não') {
                noiteEscolha1 = perguntaEObriga('Escolha uma das opções para avançar: \n- Caminhar \n- Correr \n- Agachar', 'caminhar', 'correr', 'agachar');
                if (noiteEscolha1 == 'caminhar' || noiteEscolha1 == 'correr' || noiteEscolha1 == 'agachar') {
                    alert('Você morreu!!! Porque será? \nGAME OVER!!!');
                    qporcoes -= 1;
                    verificarPorcoes();
                    return;
                }
            }
        }
        else {
            alert('RESPOSTA INVÁLIDA');
            continue;
        }
    }
}
function DragonEgg() {
    nomeGuerreiro();
    introducao();
    escolherTurno = perguntaEObriga('Aqui é a sua principal escolha, pense bem e então decida os seus próximos passos. \n- Manhã \n- Tarde \n- Noite', 'manhã', 'tarde', 'noite');
    if (escolherTurno == 'manhã') {
        manha();
        return;
    }
    else if (escolherTurno == 'tarde') {
        tarde();
        return;
    }
    else if (escolherTurno == 'noite') {
        noite();
        return;
    }
}
