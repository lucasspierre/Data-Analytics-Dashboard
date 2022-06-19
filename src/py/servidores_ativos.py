import pandas as pd

requisitado = pd.read_excel("./src/py/dataSheets/servidor.xlsx", 'requisitado')
servidores = pd.read_excel("./src/py/dataSheets/servidores_remuneracao.xlsx")
estagiarios = pd.read_excel('./src/py/dataSheets/estagiarios.xlsx')
terceirizados = pd.read_excel('./src/py/dataSheets/terceirizado.xlsx')

requisitadoOut = requisitado[['VINCULO']].value_counts(sort=False)
# print(requisitadoOut)

servidoresOut = servidores[['VINCULO']].value_counts(sort=False)
# print(servidoresOut)

estagioariosOut = len(estagiarios)
# print(estagioariosOut)

terceirizadosOut = len(terceirizados)
# print(terceirizadosOut)


dados = ['Comissionado', servidoresOut[0]], ['Efetivo', servidoresOut[1]], ['Estagiário',
                                                                            estagioariosOut], ['Exercício Provisório', servidoresOut[2]], ['Parlamentar', servidoresOut[3]], ['Requisitado', requisitadoOut[0]], ['Terceirizados', terceirizadosOut]

dt = pd.DataFrame(
    dados, columns=['Vinculo', 'Quantidade']
)

dt.to_json("./src/dataFrames/dataFrameFuncionariosAtivos.json",
           orient='records', force_ascii=False)
dt.to_excel('./src/py/dataSheetsOut/FuncionariosAtivos.xlsx')
# print(dt)
