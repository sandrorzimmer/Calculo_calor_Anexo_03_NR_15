function buscaQtdeLocais() {
    let qtd_locais_medidos = 0;
    qtd_locais_medidos = $("#qtd_locais_medidos").val();
    
    return qtd_locais_medidos;
}

function resetLocais() {
    $("#qtd_locais_medidos").val("");
    $("#calcular").hide();

    return;
}

function resetCampos() {
    $(".window_campos").html("");

    return;
}

function resetErros() {
    $(".window_erro").html("");
    $(".window_erro").hide();

    return;
}

function resetResultado() {
    $(".resultado").html("");
    $(".window_resultado").hide();
    $(".icon_copy").hide();

    return;
}

function mostraErro(mensagem,tempo) {
    if(tempo == "permanente") {
        $(".window_erro").append(mensagem,"<br>");
        $(".window_erro").show(200);
        return;
    } else {
        $(".window_erro").append(mensagem);
        $(".window_erro").show(200).delay(2000).hide(200);
        return;
    }
}

//Monta o campo select para seleção da Taxa Metabólica em cada local
function montaSelectTaxaMetabolica() {
    let array_taxas = [];
    let tabela_taxa_metabolica = {};

    array_taxas = [
        {
            cod: 101,
            valor: 100,
            descricao: "Sentado - Em repouso"
        },
        {
            cod: 102,
            valor: 126,
            descricao: "Sentado - Trabalho leve com as mãos"
        },
        {
            cod: 103,
            valor: 153,
            descricao: "Sentado - Trabalho moderado com as mãos"
        },
        {
            cod: 104,
            valor: 171,
            descricao: "Sentado - Trabalho pesado com as mãos"
        },
        {
            cod: 105,
            valor: 162,
            descricao: "Sentado - Trabalho leve com um braço"
        },
        {
            cod: 106,
            valor: 198,
            descricao: "Sentado - Trabalho moderado com um braço"
        },
        {
            cod: 107,
            valor: 234,
            descricao: "Sentado - Trabalho pesado com um braço"
        },
        {
            cod: 108,
            valor: 216,
            descricao: "Sentado - Trabalho leve com dois braços"
        },
        {
            cod: 109,
            valor: 252,
            descricao: "Sentado - Trabalho moderado com dois braços"
        },
        {
            cod: 110,
            valor: 288,
            descricao: "Sentado - Trabalho pesado com dois braços"
        },
        {
            cod: 111,
            valor: 324,
            descricao: "Sentado - Trabalho leve com braços e pernas"
        },
        {
            cod: 112,
            valor: 441,
            descricao: "Sentado - Trabalho moderado com braços e pernas"
        },
        {
            cod: 113,
            valor: 603,
            descricao: "Sentado - Trabalho pesado com braços e pernas"
        },
        {
            cod: 201,
            valor: 126,
            descricao: "Em pé, agachado ou ajoelhado - Em repouso"
        },
        {
            cod: 202,
            valor: 153,
            descricao: "Em pé, agachado ou ajoelhado - Trabalho leve com as mãos"
        },
        {
            cod: 203,
            valor: 180,
            descricao: "Em pé, agachado ou ajoelhado - Trabalho moderado com as mãos"
        },
        {
            cod: 204,
            valor: 198,
            descricao: "Em pé, agachado ou ajoelhado - Trabalho pesado com as mãos"
        },
        {
            cod: 205,
            valor: 189,
            descricao: "Em pé, agachado ou ajoelhado - Trabalho leve com um braço"
        },
        {
            cod: 206,
            valor: 225,
            descricao: "Em pé, agachado ou ajoelhado - Trabalho moderado com um braço"
        },
        {
            cod: 207,
            valor: 261,
            descricao: "Em pé, agachado ou ajoelhado - Trabalho pesado com um braço"
        },
        {
            cod: 208,
            valor: 243,
            descricao: "Em pé, agachado ou ajoelhado - Trabalho leve com dois braços"
        },
        {
            cod: 209,
            valor: 279,
            descricao: "Em pé, agachado ou ajoelhado - Trabalho moderado com dois braços"
        },
        {
            cod: 210,
            valor: 315,
            descricao: "Em pé, agachado ou ajoelhado - Trabalho pesado com dois braços"
        },
        {
            cod: 211,
            valor: 351,
            descricao: "Em pé, agachado ou ajoelhado - Trabalho leve com o corpo"
        },
        {
            cod: 212,
            valor: 468,
            descricao: "Em pé, agachado ou ajoelhado - Trabalho moderado com o corpo"
        },
        {
            cod: 213,
            valor: 630,
            descricao: "Em pé, agachado ou ajoelhado - Trabalho pesado com o corpo"
        },
        {
            cod: 301,
            valor: 198,
            descricao: "Em pé, em movimento - Andando no plano - Sem carga - 2 km/h"
        },
        {
            cod: 302,
            valor: 252,
            descricao: "Em pé, em movimento - Andando no plano - Sem carga - 3 km/h"
        },
        {
            cod: 303,
            valor: 297,
            descricao: "Em pé, em movimento - Andando no plano - Sem carga - 4 km/h"
        },
        {
            cod: 304,
            valor: 360,
            descricao: "Em pé, em movimento - Andando no plano - Sem carga - 5 km/h"
        },
        {
            cod: 305,
            valor: 333,
            descricao: "Em pé, em movimento - Andando no plano - Com carga - 10 kg - 4 km/h"
        },
        {
            cod: 306,
            valor: 450,
            descricao: "Em pé, em movimento - Andando no plano - Com carga - 30 kg - 4 km/h"
        },
        {
            cod: 307,
            valor: 787,
            descricao: "Em pé, em movimento - Correndo no plano - 9 km/h"
        },
        {
            cod: 308,
            valor: 873,
            descricao: "Em pé, em movimento - Correndo no plano - 12 km/h"
        },
        {
            cod: 309,
            valor: 990,
            descricao: "Em pé, em movimento - Correndo no plano - 15 km/h"
        },
        {
            cod: 310,
            valor: 324,
            descricao: "Em pé, em movimento - Subindo rampa - Sem carga - com 5° de inclinação - 4 km/h"
        },
        {
            cod: 311,
            valor: 378,
            descricao: "Em pé, em movimento - Subindo rampa - Sem carga - com 15° de inclinação - 3 km/h"
        },
        {
            cod: 312,
            valor: 540,
            descricao: "Em pé, em movimento - Subindo rampa - Sem carga - com 25° de inclinação - 3 km/h"
        },
        {
            cod: 313,
            valor: 486,
            descricao: "Em pé, em movimento - Subindo rampa - Com carga - com 15° de inclinação - 4 km/h"
        },
        {
            cod: 314,
            valor: 738,
            descricao: "Em pé, em movimento - Subindo rampa - Com carga - com 25° de inclinação - 4 km/h"
        },
        {
            cod: 315,
            valor: 243,
            descricao: "Em pé, em movimento - Descendo rampa (5 km/h) sem carga - com 5° de inclinação"
        },
        {
            cod: 316,
            valor: 252,
            descricao: "Em pé, em movimento - Descendo rampa (5 km/h) sem carga - com 15° de inclinação"
        },
        {
            cod: 317,
            valor: 324,
            descricao: "Em pé, em movimento - Descendo rampa (5 km/h) sem carga - com 25° de inclinação"
        },
        {
            cod: 318,
            valor: 522,
            descricao: "Em pé, em movimento - Subindo escada (80 degraus por minuto - altura do degrau de 0,17 m - Sem carga"
        },
        {
            cod: 319,
            valor: 648,
            descricao: "Em pé, em movimento - Subindo escada (80 degraus por minuto - altura do degrau de 0,17 m - Com carga (20 kg"
        },
        {
            cod: 320,
            valor: 279,
            descricao: "Em pé, em movimento - Descendo escada (80 degraus por minuto - altura do degrau de 0,17 m - Sem carga"
        },
        {
            cod: 321,
            valor: 400,
            descricao: "Em pé, em movimento - Descendo escada (80 degraus por minuto - altura do degrau de 0,17 m - Com carga (20 kg"
        },
        {
            cod: 322,
            valor: 320,
            descricao: "Trabalho moderado de braços (ex.: varrer, trabalho em almoxarifado"
        },
        {
            cod: 323,
            valor: 349,
            descricao: "Trabalho moderado de levantar ou empurrar"
        },
        {
            cod: 324,
            valor: 391,
            descricao: "Trabalho de empurrar carrinhos de mão, no mesmo plano, com carga"
        },
        {
            cod: 325,
            valor: 495,
            descricao: "Trabalho de carregar pesos ou com movimentos vigorosos com os braços (ex.: trablho com foice"
        },
        {
            cod: 326,
            valor: 524,
            descricao: "Trabalho pesado de levantar, empurrar ou arrastar pesos (ex.: remoção com pá, abertura de valas"
        },
    ]
    return array_taxas;
}

