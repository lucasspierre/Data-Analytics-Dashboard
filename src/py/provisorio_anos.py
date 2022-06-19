import pandas as pd

provisorio = pd.read_excel("./src/py/dataSheets/servidor.xlsx", 'provisorio')

provisorio = provisorio[['Admissao']].value_counts(sort=False)
# print(comissionado)

provisorio = provisorio.to_frame()
provisorio.columns = ['Quantidade']

# print(comissionado)
provisorio.to_excel('./src/py/dataSheetsOut/Provisorio.xlsx')

provisorio = pd.read_excel("./src/py/dataSheetsOut/Provisorio.xlsx")

provisorio.to_json("./src/dataFrames/dataFrameProvisorio.json",
                   orient='records', force_ascii=False)
