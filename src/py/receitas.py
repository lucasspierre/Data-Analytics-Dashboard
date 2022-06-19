import pandas as pd

receita = pd.read_excel('./src/py/dataSheets/ReceitasSenado.xlsx')[
    ['Ano', 'Receita prevista', 'Receita arrecadada']]

ano2012 = receita.loc[receita['Ano'] == 2012]
ano2013 = receita.loc[receita['Ano'] == 2013]
ano2014 = receita.loc[receita['Ano'] == 2014]
ano2015 = receita.loc[receita['Ano'] == 2015]
ano2016 = receita.loc[receita['Ano'] == 2016]
ano2017 = receita.loc[receita['Ano'] == 2017]
ano2018 = receita.loc[receita['Ano'] == 2018]
ano2019 = receita.loc[receita['Ano'] == 2019]
ano2020 = receita.loc[receita['Ano'] == 2020]
ano2021 = receita.loc[receita['Ano'] == 2021]
ano2022 = receita.loc[receita['Ano'] == 2022]

calculo12 = ano2012[['Receita prevista', 'Receita arrecadada']].mean().round(2)
calculo13 = ano2013[['Receita prevista', 'Receita arrecadada']].mean().round(2)
calculo14 = ano2014[['Receita prevista', 'Receita arrecadada']].mean().round(2)
calculo15 = ano2015[['Receita prevista', 'Receita arrecadada']].mean().round(2)
calculo16 = ano2016[['Receita prevista', 'Receita arrecadada']].mean().round(2)
calculo17 = ano2017[['Receita prevista', 'Receita arrecadada']].mean().round(2)
calculo18 = ano2018[['Receita prevista', 'Receita arrecadada']].mean().round(2)
calculo19 = ano2019[['Receita prevista', 'Receita arrecadada']].mean().round(2)
calculo20 = ano2020[['Receita prevista', 'Receita arrecadada']].mean().round(2)
calculo21 = ano2021[['Receita prevista', 'Receita arrecadada']].mean().round(2)
calculo22 = ano2022[['Receita prevista', 'Receita arrecadada']].mean().round(2)


dados = ['2012', calculo12[0], calculo12[1]], ['2013', calculo13[0], calculo13[1]], ['2014', calculo14[0], calculo14[1]], [
    '2015', calculo15[0], calculo15[1]], ['2016', calculo16[0], calculo16[1]], ['2017', calculo17[0], calculo17[1]], ['2018', calculo18[0], calculo18[1]], ['2019', calculo19[0], calculo19[1]], ['2020', calculo20[0], calculo20[1]], ['2021', calculo21[0], calculo21[1]], ['2022', calculo22[0], calculo22[1]]

dt = pd.DataFrame(
    dados, columns=['Ano', 'Receita_Prevista', 'Receita_Arrecadada'])

#print(dt)

dt.to_excel('./src/py/dataSheetsOut/Receitas.xlsx')

dt.to_json("./src/dataFrames/dataFrameReceitas.json",
           orient='records', force_ascii=False)