//Carregar campos a serem preenchidos
function carregarCampos() {
    let qtd_locais_medidos = 0;
    let element = "";
    let array_taxas = [];

    array_taxas = montaSelectTaxaMetabolica();

    qtd_locais_medidos = buscaQtdeLocais();

    if (qtd_locais_medidos < 1 || qtd_locais_medidos > 5) {
        clearAll();
        mostraErro("O número de locais medidos deve estar entre 1 e 5","");

        return;
    }

    resetResultado();

    for (let i = 0; i < qtd_locais_medidos ; i++) {

        element += "<div class='window_local'>";
        element += "<h3>Local " + (i+1) + "</h3>";

        element += "<label for='ibutg_local_" + (i + 1) + "'>Nome</label>";
        
        element += "<input type='text' ";
        element += "name='nome_local_" + (i + 1) + "' ";
        element += "id='nome_local_" + (i + 1) + "' ";
        element += "maxlength='25'";
        element += "placeholder='Nome do local medido " + (i + 1) + "' ";
        element += "/>";

        element += "<label for='ibutg_local_" + (i + 1) + "'>IBUTG</label>";
        
        element += "<input type='number' ";
        element += "name='ibutg_local_" + (i + 1) + "' ";
        element += "id='ibutg_local_" + (i + 1) + "' ";
        element += "placeholder='IBUTG medido no local " + (i + 1) + "' ";
        element += "/>";

        element += "<label for='tempo_local_" + (i + 1) + "'>Tempo</label>";

        element += "<input type='number' ";
        element += "name='tempo_local_" + (i + 1) + "' ";
        element += "id='tempo_local_" + (i + 1) + "' ";
        element += "placeholder='Tempo no local " + (i + 1) + " (minutos)' ";
        element += "/>";

        element += "<label for='select_metabolica_local_" + (i + 1) + "'>Atividade</label>";

        element += "<select name='select_metabolica_local_" + (i + 1) + "'";
        element += "id='select_metabolica_local_" + (i + 1) + "' onchange='selecionarTaxa(" + (i + 1) + ")'>";


        for (let x = 0; x < array_taxas.length ; x++) {
            element += "<option value='";
            element += array_taxas[x]['valor'];
            element += "'>";
            element += array_taxas[x]['descricao'];
            element += "</option>";
        }

        element += "</select>";

        element += "<label for='metabolica_local_" + (i + 1) + "'>Taxa Metabólica</label>";

        element += "<input type='number' ";
        element += "name='metabolica_local_" + (i + 1) + "' ";
        element += "id='metabolica_local_" + (i + 1) + "' ";
        element += "placeholder='Taxa metabólica no local " + (i + 1) + "' ";
        element += "readonly/>";

        element += "</div>";
    }

    $(".window_campos").html(element);
    $("#calcular").show();

    return;
}

