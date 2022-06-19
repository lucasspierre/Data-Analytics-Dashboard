///FUNCIONARIOS ATIVOS
$.getJSON("./src/dataFrames/dataFrameFuncionariosAtivos.json", function (json) {
    var vinculo = json.map(function (item) {
        return item.Vinculo;
    });
    var quantidade = json.map(function (item) {
        return item.Quantidade;
    });
    var data = {
        labels: vinculo,
        datasets: [{
            data: quantidade,
            backgroundColor: [
                'rgb(100,149,237)',
                'rgb(65,105,225)',
                'rgb(30,144,255)',
                'rgb(0,191,255)',
                'rgb(135,206,250)',
                'rgb(0, 71, 171)',
                'rgb(70,130,180)'
            ],
        }]
    };
    var config = {
        type: 'doughnut',
        data: data,

        options: {
            responsive: true,
            maintainAspectRatio: false,

            plugins: {
                title: {
                    display: true,
                    text: 'Funcionários e Colaboradores Ativos',
                    color: 'rgb(92, 89, 108)',
                    font: {
                        size: 16
                    }
                },
                legend: {
                    position: 'bottom',
                },
            }
        }
    };
    var myChart = new Chart(
        document.getElementById('servidoresAtivos'),
        config
    );
});
///COMISSIONADOS CONTRATADOS
$.getJSON("./src/dataFrames/dataFrameComissionado.json", function (json) {
    var ano = json.map(function (item) {
        return item.Admissao;
    });
    var quantidade = json.map(function (item) {
        return item.Quantidade;
    });
    var data = {
        labels: ano,
        datasets: [{
            label: 'Comissionados Contratados',
            data: quantidade,
            borderColor: 'rgb(100,149,237)',
            backgroundColor: 'rgb(100,149,237)'
        }]
    };
    var config = {
        type: 'line',
        data: data,
        options: {
            responsive: true,
            maintainAspectRatio: false,
            tension: 0.3,
            borderWidth: 2,
            pointBorderWidth: 0.1,
            scales: {
                x: {
                    grid: {
                        display: false,
                    }
                },
            },
            plugins: {
                title: {
                    display: true,
                    text: 'Histórico de Contratações',
                    color: 'rgb(92, 89, 108)',
                    font: {
                        size: 16
                    }
                },
                legend: {
                    position: 'bottom',
                }
            }
        }
    };
    var myChart = new Chart(
        document.getElementById('Comissionado'),
        config
    );
});
///EFETIVOS CONTRATADOS
$.getJSON("./src/dataFrames/dataFrameEfetivo.json", function (json) {
    var ano = json.map(function (item) {
        return item.Admissao;
    });
    var quantidade = json.map(function (item) {
        return item.Quantidade;
    });
    var data = {
        labels: ano,
        datasets: [{
            label: 'Efetivos Contratados',
            data: quantidade,
            borderColor: 'rgb(65,105,225)',
            backgroundColor: 'rgb(65,105,225)'
        }]
    };
    var config = {
        type: 'line',
        data: data,
        options: {
            responsive: true,
            maintainAspectRatio: false,
            tension: 0.3,
            borderWidth: 2,
            pointBorderWidth: 0.1,
            scales: {
                x: {
                    grid: {
                        display: false,
                    }
                },
            },
            plugins: {
                title: {
                    display: true,
                    text: 'Histórico de Contratações',
                    color: 'rgb(92, 89, 108)',
                    font: {
                        size: 16
                    }
                },
                legend: {
                    position: 'bottom',
                }
            }
        }
    };
    var myChart = new Chart(
        document.getElementById('Efetivo'),
        config
    );
});
///EXERCÍCIO PROVISÓRIO
$.getJSON("./src/dataFrames/dataFrameProvisorio.json", function (json) {
    var ano = json.map(function (item) {
        return item.Admissao;
    });
    var quantidade = json.map(function (item) {
        return item.Quantidade;
    });
    var data = {
        labels: ano,
        datasets: [{
            label: 'Exercício Provisório Contratados',
            data: quantidade,
            borderColor: 'rgb(0,191,255)',
            backgroundColor: 'rgb(0,191,255)'
        }]
    };
    var config = {
        type: 'line',
        data: data,
        options: {
            responsive: true,
            maintainAspectRatio: false,
            tension: 0.3,
            borderWidth: 2,
            pointBorderWidth: 0.1,
            scales: {
                x: {
                    grid: {
                        display: false,
                    }
                },
            },
            plugins: {
                title: {
                    display: true,
                    text: 'Histórico de Contratações',
                    color: 'rgb(92, 89, 108)',
                    font: {
                        size: 16
                    }

                },
                legend: {
                    position: 'bottom',
                }
            }
        }
    };
    var myChart = new Chart(
        document.getElementById('Provisorio'),
        config
    );
});
///REQUISITADOS
$.getJSON("./src/dataFrames/dataFrameRequisitado.json", function (json) {
    var ano = json.map(function (item) {
        return item.Admissao;
    });
    var quantidade = json.map(function (item) {
        return item.Quantidade;
    });
    var data = {
        labels: ano,
        datasets: [{
            label: 'Requisitados Contratados',
            data: quantidade,
            borderColor: 'rgb(0, 71, 171)',
            backgroundColor: 'rgb(0, 71, 171)'
        }]
    };
    var config = {
        type: 'line',
        data: data,
        options: {
            responsive: true,
            maintainAspectRatio: false,
            tension: 0.3,
            borderWidth: 2,
            pointBorderWidth: 0.1,
            scales: {
                x: {
                    grid: {
                        display: false,
                    }
                },
            },
            plugins: {
                title: {
                    display: true,
                    text: 'Histórico de Contratações',
                    color: 'rgb(92, 89, 108)',
                    font: {
                        size: 16
                    }
                },
                legend: {
                    position: 'bottom',
                }
            }
        }
    };
    var myChart = new Chart(
        document.getElementById('Requisitado'),
        config
    );
});
///MEDIA DE RECEITAS
$.getJSON("./src/dataFrames/dataFrameReceitas.json", function (json) {
    var ano = json.map(function (item) {
        return item.Ano;
    });
    var prevista = json.map(function (item) {
        return item.Receita_Prevista;
    });
    var arrecadada = json.map(function (item) {
        return item.Receita_Arrecadada;
    });
    var data = {
        labels: ano,
        datasets: [{
            label: 'Receita Prevista',
            data: prevista,
            borderColor: 'rgb(255,127,80)',
            backgroundColor: 'rgb(255,127,80)'
        },
        {
            label: 'Receita Arrecadada',
            data: arrecadada,
            borderColor: 'rgb(70,130,180)',
            backgroundColor: 'rgb(70,130,180)'
        }]
    };
    var config = {
        type: 'line',
        data: data,
        options: {
            responsive: true,
            maintainAspectRatio: false,
            tension: 0.3,
            borderWidth: 2,
            pointBorderWidth: 0.1,
            scales: {
                x: {
                    grid: {
                        display: false,
                    }
                },
            },
            plugins: {
                title: {
                    display: true,
                    text: 'Média Anual de Receitas',
                    color: 'rgb(92, 89, 108)',
                    font: {
                        size: 16
                    }
                },
                legend: {
                    position: 'bottom',
                },
                tooltip: {
                    callbacks: {
                        label: function (context) {
                            let label = context.dataset.label || '';

                            if (label) {
                                label += ': ';
                            }
                            if (context.parsed.y !== null) {
                                label += new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(context.parsed.y);
                            }
                            return label;
                        }
                    }
                }
            }
        }
    };
    var myChart = new Chart(
        document.getElementById('Receitas'),
        config
    );
});
///ORIGEM DE RECEITAS
$.getJSON("./src/dataFrames/dataFrameOrigemReceitas.json", function (json) {
    var origem = json.map(function (item) {
        return item.Origem;
    });
    var quantidade = json.map(function (item) {
        return item.Quantidade;
    });
    var data = {
        labels: origem,
        datasets: [{
            label: 'Quantitativo',
            data: quantidade,
            backgroundColor: [
                'rgb(100,149,237)', 'rgb(70,130,180)'],
        }]
    };
    var config = {
        type: 'bar',
        data: data,
        options: {
            responsive: true,
            maintainAspectRatio: false,
            indexAxis: 'y',
            scales: {
                x: {
                    grid: {
                        display: false,
                    }
                },
                y: {
                    ticks: {
                        crossAlign: "far",
                    },
                },
            },
            plugins: {
                title: {
                    display: true,
                    text: 'Origem das Receitas',
                    color: 'rgb(92, 89, 108)',
                    font: {
                        size: 16
                    }
                },
                legend: {
                    position: 'bottom',

                },
            }
        }
    };
    var myChart = new Chart(
        document.getElementById('EspeciesReceitas'),
        config
    );
});
///MEDIA DE DESPESAS
$.getJSON("./src/dataFrames/dataFrameDespesas.json", function (json) {
    var ano = json.map(function (item) {
        return item.Ano;
    });
    var dotacao = json.map(function (item) {
        return item.Valor_Dotação;
    });
    var empenho = json.map(function (item) {
        return item.Valor_Empenhado;
    });
    var pago = json.map(function (item) {
        return item.Valor_Pago;
    });
    var data = {
        labels: ano,
        datasets: [{
            label: 'Valor Dotação',
            data: dotacao,
            borderColor: 'rgb(255,127,80)',
            backgroundColor: 'rgb(255,127,80)'
        },
        {
            label: 'Valor Empenhado',
            data: empenho,
            borderColor: 'rgb(70,130,180)',
            backgroundColor: 'rgb(70,130,180)'
        },
        {
            label: 'Valor Tot. Despesas',
            data: pago,
            borderColor: 'rgb(220,20,60)',
            backgroundColor: 'rgb(220,20,60)'
        }]
    };
    var config = {
        type: 'line',
        data: data,
        options: {
            responsive: true,
            maintainAspectRatio: false,
            tension: 0.3,
            borderWidth: 2,
            pointBorderWidth: 0.1,
            scales: {
                x: {
                    grid: {
                        display: false,
                    }
                },
            },
            plugins: {
                title: {
                    display: true,
                    text: 'Média Anual de Dotação e Despesas',
                    color: 'rgb(92, 89, 108)',
                    font: {
                        size: 16
                    }
                },
                legend: {
                    position: 'bottom',
                },
                tooltip: {
                    callbacks: {
                        label: function (context) {
                            let label = context.dataset.label || '';

                            if (label) {
                                label += ': ';
                            }
                            if (context.parsed.y !== null) {
                                label += new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(context.parsed.y);
                            }
                            return label;
                        }
                    }
                }
            }
        }
    };
    var myChart = new Chart(
        document.getElementById('Despesas'),
        config
    );
});
///TIPO DE DESPESAS
$.getJSON("./src/dataFrames/dataFrameTipoDespesa.json", function (json) {
    var tipo = json.map(function (item) {
        return item.Grupo_Despesa;
    });
    var quantidade = json.map(function (item) {
        return item.Quantidade;
    });
    var data = {
        labels: tipo,
        datasets: [{
            label: 'Quantitativo',
            data: quantidade,
            backgroundColor: [
                'rgb(100,149,237)', 'rgb(70,130,180)'],
        }]
    };
    var config = {
        type: 'bar',
        data: data,
        options: {
            responsive: true,
            maintainAspectRatio: false,
            indexAxis: 'y',

            scales: {
                x: {
                    grid: {
                        display: false,
                    }
                },
                y: {
                    ticks: {
                        crossAlign: "far",
                    },
                },
            },
            plugins: {
                title: {
                    display: true,
                    text: 'Tipo das Despesas',
                    color: 'rgb(92, 89, 108)',
                    font: {
                        size: 16
                    }
                },
                legend: {
                    position: 'bottom',
                },
            }
        }
    };
    var myChart = new Chart(
        document.getElementById('TipoDespesas'),
        config
    );
});