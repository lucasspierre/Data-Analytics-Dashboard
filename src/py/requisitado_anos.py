import pandas as pd

requisitado = pd.read_excel("./src/py/dataSheets/servidor.xlsx", 'requisitado')

requisitado = requisitado[['Admissao']].value_counts(sort=False)
# print(comissionado)

requisitado = requisitado.to_frame()
requisitado.columns = ['Quantidade']

# print(comissionado)
requisitado.to_excel('./src/py/dataSheetsOut/Requisitado.xlsx')

requisitado = pd.read_excel("./src/py/dataSheetsOut/Requisitado.xlsx")

requisitado.to_json("./src/dataFrames/dataFrameRequisitado.json",
                    orient='records', force_ascii=False)
