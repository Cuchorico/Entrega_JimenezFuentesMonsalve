# -*- coding: utf-8 -*-
"""Untitled0.ipynb

Automatically generated by Colaboratory.

Original file is located at
    https://colab.research.google.com/drive/1zpsCy0xZTaPNw2t95L4GHURQLpyOVYcg
"""



import pandas as pd

cuba = pd.read_csv("/content/drive/MyDrive/Colab Notebooks/Presupuesto Estatal de Cuba anual.csv" , sep=";" , encoding="latin-1")

print (cuba["Unnamed: 3"][20:26])
print (cuba["Unnamed: 8"][-2:])

Presupuestodecuba