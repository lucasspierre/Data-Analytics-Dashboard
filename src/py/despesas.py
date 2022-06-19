import pandas as pd

despesa = pd.read_excel('./src/py/dataSheets/DespesaSenado.xlsx')[
    ['Exercicio Financeiro', 'Valor dotação atualizada', 'Valor Total Empenhado', 'Valor Pago']]

ano2013 = despesa.loc[despesa['Exercicio Financeiro'] == 2013]
ano2014 = despesa.loc[despesa['Exercicio Financeiro'] == 2014]
ano2015 = despesa.loc[despesa['Exercicio Financeiro'] == 2015]
ano2016 = despesa.loc[despesa['Exercicio Financeiro'] == 2016]
ano2017 = despesa.loc[despesa['Exercicio Financeiro'] == 2017]
ano2018 = despesa.loc[despesa['Exercicio Financeiro'] == 2018]
ano2019 = despesa.loc[despesa['Exercicio Financeiro'] == 2019]
ano2020 = despesa.loc[despesa['Exercicio Financeiro'] == 2020]
ano2021 = despesa.loc[despesa['Exercicio Financeiro'] == 2021]
ano2022 = despesa.loc[despesa['Exercicio Financeiro'] == 2022]

calculo13 = ano2013[['Valor dotação atualizada',
                     'Valor Total Empenhado', 'Valor Pago']].mean().round(2)
calculo14 = ano2014[['Valor dotação atualizada',
                     'Valor Total Empenhado', 'Valor Pago']].mean().round(2)
calculo15 = ano2015[['Valor dotação atualizada',
                     'Valor Total Empenhado', 'Valor Pago']].mean().round(2)
calculo16 = ano2016[['Valor dotação atualizada',
                     'Valor Total Empenhado', 'Valor Pago']].mean().round(2)
calculo17 = ano2017[['Valor dotação atualizada',
                     'Valor Total Empenhado', 'Valor Pago']].mean().round(2)
calculo18 = ano2018[['Valor dotação atualizada',
                     'Valor Total Empenhado', 'Valor Pago']].mean().round(2)
calculo19 = ano2019[['Valor dotação atualizada',
                     'Valor Total Empenhado', 'Valor Pago']].mean().round(2)
calculo20 = ano2020[['Valor dotação atualizada',
                     'Valor Total Empenhado', 'Valor Pago']].mean().round(2)
calculo21 = ano2021[['Valor dotação atualizada',
                     'Valor Total Empenhado', 'Valor Pago']].mean().round(2)
calculo22 = ano2022[['Valor dotação atualizada',
                     'Valor Total Empenhado', 'Valor Pago']].mean().round(2)


dados = ['2013', calculo13[0], calculo13[1], calculo13[2]], ['2014', calculo14[0], calculo14[1], calculo14[2]], [
    '2015', calculo15[0], calculo15[1], calculo15[2]], ['2016', calculo16[0], calculo16[1], calculo16[2]], ['2017', calculo17[0], calculo17[1], calculo17[2]], ['2018', calculo18[0], calculo18[1], calculo18[2]], ['2019', calculo19[0], calculo19[1], calculo19[2]], ['2020', calculo20[0], calculo20[1], calculo20[2]], ['2021', calculo21[0], calculo21[1], calculo21[2]], ['2022', calculo22[0], calculo22[1], calculo22[2]]

dt = pd.DataFrame(
    dados, columns=['Ano', 'Valor_Dotação', 'Valor_Empenhado', 'Valor_Pago'])

# print(dt)

dt.to_excel('./src/py/dataSheetsOut/Despesas.xlsx')

dt.to_json("./src/dataFrames/dataFrameDespesas.json",
           orient='records', force_ascii=False)