function selecionarTaxa(local) {
    let valor_taxa = 0;
    valor_taxa = $("#select_metabolica_local_" + local).val();
    $("#metabolica_local_" + local).val(valor_taxa);
    
    return;
}

function buscaTextosAtividades() {
    let array_textos = [];
    let qtd_locais_medidos = 0;

    qtd_locais_medidos = buscaQtdeLocais();

    for (let i = 0; i < qtd_locais_medidos; i++) {
        let texto = "";

        texto = $("#select_metabolica_local_" + (i+ 1) + " option:selected").text();
        console.log(texto);
        array_textos.push(texto);
    }

    return array_textos;

}

function buscaNome() {
    let qtd_locais_medidos = 0;
    let array_nome = [];

    qtd_locais_medidos = buscaQtdeLocais();
    for (let i = 0; i < qtd_locais_medidos; i++) {
        let nome = "";

        nome = $("#nome_local_" + (i+1)).val();

        array_nome.push(nome);
    }

    return array_nome;
}

function buscaIBUTG() {
    let qtd_locais_medidos = 0;
    let array_ibutg = [];

    qtd_locais_medidos = buscaQtdeLocais();
    for (let i = 0; i < qtd_locais_medidos; i++) {
        let ibutg = 0;

        ibutg = $("#ibutg_local_" + (i+1)).val();
        if (ibutg == "") {
            ibutg = 0;
        }
        ibutg = (Math.round(ibutg * 10)) / 10;
        array_ibutg.push(ibutg);
    }

    return array_ibutg;
}

