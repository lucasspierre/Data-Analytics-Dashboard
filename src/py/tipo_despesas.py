import pandas as pd

tipo_despesa = pd.read_excel('./src/py/dataSheets/DespesaSenado.xlsx')

saida_despesa = tipo_despesa[['Grupo_Despesa']].value_counts(sort=False)

saida_despesa = saida_despesa.to_frame()
saida_despesa.columns = ['Quantidade']

saida_despesa.to_excel('./src/py/dataSheetsOut/TipoDespesa.xlsx')

despesa = pd.read_excel("./src/py/dataSheetsOut/TipoDespesa.xlsx")

despesa['Grupo_Despesa'] = despesa['Grupo_Despesa'].str.title()

despesa.to_json("./src/dataFrames/dataFrameTipoDespesa.json",
                orient='records', force_ascii=False)
