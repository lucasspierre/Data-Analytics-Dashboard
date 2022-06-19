import pandas as pd

comissionado = pd.read_excel("./src/py/dataSheets/servidor.xlsx", 'comissionado')

comissionado = comissionado[['Admissao']].value_counts(sort=False)
# print(comissionado)

comissionado = comissionado.to_frame()
comissionado.columns = ['Quantidade']

# print(comissionado)
comissionado.to_excel('./src/py/dataSheetsOut/Comissionado.xlsx')

comissionado = pd.read_excel("./src/py/dataSheetsOut/Comissionado.xlsx")

comissionado.to_json("./src/dataFrames/dataFrameComissionado.json",
                     orient='records', force_ascii=False)