function buscaTempo() {
    let qtd_locais_medidos = 0;
    let array_tempo = [];

    qtd_locais_medidos = buscaQtdeLocais();
    for (let i = 0; i < qtd_locais_medidos; i++) {
        let tempo = 0;

        tempo = $("#tempo_local_" + (i+1)).val();
        if (tempo == "") {
            tempo = 0;
        }
        tempo = parseInt(tempo);
        array_tempo.push(tempo);
    }

    return array_tempo;
}

function buscaMetabolica() {
    let qtd_locais_medidos = 0;
    let array_metabolica = [];

    qtd_locais_medidos = buscaQtdeLocais();
    for (let i = 0; i < qtd_locais_medidos; i++) {
        let metabolica = 0;

        metabolica = $("#metabolica_local_" + (i+1)).val();
        if (metabolica == "") {
            metabolica = 0;
        }
        metabolica = parseInt(metabolica);
        array_metabolica.push(metabolica);
    }

    return array_metabolica;
}

function verificaLT(metabolica) {
    let ibutg_final = 0;
    let metabolica_final = 0;
    let limite_tolerancia = 0;
    let tabela_lt = {};
    let tabela_lt_item = [];

    metabolica_final = metabolica;

    tabela_lt[100] = 33.7;
    tabela_lt[102] = 33.6;
    tabela_lt[104] = 33.5;
    tabela_lt[106] = 33.4;
    tabela_lt[108] = 33.3;
    tabela_lt[110] = 33.2;
    tabela_lt[112] = 33.1;
    tabela_lt[115] = 33.0;
    tabela_lt[117] = 32.9;
    tabela_lt[119] = 32.8;
    tabela_lt[122] = 32.7;
    tabela_lt[124] = 32.6;
    tabela_lt[127] = 32.5;
    tabela_lt[129] = 32.4;
    tabela_lt[132] = 32.3;
    tabela_lt[135] = 32.2;
    tabela_lt[137] = 32.1;
    tabela_lt[140] = 32.0;
    tabela_lt[143] = 31.9;
    tabela_lt[146] = 31.8;
    tabela_lt[149] = 31.7;
    tabela_lt[152] = 31.6;
    tabela_lt[155] = 31.5;
    tabela_lt[158] = 31.4;
    tabela_lt[161] = 31.3;
    tabela_lt[165] = 31.2;
    tabela_lt[168] = 31.1;
    tabela_lt[171] = 31.0;
    tabela_lt[175] = 30.9;
    tabela_lt[178] = 30.8;
    tabela_lt[182] = 30.7;
    tabela_lt[186] = 30.6;
    tabela_lt[189] = 30.5;
    tabela_lt[193] = 30.4;
    tabela_lt[197] = 30.3;
    tabela_lt[201] = 30.2;
    tabela_lt[205] = 30.1;
    tabela_lt[209] = 30.0;
    tabela_lt[214] = 29.9;
    tabela_lt[218] = 29.8;
    tabela_lt[222] = 29.7;
    tabela_lt[227] = 29.6;
    tabela_lt[231] = 29.5;
    tabela_lt[236] = 29.4;
    tabela_lt[241] = 29.3;
    tabela_lt[246] = 29.2;
    tabela_lt[251] = 29.1;
    tabela_lt[256] = 29.0;
    tabela_lt[261] = 28.9;
    tabela_lt[266] = 28.8;
    tabela_lt[272] = 28.7;
    tabela_lt[277] = 28.6;
    tabela_lt[283] = 28.5;
    tabela_lt[289] = 28.4;
    tabela_lt[294] = 28.3;
    tabela_lt[300] = 28.2;
    tabela_lt[306] = 28.1;
    tabela_lt[313] = 28.0;
    tabela_lt[319] = 27.9;
    tabela_lt[325] = 27.8;
    tabela_lt[332] = 27.7;
    tabela_lt[339] = 27.6;
    tabela_lt[346] = 27.5;
    tabela_lt[353] = 27.4;
    tabela_lt[360] = 27.3;
    tabela_lt[367] = 27.2;
    tabela_lt[374] = 27.1;
    tabela_lt[382] = 27.0;
    tabela_lt[390] = 26.9;
    tabela_lt[398] = 26.8;
    tabela_lt[406] = 26.7;
    tabela_lt[414] = 26.6;
    tabela_lt[422] = 26.5;
    tabela_lt[431] = 26.4;
    tabela_lt[440] = 26.3;
    tabela_lt[448] = 26.2;
    tabela_lt[458] = 26.1;
    tabela_lt[467] = 26.0;
    tabela_lt[476] = 25.9;
    tabela_lt[486] = 25.8;
    tabela_lt[496] = 25.7;
    tabela_lt[506] = 25.6;
    tabela_lt[516] = 25.5;
    tabela_lt[526] = 25.4;
    tabela_lt[537] = 25.3;
    tabela_lt[548] = 25.2;
    tabela_lt[559] = 25.1;
    tabela_lt[570] = 25.0;
    tabela_lt[582] = 24.9;
    tabela_lt[594] = 24.8;
    tabela_lt[606] = 24.7;

    //Determina o IBUTG máximo para M calculado
    for (let m in tabela_lt) {
        if (metabolica_final <= m) {
            limite_tolerancia = tabela_lt[m];

            tabela_lt_item.push(m,limite_tolerancia);

            return tabela_lt_item;
        }

        if (metabolica_final > 606) {
            limite_tolerancia = tabela_lt[606];

            tabela_lt_item.push(606,limite_tolerancia);

            return tabela_lt_item;
        }
    }
}

