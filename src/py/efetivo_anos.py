import pandas as pd

efetivo = pd.read_excel("./src/py/dataSheets/servidor.xlsx", 'efetivo')

efetivo = efetivo[['Admissao']].value_counts(sort=False)
# print(comissionado)

efetivo = efetivo.to_frame()
efetivo.columns = ['Quantidade']

# print(comissionado)
efetivo.to_excel('./src/py/dataSheetsOut/Efetivo.xlsx')

efetivo = pd.read_excel("./src/py/dataSheetsOut/Efetivo.xlsx")

efetivo.to_json("./src/dataFrames/dataFrameEfetivo.json",
                orient='records', force_ascii=False)
