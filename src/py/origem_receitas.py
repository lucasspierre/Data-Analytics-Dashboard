import pandas as pd

origem_receita = pd.read_excel('./src/py/dataSheets/ReceitasSenado.xlsx')

saida_receita = origem_receita[['Origem']].value_counts(sort=False)

saida_receita = saida_receita.to_frame()
saida_receita.columns = ['Quantidade']

saida_receita.to_excel('./src/py/dataSheetsOut/OrigemReceitas.xlsx')

origem = pd.read_excel("./src/py/dataSheetsOut/OrigemReceitas.xlsx")

origem['Origem'] = origem['Origem'].str.title()

origem.to_json("./src/dataFrames/dataFrameOrigemReceitas.json",
               orient='records', force_ascii=False)