function mostraResultado(resultado_ibutg,resultado_metabolica,m_limite,limite,excedeu,t1,t2) {
    let ibutg_medio_final      = resultado_ibutg;
    let metabolica_media_final = resultado_metabolica;
    let m_limite_tolerancia    = m_limite;
    let limite_tolerancia      = limite;
    let excedeu_limite         = excedeu;
    let texto                  = t1;
    let texto_2                = t2;

    $(".icon_alerta").hide();

    if (excedeu_limite) {
        $("#icon_acima_limite").show();
    } else {
        $("#icon_abaixo_limite").show();
    }

    $("#metabolica_media_final").html("Taxa Metabólica média = " + metabolica_media_final + " W");
    $("#limite_tolerancia").html("Limite de tolerância = " + limite_tolerancia + "&deg C para M = " + m_limite_tolerancia + " W");
    $("#ibutg_medio_final").html("IBUTG médio = " + ibutg_medio_final + "&deg C");

    $("#resultado_texto").html(texto);
    $("#resultado_texto_2").html(texto_2);
    $(".window_resultado").show();
}

function montaTexto(ibutg_medio_calculado,metabolica_media_calculada) {
    let texto = "";
    let texto_2 = "";
    let qtd_locais_medidos = 0;
    let ibutg_medio_final = ibutg_medio_calculado;
    let metabolica_media_final = metabolica_media_calculada;
    let nomes = [];
    let valores_ibutg = [];
    let valores_metabolica = [];
    let valores_tempo = [];
    let item = 0;
    let limite_tolerancia = 0;
    let excedeu_limite = false;
    let tabela_lt_item = [];
    let m_limite_tolerancia = 0;
    let array_textos = [];

    nomes = buscaNome();
    qtd_locais_medidos = buscaQtdeLocais();
    valores_ibutg = buscaIBUTG();
    valores_metabolica = buscaMetabolica();
    valores_tempo = buscaTempo();
    tabela_lt_item = verificaLT(metabolica_media_final);
    m_limite_tolerancia = tabela_lt_item[0];
    limite_tolerancia = tabela_lt_item[1];
    array_textos = buscaTextosAtividades();

    texto += "Avaliação de acordo com a NHO 06 - Avaliação de Exposição Ocupacional ao Calor - FUNDACENTRO ";
    texto += "e Anexo 03 da NR 15, Portaria 3.214/1978, Portaria SEPRT nº 1.359/2019. ";
    texto += "<br>";

    if (qtd_locais_medidos == 1) {
        texto += nomes[item];
        texto += ": ";
        texto += "<br>";
        texto += "Atividade: "
        texto += array_textos[item];
        texto += " - ";
        texto += "M = ";
        texto += valores_metabolica[item];
        texto += " W ";
        texto += "/";
        texto += " IBUTG = ";
        texto += valores_ibutg[item];
        texto += "&deg C ";
        texto += "<br>";

    } else {
        valores_ibutg.forEach(element => {
            //texto += nomes[item] + ": IBUTG" + (item + 1) + " = " + element + "&deg C / t" + (item + 1) +"  = " + valores_tempo[item] + " min / " + "M" + (item + 1) +" = " + valores_metabolica[item] + " W" + "<br>";
            texto += nomes[item];
            texto += ": ";
            texto += "<br>";
            texto += "Atividade: "
            texto += array_textos[item];
            texto += " - ";
            texto += "M";
            texto += (item + 1);
            texto += " = "
            texto += valores_metabolica[item];
            texto += " W ";
            texto += "/";
            texto += " IBUTG";
            texto += (item + 1);
            texto += " = ";
            texto += element;
            texto += "&deg C ";
            texto += " / ";
            texto += "t";
            texto += (item + 1);
            texto += " = ";
            texto += valores_tempo[item];
            texto += " min "
            texto += "<br>";

            item ++;
        });

        texto += "IBUTG médio ponderado = (IBUTG1 x t1 + IBUTG2 x t2 + IBUTGn x tn) / 60 = " + ibutg_medio_final + "&deg C " + "<br>";
        texto += "Taxa Metabólica média ponderada = (M1 x t1 + M2 x t2 + Mn x tn) / 60 = " + metabolica_media_final + " W " + "<br>";
    }
    texto += "LT = " + limite_tolerancia + "&deg C para M = " + m_limite_tolerancia + " W ";

    if (ibutg_medio_final > limite_tolerancia) {
        texto_2 += "Ambiente INSALUBRE em consequência da exposição ao agente físico 'temperaturas anormais (calor)' em valores acima do limite de tolerância, ";
        texto_2 += "conforme Anexo 03 da NR 15, Portaria 3.214/1978, alterado pela Portaria SEPRT nº 1.359/2019, ";
        texto_2 += "portanto é devido o ADICIONAL DE INSALUBRIDADE EM GRAU MÉDIO (20% do salário mínimo). ";
        texto_2 += "Atividade enseja APOSENTADORIA ESPECIAL AOS 25 ANOS DE TRABALHO, conforme Anexo IV do Decreto 3.048/1999.";

        excedeu_limite = true;
    } else {
        texto_2 += "A exposição ao risco físico 'temperaturas anormais (calor)' encontra-se abaixo do limite de tolerância, ";
        texto_2 += "conforme Anexo 03 da NR 15, Portaria 3.214/1978, alterado pela Portaria SEPRT nº 1.359/2019. Decreto 3.048/1999.";
    }

    mostraResultado(ibutg_medio_final,metabolica_media_final,m_limite_tolerancia,limite_tolerancia,excedeu_limite,texto,texto_2);

    return;
}

//Validação dos dados digitados
function validaDados() {
    let dados_ok = true;
    let erro_locais = false;
    let erro_ibutg = false;
    let erro_metabolica = false;
    let erro_tempo = false;
    let validacao = [];
    let qtd_locais_medidos = 0;
    let array_ibutg = [];
    let array_metabolica = [];
    let array_tempo = [];
    let tempo_total = 0;

    qtd_locais_medidos = buscaQtdeLocais();
    array_ibutg = buscaIBUTG();
    array_metabolica = buscaMetabolica();
    array_tempo = buscaTempo();

    //Valida quantidade de locais medidos
    if (qtd_locais_medidos == "" || qtd_locais_medidos == 0) {
        erro_locais = "A quantidade de locais medidos deve ser maior que 0."
        dados_ok = false;
    }

    //Valida valores de IBUTG digitados
    array_ibutg.forEach(ibutg => {
        if(ibutg == "" || ibutg < 0 || ibutg > 100) {
            erro_ibutg = "Os valores de IBUTG medidos devem estar entre 0 e 100.";
            dados_ok = false;
        }
    });

    //Valida valores de Taxa metabólica
    array_metabolica.forEach(metabolica => {
        if(metabolica == "" || metabolica < 100 || metabolica > 990) {
            erro_metabolica = "Os valores de Taxa Metabólica devem estar entre 100 e 990.";
            dados_ok = false;
        }
    });

    //Valida os valores de tempo
    array_tempo.forEach(tempo => {
        if(tempo == "" || tempo < 1 || tempo > 60) {
            erro_tempo = "Os valores de Tempo devem estar entre 1 e 60.";
            dados_ok = false;
        } else {
            tempo_total = tempo_total + tempo;
        }
    });
    if (tempo_total != 60) {
        erro_tempo = "O tempo total deve ser 60 minutos.";
        console.log(tempo_total);
        dados_ok = false;
    }

    validacao.push(dados_ok,erro_locais,erro_ibutg,erro_metabolica,erro_tempo);

    return validacao;

}

//Determina o valor da taxa metabólica selecionada para cada local
/* function buscaTaxaMetabolica() {

} */

//Calcular ibutg médio e Taxa metabólica média
function calcularIBUTGmedio() {
    let validacao = [];
    let dados_ok = Boolean;

    validacao = validaDados();
    dados_ok = validacao[0];

    if (!dados_ok) {
        resetErros();

        validacao.forEach(element => {
            if (element != false) {
                mostraErro(element,"permanente");
            }
        });

        console.log("Erro de dados digitados: " + validacao);

        return;
    }

    let qtd_locais_medidos = 0;
    let ibutg_medio_soma = 0;
    let ibutg_medio_final = 0;
    let metabolica_media_soma = 0;
    let metabolica_media_final = 0;

    qtd_locais_medidos = buscaQtdeLocais();

    for (let i = 0; i < qtd_locais_medidos; i++) {
        let ibutg = 0;
        let metabolica = 0;
        let tempo = 0;
        let ibutg_medio = 0;

        ibutg = buscaIBUTG()[i];
        metabolica = buscaMetabolica()[i];
        tempo = buscaTempo()[i];
        console.log(ibutg_medio);
        ibutg_medio = (ibutg * tempo);
        ibutg_medio_soma = ibutg_medio_soma + ibutg_medio;
        console.log(ibutg_medio);
        metabolica_media = (metabolica * tempo);
        metabolica_media_soma = metabolica_media_soma + metabolica_media;
    }

    ibutg_medio_final = ibutg_medio_soma / 60;
    console.log(ibutg_medio_final);
    ibutg_medio_final = (Math.round(ibutg_medio_final * 10)) / 10;
    console.log(ibutg_medio_final);

    metabolica_media_final = metabolica_media_soma / 60;
    metabolica_media_final = (Math.round(metabolica_media_final * 10)) / 10;

    resetErros();
    
    montaTexto(ibutg_medio_final,metabolica_media_final);

    return;
}

//Limpar todos os campos e reiniciar cálculo
function clearAll() {
    resetLocais();
    resetCampos();
    resetErros();
    resetResultado();
    $("#qtd_locais_medidos").focus();

    return;
}

//Copiar texto
function copiarTexto(x) {
    let texto_copiar = x;
    let texto = "";
    let texto_corrigido = "";
    let id = "";

    switch(texto_copiar) {
        case 1:
            texto = $("#resultado_texto").html();
            id = "resultado_texto";
            break;
        case 2:
            texto = $("#resultado_texto_2").html();
            id = "resultado_texto_2";
            break;
    }

    texto_corrigido = texto.replace(/<br>/g,"\n");

    navigator.clipboard.writeText(texto_corrigido);
    
    $("#" + id).css("background-color","#ffffff");
    setTimeout(function() {
        $("#" + id).css("background-color","#eaeae1");
    }, 100);

    return;
}

//Executar ao carregar a página
$(document).ready(function(){

    clearAll();

    //Determina quantos locais foram medidos ao teclar <ENTER>
    $('#qtd_locais_medidos').keydown(function(e) {
        if (e.which == 13) {
             carregarCampos();
             montaSelectTaxaMetabolica();
        }
    })

    //Limpar todos os campos ao teclar <ESC>
    $(document).keydown(function(e) {
        if (e.which == 27) {
            clearAll();
        }
    })

    $(".container_resultado_1").mouseover(function(){
        $("#icon_copy_texto_1").show();
        $("#resultado_texto").css("opacity","0.5");
        $("#resultado_texto").css("cursor","pointer");
    })

    $(".container_resultado_1").mouseout(function(){
        $("#icon_copy_texto_1").hide();
        $("#resultado_texto").css("opacity","1");
    })

    $(".container_resultado_2").mouseover(function(){
        $("#icon_copy_texto_2").show();
        $("#resultado_texto_2").css("opacity","0.5");
        $("#resultado_texto_2").css("cursor","pointer");
    })

    $(".container_resultado_2").mouseout(function(){
        $("#icon_copy_texto_2").hide();
        $("#resultado_texto_2").css("opacity","1");
    })

    $(".container_resultado_1").click(function(){
        copiarTexto(1);
    })

    $(".container_resultado_2").click(function(){
        copiarTexto(2);
    })

/*     $("#select_metabolica_local_1").on("change", function(e) {
        alert("Mudou a taxa!");
    }) */

    return;
 });
